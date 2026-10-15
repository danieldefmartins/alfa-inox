import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { waLink, WA_DEFAULT } from '@/lib/site'
import { WhatsAppIcon } from '@/components/Icons'

export const metadata = { title: 'Página não encontrada', robots: { index: false } }

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '58vh', display: 'grid', alignItems: 'center' }}>
      <div className="wrap narrow">
        <h1>Não encontramos esta página</h1>
        <p className="lede" style={{ marginTop: 18 }}>O endereço pode ter mudado com o site novo. Veja por onde continuar:</p>
        <div className="chips" style={{ marginTop: 24 }}>
          <Link href="/">Início</Link>
          {SERVICOS.map((s) => <Link key={s.slug} href={`/servicos/${s.slug}/`}>{s.nome}</Link>)}
          <Link href="/galeria/">Obras</Link>
          <Link href="/monte-seu-guarda-corpo/">Monte seu guarda-corpo</Link>
          <Link href="/contato/">Contato</Link>
        </div>
        <div className="hero-ctas">
          <a className="btn btn-cta btn-lg" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
