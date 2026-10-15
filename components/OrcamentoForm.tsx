'use client'
// Pedido de orçamento. Dois caminhos, nunca um formulário morto:
// 1) SITE.crm.formSlug preenchido → envia ao 360 CRM (lib/crm.ts: /direct-submit + /direct-uploads, regra dos 2 s).
//    Se o CRM falhar, a mensagem de erro oferece o MESMO pedido pronto no WhatsApp (nada se perde).
// 2) formSlug vazio (hoje) → o botão abre o WhatsApp com o pedido já escrito.
import { useEffect, useId, useRef, useState } from 'react'
import { SITE, CONSENT_TEXT, telHref, waLink } from '@/lib/site'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import {
  loadForm, freshForm, sendLead, newAttempt, photoFields, photoRequirements, checkPhotos, normalizePhone, directUploadsLive,
  trackFormActivity, PHOTO_ACCEPT, type Attempt, type LoadedForm, type PhotoStatus,
} from '@/lib/crm'
import { attributionPayload } from '@/lib/attribution'
import { fromParams, resumo } from './configurador/modelo'
import { WhatsAppIcon, Camera, Close, Phone, Check } from './Icons'

const CRM_ON = Boolean(SITE.crm.formSlug && SITE.crm.workspaceId)
const REQUIRED = [SITE.crm.fields.firstName, SITE.crm.fields.phone, SITE.crm.fields.service]
const OPCOES = [...SERVICOS.map((s) => s.navNome), 'Outro / não sei ainda']

type Values = { nome: string; telefone: string; email: string; cidade: string; detalhes: string; website: string }
const EMPTY: Values = { nome: '', telefone: '', email: '', cidade: '', detalhes: '', website: '' }

function mensagemWhats(servico: string, v: Values) {
  return [
    'Olá! Gostaria de um orçamento com a Alfa Inox.',
    '',
    `Serviço: ${servico || '—'}`,
    `Nome: ${v.nome.trim() || '—'}`,
    v.cidade.trim() ? `Cidade/bairro: ${v.cidade.trim()}` : null,
    v.telefone.trim() ? `Telefone: ${v.telefone.trim()}` : null,
    v.email.trim() ? `E-mail: ${v.email.trim()}` : null,
    v.detalhes.trim() ? `\n${v.detalhes.trim()}` : null,
    '',
    'Vou mandar fotos do local aqui na conversa.',
  ].filter((l) => l !== null).join('\n')
}

export default function OrcamentoForm({ servicoInicial = '' }: { servicoInicial?: string }) {
  const id = useId().replace(/:/g, '')
  const [servico, setServico] = useState(servicoInicial)
  const [v, setV] = useState<Values>(EMPTY)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof Values | 'servico' | 'photos', string>>>({})
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState('')
  const [done, setDone] = useState<string | null>(null)
  const [loaded, setLoaded] = useState<LoadedForm | null>(null)
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [photoState, setPhotoState] = useState<PhotoStatus[]>([])
  const [note, setNote] = useState('')
  const attempt = useRef<Attempt | null>(null)
  const visit = useRef('')
  const started = useRef(false)
  const statusRef = useRef<HTMLDivElement>(null)
  const root = useRef<HTMLDivElement>(null)

  // Pré-preenche a partir do configurador (/orcamento/?tipo=vidro&...)
  useEffect(() => {
    const q = new URLSearchParams(location.search)
    if (q.get('tipo')) {
      setServico(q.get('tipo') === 'vidro' ? 'Guarda-Corpo de Vidro' : 'Guarda-Corpo de Inox')
      setV((x) => ({ ...x, detalhes: resumo(fromParams(q)).replace(/^Olá! Montei meu guarda-corpo no site da Alfa Inox:\n/, 'Montei no site:\n').replace(/\n\nGostaria de um orçamento\.$/, '') }))
    } else if (q.get('servico')) {
      const s = SERVICOS.find((x) => x.slug === q.get('servico'))
      if (s) setServico(s.navNome)
    }
  }, [])

  // Carrega o formulário do CRM só quando ele entra na tela (e só se configurado).
  useEffect(() => {
    if (!CRM_ON || !root.current) return
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return
      io.disconnect()
      loadForm(SITE.crm, CONSENT_TEXT, REQUIRED).then((l) => {
        setLoaded(l)
        visit.current = crypto.randomUUID()
        trackFormActivity(SITE.crm, l.form, visit.current, 'view', 1, attributionPayload())
        directUploadsLive(SITE.crm).then((ok) => setLoaded((x) => (x ? { ...x, form: { ...x.form, directUploads: ok } } : x)))
      }).catch(() => { /* o envio tenta de novo e, se falhar, oferece o WhatsApp */ })
    }, { rootMargin: '200px' })
    io.observe(root.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => () => previews.forEach((p) => URL.revokeObjectURL(p)), [previews])

  const mark = () => {
    if (started.current) return
    started.current = true
    if (loaded) trackFormActivity(SITE.crm, loaded.form, visit.current, 'start', 1, attributionPayload())
  }
  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    mark()
    setV((x) => ({ ...x, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const limit = CRM_ON ? photoFields(SITE.crm, loaded?.form ?? null).length : 0
  const addPhotos = (list: FileList | null) => {
    if (!list) return
    const next = [...photos, ...Array.from(list)]
    try { checkPhotos(next, Math.max(limit, 1)); setErrors((x) => ({ ...x, photos: undefined })) } catch (e) { setErrors((x) => ({ ...x, photos: (e as Error).message })); return }
    previews.forEach((p) => URL.revokeObjectURL(p))
    setPhotos(next); setPhotoState(next.map(() => 'waiting')); setPreviews(next.map((f) => URL.createObjectURL(f)))
  }
  const removePhoto = (i: number) => {
    const next = photos.filter((_, j) => j !== i)
    previews.forEach((p) => URL.revokeObjectURL(p))
    setPhotos(next); setPhotoState((s) => s.filter((_, j) => j !== i)); setPreviews(next.map((f) => URL.createObjectURL(f)))
  }

  function validate(needPhone: boolean) {
    const errs: typeof errors = {}
    if (!servico) errs.servico = 'Escolha o serviço. "Outro / não sei ainda" também vale.'
    if (v.nome.trim().length < 2) errs.nome = 'Escreva seu nome.'
    if (needPhone) { try { normalizePhone(v.telefone) } catch (e) { errs.telefone = (e as Error).message } }
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = 'Confira o e-mail ou deixe em branco.'
    setErrors(errs)
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => root.current?.querySelector<HTMLElement>('[aria-invalid=true], .choice-error input')?.focus())
      return false
    }
    return true
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (busy) return
    if (!CRM_ON) {
      if (!validate(false)) return
      window.open(waLink(mensagemWhats(servico, v)), '_blank', 'noopener')
      setDone('whatsapp')
      return
    }
    if (!validate(true)) return
    setBusy(true); setStatus('')
    const sig = JSON.stringify({ v, servico, consent })
    if (!attempt.current || attempt.current.signature !== sig) attempt.current = newAttempt(sig)
    try {
      const attribution = attributionPayload()
      const live = await freshForm(loaded, () => loadForm(SITE.crm, CONSENT_TEXT, REQUIRED))
      setLoaded(live)
      const [first, ...rest] = v.nome.trim().split(/\s+/)
      const r = await sendLead(SITE.crm, live.form, attempt.current,
        { firstName: first, lastName: rest.join(' '), phone: v.telefone, email: v.email, address: v.cidade, service: servico, message: v.detalhes, sourcePage: location.pathname, website: v.website },
        consent, photoFields(SITE.crm, live.form).length ? photos : [], attribution,
        { onStatus: (i, st) => { setPhotoState((all) => all.map((x, j) => (j === i ? st : x))); setNote(st === 'uploading' ? `Enviando foto ${i + 1} de ${photos.length}…` : st === 'throttled' ? `Enviando foto ${i + 1} de ${photos.length}… (aguardando um instante)` : '') } })
      setNote('')
      setDone(r.thankYou || 'Recebemos o seu pedido.')
      attempt.current = null
    } catch (err) {
      setNote('')
      setStatus(err instanceof Error ? err.message : `Não conseguimos confirmar o envio. Chame no WhatsApp ${SITE.whatsappDisplay}.`)
      requestAnimationFrame(() => statusRef.current?.focus())
    } finally { setBusy(false) }
  }

  if (done) {
    return (
      <div className="form-card" ref={root} tabIndex={-1}>
        <div className="done" role="status">
          <div className="badge-ok"><Check size={24} /></div>
          {done === 'whatsapp' ? (
            <>
              <h2>Seu pedido abriu no WhatsApp</h2>
              <p className="muted" style={{ margin: 0 }}>Confira a mensagem e toque em enviar. Se o WhatsApp não abriu, use o botão abaixo.</p>
              <a className="btn btn-cta btn-lg" href={waLink(mensagemWhats(servico, v))} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Abrir o WhatsApp de novo</a>
              <ol><li>Mande também fotos do local na conversa.</li><li>Respondemos com uma estimativa e combinamos a medição.</li></ol>
            </>
          ) : (
            <>
              <h2>Pedido recebido, {v.nome.trim().split(/\s+/)[0]}.</h2>
              <p className="muted" style={{ margin: 0 }}>{done}</p>
              <ol><li>Analisamos o pedido{photos.length ? ' e as fotos' : ''}.</li><li>Entramos em contato pelo {v.telefone.trim()} para combinar a medição.</li><li>Depois da medição você recebe a proposta fechada.</li></ol>
              <p className="small muted">Quer adiantar? <a href={waLink(mensagemWhats(servico, v))} target="_blank" rel="noopener">Mande fotos pelo WhatsApp</a>.</p>
            </>
          )}
          <button type="button" className="btn btn-line" onClick={() => setDone(null)}>Editar o pedido</button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card" ref={root} id="pedido">
      <form onSubmit={submit} noValidate aria-labelledby={`${id}-t`}>
        <h2 id={`${id}-t`} style={{ marginBottom: 6 }}>Pedido de orçamento</h2>
        <p className="muted" style={{ marginBottom: 22 }}>Leva um minuto. Campos com * são obrigatórios.</p>
        <div className="fields">
          <fieldset className={errors.servico ? 'choice-error' : undefined} aria-describedby={errors.servico ? `${id}-s-err` : undefined}>
            <legend>O que você precisa? *</legend>
            <div className="choice-grid">
              {OPCOES.map((o) => (
                <label key={o} className="choice">
                  <input type="radio" name="servico" value={o} checked={servico === o} onChange={() => { mark(); setServico(o); setErrors((x) => ({ ...x, servico: undefined })) }} />
                  {o}
                </label>
              ))}
            </div>
            {errors.servico && <p id={`${id}-s-err`} className="field-error" style={{ marginTop: 8 }}>{errors.servico}</p>}
          </fieldset>

          <div className="fields cols">
            <label className="field" htmlFor={`${id}-nome`}>Seu nome *
              <input id={`${id}-nome`} autoComplete="name" value={v.nome} onChange={set('nome')} maxLength={80} aria-invalid={!!errors.nome} aria-describedby={errors.nome ? `${id}-nome-e` : undefined} />
              {errors.nome && <span id={`${id}-nome-e`} className="field-error">{errors.nome}</span>}
            </label>
            <label className="field" htmlFor={`${id}-tel`}>WhatsApp ou telefone {CRM_ON ? '*' : <span className="hint">(opcional)</span>}
              <input id={`${id}-tel`} type="tel" inputMode="tel" autoComplete="tel" placeholder="(31) 99999-0000" value={v.telefone} onChange={set('telefone')} maxLength={30} aria-invalid={!!errors.telefone} aria-describedby={errors.telefone ? `${id}-tel-e` : undefined} />
              {errors.telefone && <span id={`${id}-tel-e`} className="field-error">{errors.telefone}</span>}
            </label>
          </div>
          <div className="fields cols">
            <label className="field" htmlFor={`${id}-cid`}>Cidade e bairro <span className="hint">(opcional)</span>
              <input id={`${id}-cid`} list={`${id}-cidades`} autoComplete="address-level2" placeholder="Ex.: Belo Horizonte, Buritis" value={v.cidade} onChange={set('cidade')} maxLength={120} />
              <datalist id={`${id}-cidades`}>{AREAS.map((a) => <option key={a.slug} value={a.nome} />)}</datalist>
            </label>
            <label className="field" htmlFor={`${id}-mail`}>E-mail <span className="hint">(opcional)</span>
              <input id={`${id}-mail`} type="email" inputMode="email" autoComplete="email" value={v.email} onChange={set('email')} maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${id}-mail-e` : undefined} />
              {errors.email && <span id={`${id}-mail-e`} className="field-error">{errors.email}</span>}
            </label>
          </div>
          <label className="field" htmlFor={`${id}-det`}>Conte sobre o local <span className="hint">(opcional)</span>
            <textarea id={`${id}-det`} value={v.detalhes} onChange={set('detalhes')} maxLength={4000} placeholder="Quantos lances, se tem curva ou patamar, se há crianças, se prefere travessa, prumo vertical ou vidro, medida aproximada…" />
          </label>

          {limit > 0 ? (
            <div className="field">
              <span>Fotos do local <span className="hint">(opcional)</span></span>
              <label className="drop-zone" htmlFor={`${id}-fotos`}>
                <Camera /> Adicionar fotos
                <span>De frente e de lado ajudam a estimar mais rápido</span>
                <input id={`${id}-fotos`} type="file" accept={PHOTO_ACCEPT} multiple={limit > 1} disabled={busy} aria-describedby={`${id}-req`} onChange={(e) => { addPhotos(e.target.files); e.target.value = '' }} />
              </label>
              <p id={`${id}-req`} className="small muted" style={{ margin: 0, fontWeight: 400 }}>{photoRequirements(limit)}</p>
              {errors.photos && <p className="field-error" role="alert">{errors.photos}</p>}
              {previews.length > 0 && (
                <ul className="photo-list">
                  {previews.map((p, i) => (
                    <li key={p} data-state={photoState[i] ?? 'waiting'}>
                      <img src={p} alt="" width={44} height={44} />
                      <span className="meta"><span>{photos[i]?.name}</span><span className="st">{({ waiting: busy ? 'Na fila' : 'Pronta para enviar', uploading: 'Enviando…', throttled: 'Aguardando…', done: 'Enviada', failed: 'Não subiu' } as const)[photoState[i] ?? 'waiting']}</span></span>
                      <span />
                      <button type="button" className="icon-btn" aria-label={`Remover ${photos[i]?.name ?? 'foto'}`} onClick={() => removePhoto(i)} disabled={busy}><Close size={16} /></button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <p className="small muted" style={{ margin: 0 }}>Fotos: depois de enviar, anexe na conversa do WhatsApp — é o jeito mais rápido de receber uma estimativa.</p>
          )}

          <label className="honeypot" aria-hidden="true">Site<input name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} /></label>
          {CRM_ON && (
            <label className="consent" htmlFor={`${id}-ok`}>
              <input id={`${id}-ok`} type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>{CONSENT_TEXT.replace(' Veja a Política de Privacidade.', '')} <a href="/privacidade/">Política de Privacidade</a>.</span>
            </label>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-cta btn-lg" disabled={busy}>
            {CRM_ON ? (busy ? 'Enviando…' : 'Enviar pedido') : <><WhatsAppIcon size={20} /> Enviar pelo WhatsApp</>}
          </button>
        </div>
        <p className="small muted" role="status" aria-live="polite" style={{ margin: '10px 0 0' }}>{note}</p>
        {status && (
          <div ref={statusRef} className="status" role="alert" tabIndex={-1}>
            {status}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
              <a href={waLink(mensagemWhats(servico, v))} target="_blank" rel="noopener"><WhatsAppIcon size={15} /> Enviar este pedido pelo WhatsApp</a>
              <a href={telHref}><Phone size={15} /> Ligar {SITE.phoneDisplay}</a>
            </div>
          </div>
        )}
        <p className="form-note">
          {CRM_ON ? 'Seus dados vão só para a Alfa Inox, para responder a este pedido.' : 'O pedido abre no WhatsApp da Alfa Inox já escrito; você confere e envia.'} Sem compromisso.
        </p>
      </form>
    </div>
  )
}
