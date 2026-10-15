import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { findPhoto, PHOTOS } from '@/lib/photos'
import { SITE, socialMeta } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { Img, CloseCTA, ComoFunciona } from '@/components/Sections'
import { Arrow } from '@/components/Icons'

const TITLE = 'Serviços em Aço Inox em Belo Horizonte'
const DESC = 'Corrimão, guarda-corpo de inox e de vidro, acessibilidade NBR 9050, portões e gradis em aço inox sob medida. Fabricação própria e instalação em BH e região.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/servicos/' },
  ...socialMeta({ card: 'servicos', titulo: TITLE, descricao: DESC, url: '/servicos/' }),
}

export default function ServicosPage() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Serviços' }]} />
          <h1>Serviços em aço inox, sob medida</h1>
          <p className="lede">
            Tudo o que fabricamos sai da nossa oficina em Belo Horizonte, em aço inox AISI 304 ou 316, com solda TIG e
            acabamento escovado ou polido. Medimos no local, fabricamos e instalamos com a nossa equipe — uma única empresa
            responsável pelo resultado, da primeira foto no WhatsApp até a limpeza final.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rows">
            {SERVICOS.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="row">
                <Img photo={findPhoto(s.capa) ?? PHOTOS[0]} sizes="(min-width: 720px) 200px, 96px" alt="" />
                <div>
                  <h2 style={{ fontSize: 'clamp(1.15rem, 1.05rem + .4vw, 1.35rem)', marginBottom: 4 }}>{s.nome}</h2>
                  <p>{s.intro[0].split('. ')[0]}.</p>
                </div>
                <span className="go" aria-hidden="true"><Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section white">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="head" style={{ marginBottom: 0 }}><h2>Por que inox, e não ferro ou alumínio</h2></div>
          <div className="prose">
            <p>O ferro pintado custa menos no dia da compra, mas pede lixa e tinta de tempos em tempos e, em área externa, enferruja por dentro do tubo. O alumínio é leve, mas risca, amassa e não tem a rigidez de um tubo de inox com parede de 1,2 mm ou mais.</p>
            <p>O aço inox forma uma camada protetora de óxido de cromo que se regenera sozinha. Com limpeza simples, o corrimão e o guarda-corpo mantêm o acabamento por muitos anos. O cuidado está em usar a liga certa: 304 para a maioria dos casos e 316 perto de piscina e sauna.</p>
            <p>Também não sabe qual modelo escolher? Use o <Link href="/monte-seu-guarda-corpo/">configurador de guarda-corpo</Link> ou veja as <Link href="/galeria/">obras que já entregamos</Link>.</p>
          </div>
        </div>
      </section>
      <ComoFunciona />
      <CloseCTA />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Serviços da Alfa Inox',
        itemListElement: SERVICOS.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE.url}/servicos/${s.slug}/`, name: s.nome })),
      }} />
    </>
  )
}
