'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SERVICOS } from '@/lib/servicos'
import { SITE, telHref, waLink, WA_DEFAULT } from '@/lib/site'
import { Close, Menu, WhatsAppIcon, Phone } from './Icons'

/** <details> do menu Serviços: fecha ao clicar fora, com Esc e ao navegar. */
export function NavDrop({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null)
  const path = usePathname()
  useEffect(() => { if (ref.current) ref.current.open = false }, [path])
  useEffect(() => {
    const close = (e: Event) => {
      const el = ref.current
      if (!el?.open) return
      if (e instanceof KeyboardEvent) {
        if (e.key === 'Escape') { el.open = false; el.querySelector('summary')?.focus() }
        return
      }
      if (!el.contains(e.target as Node)) el.open = false
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', close) }
  }, [])
  return <details className="drop" ref={ref}>{children}</details>
}

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.documentElement.style.overflow = '' }
  }, [open])
  return (
    <>
      <button className="burger" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
        {open ? <Close /> : <Menu />}
      </button>
      <div id="mnav" className="mnav" hidden={!open}>
        <p>Serviços</p>
        {SERVICOS.map((s) => <Link key={s.slug} href={`/servicos/${s.slug}/`}>{s.nome}</Link>)}
        <p>Alfa Inox</p>
        <Link href="/galeria/">Obras realizadas</Link>
        <Link href="/monte-seu-guarda-corpo/">Monte seu guarda-corpo</Link>
        <Link href="/areas-atendidas/">Onde atendemos</Link>
        <Link href="/faq/">Perguntas frequentes</Link>
        <Link href="/blog/">Blog</Link>
        <Link href="/sobre/">A empresa</Link>
        <Link href="/contato/">Contato</Link>
        <div style={{ display: 'grid', gap: 10, marginTop: 24 }}>
          <a className="btn btn-cta btn-lg" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Orçamento no WhatsApp</a>
          <a className="btn btn-line btn-lg" href={telHref}><Phone size={18} /> Ligar {SITE.phoneDisplay}</a>
        </div>
      </div>
    </>
  )
}
