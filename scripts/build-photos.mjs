import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = '/Users/danielmartins/Projects/Alfa-Inox'
const SRC = path.join(ROOT, 'fotos')
const OUT = path.join(ROOT, 'public', 'fotos')
const map = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/photos.map.json'), 'utf8'))

fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })

const SIZES = [1600, 800, 400]
const manifest = []

for (const [id, slug, category, alt, ambiente, tags] of map) {
  const src = path.join(SRC, `${id}.jpg`)
  if (!fs.existsSync(src)) { console.error('MISSING', src); continue }
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
