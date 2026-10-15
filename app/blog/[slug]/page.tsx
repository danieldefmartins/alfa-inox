import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS, findPost, postsOrdenados } from '@/lib/blog'
import { findPhoto, src, PHOTOS } from '@/lib/photos'
import { SITE, socialMeta, waLink } from '@/lib/site'
import { SERVICOS } from '@/lib/servicos'
import Crumbs from '@/components/Crumbs'
import FAQ from '@/components/FAQ'
import Jsonld from '@/components/Jsonld'
import { Img, CloseCTA } from '@/components/Sections'
import { WhatsAppIcon } from '@/components/Icons'

export const dynamicParams = false
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = findPost((await params).slug)
  if (!p) return {}
  const social = socialMeta({ card: `post-${p.slug}`, titulo: p.title, descricao: p.description, url: `/blog/${p.slug}/`, tipo: 'article' })
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    ...social,
    openGraph: { ...social.openGraph, publishedTime: p.date, modifiedTime: p.updated ?? p.date, authors: [SITE.name] },
  }
}

const dataBR = (d: string) => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

const SERVICO_DO_POST: Record<string, string> = {
  'quanto-custa-corrimao-de-inox': 'corrimao-inox',
  'inox-304-ou-316': 'corrimao-inox',
  'altura-guarda-corpo-nbr-14718': 'guarda-corpo-inox',
  'corrimao-nbr-9050-acessibilidade': 'acessibilidade-nbr-9050',
  'como-limpar-corrimao-de-inox': 'corrimao-inox',
  'guarda-corpo-vidro-ou-inox': 'guarda-corpo-de-vidro',
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = findPost((await params).slug)
  if (!p) notFound()
  const foto = findPhoto(p.foto)
  const relacionados = postsOrdenados().filter((x) => x.slug !== p.slug).slice(0, 3)
  const servico = SERVICOS.find((s) => s.slug === SERVICO_DO_POST[p.slug])

  return (
    <>
      <article>
        <header className="phead" style={{ paddingBottom: 32 }}>
          <div className="wrap narrow">
            <Crumbs itens={[{ nome: 'Blog', href: '/blog/' }, { nome: p.h1 }]} />
            <h1 style={{ fontSize: 'clamp(2rem, 1.3rem + 2.8vw, 3.4rem)' }}>{p.h1}</h1>
            <p className="lede">{p.resumo}</p>
            <p className="meta-line">
              <span>Por Alfa Inox · fabricante de corrimão e guarda-corpo em BH desde {SITE.foundedYear}</span>
              <time dateTime={p.date}>{dataBR(p.date)}</time>
              <span>{p.leitura} de leitura</span>
            </p>
          </div>
        </header>
        {foto && (
          <div className="wrap narrow article-hero">
            <Img photo={foto} priority sizes="(min-width: 840px) 760px, 100vw" />
          </div>
        )}
        <div className="wrap narrow section" style={{ paddingTop: 48 }}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
          {servico && (
            <aside className="form-card" style={{ marginTop: 48 }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: 8 }}>Precisa disso em BH?</h2>
              <p className="muted">
                Fabricamos e instalamos {servico.nome.toLowerCase()} em Belo Horizonte e região. Veja{' '}
                <Link href={`/servicos/${servico.slug}/`}>{servico.keyword}</Link> ou mande fotos do local.
              </p>
              <a className="btn btn-cta" href={waLink(`Olá! Li o artigo "${p.h1}" e gostaria de um orçamento.`)} target="_blank" rel="noopener"><WhatsAppIcon size={18} /> Orçamento no WhatsApp</a>
            </aside>
          )}
        </div>
      </article>

      {p.faq && <FAQ itens={p.faq} titulo="Perguntas sobre o tema" white />}

      <section className="section">
        <div className="wrap">
          <div className="head"><h2>Continue lendo</h2></div>
          <div className="post-list">
            {relacionados.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}/`}>
                <Img photo={findPhoto(r.foto) ?? PHOTOS[0]} sizes="(min-width: 760px) 240px, 100vw" />
                <div><h3>{r.h1}</h3><p>{r.resumo}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CloseCTA />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: p.h1,
        alternativeHeadline: p.title,
        description: p.description,
        url: `${SITE.url}/blog/${p.slug}/`,
        mainEntityOfPage: `${SITE.url}/blog/${p.slug}/`,
        datePublished: p.date,
        dateModified: p.updated ?? p.date,
        inLanguage: 'pt-BR',
        articleSection: p.categoria,
        author: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/sobre/` },
        publisher: { '@id': `${SITE.url}/#business` },
        ...(foto ? { image: `${SITE.url}${src(foto.slug, 1600)}` } : {}),
      }} />
    </>
  )
}
