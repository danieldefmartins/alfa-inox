// Screenshots de página inteira em 390 e 1440 + checagem de rolagem horizontal, erros de console e axe.
// node scripts/screens.mjs <baseUrl> <outDir> [caminho ...]
// SEED_CITY='{"name":"Nova Lima","slug":"nova-lima"}' mostra a saudação por cidade sem geolocalização.
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import fs from 'node:fs'

const [base = 'http://127.0.0.1:8788', outDir = 'docs/screens', ...rest] = process.argv.slice(2)
const paths = rest.length ? rest : ['/', '/servicos/guarda-corpo-de-vidro/', '/areas-atendidas/nova-lima/', '/blog/quanto-custa-corrimao-de-inox/', '/orcamento/', '/galeria/', '/monte-seu-guarda-corpo/', '/contato/']
const seed = process.env.SEED_CITY
const widths = (process.env.WIDTHS || '390,1440').split(',').map(Number)
fs.mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch()
const problems = []
for (const width of widths) {
  const ctx = await browser.newContext({ viewport: { width, height: width < 500 ? 844 : 900 }, deviceScaleFactor: width < 500 ? 2 : 1, reducedMotion: 'reduce' })
  if (seed) await ctx.addInitScript((v) => sessionStorage.setItem('alfa-visitor-city', v), seed)
  for (const p of paths) {
    const page = await ctx.newPage()
    page.on('pageerror', (e) => problems.push(`${width} ${p} pageerror ${e.message}`))
    page.on('console', (m) => m.type() === 'error' && problems.push(`${width} ${p} console ${m.text()}`))
    await page.goto(base + p, { waitUntil: 'load' })
    await page.evaluate(async () => {
      document.querySelectorAll('img[loading=lazy]').forEach((i) => (i.loading = 'eager'))
      for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)) }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(900)
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    if (overflow > 0) problems.push(`${width} ${p} horizontal overflow ${overflow}px`)
    const small = await page.evaluate(() => [...document.querySelectorAll('a, button, input, select, summary, label.choice')]
      .filter((el) => { if (el.closest('.choice') || el.type === 'range' || el.closest('.honeypot')) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.height < 24 && getComputedStyle(el).display !== 'inline' })
      .map((el) => (el.textContent || el.getAttribute('aria-label') || el.tagName).trim().slice(0, 30)).slice(0, 5))
    if (small.length) problems.push(`${width} ${p} small tap targets: ${small.join(' | ')}`)
    if (width === widths[0]) {
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
      for (const v of axe.violations) problems.push(`${p} axe ${v.id} (${v.nodes.length}): ${v.nodes[0]?.target}`)
    }
    const name = (p === '/' ? 'home' : p.replace(/^\/|\/$/g, '').replace(/\//g, '_')) + (seed ? '-cidade' : '') + `-${width}.png`
    await page.screenshot({ path: `${outDir}/${name}`, fullPage: true })
    await page.close()
  }
  await ctx.close()
}
await browser.close()
console.log(problems.length ? problems.join('\n') : 'sem overflow, sem erros de console, axe limpo')
