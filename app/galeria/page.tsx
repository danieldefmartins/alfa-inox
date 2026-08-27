import type { Metadata } from 'next'
import { PHOTOS, CATEGORIAS, src } from '@/lib/photos'
import { SITE } from '@/lib/site'
import Gallery from '@/components/Gallery'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'
import Jsonld from '@/components/Jsonld'

export const metadata: Metadata = {
  title: 'Galeria de Projetos em Aço Inox',
  description:
    'Fotos reais de corrimão, guarda-corpo, guarda-corpo de vidro e acessibilidade em aço inox executados pela Alfa Inox em Belo Horizonte e região metropolitana.',
  alternates: { canonical: '/galeria/' },
  openGraph: { images: [{ url: src(PHOTOS[0].slug, 1600), alt: PHOTOS[0].alt }] },
}

export default function GaleriaPage() {
  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(44px, 6vw, 68px)' }}>
          <Crumbs itens={[{ nome: 'Galeria' }]} dark />
          <div style={{ maxWidth: 720, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Galeria de projetos</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              {PHOTOS.length} fotos de obras que fabricamos e instalamos — escadas residenciais,
              sacadas, mezaninos, rampas de acessibilidade, áreas de piscina e projetos comerciais
              em Belo Horizonte e região. Sem render, sem banco de imagens.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Gallery fotos={PHOTOS} />
        </div>
      </section>

      <CTA
        titulo="Viu um modelo parecido com o que você precisa?"
        texto="Mande a foto do projeto que você gostou junto com fotos do seu lance. Fica muito mais fácil orçar — e você recebe uma estimativa na hora."
      />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'Galeria de projetos em aço inox',
        url: `${SITE.url}/galeria/`,
        about: CATEGORIAS.map((c) => c.nome),
        image: PHOTOS.map((p) => ({
          '@type': 'ImageObject',
          contentUrl: `${SITE.url}${src(p.slug, 1600)}`,
          caption: p.alt,
          width: p.width,
          height: p.height,
          creditText: SITE.name,
        })),
      }} />
    </>
  )
}
