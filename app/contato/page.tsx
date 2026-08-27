import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, waLink, WA_DEFAULT, fullAddress, socialMeta } from '@/lib/site'
import { AREAS } from '@/lib/areas'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { WhatsAppIcon, Phone, Pin, Clock, Mail, Arrow } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Contato — Corrimão e Guarda-Corpo em Inox em BH',
  description:
    'Fale com a Alfa Inox: WhatsApp (31) 97237-9813, vendas@alfainoxbh.com.br. Av. Américo Vespúcio, 105 — Aparecida, Belo Horizonte/MG. Segunda a sábado, 8h às 17h.',
  alternates: { canonical: '/contato/' },
  ...socialMeta({ card: 'contato', titulo: 'Contato — Corrimão e Guarda-Corpo em Inox em BH', descricao: 'Fale com a Alfa Inox: WhatsApp (31) 97237-9813, vendas@alfainoxbh.com.br. Av. Américo Vespúcio, 105 — Aparecida, Belo Horizonte/MG. Segunda a sábado, 8h às 17h.', url: '/contato/' }),
}

const mapa = `https://www.google.com/maps?q=${encodeURIComponent(`${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city} - ${SITE.address.state}`)}&output=embed`

export default function ContatoPage() {
  return (
    <>
      <section style={{ background: 'var(--ink)', color: '#fff' }}>
        <div className="wrap" style={{ paddingBottom: 'clamp(44px, 6vw, 68px)' }}>
          <Crumbs itens={[{ nome: 'Contato' }]} dark />
          <div style={{ maxWidth: 720, paddingTop: 'clamp(28px, 4vw, 44px)' }}>
            <h1>Fale com a Alfa Inox</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              O WhatsApp é o canal mais rápido — e o único que permite mandar fotos do lance,
              que é o que dá precisão à estimativa. Atendemos de segunda a sábado.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'clamp(28px, 4vw, 48px)' }}>
          {[
            { icone: <WhatsAppIcon size={26} />, t: 'WhatsApp', v: SITE.phoneDisplay, d: 'Resposta no mesmo dia útil. Mande fotos do lance.', href: waLink(WA_DEFAULT), cta: 'Abrir conversa', ext: true },
            { icone: <Phone size={26} />, t: 'Telefone', v: SITE.phoneDisplay, d: SITE.hours, href: `tel:${SITE.phoneRaw}`, cta: 'Ligar agora' },
            { icone: <Mail size={26} />, t: 'E-mail', v: SITE.email, d: 'Para propostas formais, condomínios e construtoras.', href: `mailto:${SITE.email}`, cta: 'Enviar e-mail' },
          ].map((c) => (
            <div key={c.t} className="card" style={{ padding: 28 }}>
              <div style={{ color: 'var(--accent)', marginBottom: 16 }}>{c.icone}</div>
              <h2 style={{ fontSize: '1.15rem', marginBottom: 6 }}>{c.t}</h2>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0 0 8px', wordBreak: 'break-word' }}>{c.v}</p>
              <p style={{ color: '#4a5566', fontSize: '.93rem', marginBottom: 18 }}>{c.d}</p>
              <a className="card-link" href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener' } : {})}>
                {c.cta} <Arrow size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight tinted">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'clamp(28px, 4vw, 48px)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Nossa oficina</p>
            <h2 style={{ marginBottom: 20 }}>Onde estamos</h2>
            <div style={{ display: 'grid', gap: 14, fontSize: '.98rem' }}>
              <span style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', marginTop: 3, flex: 'none' }}><Pin size={18} /></span>
                <span>{SITE.address.street}<br />{SITE.address.district} — {SITE.address.city}/{SITE.address.state}<br />CEP {SITE.address.postalCode}</span>
              </span>
              <span style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ color: 'var(--accent)', flex: 'none' }}><Clock size={18} /></span>{SITE.hours}
              </span>
            </div>
            <p style={{ marginTop: 22, color: '#4a5566', fontSize: '.94rem' }}>
              A visita à oficina é por agendamento — boa parte da equipe está em obra durante o dia.
              Para orçamento, não é necessário vir até aqui: nós vamos até o seu imóvel.
            </p>
            <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn btn-wa" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener">
                <WhatsAppIcon size={18} /> Agendar pelo WhatsApp
              </a>
              <Link className="btn btn-ghost" href="/orcamento/">Formulário de orçamento</Link>
            </div>
          </div>
          <iframe
            src={mapa}
            title="Localização da Alfa Inox em Belo Horizonte"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: '100%', aspectRatio: '4/3', border: 0, borderRadius: 'var(--r-lg)', filter: 'grayscale(.25)' }}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <h2 style={{ fontSize: '1.25rem', marginBottom: 16 }}>Atendemos toda a região metropolitana</h2>
          <div className="tags">
            {AREAS.map((a) => <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`}>{a.nome}</Link>)}
          </div>
        </div>
      </section>

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contato',
        url: `${SITE.url}/contato/`,
        mainEntity: { '@id': `${SITE.url}/#business` },
      }} />
    </>
  )
}
