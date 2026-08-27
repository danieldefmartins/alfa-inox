import { execFileSync, spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const TMP = process.env.OG_TMP || path.join(ROOT, '.og-tmp')
const FONTS = process.env.OG_FONTS
const OUT = path.join(ROOT, 'public', 'og')

const { SERVICOS } = await import(path.join(ROOT, 'lib/servicos.ts'))
const { AREAS } = await import(path.join(ROOT, 'lib/areas.ts'))
const { POSTS } = await import(path.join(ROOT, 'lib/blog.ts'))
const PHOTOS = JSON.parse(fs.readFileSync(path.join(ROOT, 'lib/photos.json'), 'utf8'))

const byCat = (c) => PHOTOS.filter((p) => p.category === c)
const corta = (t, n = 132) => (t.length <= n ? t : t.slice(0, t.lastIndexOf(' ', n)).replace(/[,;—-]$/, '') + '…')
const pic = (slug) => path.join(ROOT, 'public', 'fotos', `${slug}-1600.webp`)

// ---------- cartões ----------
const cards = [
  { name: 'default', titulo: 'Corrimão e guarda-corpo em aço inox', sub: 'Fabricação própria e instalação em Belo Horizonte e região · 15 anos', foto: 'guarda-corpo-inox-mezanino-vao-interno' },
  { name: 'galeria', titulo: 'Projetos executados em aço inox', sub: `${PHOTOS.length} obras reais fotografadas na entrega, em BH e região`, foto: 'guarda-corpo-inox-escada-moderna' },
  { name: 'sobre', titulo: 'Quinze anos de aço inox em BH', sub: 'Oficina própria, equipe própria e centenas de obras entregues', foto: 'corrimao-inox-curvo-area-externa-condominio' },
  { name: 'contato', titulo: 'Fale com a Alfa Inox', sub: 'WhatsApp (31) 97237-9813 · Seg a sáb, 8h às 17h', foto: 'guarda-corpo-inox-corredor-mezanino' },
  { name: 'orcamento', titulo: 'Peça seu orçamento sem compromisso', sub: 'Medição no local sem custo em Belo Horizonte e região metropolitana', foto: 'corrimao-parede-inox-escada-condominio' },
  { name: 'servicos', titulo: 'Serviços em aço inox sob medida', sub: 'Corrimão, guarda-corpo, vidro, acessibilidade, portões e gradis', foto: 'guarda-corpo-inox-escada-interna-vidro' },
  { name: 'blog', titulo: 'Blog da Alfa Inox', sub: 'Preços, normas e manutenção — por quem fabrica há 15 anos', foto: 'corrimao-inox-escada-granito-interna' },
  { name: 'areas-atendidas', titulo: 'Atendemos toda a Grande BH', sub: `Belo Horizonte e mais ${AREAS.length - 1} cidades da região metropolitana`, foto: 'corrimao-inox-rampa-acessibilidade-duplo' },

  ...SERVICOS.map((s) => ({
    name: `servico-${s.slug}`, titulo: s.h1, sub: corta(s.resumo), foto: (byCat(s.categoriaFotos)[0] ?? PHOTOS[0]).slug,
  })),

  ...AREAS.map((a, i) => ({
    name: `area-${a.slug}`,
    titulo: `Corrimão e guarda-corpo em inox em ${a.nome}`,
    sub: 'Fabricação própria, medição no local sem custo e instalação',
    foto: PHOTOS[(i * 5 + 3) % PHOTOS.length].slug,
  })),

  ...POSTS.map((p) => ({ name: `post-${p.slug}`, titulo: p.h1, sub: corta(p.resumo), foto: p.foto, tag: p.categoria })),
]

// ---------- HTML ----------
const b64 = (f) => fs.readFileSync(f).toString('base64')
const fontFace = (fam, file, weight) =>
  `@font-face{font-family:'${fam}';font-weight:${weight};font-display:block;src:url(data:font/woff2;base64,${b64(path.join(FONTS, file))}) format('woff2')}`

const archivo = fs.readdirSync(FONTS).filter((f) => f.startsWith('Archivo')).sort((a, b) => fs.statSync(path.join(FONTS, b)).size - fs.statSync(path.join(FONTS, a)).size)[0]
const inter = fs.readdirSync(FONTS).filter((f) => f.startsWith('Inter')).sort((a, b) => fs.statSync(path.join(FONTS, b)).size - fs.statSync(path.join(FONTS, a)).size)[0]
const icone = b64(path.join(ROOT, 'public/marca/alfa-inox-icone.png'))

const card = (c) => {
  const len = c.titulo.length
  const size = len > 62 ? 46 : len > 46 ? 54 : len > 32 ? 62 : 70
  return `<section class="c">
  <img class="bg" src="data:image/webp;base64,${b64(pic(c.foto))}">
  <div class="veil"></div>
  <div class="in">
    <header>
      <img class="mark" src="data:image/png;base64,${icone}">
      <div class="wm"><b>ALFA</b><span>INOX</span></div>
      ${c.tag ? `<span class="tag">${c.tag}</span>` : ''}
    </header>
    <h1 style="font-size:${size}px">${c.titulo}</h1>
    <p class="sub">${c.sub}</p>
    <footer>
      <span class="br"></span>
      <span class="ft">(31) 97237-9813 &nbsp;·&nbsp; alfainoxbh.com.br &nbsp;·&nbsp; Belo Horizonte / MG</span>
    </footer>
  </div>
</section>`
}

const html = `<!doctype html><meta charset="utf-8"><style>
${fontFace('Archivo', archivo, 800)}
${fontFace('Inter', inter, 400)}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.c{position:relative;width:1200px;height:630px;overflow:hidden;background:#0d1117;font-family:Inter,sans-serif}
.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.bg{filter:brightness(1.12) contrast(1.04) saturate(1.05)}
.veil{position:absolute;inset:0;background:
  linear-gradient(100deg,#0d1117 0%,#0d1117 40%,rgba(13,17,23,.88) 52%,rgba(13,17,23,.3) 74%,rgba(13,17,23,.14) 100%),
  linear-gradient(0deg,rgba(13,17,23,.5),rgba(13,17,23,0) 42%)}
.in{position:relative;height:100%;padding:56px 60px;display:flex;flex-direction:column}
header{display:flex;align-items:center;gap:16px}
.mark{height:84px;width:auto;filter:brightness(1.18) contrast(1.06) drop-shadow(0 2px 10px rgba(0,0,0,.5))}
.wm{font-family:Archivo,sans-serif;font-weight:800;font-size:34px;letter-spacing:-.02em;line-height:1;display:flex;gap:9px;align-items:baseline}
.wm b{color:#fff;font-weight:800}
.wm span{background:linear-gradient(135deg,#fff,#dfe5ea 26%,#fff 48%,#b9c3ce 74%,#f2f5f8);-webkit-background-clip:text;background-clip:text;color:transparent}
.tag{margin-left:auto;font-family:Archivo,sans-serif;font-weight:800;font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:#0d1117;background:linear-gradient(135deg,#e7ecf1,#9aa5b1);padding:9px 18px;border-radius:100px}
h1{font-family:Archivo,sans-serif;font-weight:800;color:#fff;line-height:1.08;letter-spacing:-.028em;margin-top:auto;max-width:20ch;text-wrap:balance;text-shadow:0 2px 24px rgba(13,17,23,.85)}
.sub{margin-top:18px;font-size:24px;line-height:1.42;color:#cdd5dd;max-width:40ch;text-shadow:0 1px 12px rgba(13,17,23,.9)}
footer{margin-top:34px;display:flex;flex-direction:column;gap:16px}
.br{display:block;width:280px;height:4px;border-radius:4px;background:linear-gradient(90deg,#009c3b 0%,#009c3b 46%,#ffdf00 54%,#ffdf00 100%)}
.ft{font-size:20px;color:#a7b1bd;letter-spacing:.01em;text-shadow:0 1px 10px rgba(13,17,23,.9)}
</style>${cards.map(card).join('')}`

fs.mkdirSync(TMP, { recursive: true })
const page = path.join(TMP, 'og.html')
fs.writeFileSync(page, html)
console.log(`HTML: ${cards.length} cartões, ${(html.length / 1e6).toFixed(1)} MB`)

// ---------- render ----------
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const strip = path.join(TMP, 'strip.png')
fs.rmSync(strip, { force: true })

// O Chrome headless escreve o PNG e às vezes não encerra sozinho num screenshot
// desta altura — então esperamos o arquivo estabilizar e matamos o processo.
const child = spawn(CHROME, [
  '--headless', '--disable-gpu', '--hide-scrollbars', '--no-sandbox',
  `--user-data-dir=${path.join(TMP, 'profile')}`,
  `--window-size=1200,${630 * cards.length}`,
  `--screenshot=${strip}`, `file://${page}`,
], { stdio: 'ignore', detached: true })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
let last = -1, estavel = 0
for (let i = 0; i < 120; i++) {
  await sleep(1000)
  const size = fs.existsSync(strip) ? fs.statSync(strip).size : -1
  if (size > 0 && size === last) { if (++estavel >= 3) break } else estavel = 0
  last = size
}
try { process.kill(-child.pid, 'SIGKILL') } catch {}
if (!fs.existsSync(strip)) throw new Error('Chrome não gerou o screenshot')
console.log(`Strip renderizado: ${(fs.statSync(strip).size / 1e6).toFixed(1)} MB`)

// ---------- fatiar ----------
fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })
cards.forEach((c, i) => {
  execFileSync('magick', [
    strip, '-crop', `1200x630+0+${i * 630}`, '+repage',
    '-quality', '86', '-strip', '-interlace', 'Plane',
    path.join(OUT, `${c.name}.jpg`),
  ])
})

const sizes = cards.map((c) => fs.statSync(path.join(OUT, `${c.name}.jpg`)).size)
console.log(`${cards.length} cartões gerados · maior ${(Math.max(...sizes) / 1024).toFixed(0)} KB · média ${(sizes.reduce((a, b) => a + b) / sizes.length / 1024).toFixed(0)} KB`)
