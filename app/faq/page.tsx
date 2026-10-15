import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, socialMeta } from '@/lib/site'
import { SERVICOS } from '@/lib/servicos'
import { FAQ_GERAL } from '@/lib/faq'
import Crumbs from '@/components/Crumbs'
import FAQ from '@/components/FAQ'
import Jsonld from '@/components/Jsonld'
import { CloseCTA } from '@/components/Sections'

const TITLE = 'Perguntas Frequentes sobre Corrimão e Guarda-Corpo'
const DESC = 'Preço, prazo, pagamento, altura pela norma, inox 304 ou 316, vidro laminado e cidades atendidas: as respostas da Alfa Inox, fabricante em Belo Horizonte.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/faq/' },
  ...socialMeta({ card: 'default', titulo: TITLE, descricao: DESC, url: '/faq/' }),
}

export default function FaqPage() {
  const porServico = SERVICOS.flatMap((s) => s.faq.slice(0, 2))
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Perguntas frequentes' }]} />
          <h1>Perguntas frequentes</h1>
          <p className="lede">
            As dúvidas que mais chegam pelo WhatsApp {SITE.whatsappDisplay}, respondidas direto. Não achou a sua? Mande
            a pergunta junto com uma foto do local, ou veja os detalhes de cada <Link href="/servicos/">serviço</Link>.
          </p>
        </div>
      </section>
      <FAQ itens={FAQ_GERAL} titulo="Orçamento, prazo e pagamento" white schema={false} />
      <FAQ itens={porServico} titulo="Sobre os serviços" schema={false} />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [...FAQ_GERAL, ...porServico].map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }} />
      <CloseCTA />
    </>
  )
}
