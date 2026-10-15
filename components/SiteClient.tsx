'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { telHref, waLink, WA_DEFAULT } from '@/lib/site'
import { captureAttribution } from '@/lib/attribution'
import { WhatsAppIcon, Phone, Doc } from './Icons'

/** Barra fixa no celular: WhatsApp (principal) · Ligar · Orçamento. Some na página do formulário. */
export function StickyBar() {
  const path = usePathname()
  if (path?.startsWith('/orcamento')) return null
  return (
    <nav className="bar" aria-label="Contato rápido">
      <a className="wa" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"><WhatsAppIcon size={19} /> WhatsApp</a>
      <a href={telHref}><Phone size={17} /> Ligar</a>
      <Link href="/orcamento/"><Doc size={17} /> Orçamento</Link>
    </nav>
  )
}

/** Atribuição (UTM/gclid) + revelação suave das seções. O conteúdo é visível sem JS. */
export function SiteEffects() {
  const path = usePathname()
  useEffect(() => { captureAttribution() }, [path])
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const els = [...document.querySelectorAll<HTMLElement>('.rv:not(.in)')].filter((el) => el.getBoundingClientRect().top > innerHeight * 0.9)
    if (!els.length) return
    document.documentElement.classList.add('rv-on')
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }, { rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => io.observe(el))
    document.querySelectorAll('.rv').forEach((el) => { if (!els.includes(el as HTMLElement)) el.classList.add('in') })
    return () => io.disconnect()
  }, [path])
  return null
}
