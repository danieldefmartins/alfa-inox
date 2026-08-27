import Link from 'next/link'
import { SITE, waLink } from '@/lib/site'
import { WhatsAppIcon, Phone } from './Icons'

export default function CTA({
  titulo = 'Peça seu orçamento sem compromisso',
  texto = 'Mande fotos do lance pelo WhatsApp e receba uma estimativa na hora. Medição no local sem custo em Belo Horizonte e região metropolitana.',
  msg,
}: { titulo?: string; texto?: string; msg?: string }) {
  return (
    <section className="section dark">
      <div className="wrap" style={{ textAlign: 'center', maxWidth: 780 }}>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Orçamento</p>
        <h2>{titulo}</h2>
        <p className="lede" style={{ marginTop: 18 }}>{texto}</p>
        <div style={{ display: 'flex', gap: 13, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
          <a className="btn btn-wa btn-lg" href={waLink(msg)} target="_blank" rel="noopener">
            <WhatsAppIcon size={20} /> WhatsApp {SITE.phoneDisplay}
          </a>
          <Link className="btn btn-ghost btn-lg" href="/orcamento/">Preencher formulário</Link>
        </div>
        <p style={{ marginTop: 26, fontSize: '.9rem', color: 'var(--steel-2)' }}>
          <Phone size={14} /> {SITE.hours} · Atendimento em toda a Grande BH
        </p>
      </div>
    </section>
  )
}
