'use client'
import Link from 'next/link'
import { useState } from 'react'
import { SERVICOS } from '@/lib/servicos'
import { SITE, waLink, WA_DEFAULT } from '@/lib/site'
import { WhatsAppIcon } from './Icons'
import { LogoHorizontal } from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" aria-label="Alfa Inox — página inicial" style={{ flex: 'none', display: 'flex' }}>
          <LogoHorizontal />
        </Link>

        <nav className="nav" aria-label="Menu principal">
          <div className="drop">
            <button aria-haspopup="true">
              Serviços
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <div className="drop-menu">
              {SERVICOS.map((s) => (
                <Link key={s.slug} href={`/servicos/${s.slug}/`}>
                  <strong>{s.nome}</strong>
                  <small>{s.resumo}</small>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/galeria/">Galeria</Link>
          <Link href="/areas-atendidas/">Onde Atendemos</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/sobre/">A Empresa</Link>
          <Link href="/contato/">Contato</Link>
          <a className="nav-cta" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener">
            <WhatsAppIcon size={17} /> Orçamento
          </a>
        </nav>

        <button className="btn burger" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}
          style={{ padding: '10px 14px', border: '1.5px solid var(--line)', background: '#fff' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mobile-nav" onClick={() => setOpen(false)}>
          <div className="m-head">Serviços</div>
          {SERVICOS.map((s) => <Link key={s.slug} href={`/servicos/${s.slug}/`}>{s.nome}</Link>)}
          <div className="m-head">Institucional</div>
          <Link href="/galeria/">Galeria de Projetos</Link>
          <Link href="/areas-atendidas/">Onde Atendemos</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/sobre/">A Empresa</Link>
          <Link href="/contato/">Contato</Link>
          <a className="btn btn-wa" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener" style={{ marginTop: 22, width: '100%' }}>
            <WhatsAppIcon size={18} /> Pedir orçamento no WhatsApp
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="btn btn-ghost" style={{ marginTop: 10, width: '100%' }}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  )
}
