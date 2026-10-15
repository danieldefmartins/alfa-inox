import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { POSTS } from '@/lib/blog'
import { PHOTOS, src } from '@/lib/photos'

export const dynamic = 'force-static'

/** Montado dos mesmos arrays das rotas: nunca fica fora de sincronia. lastmod só onde é real (artigos). */
export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${SITE.url}${p}`
  return [
    { url: u('/'), priority: 1 },
    { url: u('/servicos/'), priority: 0.9 },
    ...SERVICOS.map((s) => ({ url: u(`/servicos/${s.slug}/`), priority: 0.9 })),
    { url: u('/monte-seu-guarda-corpo/'), priority: 0.8 },
    { url: u('/galeria/'), priority: 0.8, images: PHOTOS.map((p) => u(src(p.slug, 1600))) },
    { url: u('/orcamento/'), priority: 0.9 },
    { url: u('/areas-atendidas/'), priority: 0.7 },
    ...AREAS.map((a) => ({ url: u(`/areas-atendidas/${a.slug}/`), priority: 0.7 })),
    { url: u('/faq/'), priority: 0.6 },
    { url: u('/blog/'), priority: 0.6 },
    ...POSTS.map((p) => ({ url: u(`/blog/${p.slug}/`), lastModified: new Date(p.updated ?? p.date), priority: 0.6 })),
    { url: u('/sobre/'), priority: 0.6 },
    { url: u('/contato/'), priority: 0.7 },
    { url: u('/privacidade/'), priority: 0.2 },
  ]
}
