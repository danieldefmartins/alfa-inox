import Link from 'next/link'
import { SITE } from '@/lib/site'

export type Crumb = { nome: string; href?: string }

export default function Crumbs({ itens, dark = false }: { itens: Crumb[]; dark?: boolean }) {
  const all = [{ nome: 'Início', href: '/' }, ...itens]
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.nome,
      ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
    })),
  }
  return (
    <>
      <nav className="crumbs" aria-label="Trilha de navegação" style={dark ? { color: 'var(--steel-2)' } : undefined}>
        {all.map((c, i) => (
          <span key={c.nome}>
            {c.href ? <Link href={c.href}>{c.nome}</Link> : <span aria-current="page">{c.nome}</span>}
            {i < all.length - 1 && <span style={{ opacity: .5 }}> / </span>}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  )
}
