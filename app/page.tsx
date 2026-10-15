import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { PHOTOS, findPhoto } from '@/lib/photos'
import { SITE, waLink, WA_DEFAULT, socialMeta } from '@/lib/site'
import { Img, CloseCTA, ComoFunciona, Fatos, AreaChips, Estoque, GoogleRating, Depoimentos } from '@/components/Sections'
import { CityName, CityProof } from '@/components/LocalCity'
import { estoque } from '@/lib/estoque'
import { WhatsAppIcon, Arrow } from '@/components/Icons'
import FAQ from '@/components/FAQ'
import Portfolio from '@/components/portfolio/Portfolio'
import Desenho from '@/components/configurador/Desenho'
import { PADRAO } from '@/components/configurador/modelo'
import { FAQ_GERAL } from '@/lib/faq'

const TITLE = 'Corrimão e Guarda-Corpo em Inox em BH | Alfa Inox'
const DESC = 'Corrimão e guarda-corpo de inox e vidro em BH para casas, condomínios, lojas e empresas, com design moderno de alto padrão. Oficina própria desde 2010.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: '/' },
  ...socialMeta({ card: 'default', titulo: TITLE, descricao: DESC, url: '/' }),
}

const HERO_D = estoque('escada-moderna-guarda-corpo-inox-edificio-corporativo')
// Foto de cada serviço na home (diferentes do hero e da 1ª linha de obras)
const FOTO_SERVICO: Record<string, string> = {
  'corrimao-inox': 'corrimao-parede-inox-escada-residencia',
  'guarda-corpo-inox': 'guarda-corpo-inox-escada-moderna',
  'guarda-corpo-de-vidro': 'guarda-corpo-vidro-inox-escada',
  'acessibilidade-nbr-9050': 'corrimao-inox-rampa-acesso-predio',
  'portoes-e-gradis-inox': 'gradil-inox-varanda-comercial-coberta',
  'condominios-e-empresas': 'guarda-corpo-inox-fachada-comercial',
}
const OBRAS = [ // paisagem: no celular (2 colunas) cada uma usa o arquivo de 400 px
  'corrimao-parede-inox-escada-caracol', 'guarda-corpo-vidro-escada-interna', 'corrimao-inox-curvo-area-externa-condominio',
  'guarda-corpo-inox-corredor-mezanino', 'guarda-corpo-inox-travessas-horizontais-area-externa', 'guarda-corpo-inox-escada-interna-residencial',
  'guarda-corpo-inox-sacada-travessas', 'guarda-corpo-vidro-torres-inox-mezanino', 'guarda-corpo-inox-escada-vista-superior',
]

export default function Home() {
  const obras = OBRAS.map((s) => findPhoto(s)!).filter(Boolean)
  return (
    <>
      {/* HERO — foto real em tela cheia, véu carvão suave embaixo/à esquerda; título grande à esquerda,
          linha + CTAs alinhados à base na coluna da direita (desktop). Pôster LCP: AVIF/WebP, prioridade alta. */}
      <section className="hero3">
        {/* Foto de banco licenciada (lib/estoque.ts), recorte ajustado por tela.
            Só ilustra o estilo — não é apresentada como obra da Alfa Inox. */}
        <picture className="hero3-photo">
          <source type="image/avif" sizes="100vw" srcSet={HERO_D.avif} />
          <img src={HERO_D.src} srcSet={HERO_D.webp} sizes="100vw" width={HERO_D.width} height={HERO_D.height}
            fetchPriority="high" loading="eager" decoding="async" alt={HERO_D.alt} />
        </picture>
        <div className="wrap hero3-in">
          <h1>Corrimão e guarda-corpo em inox em <CityName fallback="Belo Horizonte" />.</h1>
          <div className="hero3-side">
            <p>Projetos residenciais e comerciais — casas, condomínios, lojas e empresas — com o design moderno dos projetos de alto padrão. Medimos, fabricamos e instalamos.</p>
            <div className="hero-ctas">
              <a className="btn btn-cta btn-lg" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Orçamento no WhatsApp</a>
              <Link className="btn btn-glass btn-lg" href="/galeria/">Ver obras</Link>
            </div>
            <p className="hero-proof"><CityProof fallback={`Oficina no bairro ${SITE.address.district}, BH · desde ${SITE.foundedYear}`} /></p>
            <p className="hero-proof" style={{ marginTop: 0 }}><GoogleRating dark /></p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2>O que sai da nossa oficina</h2>
            <p className="lede">Cada peça é cortada e soldada para o seu vão. Escolha o serviço para ver modelos, normas e obras.</p>
            <p className="swipe-hint" aria-hidden="true">6 serviços · deslize para o lado →</p>
          </div>
          {/* Grade editorial: 2 destaques grandes + 4 médios no desktop; carrossel de cartões grandes no celular. */}
          <ul className="svc-grid" role="list">
            {SERVICOS.map((s, i) => {
              const p = findPhoto(FOTO_SERVICO[s.slug] ?? s.capa) ?? PHOTOS[0]
              return (
                <li key={s.slug} className={i < 2 ? 'svc big' : 'svc'}>
                  <Link href={`/servicos/${s.slug}/`}>
                    <div className="svc-img">
                      <Img photo={p} sizes={i < 2 ? '(min-width: 1000px) 610px, 82vw' : '(min-width: 1000px) 300px, 82vw'} />
                    </div>
                    <div className="svc-txt">
                      <h3>{s.nome}</h3>
                      <span className="svc-line">{s.resumo}</span>
                      <span className="svc-go">Ver serviço <Arrow /></span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* RESIDENCIAL E COMERCIAL + DESIGN MODERNO */}
      <section className="section white">
        <div className="wrap">
          <div className="head">
            <h2>Para a sua casa e para o seu negócio</h2>
            <p className="lede">Fazemos obras residenciais e comerciais com o mesmo cuidado de fábrica — e o acabamento que você vê nos projetos de alto padrão.</p>
          </div>
          <div className="segs">
            <Link href="/galeria/?tipo=escadas" className="seg-card">
              <div className="seg-img"><Img photo={findPhoto('guarda-corpo-vidro-cobertura-piscina-deck')!} sizes="(min-width: 900px) 600px, 100vw" /></div>
              <h3>Residencial</h3>
              <p>Escadas internas e externas, sacadas, varandas, mezaninos e áreas de piscina de casas, sobrados e apartamentos.</p>
              <span className="svc-go">Ver obras residenciais <Arrow /></span>
            </Link>
            <Link href="/servicos/condominios-e-empresas/" className="seg-card">
              <div className="seg-img"><Img photo={findPhoto('corrimao-inox-rampa-acessibilidade-duplo')!} sizes="(min-width: 900px) 600px, 100vw" /></div>
              <h3>Comercial e condomínios</h3>
              <p>Áreas comuns de condomínios, lojas, academias, clínicas e empresas — com rampas e banheiros adequados à NBR 9050.</p>
              <span className="svc-go">Condomínios e empresas <Arrow /></span>
            </Link>
          </div>
          <div className="moderno-hero">
            <Estoque nome="escada-saguao-guarda-corpo-inox-alto-padrao" sizes="(min-width: 1240px) 1240px, 100vw" />
          </div>
          <div className="moderno">
            <h3>Design moderno, como nos projetos de alto padrão</h3>
            <ul className="moderno-list">
              <li><strong>Inox com vidro</strong>Painéis de vidro presos por pinças ou botões de inox: a vista e a luz continuam livres.</li>
              <li><strong>Linhas retas</strong>Travessas horizontais e prumos alinhados, sem ornamento — o desenho limpo da arquitetura contemporânea.</li>
              <li><strong>Escovado ou espelhado</strong>Inox escovado discreto ou polido espelhado, com solda TIG e emendas lixadas até sumirem.</li>
              <li><strong>Fixação discreta</strong>Corrimão de parede com suportes mínimos, sapatas flangeadas e, no vidro, perfil embutido no piso.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONFIGURADOR (teaser) */}
      <section className="section dark cfg-teaser">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <div className="head" style={{ marginBottom: 0 }}>
            <h2>Monte seu guarda-corpo antes de pedir o orçamento</h2>
            <p className="lede">Escolha o modelo, o acabamento e onde ele vai ficar. O desenho mostra o resultado com a altura da norma, e o pedido segue pronto para o WhatsApp.</p>
            <div className="hero-ctas">
              <Link className="btn btn-cta btn-lg" href="/monte-seu-guarda-corpo/">Montar o meu <Arrow /></Link>
            </div>
          </div>
          <Link href="/monte-seu-guarda-corpo/" className="cfg-draw rv" aria-label="Abrir o configurador de guarda-corpo">
            <Desenho c={PADRAO} id="home" title="Exemplo: guarda-corpo de inox com vidro em sacada, 1,10 m de altura" />
          </Link>
        </div>
      </section>

      {/* OBRAS */}
      <section className="section white">
        <div className="wrap">
          <div className="head-row">
            <div className="head">
              <h2>Obras reais, fotografadas na entrega</h2>
              <p className="lede">Sem render e sem banco de imagem: são escadas, varandas e rampas que fabricamos e instalamos na Grande BH.</p>
            </div>
            <Link className="link-arrow" href="/galeria/">Ver as {PHOTOS.length} fotos <Arrow /></Link>
          </div>
          <Portfolio fotos={obras} filtros={false} compact />
        </div>
      </section>

      <Depoimentos nomes={['Daniel M.', 'Zélia M.', 'Nathalia M.', 'Carlos M.']} white />

      {/* POR QUE */}
      <section className="section">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div>
            <div className="head">
              <h2>Fábrica, não revenda</h2>
              <p className="lede">O que separa um corrimão que dura de um que solta em dois anos está no que não aparece na foto: o tubo, a solda e a fixação.</p>
            </div>
            <Img photo={findPhoto('corrimao-inox-escada-interna-madeira')!} sizes="(min-width: 900px) 45vw, 100vw" style={{ borderRadius: 'var(--r-lg)', aspectRatio: '4 / 5', objectFit: 'cover', width: '100%' }} />
          </div>
          <Fatos one />
        </div>
      </section>

      <ComoFunciona white />

      {/* ÁREAS */}
      <section className="section">
        <div className="wrap two" style={{ alignItems: 'end' }}>
          <div className="head" style={{ marginBottom: 0 }}>
            <h2>Atendemos Belo Horizonte e {AREAS.length - 1} cidades da região</h2>
            <p className="lede">A oficina fica na Rua Cantagalo, no Aparecida. Daqui saímos para medir e instalar em toda a Grande BH.</p>
          </div>
          <AreaChips />
        </div>
      </section>

      <FAQ itens={FAQ_GERAL.slice(0, 6)} titulo="As perguntas que mais recebemos" intro="As dúvidas que mais chegam pelo WhatsApp, respondidas direto." white />

      <CloseCTA />
    </>
  )
}
