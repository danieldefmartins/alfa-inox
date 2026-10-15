import data from './photos.json'

export type Photo = {
  slug: string
  category: string
  alt: string
  ambiente: 'residencial' | 'comercial'
  tags: string[]
  width: number
  height: number
  orientation: 'landscape' | 'portrait'
  lqip: string
}

export const PHOTOS = data as Photo[]

export const CATEGORIAS = [
  { slug: 'corrimao-inox', nome: 'Corrimão de inox', servico: 'corrimao-inox' },
  { slug: 'guarda-corpo-inox', nome: 'Guarda-corpo de inox', servico: 'guarda-corpo-inox' },
  { slug: 'guarda-corpo-vidro', nome: 'Guarda-corpo de vidro', servico: 'guarda-corpo-de-vidro' },
  { slug: 'acessibilidade', nome: 'Acessibilidade', servico: 'acessibilidade-nbr-9050' },
  { slug: 'portoes-gradis', nome: 'Gradis e portões', servico: 'portoes-e-gradis-inox' },
] as const

/**
 * Cidade de cada foto — SÓ quando sabemos. O dono ainda não informou a cidade das obras (docs/OWNER-INPUT.md);
 * a legenda mostra a cidade apenas para as fotos listadas aqui.
 */
export const CIDADE_DA_FOTO: Record<string, string> = {
  'corrimao-inox-curvo-area-externa-condominio': 'Belo Horizonte',
}

/** Filtros da galeria: só os que as fotos reais sustentam. `?tipo=<id>` na URL. */
export const FILTROS: { id: string; nome: string; match: (p: Photo) => boolean }[] = [
  { id: 'corrimao', nome: 'Corrimão', match: (p) => p.category === 'corrimao-inox' },
  { id: 'guarda-corpo', nome: 'Guarda-corpo em inox', match: (p) => p.category === 'guarda-corpo-inox' },
  { id: 'vidro', nome: 'Guarda-corpo de vidro', match: (p) => p.category === 'guarda-corpo-vidro' || p.tags.includes('vidro') },
  { id: 'escadas', nome: 'Escadas', match: (p) => p.tags.includes('escada') },
  { id: 'acessibilidade', nome: 'Acessibilidade e barras', match: (p) => p.category === 'acessibilidade' },
  { id: 'comercial', nome: 'Comercial e condomínios', match: (p) => p.ambiente === 'comercial' },
  { id: 'gradis', nome: 'Gradis', match: (p) => p.category === 'portoes-gradis' },
]

export const categoriaNome = (p: Photo) => CATEGORIAS.find((c) => c.slug === p.category)?.nome ?? 'Aço inox'

/** Legenda: o que é (do alt) + cidade, só quando conhecida. */
export const legenda = (p: Photo) => {
  const cidade = CIDADE_DA_FOTO[p.slug]
  const base = p.alt.replace(/ em Belo Horizonte$/, '')
  return cidade ? `${base} — ${cidade}` : base
}

export const byCategory = (cat: string) => PHOTOS.filter((p) => p.category === cat)
export const byTag = (tag: string) => PHOTOS.filter((p) => p.tags.includes(tag))
export const findPhoto = (slug: string) => PHOTOS.find((p) => p.slug === slug)
export const destaques = () => PHOTOS.filter((p) => p.tags.includes('destaque'))

export type Size = 400 | 800 | 1600
export const src = (slug: string, size: Size = 800) => `/fotos/${slug}-${size}.webp`
export const srcSet = (slug: string) => [400, 800, 1600].map((s) => `/fotos/${slug}-${s}.webp ${s}w`).join(', ')

/** Largura real do arquivo: o pipeline limita o LADO MAIOR a 400/800/1600 px e nunca amplia. */
export const widthAt = (p: Photo, s: Size) => Math.round(p.width * Math.min(1, s / Math.max(p.width, p.height)))

/** srcset com larguras reais de cada arquivo. */
export function srcSetFor(p: Photo) {
  const seen = new Set<number>()
  return ([400, 800, 1600] as Size[])
    .map((s) => ({ s, w: widthAt(p, s) }))
    .filter(({ w }) => (seen.has(w) ? false : (seen.add(w), true)))
    .map(({ s, w }) => `/fotos/${p.slug}-${s}.webp ${w}w`)
    .join(', ')
}
