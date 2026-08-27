import type { Metadata } from 'next'
import Link from 'next/link'
import { AREAS } from '@/lib/areas'
import { SERVICOS } from '@/lib/servicos'
import { SITE } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'
import Jsonld from '@/components/Jsonld'
import { Arrow, Pin } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Onde Atendemos | Corrimão e Guarda-Corpo em Inox na Grande BH',
  description:
    'A Alfa Inox atende Belo Horizonte, Nova Lima, Contagem, Betim, Sabará, Santa Luzia, Lagoa Santa e toda a região metropolitana. Medição no local sem custo.',
  alternates: { canonical: '/areas-atendidas/' },
}

export default function AreasPage() {
  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(44px, 6vw, 68px)' }}>
          <Crumbs itens={[{ nome: 'Onde atendemos' }]} dark />
          <div style={{ maxWidth: 720, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Onde a Alfa Inox atende</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              Nossa oficina fica na Avenida Américo Vespúcio, no bairro Aparecida, em Belo
              Horizonte. A partir dela atendemos a capital e {AREAS.length - 1} cidades da região
              metropolitana — com medição no local sem custo em todas elas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid g3">
          {AREAS.map((a) => (
            <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`} className="card">
              <div className="card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)', marginBottom: 10 }}>
                  <Pin size={16} />
                  <span style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    {a.tipo === 'capital' ? 'Capital' : a.distancia}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.25rem', marginBottom: 10 }}>{a.nome}</h2>
                <p>{a.descricao}</p>
                <span className="card-link">Ver atendimento em {a.nome} <Arrow size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-tight tinted">
        <div className="wrap">
          <h2 style={{ fontSize: '1.3rem', marginBottom: 16 }}>Serviços disponíveis em toda a área de cobertura</h2>
          <div className="tags">
            {SERVICOS.map((s) => <Link key={s.slug} href={`/servicos/${s.slug}/`}>{s.nome}</Link>)}
          </div>
        </div>
      </section>

      <CTA />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Cidades atendidas pela Alfa Inox',
        itemListElement: AREAS.map((a, i) => ({
          '@type': 'ListItem', position: i + 1, name: a.nome, url: `${SITE.url}/areas-atendidas/${a.slug}/`,
        })),
      }} />
    </>
  )
}
