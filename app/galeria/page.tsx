import type { Metadata } from 'next'
import { PHOTOS, CATEGORIAS, src, legenda } from '@/lib/photos'
import { SITE, socialMeta } from '@/lib/site'
import Portfolio from '@/components/portfolio/Portfolio'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { CloseCTA } from '@/components/Sections'

const TITLE = 'Obras de Corrimão e Guarda-Corpo em Inox'
const DESC = `${PHOTOS.length} fotos reais de corrimão, guarda-corpo de inox e de vidro, rampas e barras de apoio que a Alfa Inox fabricou e instalou em BH e região.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/galeria/' },
  ...socialMeta({ card: 'galeria', titulo: TITLE, descricao: DESC, url: '/galeria/' }),
}

export default function GaleriaPage() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Obras' }]} />
          <h1>Obras de corrimão e guarda-corpo em inox</h1>
          <p className="lede">
            {PHOTOS.length} fotos de obras que fabricamos e instalamos — escadas de casa, varandas, mezaninos, rampas,
            banheiros acessíveis, áreas de piscina e comércio na Grande BH. Toque numa foto para ampliar e filtre pelo
            tipo de serviço.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Portfolio />
        </div>
      </section>
      <CloseCTA
        titulo="Viu um modelo parecido com o que você quer?"
        texto="Mande o print da foto junto com fotos do seu local pelo WhatsApp. Fica muito mais fácil orçar."
        msg="Olá! Vi uma obra na galeria do site e quero algo parecido. Vou mandar o print e fotos do meu local."
      />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: TITLE,
        url: `${SITE.url}/galeria/`,
        about: CATEGORIAS.map((c) => c.nome),
        image: PHOTOS.map((p) => ({
          '@type': 'ImageObject',
          contentUrl: `${SITE.url}${src(p.slug, 1600)}`,
          caption: legenda(p),
          width: p.width,
          height: p.height,
          creditText: SITE.name,
          copyrightHolder: { '@id': `${SITE.url}/#business` },
        })),
      }} />
    </>
  )
}
