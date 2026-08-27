import type { Metadata } from 'next'
import { SITE, waLink, WA_DEFAULT, fullAddress, socialMeta } from '@/lib/site'
import OrcamentoForm from '@/components/OrcamentoForm'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { WhatsAppIcon, Phone, Pin, Clock, Mail, Check } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Pedir Orçamento de Corrimão e Guarda-Corpo em Inox',
  description:
    'Peça seu orçamento de corrimão, guarda-corpo ou acessibilidade em aço inox em Belo Horizonte e região. Resposta rápida no WhatsApp e medição no local sem custo.',
  alternates: { canonical: '/orcamento/' },
  ...socialMeta({ card: 'orcamento', titulo: 'Pedir Orçamento de Corrimão e Guarda-Corpo em Inox', descricao: 'Peça seu orçamento de corrimão, guarda-corpo ou acessibilidade em aço inox em Belo Horizonte e região. Resposta rápida no WhatsApp e medição no local sem custo.', url: '/orcamento/' }),
}

const PASSOS = [
  'Você preenche o formulário ou chama direto no WhatsApp com fotos do lance',
  'Devolvemos uma faixa de valor realista, normalmente no mesmo dia útil',
  'Agendamos a medição no local, sem custo em BH e região',
  'Você recebe a proposta fechada, com quantitativo, especificação e prazo',
]

export default function OrcamentoPage() {
  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(44px, 6vw, 68px)' }}>
          <Crumbs itens={[{ nome: 'Orçamento' }]} dark />
          <div style={{ maxWidth: 720, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Peça seu orçamento</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              Sem compromisso e sem custo de visita. Quanto mais detalhes você mandar,
              mais preciso é o número que devolvemos — e o WhatsApp costuma ser o caminho
              mais rápido, porque permite mandar fotos.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.6fr) minmax(260px, 1fr)', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.45rem', marginBottom: 8 }}>Formulário de orçamento</h2>
            <p style={{ color: '#4a5566', marginBottom: 28 }}>
              Preencha os campos e escolha como prefere enviar. Nada é armazenado neste site —
              os dados vão direto para o nosso WhatsApp ou e-mail.
            </p>
            <OrcamentoForm />
          </div>

          <aside style={{ position: 'sticky', top: 108, display: 'grid', gap: 22 }}>
            <div style={{ padding: 26, background: 'var(--paper-2)', borderRadius: 'var(--r-lg)' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 16 }}>Prefere falar direto?</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                <a className="btn btn-wa" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener">
                  <WhatsAppIcon size={18} /> WhatsApp
                </a>
                <a className="btn btn-ghost" href={`tel:${SITE.phoneRaw}`}>
                  <Phone size={17} /> {SITE.phoneDisplay}
                </a>
              </div>
              <div style={{ marginTop: 22, display: 'grid', gap: 12, fontSize: '.9rem', color: '#4a5566' }}>
                <span style={{ display: 'flex', gap: 10 }}><Mail size={16} /> {SITE.email}</span>
                <span style={{ display: 'flex', gap: 10 }}><Clock size={16} /> {SITE.hours}</span>
                <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 3 }}><Pin size={16} /></span>{fullAddress}
                </span>
              </div>
            </div>

            <div style={{ padding: 26, border: '1px solid var(--line)', borderRadius: 'var(--r-lg)' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: 16 }}>Como funciona</h3>
              <ol style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 14 }}>
                {PASSOS.map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, fontSize: '.92rem', color: '#4a5566' }}>
                    <span style={{ color: 'var(--accent)', flex: 'none', marginTop: 2 }}><Check size={16} /></span>{p}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Pedir orçamento',
        url: `${SITE.url}/orcamento/`,
        about: { '@id': `${SITE.url}/#business` },
      }} />
    </>
  )
}
