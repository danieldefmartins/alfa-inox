import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AREAS, findArea } from '@/lib/areas'
import { SERVICOS } from '@/lib/servicos'
import { PHOTOS, findPhoto } from '@/lib/photos'
import { SITE, waLink, socialMeta } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import FAQ from '@/components/FAQ'
import Jsonld from '@/components/Jsonld'
import Portfolio from '@/components/portfolio/Portfolio'
import { Img, CloseCTA, ComoFunciona } from '@/components/Sections'
import { Arrow, Check, WhatsAppIcon } from '@/components/Icons'

export const dynamicParams = false
export function generateStaticParams() {
  return AREAS.map((a) => ({ cidade: a.slug }))
}

const titleOf = (nome: string) => (nome.length > 14 ? `Corrimão e Guarda-Corpo Inox em ${nome}` : `Corrimão e Guarda-Corpo de Inox em ${nome}`)
const descOf = (nome: string) =>
  `Corrimão, guarda-corpo de inox e de vidro e acessibilidade em ${nome}/MG. Medimos no local, fabricamos em BH e instalamos. Peça no WhatsApp.`

export async function generateMetadata({ params }: { params: Promise<{ cidade: string }> }): Promise<Metadata> {
  const a = findArea((await params).cidade)
  if (!a) return {}
  return {
    title: titleOf(a.nome),
    description: descOf(a.nome),
    alternates: { canonical: `/areas-atendidas/${a.slug}/` },
    ...socialMeta({ card: `area-${a.slug}`, titulo: titleOf(a.nome), descricao: descOf(a.nome), url: `/areas-atendidas/${a.slug}/`, tipo: 'article' }),
  }
}

export default async function CidadePage({ params }: { params: Promise<{ cidade: string }> }) {
  const a = findArea((await params).cidade)
  if (!a) notFound()
  const fotos = a.fotos.map((s) => findPhoto(s)).filter((p): p is NonNullable<typeof p> => !!p)
  const capa = fotos[0] ?? PHOTOS[0]
  const outras = AREAS.filter((x) => x.slug !== a.slug)
  const msg = `Olá! Sou de ${a.nome} e gostaria de um orçamento em aço inox.`
  const faq = [
    ...a.faq,
    { q: `Como funciona o orçamento em ${a.nome}?`, a: `Você manda fotos e a medida aproximada pelo WhatsApp ${SITE.whatsappDisplay}. Respondemos com uma estimativa e agendamos a medição em ${a.nome} para fechar a proposta.` },
    { q: `Qual o prazo para instalar em ${a.nome}?`, a: 'Depois da aprovação e da medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis, conforme o tamanho do projeto.' },
  ]

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Onde atendemos', href: '/areas-atendidas/' }, { nome: a.nome }]} />
          <div className="split">
            <div>
              <h1>Corrimão e guarda-corpo de inox em {a.nome}</h1>
              <p className="lede" style={{ marginTop: 24 }}>{a.descricao}</p>
              <div className="phead-ctas">
                <a className="btn btn-cta btn-lg" href={waLink(msg)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Orçamento em {a.nome}</a>
                <Link className="btn btn-line btn-lg" href="/galeria/">Ver obras</Link>
              </div>
              {a.distancia && <p className="muted small" style={{ marginTop: 20 }}>{a.nome} fica a cerca de {a.distancia} — saímos da nossa oficina no bairro Aparecida.</p>}
            </div>
            <div className="split-photo"><Img photo={capa} priority sizes="(min-width: 960px) 46vw, 100vw" /></div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="wrap two wide-left" style={{ alignItems: 'start' }}>
          <div className="prose">
            <h2>Como são os pedidos em {a.nome}</h2>
            {a.contexto.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 14 }}>O que mais pedem</h2>
            <ul className="checks">{a.pedidos.map((x) => <li key={x}><Check size={16} />{x}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head"><h2>Serviços em {a.nome}</h2></div>
          <div className="rows">
            {SERVICOS.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="row">
                <Img photo={findPhoto(s.capa) ?? PHOTOS[0]} sizes="(min-width: 720px) 200px, 96px" />
                <div><h3>{s.navNome} em {a.nome}</h3><p>{s.resumo}</p></div>
                <span className="go" aria-hidden="true"><Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="wrap">
          <div className="head">
            <h2>Algumas obras da Alfa Inox na Grande BH</h2>
            <p className="lede">Fotos reais de obras que fabricamos e instalamos na região metropolitana.</p>
          </div>
          <Portfolio fotos={fotos} filtros={false} compact />
        </div>
      </section>

      {a.bairros.length > 0 && (
        <section className="section">
          <div className="wrap two" style={{ alignItems: 'start' }}>
            <div className="head" style={{ marginBottom: 0 }}>
              <h2>{a.tipo === 'capital' ? 'Bairros que atendemos' : `Regiões atendidas em ${a.nome}`}</h2>
              <p className="lede">Não achou o seu? Atendemos a cidade inteira — é só chamar no WhatsApp.</p>
            </div>
            <div className="chips">{a.bairros.map((b) => <span key={b}>{b}</span>)}</div>
          </div>
        </section>
      )}

      <ComoFunciona white />

      <FAQ titulo={`Dúvidas sobre o atendimento em ${a.nome}`} itens={faq} />

      <section className="section white">
        <div className="wrap">
          <h2 style={{ fontSize: '1.4rem', marginBottom: 16 }}>Também atendemos</h2>
          <div className="chips">{outras.map((o) => <Link key={o.slug} href={`/areas-atendidas/${o.slug}/`}>{o.nome}</Link>)}</div>
        </div>
      </section>

      <CloseCTA titulo={`Orçamento em ${a.nome}, direto pelo WhatsApp`} msg={msg} />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Corrimão e guarda-corpo de inox em ${a.nome}`,
        serviceType: 'Corrimão e guarda-corpo em aço inox',
        description: a.descricao,
        url: `${SITE.url}/areas-atendidas/${a.slug}/`,
        provider: { '@id': `${SITE.url}/#business` },
        areaServed: { '@type': 'City', name: a.nome, containedInPlace: { '@type': 'State', name: 'Minas Gerais' } },
      }} />
    </>
  )
}
