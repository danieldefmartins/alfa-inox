import type { Metadata } from 'next'
import Link from 'next/link'
import { postsOrdenados } from '@/lib/blog'
import { findPhoto, PHOTOS } from '@/lib/photos'
import { SITE, socialMeta } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { Img, CloseCTA } from '@/components/Sections'

const TITLE = 'Blog: Corrimão, Guarda-Corpo e Normas de Inox'
const DESC = 'Guias sobre corrimão e guarda-corpo em aço inox: preço por metro, inox 304 x 316, altura pela NBR 14718, NBR 9050 e limpeza. Por quem fabrica em BH.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/blog/' },
  ...socialMeta({ card: 'blog', titulo: TITLE, descricao: DESC, url: '/blog/' }),
}

const dataBR = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

export default function BlogPage() {
  const posts = postsOrdenados()
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Blog' }]} />
          <h1>Guias de quem fabrica corrimão e guarda-corpo</h1>
          <p className="lede">
            Preço, norma, liga, limpeza: as perguntas que chegam pelo WhatsApp, respondidas com o detalhe técnico que
            ajuda você a comparar orçamentos e escolher certo. Escritos pela equipe da Alfa Inox, em Belo Horizonte.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="post-list">
            {posts.map((p, i) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`}>
                <Img photo={findPhoto(p.foto) ?? PHOTOS[0]} sizes="(min-width: 760px) 240px, 100vw" alt="" priority={i === 0} />
                <div>
                  <p className="small muted" style={{ margin: '0 0 6px' }}>{p.categoria} · <time dateTime={p.date}>{dataBR(p.date)}</time> · {p.leitura}</p>
                  <h2>{p.h1}</h2>
                  <p>{p.resumo}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CloseCTA />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog da Alfa Inox',
        url: `${SITE.url}/blog/`,
        publisher: { '@id': `${SITE.url}/#business` },
        blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.h1, url: `${SITE.url}/blog/${p.slug}/`, datePublished: p.date })),
      }} />
    </>
  )
}
