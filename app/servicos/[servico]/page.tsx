import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICOS, findServico } from '@/lib/servicos'
import { byCategory, findPhoto, PHOTOS } from '@/lib/photos'
import { SITE, waLink, socialMeta } from '@/lib/site'
import { AREAS } from '@/lib/areas'
import { POSTS } from '@/lib/blog'
import Portfolio from '@/components/portfolio/Portfolio'
import FAQ from '@/components/FAQ'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import OrcamentoForm from '@/components/OrcamentoForm'
import { Img, CloseCTA, ComoFunciona } from '@/components/Sections'
import { Arrow, Check, WhatsAppIcon } from '@/components/Icons'

export const dynamicParams = false
export function generateStaticParams() {
  return SERVICOS.map((s) => ({ servico: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ servico: string }> }): Promise<Metadata> {
  const s = findServico((await params).servico)
  if (!s) return {}
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/servicos/${s.slug}/` },
    ...socialMeta({ card: `servico-${s.slug}`, titulo: s.title, descricao: s.description, url: `/servicos/${s.slug}/`, tipo: 'article' }),
  }
}

const RELACIONADOS: Record<string, string[]> = {
  'corrimao-inox': ['quanto-custa-corrimao-de-inox', 'inox-304-ou-316', 'como-limpar-corrimao-de-inox'],
  'guarda-corpo-inox': ['altura-guarda-corpo-nbr-14718', 'guarda-corpo-vidro-ou-inox', 'inox-304-ou-316'],
  'guarda-corpo-de-vidro': ['guarda-corpo-vidro-ou-inox', 'altura-guarda-corpo-nbr-14718'],
  'acessibilidade-nbr-9050': ['corrimao-nbr-9050-acessibilidade', 'altura-guarda-corpo-nbr-14718'],
  'portoes-e-gradis-inox': ['inox-304-ou-316', 'como-limpar-corrimao-de-inox'],
  'condominios-e-empresas': ['corrimao-nbr-9050-acessibilidade', 'altura-guarda-corpo-nbr-14718'],
}

export default async function ServicoPage({ params }: { params: Promise<{ servico: string }> }) {
  const s = findServico((await params).servico)
  if (!s) notFound()
  const capa = findPhoto(s.capa) ?? PHOTOS[0]
  const fotos = byCategory(s.categoriaFotos).filter((p) => p.slug !== capa.slug)
  const outros = SERVICOS.filter((x) => x.slug !== s.slug)
  const posts = (RELACIONADOS[s.slug] ?? []).map((slug) => POSTS.find((p) => p.slug === slug)).filter(Boolean)
  const msg = `Olá! Gostaria de um orçamento de ${s.nome.toLowerCase()}.`

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Serviços', href: '/servicos/' }, { nome: s.nome }]} />
          <div className="split">
            <div>
              <h1>{s.h1}</h1>
              {s.intro.map((p, i) => <p key={i} className="lede" style={{ marginTop: i ? 14 : 24 }}>{p}</p>)}
              <div className="phead-ctas">
                <a className="btn btn-cta btn-lg" href={waLink(msg)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Pedir orçamento</a>
                <a className="btn btn-line btn-lg" href="#obras">Ver obras</a>
              </div>
            </div>
            <div className="split-photo">
              <Img photo={capa} priority sizes="(min-width: 960px) 46vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="head" style={{ marginBottom: 0 }}>
            <h2>Para quem é</h2>
          </div>
          <div className="prose">{s.paraQuem.map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head"><h2>Modelos que fabricamos</h2></div>
          <div className="models">
            {s.modelos.map((m) => <div key={m.nome}><h3>{m.nome}</h3><p>{m.texto}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="wrap two wide-left" style={{ alignItems: 'start' }}>
          <div className="prose">
            {s.blocos.map((b) => (
              <div key={b.h}>
                <h2>{b.h}</h2>
                <p className="answer">{b.resposta}</p>
                {b.p?.map((x, i) => <p key={i}>{x}</p>)}
              </div>
            ))}
            <h2>O que muda o preço</h2>
            <ul>{s.precoFatores.map((x) => <li key={x}>{x}</li>)}</ul>
            <p>Para receber uma estimativa, mande fotos e a medida aproximada pelo <a href={waLink(msg)} target="_blank" rel="noopener">WhatsApp</a>. O valor fechado sai depois da medição.</p>
          </div>
          <aside>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 12 }}>Ficha técnica</h2>
            <table className="spec"><tbody>{s.especificacoes.map((e) => <tr key={e.label}><th scope="row">{e.label}</th><td>{e.valor}</td></tr>)}</tbody></table>
            <h2 style={{ fontSize: '1.4rem', margin: '36px 0 14px' }}>Onde usamos</h2>
            <ul className="checks">{s.aplicacoes.map((a) => <li key={a}><Check size={16} />{a}</li>)}</ul>
          </aside>
        </div>
      </section>

      {fotos.length > 0 && (
        <section className="section" id="obras">
          <div className="wrap">
            <div className="head-row">
              <div className="head"><h2>{s.nome}: obras que entregamos</h2></div>
              <Link className="link-arrow" href="/galeria/">Ver a galeria completa <Arrow /></Link>
            </div>
            <Portfolio fotos={fotos} filtros={false} limite={9} compact />
          </div>
        </section>
      )}

      <ComoFunciona white />

      <section className="section" id="orcamento">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="head">
            <h2>Peça o orçamento de {s.navNome.toLowerCase()}</h2>
            <p className="lede">Preencha em um minuto ou chame direto no WhatsApp com fotos do local.</p>
            <p className="muted">Atendemos {AREAS.map((a) => a.nome).slice(0, -1).join(', ')} e {AREAS[AREAS.length - 1].nome}.</p>
          </div>
          <OrcamentoForm servicoInicial={s.navNome} />
        </div>
      </section>

      <FAQ itens={s.faq} titulo={`Dúvidas sobre ${s.navNome.toLowerCase()}`} white />

      <section className="section">
        <div className="wrap">
          <div className="head"><h2>{s.navNome} nas cidades que atendemos</h2></div>
          <div className="chips">
            {AREAS.map((a) => <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`}>{s.navNome} em {a.nome}</Link>)}
          </div>
          {posts.length > 0 && (
            <>
              <h2 style={{ fontSize: '1.4rem', margin: '48px 0 8px' }}>Leia antes de contratar</h2>
              <div className="post-list">
                {posts.map((p) => p && (
                  <Link key={p.slug} href={`/blog/${p.slug}/`}>
                    <Img photo={findPhoto(p.foto) ?? PHOTOS[0]} sizes="(min-width: 760px) 240px, 100vw" />
                    <div><h3>{p.h1}</h3><p>{p.resumo}</p></div>
                  </Link>
                ))}
              </div>
            </>
          )}
          <h2 style={{ fontSize: '1.4rem', margin: '48px 0 16px' }}>Outros serviços</h2>
          <div className="chips">{outros.map((o) => <Link key={o.slug} href={`/servicos/${o.slug}/`}>{o.nome}</Link>)}</div>
        </div>
      </section>

      <CloseCTA msg={msg} />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE.url}/servicos/${s.slug}/#service`,
        name: s.nome,
        serviceType: s.keyword,
        description: s.intro[0],
        url: `${SITE.url}/servicos/${s.slug}/`,
        image: `${SITE.url}/fotos/${capa.slug}-1600.webp`,
        provider: { '@id': `${SITE.url}/#business` },
        areaServed: AREAS.map((a) => ({ '@type': 'City', name: a.nome })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Modelos de ${s.nome}`,
          itemListElement: s.modelos.map((m) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: m.nome, description: m.texto } })),
        },
      }} />
    </>
  )
}
