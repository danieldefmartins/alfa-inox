import type { Metadata } from 'next'
import Link from 'next/link'
import { AREAS } from '@/lib/areas'
import { findPhoto, PHOTOS } from '@/lib/photos'
import { SITE, socialMeta } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { Img, CloseCTA } from '@/components/Sections'
import { Arrow } from '@/components/Icons'

const TITLE = 'Onde Atendemos: Corrimão de Inox na Grande BH'
const DESC = 'A Alfa Inox atende Belo Horizonte, Nova Lima, Contagem, Betim, Sabará, Santa Luzia, Lagoa Santa e mais cidades da Grande BH. Medição no local e instalação.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/areas-atendidas/' },
  ...socialMeta({ card: 'areas-atendidas', titulo: TITLE, descricao: DESC, url: '/areas-atendidas/' }),
}

export default function AreasPage() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Onde atendemos' }]} />
          <h1>Onde atendemos na Grande BH</h1>
          <p className="lede">
            A oficina fica na Avenida Américo Vespúcio, no bairro Aparecida, em Belo Horizonte. Daqui saímos para medir e
            instalar na capital e em {AREAS.length - 1} cidades da região metropolitana. Cada cidade tem a sua página, com
            os pedidos mais comuns por lá e as regiões que cobrimos.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rows">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`} className="row">
                <Img photo={findPhoto(a.fotos[0]) ?? PHOTOS[0]} sizes="(min-width: 720px) 200px, 96px" />
                <div>
                  <h2 style={{ fontSize: 'clamp(1.15rem, 1.05rem + .4vw, 1.35rem)', marginBottom: 4 }}>Corrimão e guarda-corpo em {a.nome}</h2>
                  <p>{a.distancia ? `${a.distancia}. ` : ''}{a.pedidos.slice(0, 2).join(' · ')}</p>
                </div>
                <span className="go" aria-hidden="true"><Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CloseCTA titulo="Sua cidade não está na lista?" texto="Chame no WhatsApp. Se for perto da Grande BH, a gente avalia e responde na hora." />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Cidades atendidas pela Alfa Inox',
        itemListElement: AREAS.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE.url}/areas-atendidas/${a.slug}/`, name: a.nome })),
      }} />
    </>
  )
}
