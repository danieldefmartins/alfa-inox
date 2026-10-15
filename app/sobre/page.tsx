import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, fullAddress, socialMeta } from '@/lib/site'
import { findPhoto } from '@/lib/photos'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { Img, CloseCTA, Fatos, ComoFunciona } from '@/components/Sections'

const TITLE = 'A Empresa: Alfa Inox, Fábrica de Inox em BH'
const DESC = 'A Alfa Inox fabrica corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte desde 2010, com oficina própria no Aparecida e equipe de instalação.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/sobre/' },
  ...socialMeta({ card: 'sobre', titulo: TITLE, descricao: DESC, url: '/sobre/' }),
}

export default function SobrePage() {
  const capa = findPhoto('guarda-corpo-inox-escada-moderna')!
  const oficina = findPhoto('corrimao-parede-inox-escada-caracol')!
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'A empresa' }]} />
          <div className="split">
            <div>
              <h1>Uma oficina de inox em Belo Horizonte, desde {SITE.foundedYear}</h1>
              <p className="lede" style={{ marginTop: 24 }}>
                A Alfa Inox fabrica e instala corrimão, guarda-corpo, guarda-corpo de vidro, barras de acessibilidade,
                portões e gradis em aço inox. A oficina fica na {SITE.address.street}, no bairro {SITE.address.district},
                e é de lá que sai cada peça, cortada e soldada para a medida de um local específico.
              </p>
            </div>
            <div className="split-photo"><Img photo={capa} priority sizes="(min-width: 960px) 46vw, 100vw" /></div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="head" style={{ marginBottom: 0 }}>
            <h2>O que fazemos de um jeito diferente</h2>
            <p className="lede">Não vendemos tubo por metro nem kit pronto. Vendemos a peça certa para aquele lance, instalada.</p>
          </div>
          <Fatos one />
        </div>
      </section>

      <section className="section">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <Img photo={oficina} sizes="(min-width: 900px) 45vw, 100vw" style={{ width: '100%', borderRadius: 'var(--r-lg)', aspectRatio: '4 / 3', objectFit: 'cover' }} />
          <div className="prose">
            <h2>Fábrica, não revenda</h2>
            <p>Corte, calandragem, solda TIG, esmerilho e polimento acontecem na nossa oficina. Isso permite curvar um tubo para acompanhar uma escada em curva, ajustar o passo dos prumos a um lance irregular e refazer uma peça quando a medida do vão muda em obra.</p>
            <p>Trabalhamos com aço inox <strong>AISI 304</strong> como padrão e <strong>AISI 316</strong> para piscina, sauna e ambientes agressivos, com acabamento escovado ou polido espelhado.</p>
            <p>Atendemos casas, condomínios, construtoras, clínicas, academias e comércios em Belo Horizonte e na região metropolitana. Veja as <Link href="/galeria/">obras que já entregamos</Link> e as <Link href="/areas-atendidas/">cidades onde atendemos</Link>.</p>
            <p className="muted">{fullAddress} · {SITE.hours}</p>
          </div>
        </div>
      </section>

      <ComoFunciona white />
      <CloseCTA titulo="Vamos conversar sobre o seu projeto" />
      <Jsonld data={{ '@context': 'https://schema.org', '@type': 'AboutPage', name: TITLE, url: `${SITE.url}/sobre/`, mainEntity: { '@id': `${SITE.url}/#business` } }} />
    </>
  )
}
