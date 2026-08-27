import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { Arrow } from '@/components/Icons'

export const metadata = { title: 'Página não encontrada', robots: { index: false } }

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '58vh', display: 'grid', alignItems: 'center' }}>
      <div className="wrap-narrow" style={{ textAlign: 'center' }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Erro 404</p>
        <h1>Não encontramos esta página</h1>
        <p className="lede" style={{ marginTop: 18 }}>
          O endereço pode ter mudado. Veja por onde continuar:
        </p>
        <div className="tags" style={{ justifyContent: 'center', marginTop: 28 }}>
          <Link href="/">Início</Link>
          {SERVICOS.map((s) => <Link key={s.slug} href={`/servicos/${s.slug}/`}>{s.nome}</Link>)}
          <Link href="/galeria/">Galeria</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/contato/">Contato</Link>
        </div>
        <div style={{ marginTop: 32 }}>
          <Link className="btn btn-primary" href="/orcamento/">Pedir orçamento <Arrow size={15} /></Link>
        </div>
      </div>
    </section>
  )
}
