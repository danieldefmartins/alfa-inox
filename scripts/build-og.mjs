// Cartões de compartilhamento 1200×630 (WhatsApp, Facebook, LinkedIn) com o logo 2026.
// Uso: npm run og   (Playwright + Chromium local; fontes Archivo/Inter do Google Fonts só nesta ferramenta)
// Saída: public/og/<nome>.jpg — nomes usados por socialMeta() em lib/site.ts.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'public', 'og')

const { SERVICOS } = await import(path.join(ROOT, 'lib/servicos.ts'))
const { AREAS } = await import(path.join(ROOT, 'lib/areas.ts'))
const { POSTS } = await import(path.join(ROOT, 'lib/blog.ts'))
const PHOTOS = JSON.parse(fs.readFileSync(path.join(ROOT, 'lib/photos.json'), 'utf8'))

const corta = (t, n = 110) => (t.length <= n ? t : t.slice(0, t.lastIndexOf(' ', n)).replace(/[,;—-]$/, '') + '…')
const b64 = (f) => fs.readFileSync(f).toString('base64')
// 'estoque:<nome>' = foto de banco licenciada (só atmosfera), senão foto real de obra
const pic = (slug) => slug.startsWith('estoque:')
  ? `data:image/webp;base64,${b64(path.join(ROOT, 'public', 'estoque', `${slug.slice(8)}-1200.webp`))}`
  : `data:image/webp;base64,${b64(path.join(ROOT, 'public', 'fotos', `${slug}-1600.webp`))}`
const logo = `data:image/svg+xml;base64,${b64(path.join(ROOT, 'public/brand/logo-on-dark.svg'))}`

const cards = [
  { name: 'default', titulo: 'Corrimão e guarda-corpo em inox em Belo Horizonte', sub: 'Projetos residenciais e comerciais, com o design moderno dos projetos de alto padrão.', foto: 'estoque:escada-moderna-guarda-corpo-inox-edificio-corporativo' },
  { name: 'galeria', titulo: 'Obras de corrimão e guarda-corpo em inox', sub: `${PHOTOS.length} fotos reais de obras na Grande BH`, foto: 'guarda-corpo-inox-escada-interna-sala' },
  { name: 'sobre', titulo: 'Uma oficina de inox em BH desde 2010', sub: 'Fábrica, não revenda: quem fabrica instala', foto: 'guarda-corpo-inox-escada-moderna' },
  { name: 'contato', titulo: 'Fale com a Alfa Inox', sub: 'WhatsApp (31) 98777-0220 · (31) 2298-0072', foto: 'corrimao-parede-inox-escada-caracol' },
  { name: 'orcamento', titulo: 'Peça seu orçamento pelo WhatsApp', sub: 'Mande fotos do local e a medida aproximada', foto: 'corrimao-parede-inox-escada-condominio' },
  { name: 'servicos', titulo: 'Serviços em aço inox, sob medida', sub: 'Corrimão, guarda-corpo, vidro, acessibilidade, portões e gradis', foto: 'guarda-corpo-inox-escada-interna-vidro' },
  { name: 'blog', titulo: 'Guias de quem fabrica corrimão e guarda-corpo', sub: 'Preço, normas, liga e limpeza do inox', foto: 'corrimao-inox-escada-granito-interna' },
  { name: 'areas-atendidas', titulo: 'Atendemos Belo Horizonte e região', sub: `Capital e mais ${AREAS.length - 1} cidades da Grande BH`, foto: 'corrimao-inox-rampa-acessibilidade-duplo' },
  ...SERVICOS.map((s) => ({ name: `servico-${s.slug}`, titulo: s.h1, sub: corta(s.resumo), foto: s.capa })),
  ...AREAS.map((a) => ({ name: `area-${a.slug}`, titulo: `Corrimão e guarda-corpo de inox em ${a.nome}`, sub: 'Medição no local, fabricação própria e instalação', foto: a.fotos[0] })),
  ...POSTS.map((p) => ({ name: `post-${p.slug}`, titulo: p.h1, sub: corta(p.resumo), foto: p.foto, tag: p.categoria })),
]

const html = (c) => {
  const len = c.titulo.length
  const size = len > 62 ? 44 : len > 46 ? 52 : len > 32 ? 58 : 64
  return `<!doctype html><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@112,700&family=Inter:wght@400;600&display=block" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#2e3a40;font-family:Inter,sans-serif}
.photo{position:absolute;inset:0;background:url(${pic(c.foto)}) center 40%/cover}
.panel{position:absolute;inset:0;background:linear-gradient(180deg,rgba(36,46,51,.72) 0%,rgba(36,46,51,0) 32%),linear-gradient(0deg,rgba(36,46,51,.96) 0%,rgba(36,46,51,.85) 38%,rgba(36,46,51,.35) 68%,rgba(36,46,51,.15) 100%),linear-gradient(90deg,rgba(36,46,51,.7) 0%,rgba(36,46,51,0) 70%)}
.in{position:absolute;left:64px;top:56px;bottom:56px;width:760px;display:flex;flex-direction:column}
.logo{height:40px;width:auto;align-self:flex-start}
.tag{margin-top:28px;align-self:flex-start;font-weight:600;font-size:16px;letter-spacing:.08em;text-transform:uppercase;color:#7fcadb}
h1{font-family:Archivo,sans-serif;font-stretch:112%;font-weight:700;color:#fff;line-height:1.06;letter-spacing:-.025em;margin-top:auto;text-wrap:balance}
p{margin-top:18px;font-size:23px;line-height:1.4;color:#dbe2e5;max-width:40ch}
.ft{margin-top:26px;font-size:18px;color:#9fb0b8;font-weight:600}
</style>
<div class="photo"></div><div class="panel"></div>
<div class="in"><img class="logo" src="${logo}">${c.tag ? `<span class="tag">${c.tag}</span>` : ''}
<h1 style="font-size:${size}px">${c.titulo}</h1><p>${c.sub}</p><span class="ft">alfainoxbh.com.br · WhatsApp (31) 98777-0220</span></div>`
}

fs.mkdirSync(OUT, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
for (const c of cards) {
  await page.setContent(html(c), { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: path.join(OUT, `${c.name}.jpg`), type: 'jpeg', quality: 84 })
}
await browser.close()
const sizes = cards.map((c) => fs.statSync(path.join(OUT, `${c.name}.jpg`)).size)
console.log(`${cards.length} cartões · maior ${(Math.max(...sizes) / 1024).toFixed(0)} KB · média ${(sizes.reduce((a, b) => a + b) / sizes.length / 1024).toFixed(0)} KB`)
