import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, socialMeta } from '@/lib/site'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import FAQ from '@/components/FAQ'
import Configurador from '@/components/configurador/Configurador'
import { CloseCTA } from '@/components/Sections'

const TITLE = 'Monte seu Guarda-Corpo de Inox ou Vidro'
const DESC = 'Escolha modelo, acabamento e onde vai o seu guarda-corpo de inox ou vidro e veja o desenho com a altura da norma. Depois mande o pedido pronto no WhatsApp.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/monte-seu-guarda-corpo/' },
  ...socialMeta({ card: 'default', titulo: TITLE, descricao: DESC, url: '/monte-seu-guarda-corpo/' }),
}

const DUVIDAS = [
  { q: 'O configurador mostra o preço?', a: 'Não. O preço depende da medição do local, do tipo de fixação e dos detalhes da escada ou da laje. O configurador organiza o seu pedido; a estimativa vem pelo WhatsApp e a proposta fechada sai depois da medição.' },
  { q: 'Por que a altura muda quando escolho escada?', a: 'Em sacada, varanda, mezanino e piscina a NBR 14718 pede no mínimo 1,10 m. Na escada, o tubo superior trabalha como corrimão e fica a 92 cm da quina do degrau.' },
  { q: 'Por que o configurador sugere inox 316 na piscina?', a: 'O 316 tem molibdênio na liga e resiste melhor ao cloro. Perto da água tratada, o 304 pode manchar com o tempo.' },
  { q: 'E se eu não souber a metragem?', a: 'Use um número aproximado. Medimos no local antes de fabricar, então a metragem do configurador serve só para a primeira estimativa.' },
]

export default function MontePage() {
  return (
    <>
      <section className="phead" style={{ paddingBottom: 32 }}>
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Monte seu guarda-corpo' }]} />
          <h1>Monte seu guarda-corpo</h1>
          <p className="lede">
            Escolha o modelo, o acabamento e onde ele vai ficar. O desenho atualiza na hora, com a altura que a norma pede
            e a liga que indicamos. Quando estiver do seu jeito, mande o pedido pronto no WhatsApp ou leve para o{' '}
            <Link href="/orcamento/">pedido de orçamento</Link>.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Configurador />
        </div>
      </section>
      <FAQ itens={DUVIDAS} titulo="Como o configurador funciona" white />
      <CloseCTA titulo="Prefere conversar antes de escolher?" texto="Mande fotos do local pelo WhatsApp. A gente indica o modelo que faz sentido para a sua escada ou varanda." />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Monte seu guarda-corpo — Alfa Inox',
        url: `${SITE.url}/monte-seu-guarda-corpo/`,
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web',
        inLanguage: 'pt-BR',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
        provider: { '@id': `${SITE.url}/#business` },
      }} />
    </>
  )
}
