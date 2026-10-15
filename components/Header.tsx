import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { waLink, WA_DEFAULT } from '@/lib/site'
import Logo from './Logo'
import { WhatsAppIcon, ChevronDown } from './Icons'
import { MobileMenu, NavDrop } from './HeaderClient'

const LINKS = [
  { href: '/galeria/', nome: 'Obras' },
  { href: '/monte-seu-guarda-corpo/', nome: 'Monte o seu' },
  { href: '/areas-atendidas/', nome: 'Onde atendemos' },
  { href: '/sobre/', nome: 'A empresa' },
  { href: '/contato/', nome: 'Contato' },
]

export default function Header() {
  return (
    <header className="hdr">
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <div className="wrap hdr-in">
        <Link href="/" className="brand" aria-label="Alfa Inox — página inicial">
          <Logo height={30} />
        </Link>
        <nav className="nav" aria-label="Menu principal">
          <NavDrop>
            <summary>Serviços <ChevronDown /></summary>
            <div className="drop-menu">
              {SERVICOS.map((s) => (
                <Link key={s.slug} href={`/servicos/${s.slug}/`}>
                  <strong>{s.nome}</strong>
                  <span>{s.resumo}</span>
                </Link>
              ))}
            </div>
          </NavDrop>
          {LINKS.map((l) => <Link key={l.href} href={l.href}>{l.nome}</Link>)}
        </nav>
        <a className="btn btn-cta hdr-cta" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener">
          <WhatsAppIcon size={18} /> Orçamento
        </a>
        <MobileMenu />
      </div>
    </header>
  )
}
