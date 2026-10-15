import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'fotos')
const OUT = path.join(ROOT, 'public', 'fotos')
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/photos.map.json'), 'utf8'))

// Incremental: só processa fotos novas (ou todas com --force). Não apaga public/fotos (lá também ficam
// as versões AVIF do hero, geradas à parte).
const FORCE = process.argv.includes('--force')
fs.mkdirSync(OUT, { recursive: true })
const MANIFEST = path.join(ROOT, 'lib', 'photos.json')
const previous = fs.existsSync(MANIFEST) ? Object.fromEntries(JSON.parse(fs.readFileSync(MANIFEST, 'utf8')).map((p) => [p.slug, p])) : {}

// 200 = miniaturas (listas de serviços/cidades no celular); lado maior limitado ao tamanho, nunca amplia
const SIZES = [1600, 800, 400, 200]
const manifest = []

for (const [id, slug, category, alt, ambiente, tags] of map) {
  const src = path.join(SRC, `${id}.jpg`)
  if (!fs.existsSync(src)) { console.error('MISSING', src); continue }
  const done = !FORCE && previous[slug] && SIZES.every((size) => fs.existsSync(path.join(OUT, `${slug}-${size}.webp`)))
  if (done) { manifest.push({ ...previous[slug], category, alt, ambiente, tags }); continue }
  const [w, h] = execFileSync('magick', ['identify', '-format', '%w %h', src]).toString().trim().split(' ').map(Number)
  for (const size of SIZES) {
    execFileSync('magick', [src, '-auto-orient', '-resize', `${size}x${size}>`, '-strip',
      '-quality', size === 1600 ? '80' : '78', '-define', 'webp:method=6',
      path.join(OUT, `${slug}-${size}.webp`)])
  }
  // tiny blur placeholder
  const lqip = execFileSync('magick', [src, '-auto-orient', '-resize', '20x20>', '-strip', '-quality', '35', 'webp:-'])
  manifest.push({
    slug, category, alt, ambiente, tags,
    width: w, height: h,
    orientation: w >= h ? 'landscape' : 'portrait',
    lqip: `data:image/webp;base64,${lqip.toString('base64')}`,
  })
  process.stdout.write('.')
}

fs.writeFileSync(path.join(ROOT, 'lib', 'photos.json'), JSON.stringify(manifest, null, 2))
console.log(`\n${manifest.length} fotos processadas`)
