// Fotos de banco LICENCIADAS (fornecidas pelo dono em 15/10/2026; ver docs/photo-sources.md).
// Uso permitido: hero e áreas editoriais/atmosféricas. NUNCA na galeria, nunca legendadas como obra da
// Alfa Inox, nunca em ImageGallery/ImageObject. Alt descreve a cena, sem "obra da Alfa".
// Gerado por: python3 ~/.claude/skills/premium-website/scripts/optimize-images.py scripts/estoque.map.json public/estoque
import data from '../public/estoque/manifest.json'

type Entry = { alt: string; width: number; height: number; ratio: number; files: Record<string, string> }
const M = data as Record<string, Entry>

export type EstoqueNome = keyof typeof data

export function estoque(nome: EstoqueNome) {
  const e = M[nome]
  const widths = Object.keys(e.files).map(Number).sort((a, b) => a - b)
  const set = (ext: 'avif' | 'webp') =>
    widths.map((w) => `/estoque/${e.files[w].replace(/\.webp$/, `.${ext}`)} ${w}w`).join(', ')
  return {
    alt: e.alt,
    width: e.width,
    height: e.height,
    avif: set('avif'),
    webp: set('webp'),
    src: `/estoque/${e.files[widths.includes(1200) ? 1200 : widths[widths.length - 1]]}`,
  }
}
