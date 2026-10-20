// Cliente do formulário público do 360 CRM (API externa fixa: nunca mudar o CRM, adaptar aqui).
// Portado de ~/Projects/sites/prime-pools-and-spa/app/lib/crm.ts — mesma lógica, mensagens em pt-BR e telefone BR.
// GET  /public/website/forms/:slug  → signed token + live form definition
// POST /public/website/direct-uploads → one photo per request (photo_1..3), same signed token + key + uploadSessionId as the submit
// POST /public/website/submit       → the lead (idempotent `key`, honeypot `website`)
// POST /public/website/activity     → funnel analytics (view/start/step), fire-and-forget
// Every failure throws a plain-language message that tells the visitor what to do next.

import type { Attribution } from "./attribution";

export type CrmFields = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  sourcePage: string;
  photos: readonly string[];
};
export type CrmConfig = { apiBase: string; formSlug: string; workspaceId: string; fields: CrmFields };

export const publicUrl = (config: CrmConfig, path: string) => `${config.apiBase.replace(/\/$/, "")}/public/website/${path}`;

export type PublicForm = {
  token: string;
  /** Set by loadForm from the lazy probe: false only when 360's /direct-uploads is known to be unavailable. */
  directUploads?: boolean;
  siteKey: string | null;
  config: {
    consentRequired: boolean;
    consentText: string;
    requireCaptcha?: boolean;
    /** 360 protects the hosted /submit and /uploads endpoints with Turnstile; native sites use /direct-* instead. */
    turnstile?: boolean;
    fields: { id: string; type: string; required?: boolean; options?: string[] }[];
    pro?: { smsConsent?: string };
  };
};
/** A loaded form plus when its token was issued (the CRM rejects submits < 2 s after issue). */
export type LoadedForm = { form: PublicForm; loadedAt: number };
/** One submission attempt: `key` + `uploadSessionId` + `token` stay the same for uploads and the submit. */
export type Attempt = { key: string; uploadSessionId?: string; token?: string; signature: string; uploads: Record<string, string> };
export const newAttempt = (signature: string): Attempt => ({ key: crypto.randomUUID(), uploadSessionId: crypto.randomUUID(), signature, uploads: {} });
export type PhotoStatus = "waiting" | "uploading" | "throttled" | "done" | "failed";
export type PhotoHooks = {
  onStatus?: (index: number, status: PhotoStatus) => void;
  /** Injectable for tests; defaults to a real timer. */
  sleep?: (ms: number) => Promise<void>;
};
export type LeadValues = {
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  address: string;
  service: string;
  message?: string;
  sourcePage?: string;
  website?: string; // honeypot
};

// Sem import de ./site para o arquivo rodar direto no Node (npm test). Mesmo número de SITE.whatsappDisplay.
const PHONE = "(31) 2298-0072 (WhatsApp)";
const FALLBACK = `Não conseguimos confirmar o envio. Tente de novo ou chame no ${PHONE}. Seus dados continuam aqui.`;
const UNAVAILABLE = `O envio pelo site está indisponível agora. Mande seu pedido pelo ${PHONE}.`;
export const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];
export const PHOTO_ACCEPT = "image/jpeg,image/png,image/heic,image/heif,image/webp";
export const MAX_PHOTO_BYTES = 10 * 1024 * 1024;
export const MAX_TOTAL_BYTES = 40 * 1024 * 1024;
export const MAX_PHOTOS = 10;
/** The CRM allows 5 photo uploads per connection per minute. */
const UPLOADS_PER_MINUTE = 5;
const RATE_WAIT_MS = 61_000;
const EXT_TYPES: Record<string, string> = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", heic: "image/heic", heif: "image/heif" };
/** Tokens are valid for 2 hours; refresh well before that. */
const TOKEN_MAX_AGE = 90 * 60 * 1000;
const MIN_FILL_MS = 2500;
const PHOTO_HELP = `ou mande as fotos pelo ${PHONE}`;

/** A failed request, with the CRM's status and error code when it sent them. */
export class CrmError extends Error {
  status?: number;
  code?: string;
  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function requestJson<T>(url: string, body?: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: body ? "POST" : "GET",
      credentials: "omit",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(60000),
    });
  } catch {
    throw new CrmError(FALLBACK);
  }
  if (!response.ok) {
    let code: string | undefined;
    try {
      code = ((await response.json()) as { error?: { code?: string } })?.error?.code;
    } catch {
      /* no JSON body */
    }
    if (response.status === 429 || code === "form_rate_limited")
      throw new CrmError(`Muitas tentativas desta conexão. Espere um minuto e tente de novo, ou chame no ${PHONE}.`, 429, "form_rate_limited");
    throw new CrmError(FALLBACK, response.status, code);
  }
  return response.json() as Promise<T>;
}

export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  // Celular/fixo com DDD: 10 ou 11 dígitos → +55. Já com 55 na frente: 12 ou 13 dígitos.
  if (!value.trim().startsWith("+") && (digits.length === 10 || digits.length === 11) && !digits.startsWith("0")) return "+55" + digits;
  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("55")) return "+" + digits;
  if (value.trim().startsWith("+") && digits.length >= 8 && digits.length <= 15) return "+" + digits;
  throw Error("Informe o telefone com DDD, por exemplo (31) 99999-0000.");
}

function tokenPayload(token: string) {
  const encoded = token.split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
  return JSON.parse(atob(encoded.padEnd(Math.ceil(encoded.length / 4) * 4, "="))) as { ws: string; kind: string };
}

/** Loads the published form and fails closed if it no longer matches what this site sends. */
export async function loadForm(config: CrmConfig, smsConsent: string, required: string[]): Promise<LoadedForm> {
  if (!config.apiBase || !config.formSlug) throw Error(UNAVAILABLE);
  const form = await requestJson<PublicForm>(publicUrl(config, `forms/${encodeURIComponent(config.formSlug)}`));
  let payload: { ws: string; kind: string };
  try {
    payload = tokenPayload(form.token);
  } catch {
    throw Error(UNAVAILABLE);
  }
  if (payload.ws !== config.workspaceId || payload.kind !== "form") throw Error(UNAVAILABLE);
  // The probe starts at the form's photo step (a 404/400 logs a console error, so never on page view);
  // loadForm copies its settled answer onto every later token.
  form.directUploads = directUploadsKnown;
  // SMS consent must stay optional and the wording must match exactly what the visitor sees.
  const published = form.config.pro?.smsConsent || form.config.consentText || "";
  if (form.config.requireCaptcha || form.config.consentRequired || published !== smsConsent) throw Error(UNAVAILABLE);
  // A native form cannot pass a captcha the CRM demands; better to show call/text than fail at submit.
  if (form.config.requireCaptcha) throw Error(UNAVAILABLE);
  for (const id of required) if (!form.config.fields.some((f) => f.id === id)) throw Error(UNAVAILABLE);
  // A field the CRM now requires that this site never sends would reject every lead.
  const sent = new Set(Object.values(config.fields).flat());
  if (form.config.fields.some((f) => f.required && !sent.has(f.id))) throw Error(UNAVAILABLE);
  return { form, loadedAt: Date.now() };
}

/** Reuse a fresh token; otherwise load a new one and wait out the CRM's minimum fill time. */
export async function freshForm(current: LoadedForm | null, load: () => Promise<LoadedForm>): Promise<LoadedForm> {
  const live = current && Date.now() - current.loadedAt < TOKEN_MAX_AGE ? current : await load();
  const wait = MIN_FILL_MS - (Date.now() - live.loadedAt);
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  return live;
}

let directUploadsProbe: Promise<boolean> | null = null;
let directUploadsKnown: boolean | undefined;
/**
 * 360's native photo endpoint, probed once per page with an empty body (validation rejects it before any rate
 * limit counts): 404 or a network/CORS failure = unavailable, anything else = live. Started from the photo step.
 */
export function directUploadsLive(config: CrmConfig) {
  directUploadsProbe ??= fetch(publicUrl(config, "direct-uploads"), {
    method: "POST",
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: "{}",
  })
    .then((r) => r.status !== 404)
    .catch(() => false)
    .then((live) => (directUploadsKnown = live));
  return directUploadsProbe;
}
/** Test hook: forget the cached probe. */
export const resetDirectUploadsProbe = () => {
  directUploadsProbe = null;
  directUploadsKnown = undefined;
};

/**
 * File fields the live form accepts (photo_1..3 → one photo per field). Native forms upload through /direct-uploads,
 * so there is no captcha gate; photos hide only when the CRM demands a captcha or the probe found /direct-uploads missing.
 */
export const photoFields = (config: CrmConfig, form: PublicForm | null) =>
  !form || form.config.requireCaptcha || form.directUploads === false
    ? []
    : config.fields.photos.filter((id) => form.config.fields.some((f) => f.id === id && (f.type === "file" || f.type === "files")));

/** The photo requirements shown next to the picker. */
export const photoRequirements = (limit: number) =>
  `JPEG, PNG, HEIC ou WebP. Até ${Math.min(limit, MAX_PHOTOS)} foto${limit === 1 ? "" : "s"}, 10 MB cada, 40 MB no total.`;

/** The content type to send for a photo, or null when it isn't an accepted image. Phones often leave `type` empty for HEIC. */
export function photoType(file: File): string | null {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  const byExt = EXT_TYPES[ext] ?? null;
  const type = file.type.toLowerCase();
  if (type && PHOTO_TYPES.includes(type)) return ext === "heic" && type === "image/heif" ? "image/heic" : type;
  if ((!type || type === "application/octet-stream") && byExt) return byExt;
  return null;
}

const hasField = (form: PublicForm, id: string) => form.config.fields.some((f) => f.id === id);

function readFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(Error(`"${file.name}" não pôde ser lida. Escolha de novo.`));
    reader.readAsDataURL(file);
  });
}

export function checkPhotos(files: File[], limit: number) {
  if (files.length > limit) throw Error(limit === 1 ? `Escolha uma foto só, ${PHOTO_HELP}.` : `Escolha até ${limit} fotos, ${PHOTO_HELP}.`);
  let total = 0;
  for (const file of files) {
    if (!photoType(file)) throw Error(`"${file.name}" não pode ser enviada. Use fotos JPEG, PNG, HEIC ou WebP, ${PHOTO_HELP}.`);
    if (file.size > MAX_PHOTO_BYTES) throw Error(`"${file.name}" tem mais de 10 MB. Escolha uma foto menor, ${PHOTO_HELP}.`);
    if (file.size === 0) throw Error(`"${file.name}" está vazia. Escolha de novo, ${PHOTO_HELP}.`);
    total += file.size;
  }
  if (total > MAX_TOTAL_BYTES) throw Error(`As fotos somam mais de 40 MB. Tire algumas, ${PHOTO_HELP}.`);
}

const realSleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const photoSig = (fieldId: string, file: File) => `${fieldId}:${file.name}:${file.size}:${file.lastModified}`;

/** The exact `answers` object sent to the CRM (only fields the live form has, trimmed, phone in E.164). */
export function buildAnswers(config: CrmConfig, form: PublicForm, values: LeadValues) {
  const answers: Record<string, string> = {};
  const map: [keyof Omit<CrmFields, "photos">, string | undefined][] = [
    ["firstName", values.firstName],
    ["lastName", values.lastName],
    ["phone", values.phone ? normalizePhone(values.phone) : ""],
    ["email", values.email],
    ["address", values.address],
    ["service", values.service],
    ["message", values.message],
    ["sourcePage", values.sourcePage],
  ];
  for (const [name, value] of map) {
    const id = config.fields[name];
    if (value && value.trim() && hasField(form, id)) answers[id] = value.trim();
  }
  return answers;
}

export async function sendLead(
  config: CrmConfig,
  form: PublicForm,
  attempt: Attempt,
  values: LeadValues,
  smsConsent: boolean,
  photos: File[],
  attribution: Attribution,
  hooks: PhotoHooks = {},
) {
  const answers = buildAnswers(config, form, values);
  const fields = photoFields(config, form);
  const sleep = hooks.sleep ?? realSleep;
  const session = attempt.uploadSessionId ?? attempt.key;
  // Uploads belong to one token + key + session; if any changed, they must be sent again.
  if (attempt.token && attempt.token !== form.token) attempt.uploads = {};
  attempt.token = form.token;
  const sent: number[] = [];
  const status = hooks.onStatus ?? (() => {});
  if (photos.length && fields.length) {
    checkPhotos(photos, fields.length);
    photos.forEach((_, i) => status(i, attempt.uploads[photoSig(fields[i], photos[i])] ? "done" : "waiting"));
    for (const [i, file] of photos.entries()) {
      const fieldId = fields[i];
      const sig = photoSig(fieldId, file);
      if (!attempt.uploads[sig]) {
        // Reuse on retry, never upload twice. Stay under the CRM's per-minute upload allowance.
        const recent = sent.filter((t) => Date.now() - t < 60_000);
        if (recent.length >= UPLOADS_PER_MINUTE) {
          status(i, "throttled");
          await sleep(Math.max(0, 61_000 - (Date.now() - recent[0])));
        }
        status(i, "uploading");
        let data: string;
        try {
          data = await readFile(file);
        } catch (err) {
          status(i, "failed");
          throw err;
        }
        for (let tries = 0; ; tries++) {
          sent.push(Date.now());
          try {
            const uploaded = await requestJson<{ id: string }>(publicUrl(config, "direct-uploads"), {
              token: form.token,
              key: attempt.key,
              uploadSessionId: session,
              fieldId,
              file: { name: file.name, contentType: photoType(file), data },
              website: values.website || "",
              turnstileToken: "",
            });
            attempt.uploads[sig] = uploaded.id;
            break;
          } catch (err) {
            if (err instanceof CrmError && err.status === 429 && tries < 2) {
              // Wait out the minute, then try this same photo again.
              status(i, "throttled");
              await sleep(RATE_WAIT_MS);
              status(i, "uploading");
              continue;
            }
            status(i, "failed");
            throw photoError(err, file, attempt);
          }
        }
      }
      status(i, "done");
      answers[fieldId] = attempt.uploads[sig];
    }
  }
  // This form publishes its SMS wording as `consentText`, which the CRM records with `consent`;
  // `smsConsent` is sent too so the choice is kept if the form later moves the text to `pro.smsConsent`.
  // Native website forms submit through /direct-submit (signed token, at least 2 s after it was issued).
  try {
    return await requestJson<{ thankYou: string; redirect?: string }>(publicUrl(config, "direct-submit"), {
      token: form.token,
      key: attempt.key,
      uploadSessionId: session,
      answers,
      attribution,
      smsConsent,
      emailConsent: false,
      consent: smsConsent,
      website: values.website || "",
      turnstileToken: "",
    });
  } catch (err) {
    if (photos.length && err instanceof CrmError && err.code === "invalid_upload") throw expiredPhotos(attempt, photos.length, hooks);
    throw err;
  }
}

/** Photos wait at most an hour for the request; after that the visitor sends them again under a fresh key. */
function expiredPhotos(attempt: Attempt, count: number, hooks: PhotoHooks) {
  attempt.key = crypto.randomUUID();
  attempt.uploadSessionId = crypto.randomUUID();
  attempt.uploads = {};
  for (let i = 0; i < count; i++) hooks.onStatus?.(i, "waiting");
  return new CrmError(
    `As fotos expiraram porque o envio demorou. Toque em Enviar de novo que reenviamos, ${PHOTO_HELP}.`,
    400,
    "invalid_upload",
  );
}

function photoError(err: unknown, file: File, attempt: Attempt) {
  if (err instanceof CrmError && err.code === "invalid_upload") {
    attempt.key = crypto.randomUUID();
    attempt.uploadSessionId = crypto.randomUUID();
    attempt.uploads = {};
    return new CrmError(`"${file.name}" expirou. Toque em Enviar de novo para reenviar, ${PHOTO_HELP}.`, 400, "invalid_upload");
  }
  if (err instanceof CrmError && err.status === 429)
    return new CrmError(`O envio de fotos está ocupado. Espere um minuto e toque em Enviar de novo, ${PHOTO_HELP}.`, 429, "form_rate_limited");
  if (err instanceof CrmError && err.status && err.status >= 400 && err.status < 500)
    return new CrmError(`"${file.name}" não foi aceita. Remova ou escolha outra foto, ${PHOTO_HELP}.`, err.status, err.code);
  return new CrmError(`"${file.name}" não subiu. Confira a conexão e toque em Tentar de novo, ${PHOTO_HELP}.`, err instanceof CrmError ? err.status : undefined);
}

/** Funnel analytics (view/start/step). Never blocks or surfaces errors to the visitor. */
export function trackFormActivity(
  config: CrmConfig,
  form: PublicForm,
  key: string,
  type: "view" | "start" | "step",
  step: number,
  attribution: Attribution,
) {
  fetch(publicUrl(config, "activity"), {
    method: "POST",
    credentials: "omit",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: form.token, key, type, step, attribution }),
  }).catch(() => {
    /* analytics only: a failed ping must never interrupt the visitor */
  });
}
