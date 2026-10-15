import Link from 'next/link'
import { SITE, PAGAMENTO, telHref, waLink, WA_DEFAULT } from '@/lib/site'
import { AREAS } from '@/lib/areas'
import { estoque, type EstoqueNome } from '@/lib/estoque'
import { findPhoto, src, srcSetFor, type Photo } from '@/lib/photos'
import { WhatsAppIcon, Phone, Arrow, Pin, Clock } from './Icons'

/** Foto com srcset verdadeiro, dimensões e LQIP (placeholder borrado inline). */
export function Img({ photo, sizes, priority = false, className, alt, style }: {
  photo: Photo; sizes: string; priority?: boolean; className?: string; alt?: string; style?: React.CSSProperties
}) {
  return (
    <img
      src={src(photo.slug, 800)}
      srcSet={srcSetFor(photo)}
      sizes={sizes}
      alt={alt ?? photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      // LQIP inline só nas fotos prioritárias (acima da dobra): mantém o HTML leve
      style={priority ? { backgroundImage: `url(${photo.lqip})`, backgroundSize: 'cover', backgroundPosition: 'center', ...style } : { backgroundColor: '#e3e8eb', ...style }}
    />
  )
}

export function PhotoBySlug({ slug, ...rest }: { slug: string; sizes: string; priority?: boolean; className?: string; style?: React.CSSProperties }) {
  const p = findPhoto(slug)
  return p ? <Img photo={p} {...rest} /> : null
}

/** Fechamento de página: faixa grafite com o próximo passo (WhatsApp primeiro). */
export function CloseCTA({
  titulo = 'Mande uma foto da sua escada. A gente responde com o caminho.',
  texto = 'Pelo WhatsApp você manda fotos do local e a medida aproximada, e recebe uma estimativa. Depois medimos no local e enviamos a proposta fechada.',
  msg = WA_DEFAULT,
}: { titulo?: string; texto?: string; msg?: string }) {
  return (
    <section className="dark close">
      <div className="wrap close-grid">
        <div className="head" style={{ marginBottom: 0 }}>
          <h2>{titulo}</h2>
          <p className="lede">{texto}</p>
        </div>
        <div>
          <div className="close-actions">
            <a className="btn btn-cta btn-lg" href={waLink(msg)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Chamar no WhatsApp</a>
            <Link className="btn btn-line btn-lg" href="/orcamento/">Preencher o pedido de orçamento</Link>
          </div>
          <div className="close-meta">
            <a href={telHref} style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><Phone size={15} /> Ou ligue: {SITE.phoneDisplay}</a>
            <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><Clock size={15} /> {SITE.hours}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/** "Como funciona" + formas de pagamento do sinal: só fatos confirmados (repo + dono, 14/10/2026). */
export function ComoFunciona({ white = false }: { white?: boolean }) {
  const passos = [
    { t: 'Fotos e medida pelo WhatsApp', d: 'Você manda fotos do local e a medida aproximada. Respondemos com uma estimativa e tiramos as dúvidas de modelo.' },
    { t: 'Medição no local', d: 'Nossa equipe mede cada lance e confirma modelo, liga, altura e fixação.' },
    { t: 'Proposta fechada e sinal', d: 'A proposta traz cada item, a liga, o tubo e o prazo. O sinal reserva a fabricação.' },
    { t: 'Fabricação na oficina', d: 'Corte, solda TIG e polimento na nossa oficina do bairro Aparecida, em BH.' },
    { t: 'Instalação pela equipe própria', d: 'Quem fabrica instala: montagem, fixação e limpeza final no local.' },
  ]
  return (
    <section className={`section${white ? ' white' : ''}`} id="como-funciona">
      <div className="wrap">
        <div className="head">
          <h2>Como funciona, do WhatsApp à peça instalada</h2>
          <p className="lede">Cinco passos, sem surpresa no meio do caminho. Você sabe o que vai receber antes de pagar o sinal.</p>
        </div>
        <ol className="steps light">
          {passos.map((p) => (
            <li key={p.t}><h3>{p.t}</h3><p>{p.d}</p></li>
          ))}
        </ol>
        <div className="pay">
          <div>
            <h3>Formas de pagamento do sinal</h3>
            <p className="muted" style={{ margin: 0 }}>O sinal reserva a fabricação da sua peça. As condições do restante vão escritas na proposta.</p>
          </div>
          <ul aria-label="Formas de pagamento">
            {PAGAMENTO.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

/** Fatos verificáveis da empresa (sem números inventados). */
export function Fatos({ dark = false, one = false }: { dark?: boolean; one?: boolean }) {
  const fatos = [
    { t: 'Oficina própria em BH', d: `Fabricamos na nossa oficina da ${SITE.address.street.replace('Avenida', 'Av.')}, no bairro ${SITE.address.district}. Não revendemos kit pronto.` },
    { t: 'Medimos antes de cortar', d: 'Cada lance é medido no local. Escada torta e parede fora de esquadro são a regra, não a exceção.' },
    { t: 'A liga vai escrita na proposta', d: 'Inox 304 ou 316, diâmetro e espessura da parede do tubo. Assim você compara orçamentos de igual para igual.' },
    { t: 'Norma no projeto', d: 'Altura, vãos e prolongamentos conforme a NBR 14718 e a NBR 9050 — o que a vistoria confere.' },
    { t: 'Quem fabrica instala', d: 'A instalação é feita pela nossa equipe, não terceirizada.' },
    { t: `Desde ${SITE.foundedYear}`, d: 'Fabricando corrimão e guarda-corpo em aço inox para casas, condomínios e empresas da Grande BH.' },
  ]
  return (
    <div className={['facts', dark && 'on-dark', one && 'one'].filter(Boolean).join(' ')}>
      {fatos.map((f) => <div className="fact" key={f.t}><h3>{f.t}</h3><p>{f.d}</p></div>)}
    </div>
  )
}

export function AreaChips({ prefix = '' }: { prefix?: string }) {
  return (
    <div className="chips">
      {AREAS.map((a) => <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`}>{prefix}{a.nome}</Link>)}
    </div>
  )
}

export function OficinaLine() {
  return <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><Pin size={16} /> Oficina no bairro Aparecida, BH</span>
}

/** Foto de banco licenciada (lib/estoque.ts): só para hero e áreas editoriais, nunca como obra. */
export function Estoque({ nome, sizes, priority = false, className, style, alt }: {
  nome: EstoqueNome; sizes: string; priority?: boolean; className?: string; style?: React.CSSProperties; alt?: string
}) {
  const e = estoque(nome)
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={e.avif} sizes={sizes} />
      <img src={e.src} srcSet={e.webp} sizes={sizes} width={e.width} height={e.height} alt={alt ?? e.alt}
        loading={priority ? 'eager' : 'lazy'} decoding="async" fetchPriority={priority ? 'high' : undefined}
        style={{ backgroundColor: '#dfe5e8', ...style }} />
    </picture>
  )
}

/** Avaliações do Google (perfil real). Só a linha de nota com link — sem schema de review (seria autopromoção). */
export function GoogleRating({ dark = false }: { dark?: boolean }) {
  const g = SITE.google
  return (
    <a href={g.url} target="_blank" rel="noopener" className={dark ? 'g-rating on-dark' : 'g-rating'}>
      <span aria-hidden="true" className="g-stars">★★★★★</span>
      <span><strong>{g.rating.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}</strong> no Google · {g.count} avaliações</span>
    </a>
  )
}

/** Depoimentos reais do Google, citados na íntegra (sem estrelas por citação, sem fotos, sem schema). */
export function Depoimentos({ nomes, titulo = 'O que dizem no Google', white = false }: { nomes?: string[]; titulo?: string; white?: boolean }) {
  const all = SITE.google.depoimentos
  const lista = nomes ? nomes.map((n) => all.find((d) => d.nome === n)!).filter(Boolean) : all.slice(0, 4)
  return (
    <section className={`section${white ? ' white' : ''}`}>
      <div className="wrap">
        <div className="head-row">
          <div className="head">
            <h2>{titulo}</h2>
            <p className="lede">Avaliações publicadas no perfil da Alfa Inox no Google, copiadas como foram escritas.</p>
          </div>
          <div style={{ display: 'grid', gap: 4, justifyItems: 'start' }}>
            <GoogleRating />
            <a className="link-arrow" href={SITE.google.url} target="_blank" rel="noopener">Ver todas no Google <Arrow /></a>
          </div>
        </div>
        <ul className={lista.length === 1 ? 'quotes one' : 'quotes'} role="list">
          {lista.map((d) => (
            <li key={d.nome}>
              <blockquote>“{d.texto}”</blockquote>
              <p>{d.nome} · avaliação no Google</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Arrow }
