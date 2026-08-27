import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AREAS, findArea } from '@/lib/areas'
import { SERVICOS } from '@/lib/servicos'
import { PHOTOS, src } from '@/lib/photos'
import { SITE, waLink, socialMeta } from '@/lib/site'
import Gallery from '@/components/Gallery'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Jsonld from '@/components/Jsonld'
import { ServiceIcon, Arrow, Check, WhatsAppIcon } from '@/components/Icons'

export const dynamicParams = false
export function generateStaticParams() {
  return AREAS.map((a) => ({ cidade: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ cidade: string }> }): Promise<Metadata> {
  const { cidade } = await params
  const a = findArea(cidade)
  if (!a) return {}
  const title = `Corrimão e Guarda-Corpo de Inox em ${a.nome}/MG`
  const description = `Fabricação e instalação de corrimão, guarda-corpo e acessibilidade em aço inox em ${a.nome}/MG. 15 anos de experiência, medição no local sem custo e orçamento sem compromisso.`
  return {
    title,
    description,
    alternates: { canonical: `/areas-atendidas/${a.slug}/` },
    ...socialMeta({
      card: `area-${a.slug}`,
      titulo: title,
      descricao: description,
      url: `/areas-atendidas/${a.slug}/`,
      tipo: 'article',
    }),
  }
}

export default async function CidadePage({ params }: { params: Promise<{ cidade: string }> }) {
  const { cidade } = await params
  const a = findArea(cidade)
  if (!a) notFound()

  const fotos = PHOTOS.slice(0, 9)
  const outras = AREAS.filter((x) => x.slug !== a.slug)

  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(44px, 6vw, 72px)' }}>
          <Crumbs itens={[{ nome: 'Onde atendemos', href: '/areas-atendidas/' }, { nome: a.nome }]} dark />
          <div style={{ maxWidth: 760, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Corrimão e guarda-corpo em aço inox em {a.nome}</h1>
            <p className="lede" style={{ marginTop: 20 }}>{a.descricao}</p>
            <p className="lede" style={{ marginTop: 14 }}>
              Somos uma fábrica, não uma revenda: a peça é cortada, soldada e polida na nossa
              oficina em Belo Horizonte e instalada pela nossa própria equipe em {a.nome}.
              {a.distancia ? ` A cidade fica a cerca de ${a.distancia.replace(' do centro de BH', '')} da nossa base, e a medição no local não tem custo.` : ' A medição no local não tem custo.'}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <a className="btn btn-wa" href={waLink(`Olá! Sou de ${a.nome} e gostaria de um orçamento de corrimão / guarda-corpo em inox.`)} target="_blank" rel="noopener">
                <WhatsAppIcon size={18} /> Orçamento para {a.nome}
              </a>
              <Link className="btn btn-ghost" href="/galeria/">Ver projetos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 660, marginBottom: 42 }}>
            <p className="eyebrow">Serviços em {a.nome}</p>
            <h2>O que executamos na cidade</h2>
          </div>
          <div className="grid g3">
            {SERVICOS.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="card">
                <div className="card-body">
                  <div style={{ color: 'var(--accent)', marginBottom: 14 }}><ServiceIcon name={s.icone} size={30} /></div>
                  <h3 style={{ fontSize: '1.06rem' }}>{s.nome} em {a.nome}</h3>
                  <p>{s.resumo}</p>
                  <span className="card-link">Ver detalhes <Arrow size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {a.bairros.length > 0 && (
        <section className="section-tight tinted">
          <div className="wrap">
            <p className="eyebrow">Cobertura local</p>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 20 }}>
              {a.tipo === 'capital' ? 'Bairros que atendemos em ' : 'Regiões atendidas em '}{a.nome}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
              {a.bairros.map((b) => (
                <span key={b} style={{ display: 'flex', gap: 9, alignItems: 'center', fontSize: '.95rem' }}>
                  <span style={{ color: 'var(--accent)', flex: 'none' }}><Check size={15} /></span>{b}
                </span>
              ))}
            </div>
            <p style={{ marginTop: 22, color: 'var(--steel)', fontSize: '.92rem' }}>
              Não encontrou seu bairro? Atendemos {a.nome} inteira — é só chamar no WhatsApp.
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 640, marginBottom: 38 }}>
            <p className="eyebrow">Projetos</p>
            <h2>Alguns trabalhos entregues na Grande BH</h2>
          </div>
          <Gallery fotos={fotos} filtros={false} />
          <div style={{ marginTop: 32 }}>
            <Link className="btn btn-ghost" href="/galeria/">Ver as {PHOTOS.length} fotos <Arrow size={15} /></Link>
          </div>
        </div>
      </section>

      <FAQ
        titulo={`Dúvidas sobre atendimento em ${a.nome}`}
        itens={[
          { q: `A Alfa Inox cobra taxa de deslocamento para ${a.nome}?`, a: `Não. A medição no local em ${a.nome} é gratuita, assim como em toda a nossa área de cobertura na região metropolitana de Belo Horizonte.` },
          { q: `Qual o prazo de entrega em ${a.nome}?`, a: 'Após a aprovação do orçamento e a medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis, conforme o tamanho do projeto.' },
          { q: `Vocês atendem condomínios e empresas em ${a.nome}?`, a: `Sim. Emitimos nota fiscal, faturamos para CNPJ e fornecemos orçamento formal por item — no formato que síndicos, construtoras e empresas de ${a.nome} precisam apresentar internamente.` },
          { q: 'Como peço o orçamento?', a: 'Mande fotos do lance pelo WhatsApp, com a medida aproximada em metros lineares. Devolvemos uma faixa de valor na hora e agendamos a medição para fechar o valor final.' },
        ]}
      />

      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ fontSize: '1.25rem', marginBottom: 16 }}>Também atendemos</h2>
          <div className="tags">
            {outras.map((o) => <Link key={o.slug} href={`/areas-atendidas/${o.slug}/`}>{o.nome}</Link>)}
          </div>
        </div>
      </section>

      <CTA
        titulo={`Peça seu orçamento em ${a.nome}`}
        msg={`Olá! Sou de ${a.nome} e gostaria de um orçamento em aço inox.`}
      />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `Corrimão e guarda-corpo em aço inox em ${a.nome}`,
        description: `Fabricação e instalação de corrimão, guarda-corpo, guarda-corpo de vidro e acessibilidade em aço inox em ${a.nome}/MG.`,
        url: `${SITE.url}/areas-atendidas/${a.slug}/`,
        provider: { '@id': `${SITE.url}/#business` },
        areaServed: { '@type': 'City', name: a.nome, containedInPlace: { '@type': 'State', name: 'Minas Gerais' } },
      }} />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          [`A Alfa Inox cobra taxa de deslocamento para ${a.nome}?`, `Não. A medição no local em ${a.nome} é gratuita, assim como em toda a área de cobertura na região metropolitana de Belo Horizonte.`],
          [`Qual o prazo de entrega em ${a.nome}?`, 'Após a aprovação do orçamento e a medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis.'],
          [`Vocês atendem condomínios e empresas em ${a.nome}?`, 'Sim. A Alfa Inox emite nota fiscal, fatura para CNPJ e fornece orçamento formal detalhado por item.'],
        ].map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } })),
      }} />
    </>
  )
}
