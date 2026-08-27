import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { POSTS } from '@/lib/blog'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const u = (p: string) => `${SITE.url}${p}`

  return [
    { url: u('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: u('/servicos/'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...SERVICOS.map((s) => ({
      url: u(`/servicos/${s.slug}/`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9,
    })),
    { url: u('/galeria/'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: u('/areas-atendidas/'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...AREAS.map((a) => ({
      url: u(`/areas-atendidas/${a.slug}/`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7,
    })),
    { url: u('/blog/'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...POSTS.map((p) => ({
      url: u(`/blog/${p.slug}/`), lastModified: new Date(p.updated ?? p.date), changeFrequency: 'yearly' as const, priority: 0.6,
    })),
    { url: u('/sobre/'), lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: u('/contato/'), lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: u('/orcamento/'), lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
  ]
}
