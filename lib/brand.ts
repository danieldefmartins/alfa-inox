/**
 * Marca trocável (build-time). O logo novo está sendo desenhado: quando chegar, basta soltar os arquivos
 * em public/brand/ com estes nomes e rodar `npm run brand && npm run build`:
 *
 *   public/brand/logo.svg        logo horizontal para fundo claro (cabeçalho)           — obrigatório
 *   public/brand/logo-dark.svg   logo horizontal para fundo escuro (rodapé)             — opcional (senão usa logo.svg)
 *   public/brand/mark.svg        símbolo quadrado (favicon, ícone do app, schema logo)  — já existe um provisório
 *
 * Também aceita .png/.webp com o mesmo nome. Enquanto logo.* não existir, o site mostra o wordmark em texto
 * (components/Logo.tsx). Nenhuma página referencia arquivo de logo diretamente — só este módulo.
 * A cor de destaque (CTAs) fica em app/globals.css → --accent.
 */
import fs from 'node:fs'
import path from 'node:path'

const dir = path.join(process.cwd(), 'public', 'brand')
const EXT = ['svg', 'webp', 'png']

function find(name: string) {
  for (const ext of EXT) {
    const file = path.join(dir, `${name}.${ext}`)
    if (fs.existsSync(file)) return { src: `/brand/${name}.${ext}`, ...size(file, ext) }
  }
  return null
}

/** Dimensions so the <img> reserves its space (no layout shift). */
function size(file: string, ext: string): { width: number; height: number } {
  try {
    if (ext === 'svg') {
      const svg = fs.readFileSync(file, 'utf8')
      const vb = svg.match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/)
      if (vb) return { width: Math.round(+vb[1]), height: Math.round(+vb[2]) }
    }
    if (ext === 'png') {
      const b = fs.readFileSync(file)
      return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) }
    }
  } catch {
    /* fall through */
  }
  return { width: 400, height: 100 }
}

export type LogoFile = { src: string; width: number; height: number }

export function brandFiles(): { logo: LogoFile | null; logoDark: LogoFile | null; mark: LogoFile | null } {
  const logo = find('logo')
  return { logo, logoDark: find('logo-dark') ?? logo, mark: find('mark') }
}
