import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS, findPost, postsOrdenados } from '@/lib/blog'
import { findPhoto, src } from '@/lib/photos'
import { SITE } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Jsonld from '@/components/Jsonld'
import { Arrow } from '@/components/Icons'

export const dynamicParams = false
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = findPost(slug)
  if (!p) return {}
  const foto = findPhoto(p.foto)
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `${SITE.url}/blog/${p.slug}/`,
      type: 'article',
      publishedTime: p.date,
      modifiedTime: p.updated ?? p.date,
      images: foto ? [{ url: src(foto.slug, 1600), alt: foto.alt }] : undefined,
    },
  }
}

const dataBR = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = findPost(slug)
  if (!p) notFound()

  const foto = findPhoto(p.foto)
  const relacionados = postsOrdenados().filter((x) => x.slug !== p.slug).slice(0, 3)

  return (
    <>
      <article>
        <header style={{ background: 'var(--ink)', color: '#fff' }}>
          <div className="wrap" style={{ paddingBottom: 'clamp(40px, 6vw, 64px)' }}>
            <Crumbs itens={[{ nome: 'Blog', href: '/blog/' }, { nome: p.categoria }]} dark />
            <div style={{ maxWidth: 760, paddingTop: 'clamp(24px, 4vw, 40px)' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
                <span className="pill">{p.categoria}</span>
                <time dateTime={p.date} style={{ color: 'var(--steel-2)', fontSize: '.87rem' }}>{dataBR(p.date)}</time>
                <span style={{ color: 'var(--steel-2)', fontSize: '.87rem' }}>· {p.leitura} de leitura</span>
              </div>
              <h1>{p.h1}</h1>
              <p className="lede" style={{ marginTop: 20 }}>{p.resumo}</p>
            </div>
          </div>
        </header>

        {foto && (
          <div className="wrap" style={{ marginTop: 'clamp(-40px, -4vw, -28px)', position: 'relative' }}>
            <img src={src(foto.slug, 1600)} alt={foto.alt} width={foto.width} height={foto.height}
              fetchPriority="high"
              style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)' }} />
          </div>
        )}

        <div className="wrap-narrow" style={{ paddingBlock: 'clamp(44px, 6vw, 68px)' }}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />

          <aside style={{ marginTop: 48, padding: 28, background: 'var(--paper-2)', borderRadius: 'var(--r-lg)', borderLeft: '3px solid var(--accent)' }}>
            <h2 style={{ fontSize: '1.15rem', marginBottom: 10 }}>Precisa de um orçamento em Belo Horizonte?</h2>
            <p style={{ margin: '0 0 18px', color: '#4a5566', fontSize: '.96rem' }}>
              A Alfa Inox fabrica e instala corrimão, guarda-corpo e acessibilidade em aço inox há
              {' '}{SITE.yearsInBusiness} anos na Grande BH. Medição no local sem custo.
            </p>
            <Link className="btn btn-primary" href="/orcamento/">Pedir orçamento <Arrow size={15} /></Link>
          </aside>
        </div>
      </article>

      {p.faq && <FAQ itens={p.faq} titulo="Perguntas frequentes sobre o tema" />}

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Continue lendo</p>
          <h2 style={{ marginBottom: 34 }}>Outros artigos</h2>
          <div className="grid g3">
            {relacionados.map((r) => {
              const rf = findPhoto(r.foto)
              return (
                <Link key={r.slug} href={`/blog/${r.slug}/`} className="card">
                  {rf && <img className="card-img" src={src(rf.slug, 800)} alt={rf.alt} width={rf.width} height={rf.height} loading="lazy" style={{ backgroundImage: `url(${rf.lqip})`, backgroundSize: 'cover' }} />}
                  <div className="card-body">
                    <span className="pill" style={{ alignSelf: 'flex-start', marginBottom: 12 }}>{r.categoria}</span>
                    <h3 style={{ fontSize: '1.05rem' }}>{r.h1}</h3>
                    <p>{r.resumo}</p>
                    <span className="card-link">Ler <Arrow size={15} /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.h1,
        alternativeHeadline: p.title,
        description: p.description,
        url: `${SITE.url}/blog/${p.slug}/`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${p.slug}/` },
        datePublished: p.date,
        dateModified: p.updated ?? p.date,
        inLanguage: 'pt-BR',
        articleSection: p.categoria,
        author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        publisher: { '@id': `${SITE.url}/#business` },
        ...(foto ? { image: { '@type': 'ImageObject', url: `${SITE.url}${src(foto.slug, 1600)}`, width: foto.width, height: foto.height } } : {}),
      }} />
      {p.faq && (
        <Jsonld data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }} />
      )}
    </>
  )
}
