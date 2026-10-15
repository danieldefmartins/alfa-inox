// Gera favicon e ícones do app a partir de public/brand/mark.svg (ou mark.png).
// Uso: npm run brand   (precisa do ImageMagick `magick`; o resultado é versionado, então o CI não precisa dele)
// Saída: public/brand/icon-192.png, icon-512.png, apple-touch-icon.png, favicon-32.png, public/favicon.ico
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'

const dir = 'public/brand'
const src = ['mark.svg', 'mark.png'].map((f) => `${dir}/${f}`).find((f) => fs.existsSync(f))
if (!src) throw Error('public/brand/mark.svg (ou mark.png) não encontrado')

const run = (...args) => execFileSync('magick', args, { stdio: 'inherit' })
const raster = (size, out) => run('-background', 'none', '-density', '600', src, '-resize', `${size}x${size}`, out)

raster(192, `${dir}/icon-192.png`)
raster(512, `${dir}/icon-512.png`)
raster(180, `${dir}/apple-touch-icon.png`)
raster(32, `${dir}/favicon-32.png`)
run('-background', 'none', '-density', '600', src, '-define', 'icon:auto-resize=48,32,16', 'public/favicon.ico')
console.log(`brand: ícones gerados a partir de ${src}`)
