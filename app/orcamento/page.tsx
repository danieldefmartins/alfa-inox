import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, waLink, WA_DEFAULT, telHref, fullAddress, socialMeta } from '@/lib/site'
import OrcamentoForm from '@/components/OrcamentoForm'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { ComoFunciona } from '@/components/Sections'
import { WhatsAppIcon, Phone, Pin, Clock, Mail } from '@/components/Icons'

const TITLE = 'Orçamento de Corrimão e Guarda-Corpo em Inox'
const DESC = 'Peça o orçamento de corrimão, guarda-corpo ou acessibilidade em inox em BH e região. Mande fotos pelo WhatsApp ou preencha o pedido. Sem compromisso.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/orcamento/' },
  ...socialMeta({ card: 'orcamento', titulo: TITLE, descricao: DESC, url: '/orcamento/' }),
}

export default function OrcamentoPage() {
  return (
    <>
      <section className="phead" style={{ paddingBottom: 32 }}>
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Orçamento' }]} />
          <h1>Peça seu orçamento</h1>
          <p className="lede">
            O caminho mais rápido é o WhatsApp, porque você já manda as fotos do local. Se preferir, preencha o pedido
            abaixo. Quer escolher o modelo antes? Use o <Link href="/monte-seu-guarda-corpo/">configurador</Link>.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap two wide-left" style={{ alignItems: 'start' }}>
          <OrcamentoForm />
          <aside style={{ display: 'grid', gap: 20 }}>
            <div className="form-card">
              <h2 style={{ fontSize: '1.3rem', marginBottom: 14 }}>Prefere falar direto?</h2>
              <div style={{ display: 'grid', gap: 10 }}>
                <a className="btn btn-cta btn-lg" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> WhatsApp {SITE.whatsappDisplay}</a>
                <a className="btn btn-line btn-lg" href={telHref}><Phone size={18} /> {SITE.phoneDisplay}</a>
              </div>
              <ul className="checks" style={{ marginTop: 20, fontSize: '.94rem' }}>
                <li><Mail size={16} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li><Clock size={16} />{SITE.hours}</li>
                <li><Pin size={16} />{fullAddress}</li>
              </ul>
            </div>
            <div className="form-card">
              <h2 style={{ fontSize: '1.3rem', marginBottom: 10 }}>O que ajuda a orçar rápido</h2>
              <ul className="checks" style={{ fontSize: '.94rem' }}>
                <li>Fotos do local de frente e de lado</li>
                <li>Medida aproximada em metros lineares</li>
                <li>Quantos lances, curvas e patamares</li>
                <li>Se há crianças pequenas no local</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <ComoFunciona white />
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: TITLE,
        url: `${SITE.url}/orcamento/`,
        about: { '@id': `${SITE.url}/#business` },
      }} />
    </>
  )
}
