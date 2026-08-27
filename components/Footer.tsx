import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { SITE, waLink, WA_DEFAULT } from '@/lib/site'
import { WhatsAppIcon, Phone, Pin, Clock, Mail } from './Icons'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div>
          <div className="logo" style={{ marginBottom: 16 }}>
            <span style={{ color: '#fff' }}>ALFA</span>
            <span className="metal-text">INOX</span>
          </div>
          <p style={{ maxWidth: 320, lineHeight: 1.6 }}>
            Há {SITE.yearsInBusiness} anos fabricando e instalando corrimão, guarda-corpo e
            acessibilidade em aço inox em Belo Horizonte e região metropolitana.
          </p>
          <div style={{ display: 'grid', gap: 11, marginTop: 22 }}>
            <a href={`tel:${SITE.phoneRaw}`} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <Phone size={16} /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <Mail size={16} /> {SITE.email}
            </a>
            <span style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ marginTop: 3 }}><Pin size={16} /></span>
              <span>{SITE.address.street}<br />{SITE.address.district} — {SITE.address.city}/{SITE.address.state}</span>
            </span>
            <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <Clock size={16} /> {SITE.hours}
            </span>
          </div>
        </div>

        <div>
          <h4>Serviços</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
            {SERVICOS.map((s) => (
              <li key={s.slug}><Link href={`/servicos/${s.slug}/`}>{s.nome}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Institucional</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
            <li><Link href="/galeria/">Galeria de projetos</Link></li>
            <li><Link href="/sobre/">A empresa</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/areas-atendidas/">Onde atendemos</Link></li>
            <li><Link href="/contato/">Contato</Link></li>
            <li><Link href="/orcamento/">Pedir orçamento</Link></li>
          </ul>
        </div>

        <div>
          <h4>Onde atendemos</h4>
          <p style={{ fontSize: '.88rem', lineHeight: 1.75 }}>
            {AREAS.map((a, i) => (
              <span key={a.slug}>
                <Link href={`/areas-atendidas/${a.slug}/`}>{a.nome}</Link>
                {i < AREAS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
          <a className="btn btn-wa" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener" style={{ marginTop: 14 }}>
            <WhatsAppIcon size={18} /> Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="wrap ftr-bottom">
        <span>© {ano} {SITE.name}. Todos os direitos reservados.</span>
        <span>Corrimão e guarda-corpo em aço inox · Belo Horizonte/MG</span>
      </div>
    </footer>
  )
}
