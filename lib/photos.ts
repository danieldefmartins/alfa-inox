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
  { slug: 'corrimao-inox', nome: 'Corrimão de Inox' },
  { slug: 'guarda-corpo-inox', nome: 'Guarda-Corpo de Inox' },
  { slug: 'guarda-corpo-vidro', nome: 'Guarda-Corpo de Vidro' },
  { slug: 'acessibilidade', nome: 'Acessibilidade' },
  { slug: 'portoes-gradis', nome: 'Portões e Gradis' },
] as const

export const byCategory = (cat: string) => PHOTOS.filter((p) => p.category === cat)
export const byTag = (tag: string) => PHOTOS.filter((p) => p.tags.includes(tag))
export const findPhoto = (slug: string) => PHOTOS.find((p) => p.slug === slug)
export const destaques = () => PHOTOS.filter((p) => p.tags.includes('destaque'))

export const src = (slug: string, size: 400 | 800 | 1600 = 800) => `/fotos/${slug}-${size}.webp`
export const srcSet = (slug: string) =>
  [400, 800, 1600].map((s) => `/fotos/${slug}-${s}.webp ${s}w`).join(', ')
