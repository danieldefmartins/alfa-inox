import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { SITE, telHref, waLink, WA_DEFAULT } from '@/lib/site'
import { WhatsAppIcon, Phone, Pin, Clock, Mail } from './Icons'
import Logo from './Logo'
import { GoogleRating } from './Sections'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div>
          <Logo tone="dark" height={30} lazy />
          <p style={{ maxWidth: 340, marginTop: 20 }}>
            Corrimão, guarda-corpo e acessibilidade em aço inox, fabricados na nossa oficina em Belo Horizonte
            desde {SITE.foundedYear}.
          </p>
          <div className="ftr-nap">
            <a href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"><WhatsAppIcon size={16} /> WhatsApp {SITE.whatsappDisplay}</a>
            <a href={telHref}><Phone size={16} /> {SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}><Mail size={16} /> {SITE.email}</a>
            <span><Pin size={16} /> <span>{SITE.address.street}<br />{SITE.address.district} — {SITE.address.city}/{SITE.address.state} · CEP {SITE.address.postalCode}</span></span>
            <span><Clock size={16} /> {SITE.hours}</span>
            <a href={SITE.google.mapsUrl} target="_blank" rel="noopener"><Pin size={16} /> Ver no Google Maps</a>
            <GoogleRating dark />
          </div>
        </div>
        <div>
          <h2>Serviços</h2>
          <ul>{SERVICOS.map((s) => <li key={s.slug}><Link href={`/servicos/${s.slug}/`}>{s.nome}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Alfa Inox</h2>
          <ul>
            <li><Link href="/galeria/">Obras realizadas</Link></li>
            <li><Link href="/monte-seu-guarda-corpo/">Monte seu guarda-corpo</Link></li>
            <li><Link href="/orcamento/">Pedir orçamento</Link></li>
            <li><Link href="/faq/">Perguntas frequentes</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/sobre/">A empresa</Link></li>
            <li><Link href="/contato/">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h2>Onde atendemos</h2>
          <ul>{AREAS.map((a) => <li key={a.slug}><Link href={`/areas-atendidas/${a.slug}/`}>{a.nome}</Link></li>)}</ul>
        </div>
      </div>
      <div className="wrap ftr-bottom">
        <span>© {ano} {SITE.name}. Corrimão e guarda-corpo em aço inox · Belo Horizonte/MG</span>
        <Link href="/privacidade/">Política de privacidade</Link>
      </div>
    </footer>
  )
}
