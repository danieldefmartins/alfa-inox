import type { Metadata } from 'next'
import Link from 'next/link'
import { postsOrdenados } from '@/lib/blog'
import { findPhoto, src } from '@/lib/photos'
import { SITE, socialMeta } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'
import Jsonld from '@/components/Jsonld'
import { Arrow } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Blog | Aço Inox, Corrimão, Guarda-Corpo e Normas',
  description:
    'Guias práticos sobre corrimão e guarda-corpo em aço inox: preços, inox 304 x 316, altura pela NBR 14718, acessibilidade NBR 9050 e manutenção. Por quem fabrica em BH.',
  alternates: { canonical: '/blog/' },
  ...socialMeta({ card: 'blog', titulo: 'Blog | Aço Inox, Corrimão, Guarda-Corpo e Normas', descricao: 'Guias práticos sobre corrimão e guarda-corpo em aço inox: preços, inox 304 x 316, altura pela NBR 14718, acessibilidade NBR 9050 e manutenção. Por quem fabrica em BH.', url: '/blog/' }),
}

const dataBR = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

export default function BlogPage() {
  const posts = postsOrdenados()
  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(44px, 6vw, 68px)' }}>
          <Crumbs itens={[{ nome: 'Blog' }]} dark />
          <div style={{ maxWidth: 720, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Blog da Alfa Inox</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              O que aprendemos em 15 anos fabricando corrimão e guarda-corpo, escrito sem enrolação:
              o que define o preço, o que a norma exige e o que dá errado quando se economiza no
              lugar errado.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid g2">
          {posts.map((p) => {
            const foto = findPhoto(p.foto)
            return (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="card">
                {foto && <img className="card-img" src={src(foto.slug, 800)} alt={foto.alt} width={foto.width} height={foto.height} loading="lazy" style={{ backgroundImage: `url(${foto.lqip})`, backgroundSize: 'cover' }} />}
                <div className="card-body">
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                    <span className="pill">{p.categoria}</span>
                    <span style={{ color: 'var(--steel)', fontSize: '.83rem' }}>{p.leitura} de leitura</span>
                  </div>
                  <h2 style={{ fontSize: '1.28rem', marginBottom: 10 }}>{p.h1}</h2>
                  <p>{p.resumo}</p>
                  <span className="card-link">Ler artigo <Arrow size={15} /></span>
                  <time dateTime={p.date} style={{ marginTop: 14, color: 'var(--steel)', fontSize: '.83rem' }}>{dataBR(p.date)}</time>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <CTA />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Blog da Alfa Inox',
        url: `${SITE.url}/blog/`,
        inLanguage: 'pt-BR',
        publisher: { '@id': `${SITE.url}/#business` },
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.h1,
          url: `${SITE.url}/blog/${p.slug}/`,
          datePublished: p.date,
          description: p.description,
        })),
      }} />
    </>
  )
}
