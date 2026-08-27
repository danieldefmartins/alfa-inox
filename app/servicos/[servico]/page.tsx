import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICOS, findServico } from '@/lib/servicos'
import { byCategory, src } from '@/lib/photos'
import { SITE, waLink, socialMeta } from '@/lib/site'
import { AREAS } from '@/lib/areas'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { ServiceIcon, Arrow, Check, WhatsAppIcon } from '@/components/Icons'

export const dynamicParams = false
export function generateStaticParams() {
  return SERVICOS.map((s) => ({ servico: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ servico: string }> }): Promise<Metadata> {
  const { servico } = await params
  const s = findServico(servico)
  if (!s) return {}
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/servicos/${s.slug}/` },
    ...socialMeta({
      card: `servico-${s.slug}`,
      titulo: s.title,
      descricao: s.description,
      url: `/servicos/${s.slug}/`,
      tipo: 'article',
    }),
  }
}

export default async function ServicoPage({ params }: { params: Promise<{ servico: string }> }) {
  const { servico } = await params
  const s = findServico(servico)
  if (!s) notFound()

  const fotos = byCategory(s.categoriaFotos)
  const outros = SERVICOS.filter((x) => x.slug !== s.slug)

  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Serviços', href: '/servicos/' }, { nome: s.nome }]} dark />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center', paddingBlock: 'clamp(36px, 6vw, 64px) clamp(48px, 7vw, 84px)' }}>
            <div>
              <div style={{ color: 'var(--steel-2)', marginBottom: 18 }}><ServiceIcon name={s.icone} size={42} /></div>
              <h1>{s.h1}</h1>
              {s.intro.map((p, i) => (
                <p key={i} className="lede" style={{ marginTop: i === 0 ? 22 : 14 }}>{p}</p>
              ))}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
                <a className="btn btn-wa" href={waLink(`Olá! Gostaria de um orçamento de ${s.nome.toLowerCase()} em Belo Horizonte.`)} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> Pedir orçamento
                </a>
                <Link className="btn btn-ghost" href="/galeria/">Ver projetos</Link>
              </div>
            </div>
            {fotos[0] && (
              <img src={src(fotos[0].slug, 1600)} alt={fotos[0].alt} width={fotos[0].width} height={fotos[0].height}
                fetchPriority="high"
                style={{ borderRadius: 'var(--r-lg)', width: '100%', aspectRatio: '4/3', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }} />
            )}
          </div>
        </div>
      </section>

      {/* MODELOS */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 660, marginBottom: 44 }}>
            <p className="eyebrow">Modelos</p>
            <h2>Opções que executamos</h2>
          </div>
          <div className="grid g2">
            {s.modelos.map((m) => (
              <div key={m.nome} className="card" style={{ padding: 26 }}>
                <h3 style={{ fontSize: '1.12rem', marginBottom: 10 }}>{m.nome}</h3>
                <p style={{ margin: 0, color: '#4a5566', fontSize: '.96rem' }}>{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APLICAÇÕES + ESPECIFICAÇÕES */}
      <section className="section tinted">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: 'clamp(32px, 5vw, 64px)' }}>
          <div>
            <p className="eyebrow">Aplicações</p>
            <h2 style={{ marginBottom: 26 }}>Onde usamos</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 13 }}>
              {s.aplicacoes.map((a) => (
                <li key={a} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flex: 'none', marginTop: 2 }}><Check size={17} /></span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Ficha técnica</p>
            <h2 style={{ marginBottom: 26 }}>Especificações</h2>
            <table className="spec">
              <tbody>
                {s.especificacoes.map((e) => (
                  <tr key={e.label}><th scope="row">{e.label}</th><td>{e.valor}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      {fotos.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div style={{ maxWidth: 640, marginBottom: 38 }}>
              <p className="eyebrow">Galeria</p>
              <h2>{s.nome} que instalamos em BH</h2>
            </div>
            <Gallery fotos={fotos} filtros={false} />
          </div>
        </section>
      )}

      <FAQ itens={s.faq} titulo={`Dúvidas sobre ${s.nome.toLowerCase()}`} />

      {/* OUTROS SERVIÇOS */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Também fazemos</p>
          <h2 style={{ marginBottom: 34 }}>Outros serviços</h2>
          <div className="grid g3">
            {outros.map((o) => (
              <Link key={o.slug} href={`/servicos/${o.slug}/`} className="card">
                <div className="card-body">
                  <div style={{ color: 'var(--accent)', marginBottom: 14 }}><ServiceIcon name={o.icone} size={30} /></div>
                  <h3 style={{ fontSize: '1.08rem' }}>{o.nome}</h3>
                  <p>{o.resumo}</p>
                  <span className="card-link">Ver mais <Arrow size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="section-tight tinted">
        <div className="wrap">
          <h2 style={{ fontSize: '1.3rem', marginBottom: 16 }}>{s.nome} nas cidades que atendemos</h2>
          <div className="tags">
            {AREAS.map((a) => <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`}>{s.navNome} em {a.nome}</Link>)}
          </div>
        </div>
      </section>

      <CTA msg={`Olá! Gostaria de um orçamento de ${s.nome.toLowerCase()}.`} />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: s.nome,
        serviceType: s.nome,
        description: s.description,
        url: `${SITE.url}/servicos/${s.slug}/`,
        provider: { '@id': `${SITE.url}/#business` },
        areaServed: AREAS.map((a) => ({ '@type': 'City', name: a.nome })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Modelos de ${s.nome}`,
          itemListElement: s.modelos.map((m) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: m.nome, description: m.texto } })),
        },
      }} />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: s.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }} />
    </>
  )
}
