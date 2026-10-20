// Testes de contrato do cliente 360 CRM (lib/crm.ts). fetch é simulado: nenhum lead real é enviado.
// FORM_CONFIG abaixo é sintético (contrato do cliente). O formulário REAL publicado no 360 está em
// scripts/fixtures/360-form.json (GET .../public/website/forms/alfa-inox-orcamento, sem token): o último teste
// prova que SITE.crm + CONSENT_TEXT + a lista de serviços batem com ele. Atualize o snapshot ao editar o formulário.
import { test, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { loadForm, freshForm, sendLead, buildAnswers, normalizePhone, photoFields, photoType, newAttempt, directUploadsLive, resetDirectUploadsProbe } from '../lib/crm.ts'
import { CONSENT_TEXT, SITE } from '../lib/site.ts'
import { SERVICOS } from '../lib/servicos.ts'
import { readFileSync } from 'node:fs'

const nativeFetch = globalThis.fetch
afterEach(() => { globalThis.fetch = nativeFetch; resetDirectUploadsProbe() })

const WS = '00000000-0000-4000-8000-000000000000'
const FORM_CONFIG = {
  consentRequired: false,
  consentText: CONSENT_TEXT,
  fields: [
    { id: 'first_name', type: 'text', required: true },
    { id: 'last_name', type: 'text' },
    { id: 'phone', type: 'phone', required: true },
    { id: 'email', type: 'email' },
    { id: 'address', type: 'text' },
    { id: 'service', type: 'text', required: true },
    { id: 'message', type: 'textarea' },
    { id: 'source_page', type: 'text' },
    { id: 'photo_1', type: 'file' }, { id: 'photo_2', type: 'file' }, { id: 'photo_3', type: 'file' },
  ],
}
const config = {
  apiBase: 'https://crm.example.test', formSlug: 'alfa-inox-orcamento', workspaceId: WS,
  fields: { firstName: 'first_name', lastName: 'last_name', phone: 'phone', email: 'email', address: 'address', service: 'service', message: 'message', sourcePage: 'source_page', photos: ['photo_1', 'photo_2', 'photo_3'] },
}
const REQUIRED = ['first_name', 'phone', 'service']
const token = Buffer.from(JSON.stringify({ kind: 'form', ws: WS, exp: Date.now() + 7200000 })).toString('base64url') + '.sig'
const form = { token, siteKey: null, config: FORM_CONFIG }
const noSleep = { sleep: async () => {} }
const response = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
const values = { firstName: 'Teste', lastName: 'Apenas', phone: '(31) 99999-0000', email: 'teste@example.test', address: 'Belo Horizonte, Buritis', service: 'Corrimão de Inox', message: 'Escada em U', sourcePage: '/orcamento/', website: '' }
const attempt = () => ({ key: crypto.randomUUID(), signature: 't', uploads: {} })

test('carrega o formulário publicado pelo slug, sem credenciais', async () => {
  globalThis.fetch = async (url, opts) => {
    assert.equal(url, 'https://crm.example.test/public/website/forms/alfa-inox-orcamento')
    assert.equal(opts.credentials, 'omit')
    return response(form)
  }
  assert.equal((await loadForm(config, CONSENT_TEXT, REQUIRED)).form.token, token)
})

test('sem slug configurado = indisponível (o site cai no WhatsApp)', async () => {
  await assert.rejects(loadForm({ ...config, formSlug: '' }, CONSENT_TEXT, REQUIRED), /indisponível.*WhatsApp/)
})

test('falha fechada: workspace errado, consentimento obrigatório, texto alterado, captcha, campo faltando ou novo obrigatório', async () => {
  const bad = [
    { ...form, token: Buffer.from(JSON.stringify({ kind: 'form', ws: 'outro' })).toString('base64url') + '.s' },
    { ...form, config: { ...FORM_CONFIG, consentRequired: true } },
    { ...form, config: { ...FORM_CONFIG, consentText: 'Marketing' } },
    { ...form, config: { ...FORM_CONFIG, requireCaptcha: true } },
    { ...form, config: { ...FORM_CONFIG, fields: FORM_CONFIG.fields.filter((f) => f.id !== 'phone') } },
    { ...form, config: { ...FORM_CONFIG, fields: [...FORM_CONFIG.fields, { id: 'orcamento', type: 'text', required: true }] } },
  ]
  for (const b of bad) {
    globalThis.fetch = async () => response(b)
    await assert.rejects(loadForm(config, CONSENT_TEXT, REQUIRED), /indisponível.*2298-0072/)
  }
})

test('token carregado no envio espera os 2 s mínimos do CRM', async () => {
  const t0 = Date.now()
  const l = await freshForm(null, async () => ({ form, loadedAt: Date.now() }))
  assert.ok(Date.now() - t0 >= 2400)
  const t1 = Date.now()
  assert.equal(await freshForm(l, () => assert.fail('deve reaproveitar o token')), l)
  assert.ok(Date.now() - t1 < 100)
})

test('telefone brasileiro vira E.164 (+55) e número ruim explica a regra', () => {
  assert.equal(normalizePhone('(31) 99999-0000'), '+5531999990000')
  assert.equal(normalizePhone('31 2298-0072'), '+553122980072')
  assert.equal(normalizePhone('+55 31 98777-0220'), '+5531987770220')
  assert.equal(normalizePhone('5531987770220'), '+5531987770220')
  assert.throws(() => normalizePhone('9999-0000'), /DDD/)
})

test('respostas usam os ids do formulário publicado', () => {
  const a = buildAnswers(config, form, values)
  assert.deepEqual(Object.keys(a).sort(), ['address', 'email', 'first_name', 'last_name', 'message', 'phone', 'service', 'source_page'])
  assert.equal(a.phone, '+5531999990000')
})

test('envio usa /direct-submit com consentimento e atribuição', async () => {
  globalThis.fetch = async (url, opts) => {
    assert.equal(url, 'https://crm.example.test/public/website/direct-submit')
    const body = JSON.parse(opts.body)
    assert.equal(body.consent, true)
    assert.equal(body.smsConsent, true)
    assert.equal(body.website, '')
    assert.ok(body.uploadSessionId)
    assert.deepEqual(Object.keys(body.attribution).sort(), ['source', 'utm_source'])
    return response({ thankYou: 'Recebido' })
  }
  const r = await sendLead(config, form, attempt(), values, true, [], { utm_source: 'google', source: 'last:google' })
  assert.equal(r.thankYou, 'Recebido')
})

test('caixa desmarcada não envia consentimento', async () => {
  globalThis.fetch = async (_u, opts) => {
    const body = JSON.parse(opts.body)
    assert.equal(body.consent, false)
    assert.equal(body.smsConsent, false)
    return response({ thankYou: 'ok' })
  }
  await sendLead(config, form, attempt(), values, false, [], {})
})

test('falha de rede mantém a mesma chave e diz o que fazer (WhatsApp)', async () => {
  const a = attempt()
  const keys = []
  globalThis.fetch = async (_u, opts) => {
    keys.push(JSON.parse(opts.body).key)
    if (keys.length === 1) throw Error('offline')
    return response({ thankYou: 'ok' })
  }
  await assert.rejects(sendLead(config, form, a, values, false, [], {}), /chame no \(31\) 2298-0072/)
  await sendLead(config, form, a, values, false, [], {})
  assert.deepEqual(keys, [a.key, a.key])
})

globalThis.FileReader = class {
  readAsDataURL(file) {
    file.arrayBuffer().then((b) => { this.result = 'data:' + (file.type || 'x') + ';base64,' + Buffer.from(b).toString('base64'); this.onload() })
  }
}

test('fotos: uma por campo via /direct-uploads, mesma chave e sessão, reaproveitadas no reenvio', async () => {
  assert.deepEqual(photoFields(config, form), ['photo_1', 'photo_2', 'photo_3'])
  const a = newAttempt('t')
  const files = [new File(['a'], 'a.jpg', { type: 'image/jpeg' }), new File(['b'], 'b.webp', { type: 'image/webp' })]
  let uploads = 0, submits = 0
  globalThis.fetch = async (url, opts) => {
    const body = JSON.parse(opts.body)
    assert.equal(body.key, a.key)
    assert.equal(body.uploadSessionId, a.uploadSessionId)
    if (url.endsWith('/direct-uploads')) { uploads++; return response({ id: crypto.randomUUID(), name: body.file.name }) }
    submits++
    assert.ok(body.answers.photo_1 && body.answers.photo_2 && !body.answers.photo_3)
    return submits === 1 ? response({}, 503) : response({ thankYou: 'ok' })
  }
  await assert.rejects(sendLead(config, form, a, values, false, files, {}, noSleep))
  await sendLead(config, form, a, values, false, files, {}, noSleep)
  assert.equal(uploads, 2)
  assert.equal(submits, 2)
})

test('HEIC do iPhone (tipo vazio) é aceito como image/heic', () => {
  assert.equal(photoType(new File(['h'], 'IMG_0001.HEIC', { type: '' })), 'image/heic')
  assert.equal(photoType(new File(['x'], 'x.svg', { type: 'image/svg+xml' })), null)
})

test('foto demais, grande demais ou inválida é recusada antes de subir, com alternativa no WhatsApp', async () => {
  globalThis.fetch = () => assert.fail('não deve chamar a rede')
  const jpg = (n, size = 1) => new File([new Uint8Array(size)], `${n}.jpg`, { type: 'image/jpeg' })
  const cases = [
    [[new File(['x'], 'x.svg', { type: 'image/svg+xml' })], /não pode ser enviada.*HEIC/],
    [[jpg('big', 10 * 1024 * 1024 + 1)], /mais de 10 MB/],
    [[jpg(1), jpg(2), jpg(3), jpg(4)], /até 3 fotos/],
  ]
  for (const [set, re] of cases) {
    await assert.rejects(sendLead(config, form, newAttempt('t'), values, false, set, {}, noSleep), re)
    await assert.rejects(sendLead(config, form, newAttempt('t'), values, false, set, {}, noSleep), /mande as fotos pelo \(31\) 2298-0072/)
  }
})

test('limite de taxa é falha acionável, nunca sucesso', async () => {
  globalThis.fetch = async () => response({}, 429)
  await assert.rejects(sendLead(config, form, newAttempt('t'), values, false, [], {}), /Espere um minuto/)
})

test('sonda de /direct-uploads: 404 esconde o seletor de fotos', async () => {
  globalThis.fetch = async (url, opts) => (url.endsWith('/direct-uploads') && opts.body === '{}' ? response({}, 404) : response(form))
  assert.equal(await directUploadsLive(config), false)
  const l = await loadForm(config, CONSENT_TEXT, REQUIRED)
  assert.deepEqual(photoFields(config, l.form), [])
})

test('SITE.crm aponta para o formulário real publicado no 360 (slug, workspace, campos, consentimento, serviços)', async () => {
  const live = JSON.parse(readFileSync(new URL('./fixtures/360-form.json', import.meta.url), 'utf8'))
  assert.equal(SITE.crm.apiBase, 'https://api.get360crm.com')
  assert.equal(SITE.crm.formSlug, 'alfa-inox-orcamento')
  assert.equal(SITE.crm.workspaceId, live.workspaceId)
  const ids = live.config.fields.map((f) => f.id)
  for (const id of Object.values(SITE.crm.fields).flat()) assert.ok(ids.includes(id), `campo ${id} existe no 360`)
  const service = live.config.fields.find((f) => f.id === SITE.crm.fields.service)
  for (const nome of [...SERVICOS.map((s) => s.navNome), 'Outro / não sei ainda']) assert.ok(service.options.includes(nome), `serviço "${nome}" é opção no 360`)
  const realToken = Buffer.from(JSON.stringify({ kind: 'form', ws: live.workspaceId, exp: Date.now() + 7200000 })).toString('base64url') + '.sig'
  globalThis.fetch = async (url) => {
    assert.equal(url, 'https://api.get360crm.com/public/website/forms/alfa-inox-orcamento')
    return response({ token: realToken, siteKey: null, config: live.config })
  }
  const loaded = await loadForm(SITE.crm, CONSENT_TEXT, [SITE.crm.fields.firstName, SITE.crm.fields.phone, SITE.crm.fields.service])
  assert.equal(loaded.form.config.consentText, CONSENT_TEXT)
})
