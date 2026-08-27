import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { PHOTOS, findPhoto, src } from '@/lib/photos'
import { SITE, waLink, WA_DEFAULT, socialMeta } from '@/lib/site'
import { Img } from '@/components/Photo'
import { ServiceIcon, Arrow, Check, WhatsAppIcon } from '@/components/Icons'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Jsonld from '@/components/Jsonld'

export const metadata: Metadata = {
  title: { absolute: 'Corrimão e Guarda-Corpo em Aço Inox em BH | Alfa Inox' },
  description:
    'Há 15 anos fabricando e instalando corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte e região. Medição no local sem custo e orçamento sem compromisso.',
  alternates: { canonical: '/' },
  ...socialMeta({
    card: 'default',
    titulo: 'Corrimão e Guarda-Corpo em Aço Inox em BH | Alfa Inox',
    descricao:
      'Há 15 anos fabricando e instalando corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte e região. Medição no local sem custo.',
    url: '/',
  }),
}

const hero = findPhoto('guarda-corpo-inox-mezanino-vao-interno')!

const DIFERENCIAIS = [
  { t: 'Fabricação própria', d: 'A peça sai da nossa oficina, não de terceiros. Isso controla prazo, acabamento e a espessura real do tubo que você contratou.' },
  { t: 'Medição no local', d: 'Escada torta, degrau irregular e parede fora de esquadro são a regra. Medimos antes de cortar — sem custo em BH e região.' },
  { t: 'Inox 304 e 316 certificado', d: 'A liga vai escrita na proposta. Nada de AISI 430 vendido como inox genérico, que enferruja em dois anos na área externa.' },
  { t: 'Norma no projeto', d: 'Altura, espaçamento e prolongamento conforme NBR 14718 e NBR 9050 — o que a vistoria cobra e o seguro exige.' },
  { t: 'Instalação própria', d: 'Quem fabrica instala. Sem terceirizar a etapa em que a maioria dos problemas acontece.' },
  { t: '15 anos em Belo Horizonte', d: 'Centenas de obras entregues em residências, condomínios, construtoras e comércio na Grande BH.' },
]

const PROCESSO = [
  { n: '01', t: 'Contato e estimativa', d: 'Você manda fotos do lance pelo WhatsApp com a medida aproximada. Devolvemos uma faixa de valor realista na hora.' },
  { n: '02', t: 'Medição no local', d: 'Nossa equipe vai até a obra, mede cada lance e confirma o modelo, a liga e o tipo de fixação adequados.' },
  { n: '03', t: 'Projeto e orçamento fechado', d: 'Você recebe a proposta detalhada por item, com quantitativo, especificação e prazo. Sem alteração depois.' },
  { n: '04', t: 'Fabricação sob medida', d: 'Corte, solda TIG, polimento das juntas e acabamento na nossa oficina, conforme as medidas levantadas.' },
  { n: '05', t: 'Instalação e entrega', d: 'Montagem e chumbamento no local, limpeza final e garantia formal de fabricação e instalação.' },
]

const DEPOIMENTOS = [
  { n: 'Magno Coelho', l: 'Belo Horizonte', t: 'Excelente acabamento no corrimão da escada. Equipe pontual, instalação limpa e o resultado ficou exatamente como combinado.' },
  { n: 'Rita de Cássia', l: 'Belo Horizonte', t: 'Contratei o guarda-corpo da sacada e fiquei muito satisfeita. Fizeram a medição, explicaram as opções e entregaram no prazo.' },
  { n: 'Síndico — Condomínio', l: 'Região Centro-Sul, BH', t: 'Precisávamos adequar as rampas à norma de acessibilidade. Apresentaram orçamento formal para a assembleia e executaram sem interditar a circulação.' },
]

export default function Home() {
  const destaque = PHOTOS.filter((p) => p.tags.includes('destaque') || ['guarda-corpo-inox-escada-moderna', 'corrimao-inox-rampa-acessibilidade-duplo', 'guarda-corpo-vidro-escada-interna', 'corrimao-parede-inox-escada-condominio', 'guarda-corpo-inox-academia-comercial', 'corrimao-inox-curvo-area-externa-condominio'].includes(p.slug)).slice(0, 9)

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--ink)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={src(hero.slug, 1600)} alt="" aria-hidden width={hero.width} height={hero.height}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .34 }} fetchPriority="high" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(13,17,23,.96) 0%, rgba(13,17,23,.82) 45%, rgba(13,17,23,.45) 100%)' }} />
        </div>
        <div className="wrap" style={{ position: 'relative', paddingBlock: 'clamp(64px, 11vw, 128px)' }}>
          <div style={{ maxWidth: 730 }}>
            <p className="pill" style={{ marginBottom: 24 }}>Belo Horizonte e região · desde {SITE.foundedYear}</p>
            <h1>
              Corrimão e guarda-corpo em{' '}
              <span className="metal-text">aço inox</span> que duram décadas
            </h1>
            <p className="lede" style={{ marginTop: 24, maxWidth: 620 }}>
              Fabricação própria, medição no local e instalação em toda a Grande BH.
              Projetos residenciais e comerciais em inox 304 e 316, dentro da NBR 14718
              e da NBR 9050 — sem pintura, sem manutenção e sem ferrugem.
            </p>
            <div style={{ display: 'flex', gap: 13, flexWrap: 'wrap', marginTop: 36 }}>
              <a className="btn btn-wa btn-lg" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener">
                <WhatsAppIcon size={20} /> Orçamento no WhatsApp
              </a>
              <Link className="btn btn-ghost btn-lg" href="/galeria/">Ver projetos executados</Link>
            </div>
            <div style={{ display: 'flex', gap: 'clamp(24px, 5vw, 56px)', flexWrap: 'wrap', marginTop: 52 }}>
              {[
                { n: `${SITE.yearsInBusiness}`, l: 'anos de mercado' },
                { n: '500+', l: 'obras entregues' },
                { n: '304/316', l: 'inox certificado' },
                { n: '11', l: 'cidades atendidas' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="stat-n metal-text">{s.n}</div>
                  <div style={{ fontSize: '.85rem', color: 'var(--steel-2)', marginTop: 6, letterSpacing: '.02em' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 46 }}>
            <p className="eyebrow">O que fazemos</p>
            <h2>Tudo em aço inox, sob medida, do projeto à instalação</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Cada peça é dimensionada para o seu vão. Nada de kit padrão cortado no improviso.
            </p>
          </div>
          <div className="grid g3">
            {SERVICOS.map((s) => (
              <Link href={`/servicos/${s.slug}/`} key={s.slug} className="card">
                <div className="card-body">
                  <div style={{ color: 'var(--accent)', marginBottom: 16 }}><ServiceIcon name={s.icone} /></div>
                  <h3>{s.nome}</h3>
                  <p>{s.resumo}</p>
                  <span className="card-link">Ver detalhes <Arrow size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section tinted">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }}>
            <div>
              <p className="eyebrow">Por que a Alfa Inox</p>
              <h2>Quinze anos resolvendo o que o kit pronto não resolve</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                A maior parte dos problemas que consertamos veio de peça comprada por metro,
                cortada na obra e chumbada sem projeto. Trabalhamos no caminho oposto.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link className="btn btn-primary" href="/sobre/">Conheça a empresa <Arrow size={15} /></Link>
              </div>
            </div>
            <div style={{ display: 'grid', gap: 22 }}>
              {DIFERENCIAIS.map((d) => (
                <div key={d.t} style={{ display: 'flex', gap: 15 }}>
                  <span style={{ color: 'var(--accent)', flex: 'none', marginTop: 3 }}><Check /></span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: 4 }}>{d.t}</strong>
                    <span style={{ color: '#4a5566', fontSize: '.95rem' }}>{d.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
            <div style={{ maxWidth: 620 }}>
              <p className="eyebrow">Projetos executados</p>
              <h2>Obras reais, fotografadas na entrega</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Nada de render. Todas as fotos abaixo são de projetos que fabricamos e instalamos em Belo Horizonte e região.
              </p>
            </div>
            <Link className="btn btn-ghost" href="/galeria/">Ver galeria completa <Arrow size={15} /></Link>
          </div>
          <Gallery fotos={destaque} filtros={false} />
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section dark">
        <div className="wrap">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <p className="eyebrow">Como funciona</p>
            <h2>Do primeiro WhatsApp à peça instalada</h2>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 32 }}>
            {PROCESSO.map((p) => (
              <div key={p.n} style={{ borderTop: '2px solid var(--line-dark)', paddingTop: 22 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-.03em' }} className="metal-text">{p.n}</div>
                <h3 style={{ fontSize: '1.08rem', margin: '12px 0 9px' }}>{p.t}</h3>
                <p style={{ color: 'var(--steel-2)', fontSize: '.92rem', margin: 0, lineHeight: 1.6 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 620, marginBottom: 42 }}>
            <p className="eyebrow">Quem já contratou</p>
            <h2>O que dizem nossos clientes</h2>
          </div>
          <div className="grid g3">
            {DEPOIMENTOS.map((d) => (
              <figure key={d.n} className="card" style={{ margin: 0 }}>
                <div className="card-body">
                  <div style={{ color: '#e0a800', letterSpacing: 2, marginBottom: 14 }} aria-label="5 de 5 estrelas">★★★★★</div>
                  <blockquote style={{ margin: 0, fontSize: '1rem', color: '#2b3440', lineHeight: 1.65 }}>“{d.t}”</blockquote>
                  <figcaption style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
                    <strong>{d.n}</strong>
                    <div style={{ color: 'var(--steel)', fontSize: '.87rem' }}>{d.l}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="section tinted">
        <div className="wrap">
          <div style={{ maxWidth: 640, marginBottom: 32 }}>
            <p className="eyebrow">Cobertura</p>
            <h2>Atendemos Belo Horizonte e a região metropolitana</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Medição no local sem custo em todas as cidades abaixo. Nossa oficina fica na
              Avenida Américo Vespúcio, bairro Aparecida.
            </p>
          </div>
          <div className="tags">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/areas-atendidas/${a.slug}/`}>{a.nome}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        titulo="Perguntas frequentes sobre corrimão e guarda-corpo em inox"
        itens={[
          { q: 'Quanto custa um corrimão de inox em Belo Horizonte?', a: 'O valor depende do modelo (parede, com prumos, com travessas), da liga (304 ou 316), do diâmetro e da espessura do tubo, e da quantidade de curvas e patamares. Mande fotos do lance pelo WhatsApp com a medida aproximada e devolvemos uma faixa realista na hora; o valor fechado sai após a medição no local, que não tem custo em BH e região.' },
          { q: 'A medição no local é cobrada?', a: 'Não. A medição em Belo Horizonte e nas cidades da região metropolitana que atendemos é gratuita.' },
          { q: 'Qual o prazo de entrega?', a: 'Depois da aprovação e da medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis, conforme o tamanho do projeto.' },
          { q: 'Vocês instalam em obra já pronta?', a: 'Sim. A maioria das nossas instalações acontece em obra acabada, com fixação por chumbador e sapata flangeada, sem quebra-quebra.' },
          { q: 'Emitem nota fiscal e atendem condomínios e empresas?', a: 'Sim. Emitimos nota fiscal, faturamos para CNPJ e fornecemos orçamento formal detalhado por item — no formato que síndicos e construtoras precisam.' },
          { q: 'O inox pode enferrujar?', a: 'O aço inox 304 e 316 não corrói em uso normal. Pontos alaranjados quase sempre são partículas de ferro depositadas na superfície durante a obra (respingo de esmerilhadeira, por exemplo) e saem com limpeza específica. O que realmente enferruja é o AISI 430 vendido como “inox” em propostas muito baratas — material que não usamos.' },
        ]}
      />

      <CTA />

      <Jsonld data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          ['Quanto custa um corrimão de inox em Belo Horizonte?', 'O valor depende do modelo, da liga (304 ou 316), do diâmetro e da espessura do tubo e da quantidade de curvas e patamares. Enviando fotos do lance pelo WhatsApp com a medida aproximada, a Alfa Inox devolve uma faixa realista na hora; o valor fechado sai após a medição no local, gratuita em BH e região.'],
          ['A medição no local é cobrada?', 'Não. A medição em Belo Horizonte e nas cidades atendidas da região metropolitana é gratuita.'],
          ['Qual o prazo de entrega?', 'Após aprovação e medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis, conforme o tamanho do projeto.'],
          ['Vocês instalam em obra já pronta?', 'Sim. A maioria das instalações acontece em obra acabada, com fixação por chumbador e sapata flangeada, sem quebra-quebra.'],
          ['Emitem nota fiscal e atendem condomínios e empresas?', 'Sim. A Alfa Inox emite nota fiscal, fatura para CNPJ e fornece orçamento formal detalhado por item para síndicos e construtoras.'],
          ['O inox pode enferrujar?', 'O aço inox 304 e 316 não corrói em uso normal. Pontos alaranjados costumam ser partículas de ferro depositadas na superfície durante a obra e saem com limpeza específica.'],
        ].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      }} />
    </>
  )
}
