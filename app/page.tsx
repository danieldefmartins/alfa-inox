import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICOS } from '@/lib/servicos'
import { AREAS } from '@/lib/areas'
import { PHOTOS, findPhoto } from '@/lib/photos'
import { SITE, waLink, WA_DEFAULT, socialMeta } from '@/lib/site'
import { Img, CloseCTA, ComoFunciona, Fatos, AreaChips } from '@/components/Sections'
import { CityName, CityProof } from '@/components/LocalCity'
import { WhatsAppIcon, Arrow } from '@/components/Icons'
import FAQ from '@/components/FAQ'
import Portfolio from '@/components/portfolio/Portfolio'
import Desenho from '@/components/configurador/Desenho'
import { PADRAO } from '@/components/configurador/modelo'
import { FAQ_GERAL } from '@/lib/faq'

const TITLE = 'Corrimão e Guarda-Corpo em Inox em BH | Alfa Inox'
const DESC = 'Corrimão, guarda-corpo de inox e de vidro e acessibilidade NBR 9050 em BH. Oficina própria desde 2010: medimos, fabricamos e instalamos. Peça no WhatsApp.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: '/' },
  ...socialMeta({ card: 'default', titulo: TITLE, descricao: DESC, url: '/' }),
}

const HERO = findPhoto('guarda-corpo-vidro-cobertura-piscina-deck')!
const OBRAS = [ // paisagem: no celular (2 colunas) cada uma usa o arquivo de 400 px
  'corrimao-parede-inox-escada-caracol', 'guarda-corpo-vidro-escada-interna', 'corrimao-inox-curvo-area-externa-condominio',
  'guarda-corpo-inox-academia-comercial', 'corrimao-inox-rampa-acessibilidade-duplo', 'guarda-corpo-inox-escada-interna-residencial',
  'guarda-corpo-inox-mezanino-vao-interno', 'guarda-corpo-vidro-inox-area-externa', 'corrimao-parede-inox-escada-condominio',
]

export default function Home() {
  const obras = OBRAS.map((s) => findPhoto(s)!).filter(Boolean)
  return (
    <>
      {/* HERO — painel grafite com o corte diagonal do "A" do logo + foto real */}
      <section className="hero2">
        <div className="hero2-photo">
          <Img photo={HERO} priority sizes="(min-width: 900px) 62vw, 100vw" alt="Guarda-corpo de vidro com estrutura de inox em cobertura com piscina, com vista para os morros de BH" />
        </div>
        <div className="wrap hero2-in">
          <div className="hero2-panel">
            <h1>Corrimão e guarda-corpo em inox em <CityName fallback="Belo Horizonte" />.</h1>
            <p>Medimos no local, fabricamos na nossa oficina e instalamos com equipe própria. Em inox 304 ou 316, na altura que a norma pede.</p>
            <div className="hero-ctas">
              <a className="btn btn-cta btn-lg" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Orçamento no WhatsApp</a>
              <Link className="btn btn-line btn-lg" href="/galeria/">Ver obras</Link>
            </div>
            <p className="hero-proof"><CityProof fallback={`Oficina no bairro ${SITE.address.district}, BH · desde ${SITE.foundedYear}`} /></p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2>O que sai da nossa oficina</h2>
            <p className="lede">Cada peça é cortada e soldada para o seu vão. Escolha o serviço para ver modelos, normas e obras.</p>
          </div>
          <div className="rows">
            {SERVICOS.map((s) => {
              const p = findPhoto(s.capa) ?? PHOTOS[0]
              return (
                <Link key={s.slug} href={`/servicos/${s.slug}/`} className="row rv">
                  <Img photo={p} sizes="(min-width: 720px) 200px, 96px" />
                  <div><h3>{s.nome}</h3><p>{s.resumo}</p></div>
                  <span className="go" aria-hidden="true"><Arrow /></span>
                </Link>
              )
            })}
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
            <p className="lede">A oficina fica na Av. Américo Vespúcio, no Aparecida. Daqui saímos para medir e instalar em toda a Grande BH.</p>
          </div>
          <AreaChips />
        </div>
      </section>

      <FAQ itens={FAQ_GERAL.slice(0, 6)} titulo="As perguntas que mais recebemos" intro="As dúvidas que mais chegam pelo WhatsApp, respondidas direto." white />

      <CloseCTA />
    </>
  )
}
