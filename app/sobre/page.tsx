import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, fullAddress } from '@/lib/site'
import { PHOTOS, findPhoto, src } from '@/lib/photos'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import Crumbs from '@/components/Crumbs'
import CTA from '@/components/CTA'
import Jsonld from '@/components/Jsonld'
import { Check, Arrow } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'A Empresa | 15 Anos de Aço Inox em Belo Horizonte',
  description:
    'Conheça a Alfa Inox: 15 anos fabricando corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte. Oficina própria, equipe própria e centenas de obras entregues.',
  alternates: { canonical: '/sobre/' },
}

const VALORES = [
  { t: 'A liga vai escrita', d: 'Toda proposta traz liga, diâmetro e espessura de parede. É o que separa uma peça de inox 304 com 1,2 mm de um tubo 430 de parede fina vendido pelo mesmo nome.' },
  { t: 'Quem fabrica, instala', d: 'Não terceirizamos a instalação. A etapa em que a maioria dos problemas nasce fica com quem fez a peça e conhece a medida.' },
  { t: 'Norma antes de estética', d: 'Se o modelo escolhido não atende à altura ou ao espaçamento exigidos para o caso, avisamos antes de fechar — mesmo quando isso significa uma venda menor.' },
  { t: 'Prazo que é cumprido', d: 'Fabricação própria significa fila própria. O prazo que damos é o prazo da nossa oficina, não o de um fornecedor.' },
]

export default function SobrePage() {
  const capa = findPhoto('guarda-corpo-inox-escada-moderna') ?? PHOTOS[0]
  const oficina = findPhoto('corrimao-inox-rampa-acessibilidade-duplo')

  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(48px, 7vw, 80px)' }}>
          <Crumbs itens={[{ nome: 'A empresa' }]} dark />
          <div style={{ maxWidth: 760, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Quinze anos de aço inox em Belo Horizonte</h1>
            <p className="lede" style={{ marginTop: 22 }}>
              A Alfa Inox nasceu em {SITE.foundedYear}, em Belo Horizonte, com uma oficina, um
              torno e a percepção de que o mercado de corrimão vendia metro de tubo em vez de
              vender projeto. Quinze anos depois, continuamos fabricando cada peça sob medida —
              e ainda é a medição no local que define o que sai da bancada.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(24px, 5vw, 56px)', flexWrap: 'wrap', marginTop: 44 }}>
            {[
              { n: `${SITE.yearsInBusiness}`, l: 'anos de mercado' },
              { n: '500+', l: 'obras entregues' },
              { n: `${AREAS.length}`, l: 'cidades atendidas' },
              { n: `${SERVICOS.length}`, l: 'linhas de produto' },
            ].map((s) => (
              <div key={s.l}>
                <div className="stat-n metal-text">{s.n}</div>
                <div style={{ fontSize: '.85rem', color: 'var(--steel-2)', marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Nossa história</p>
            <h2>De uma oficina no Aparecida para toda a Grande BH</h2>
            <p style={{ marginTop: 20, color: '#4a5566' }}>
              Começamos atendendo escadas residenciais no entorno do bairro Aparecida. O boca a
              boca levou aos condomínios, e os condomínios levaram às construtoras — que
              trouxeram a exigência de orçamento formal, quantitativo por item e execução
              programada sem interditar a circulação do prédio.
            </p>
            <p style={{ color: '#4a5566' }}>
              Hoje atendemos {AREAS.length} cidades da região metropolitana, com uma equipe que
              faz medição, fabricação e instalação. A oficina segue no mesmo lugar, na
              Avenida Américo Vespúcio.
            </p>
            <p style={{ color: '#4a5566' }}>
              O que não mudou em quinze anos foi o que dá errado no mercado: peça comprada por
              metro, cortada na obra e chumbada sem projeto. Boa parte do nosso trabalho de
              manutenção é justamente substituir esse tipo de instalação.
            </p>
            <div style={{ marginTop: 26 }}>
              <Link className="btn btn-primary" href="/galeria/">Ver projetos executados <Arrow size={15} /></Link>
            </div>
          </div>
          <img src={src(capa.slug, 1600)} alt={capa.alt} width={capa.width} height={capa.height} loading="lazy"
            style={{ width: '100%', borderRadius: 'var(--r-lg)', aspectRatio: '4/5', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }} />
        </div>
      </section>

      <section className="section tinted">
        <div className="wrap">
          <div style={{ maxWidth: 640, marginBottom: 42 }}>
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Quatro coisas em que não abrimos mão</h2>
          </div>
          <div className="grid g2">
            {VALORES.map((v) => (
              <div key={v.t} style={{ display: 'flex', gap: 15 }}>
                <span style={{ color: 'var(--accent)', flex: 'none', marginTop: 4 }}><Check size={20} /></span>
                <div>
                  <h3 style={{ fontSize: '1.08rem', marginBottom: 7 }}>{v.t}</h3>
                  <p style={{ margin: 0, color: '#4a5566', fontSize: '.96rem' }}>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
          {oficina && (
            <img src={src(oficina.slug, 1600)} alt={oficina.alt} width={oficina.width} height={oficina.height} loading="lazy"
              style={{ width: '100%', borderRadius: 'var(--r-lg)', aspectRatio: '4/3', objectFit: 'cover' }} />
          )}
          <div>
            <p className="eyebrow">Estrutura</p>
            <h2>Fábrica, não revenda</h2>
            <p style={{ marginTop: 20, color: '#4a5566' }}>
              Corte, calandragem, solda TIG, esmerilho e polimento acontecem na nossa oficina.
              Isso significa que conseguimos calandrar uma curva para acompanhar um caminho de
              jardim, ajustar o passo dos prumos para um lance irregular e refazer uma peça no
              mesmo dia quando a medida do vão muda em obra.
            </p>
            <p style={{ color: '#4a5566' }}>
              Trabalhamos com aço inox <strong>AISI 304</strong> como padrão e <strong>AISI 316</strong> para
              piscina, sauna e ambientes agressivos — com acabamento escovado ou polido espelhado,
              conforme o projeto.
            </p>
            <div style={{ marginTop: 24, padding: 22, background: 'var(--paper-2)', borderRadius: 'var(--r-lg)', fontSize: '.94rem' }}>
              <strong style={{ display: 'block', marginBottom: 6 }}>Onde estamos</strong>
              <span style={{ color: '#4a5566' }}>{fullAddress} · {SITE.hours}</span>
            </div>
          </div>
        </div>
      </section>

      <CTA titulo="Vamos conversar sobre o seu projeto" />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'A empresa',
        url: `${SITE.url}/sobre/`,
        mainEntity: { '@id': `${SITE.url}/#business` },
      }} />
    </>
  )
}
