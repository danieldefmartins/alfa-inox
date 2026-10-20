import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, waLink, WA_DEFAULT, telHref, socialMeta } from '@/lib/site'
import { AREAS } from '@/lib/areas'
import Crumbs from '@/components/Crumbs'
import Jsonld from '@/components/Jsonld'
import { ComoFunciona, GoogleRating } from '@/components/Sections'
import { WhatsAppIcon, Phone, Pin, Clock, Mail } from '@/components/Icons'

const TITLE = 'Contato: Alfa Inox, Corrimão e Guarda-Corpo em BH'
const DESC = 'WhatsApp (31) 98777-0220, telefone (31) 2298-1234 e vendas@alfainoxbh.com.br. Rua Cantagalo, 1449, Aparecida, BH. Segunda a sábado, 8h às 17h.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/contato/' },
  ...socialMeta({ card: 'contato', titulo: TITLE, descricao: DESC, url: '/contato/' }),
}

const mapsLink = SITE.google.mapsUrl

export default function ContatoPage() {
  const canais = [
    { icone: <WhatsAppIcon size={24} />, t: 'WhatsApp', v: SITE.whatsappDisplay, d: 'O canal mais rápido: mande fotos do local e a medida aproximada.', href: waLink(WA_DEFAULT), cta: 'Abrir conversa', ext: true, main: true },
    { icone: <Phone size={22} />, t: 'Telefone', v: SITE.phoneDisplay, d: SITE.hours, href: telHref, cta: 'Ligar agora' },
    { icone: <Mail size={22} />, t: 'E-mail', v: SITE.email, d: 'Para propostas formais de condomínios, empresas e construtoras.', href: `mailto:${SITE.email}`, cta: 'Escrever e-mail' },
  ]
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <Crumbs itens={[{ nome: 'Contato' }]} />
          <h1>Fale com a Alfa Inox</h1>
          <p className="lede">
            Pelo WhatsApp você já manda as fotos do local, e é com elas que conseguimos responder com uma estimativa.
            Também atendemos por telefone e e-mail, de segunda a sábado, das 8h às 17h.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="facts">
            {canais.map((c) => (
              <div className="fact" key={c.t} style={{ display: 'grid', gap: 10 }}>
                <h2 style={{ fontSize: '1.25rem', display: 'flex', gap: 10, alignItems: 'center' }}>{c.icone}{c.t}</h2>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{c.v}</p>
                <p className="muted" style={{ margin: 0 }}>{c.d}</p>
                <div><a className={`btn ${c.main ? 'btn-cta' : 'btn-line'}`} href={c.href} {...(c.ext ? { target: '_blank', rel: 'noopener' } : {})}>{c.cta}</a></div>
              </div>
            ))}
            <div className="fact" style={{ display: 'grid', gap: 10 }}>
              <h2 style={{ fontSize: '1.25rem', display: 'flex', gap: 10, alignItems: 'center' }}><Pin size={22} />Oficina</h2>
              <p style={{ fontWeight: 600, margin: 0 }}>{SITE.address.street}<br />{SITE.address.district} — {SITE.address.city}/{SITE.address.state} · CEP {SITE.address.postalCode}</p>
              <p className="muted" style={{ margin: 0, display: 'flex', gap: 8, alignItems: 'center' }}><Clock size={16} /> {SITE.hours}</p>
              <div><a className="btn btn-line" href={mapsLink} target="_blank" rel="noopener">Ver no Google Maps</a></div>
              <GoogleRating />
            </div>
          </div>
        </div>
      </section>
      <section className="section white">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="head" style={{ marginBottom: 0 }}>
            <h2>Antes de chamar, separe isto</h2>
            <p className="lede">Com essas informações a primeira resposta já vem com uma estimativa realista.</p>
          </div>
          <ul className="checks" style={{ fontSize: '1.02rem' }}>
            <li>Fotos do local inteiro, de frente e de lado</li>
            <li>A medida aproximada em metros lineares (pela borda do piso ou pela linha da escada)</li>
            <li>Quantos lances, curvas e patamares existem</li>
            <li>Se há crianças pequenas — isso muda o modelo indicado</li>
            <li>A cidade e o bairro da obra</li>
          </ul>
        </div>
      </section>
      <ComoFunciona />
      <section className="section white">
        <div className="wrap">
          <div className="head"><h2>Cidades atendidas</h2></div>
          <div className="chips">{AREAS.map((a) => <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`}>{a.nome}</Link>)}</div>
          <p style={{ marginTop: 28 }}><Link className="btn btn-cta btn-lg" href="/orcamento/">Preencher o pedido de orçamento</Link></p>
        </div>
      </section>
      <Jsonld data={{ '@context': 'https://schema.org', '@type': 'ContactPage', name: TITLE, url: `${SITE.url}/contato/`, about: { '@id': `${SITE.url}/#business` } }} />
    </>
  )
}
