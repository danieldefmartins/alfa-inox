import Link from 'next/link'
import { SITE } from '@/lib/site'
import Jsonld from './Jsonld'

export type Crumb = { nome: string; href?: string }

export default function Crumbs({ itens }: { itens: Crumb[] }) {
  const all: Crumb[] = [{ nome: 'Início', href: '/' }, ...itens]
  return (
    <>
      <nav className="crumbs" aria-label="Trilha de navegação">
        {all.map((c, i) => (
          <span key={c.nome} style={{ display: 'inline-flex', gap: 6 }}>
            {c.href && i < all.length - 1 ? <Link href={c.href}>{c.nome}</Link> : <span aria-current="page">{c.nome}</span>}
            {i < all.length - 1 && <span className="sep" aria-hidden="true">/</span>}
          </span>
        ))}
      </nav>
      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: all.map((c, i) => ({
          '@type': 'ListItem', position: i + 1, name: c.nome, ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
        })),
      }} />
    </>
  )
}
