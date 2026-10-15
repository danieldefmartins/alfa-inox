// Lighthouse 12 (mobile simulado + desktop) nas páginas-modelo; resumo em docs/lighthouse.md.
// node scripts/lighthouse.mjs [baseUrl]
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'

const base = process.argv[2] || 'http://127.0.0.1:8788'
const pages = ['/', '/servicos/guarda-corpo-de-vidro/', '/areas-atendidas/nova-lima/', '/galeria/', '/orcamento/', '/monte-seu-guarda-corpo/', '/blog/quanto-custa-corrimao-de-inox/']
const CATS = '--only-categories=performance,accessibility,best-practices,seo'
fs.mkdirSync('docs/lighthouse', { recursive: true })
const rows = []
const run = (url, mode, out) => {
  const args = ['-y', 'lighthouse@12', url, CATS, '--quiet', '--chrome-flags=--headless', '--output=json', `--output-path=${out}`]
  if (mode === 'desktop') args.push('--preset=desktop')
  else args.push('--form-factor=mobile', '--screenEmulation.mobile', '--throttling-method=simulate')
  execFileSync('npx', args, { stdio: 'ignore' })
  const d = JSON.parse(fs.readFileSync(out, 'utf8'))
  const s = (k) => Math.round(d.categories[k].score * 100)
  const a = d.audits
  rows.push(`| ${mode} | ${url.replace(base, '')} | ${s('performance')} | ${s('accessibility')} | ${s('best-practices')} | ${s('seo')} | ${a['largest-contentful-paint'].displayValue} | ${a['cumulative-layout-shift'].displayValue} | ${a['total-blocking-time'].displayValue} |`)
  console.log(rows.at(-1))
}
for (const p of pages) {
  const name = p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '_')
  run(base + p, 'mobile', `docs/lighthouse/${name}-mobile.json`)
  if (p === '/' || p === '/galeria/') run(base + p, 'desktop', `docs/lighthouse/${name}-desktop.json`)
}
fs.writeFileSync('docs/lighthouse.md', `# Lighthouse 12 — ${new Date().toISOString().slice(0, 10)}\n\nServidor local \`wrangler dev\` (worker + assets de out/). Mobile = simulado (Moto G, 4G lento).\n\n| Modo | Página | Perf | A11y | BP | SEO | LCP | CLS | TBT |\n|---|---|---|---|---|---|---|---|---|\n${rows.join('\n')}\n`)
