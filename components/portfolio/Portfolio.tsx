// Galeria de obras: grade renderizada no servidor (indexável, funciona sem JS — cada foto é link para a imagem grande).
// A ilha cliente transforma os filtros em abas com estado na URL (?tipo=vidro) e abre o visualizador.
import { FILTROS, PHOTOS, categoriaNome, legenda, src, type Photo } from '@/lib/photos'
import { Img } from '../Sections'
import PortfolioIsland from './PortfolioIsland'

const SIZES = '(min-width: 1300px) 400px, (min-width: 1000px) 31vw, (min-width: 600px) 48vw, 100vw'

export default function Portfolio({ fotos = PHOTOS, filtros = true, limite }: { fotos?: Photo[]; filtros?: boolean; limite?: number }) {
  const lista = limite ? fotos.slice(0, limite) : fotos
  const chips = filtros
    ? FILTROS.map((f) => ({ id: f.id, nome: f.nome, n: fotos.filter(f.match).length })).filter((c) => c.n > 0)
    : []
  return (
    <PortfolioIsland chips={chips} total={lista.length}>
      <ul className="masonry" role="list">
        {lista.map((p, i) => {
          const tags = FILTROS.filter((f) => f.match(p)).map((f) => f.id).join(' ')
          return (
            <li className="tile" key={p.slug} data-f={tags} data-i={i}>
              <figure style={{ margin: 0 }}>
                <a href={src(p.slug, 1600)} data-lb={src(p.slug, 1600)} data-cap={legenda(p)} data-w={p.width} data-h={p.height} aria-label={`Ampliar: ${legenda(p)}`}>
                  <Img photo={p} sizes={SIZES} priority={i < 2} />
                </a>
                <figcaption><strong>{categoriaNome(p)}</strong>{legenda(p)}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
    </PortfolioIsland>
  )
}
