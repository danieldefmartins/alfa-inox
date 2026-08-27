import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { byCategory, src } from '@/lib/photos'
import { SITE } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'
import Jsonld from '@/components/Jsonld'
import { ServiceIcon, Arrow } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Serviços em Aço Inox em Belo Horizonte',
  description:
    'Corrimão, guarda-corpo, guarda-corpo de vidro, acessibilidade NBR 9050, portões e gradis em aço inox. Fabricação própria e instalação em BH e região metropolitana.',
  alternates: { canonical: '/servicos/' },
}

export default function ServicosPage() {
  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(48px, 7vw, 76px)' }}>
          <Crumbs itens={[{ nome: 'Serviços' }]} dark />
          <div style={{ maxWidth: 720, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Serviços em aço inox</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              Tudo o que fabricamos é sob medida, em aço inox AISI 304 ou 316, com solda TIG e
              acabamento escovado ou polido. Da medição no local à instalação, com uma única
              empresa responsável pelo resultado.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid g2">
          {SERVICOS.map((s) => {
            const foto = byCategory(s.categoriaFotos)[0]
            return (
              <Link key={s.slug} href={`/servicos/${s.slug}/`} className="card">
                {foto && <img className="card-img" src={src(foto.slug, 800)} alt={foto.alt} width={foto.width} height={foto.height} loading="lazy" style={{ backgroundImage: `url(${foto.lqip})`, backgroundSize: 'cover' }} />}
                <div className="card-body">
                  <div style={{ color: 'var(--accent)', marginBottom: 12 }}><ServiceIcon name={s.icone} size={28} /></div>
                  <h2 style={{ fontSize: '1.3rem', marginBottom: 10 }}>{s.nome}</h2>
                  <p>{s.resumo}</p>
                  <span className="card-link">Ver detalhes e ficha técnica <Arrow size={15} /></span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <CTA />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Serviços em aço inox',
        itemListElement: SERVICOS.map((s, i) => ({
          '@type': 'ListItem', position: i + 1, name: s.nome, url: `${SITE.url}/servicos/${s.slug}/`,
        })),
      }} />
    </>
  )
}
