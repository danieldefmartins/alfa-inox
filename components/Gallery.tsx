'use client'
import { useEffect, useState, useCallback } from 'react'
import { Photo, src, srcSet, CATEGORIAS } from '@/lib/photos'

export default function Gallery({ fotos, filtros = true }: { fotos: Photo[]; filtros?: boolean }) {
  const [cat, setCat] = useState<string>('todos')
  const [i, setI] = useState<number | null>(null)

  const cats = CATEGORIAS.filter((c) => fotos.some((f) => f.category === c.slug))
  const lista = cat === 'todos' ? fotos : fotos.filter((f) => f.category === cat)

  const close = useCallback(() => setI(null), [])
  const prev = useCallback(() => setI((v) => (v === null ? v : (v - 1 + lista.length) % lista.length)), [lista.length])
  const next = useCallback(() => setI((v) => (v === null ? v : (v + 1) % lista.length)), [lista.length])

  useEffect(() => {
    if (i === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [i, close, prev, next])

  return (
    <>
      {filtros && cats.length > 1 && (
        <div className="filters" role="group" aria-label="Filtrar projetos por tipo">
          <button aria-pressed={cat === 'todos'} onClick={() => setCat('todos')}>
            Todos <span style={{ opacity: .55 }}>({fotos.length})</span>
          </button>
          {cats.map((c) => (
            <button key={c.slug} aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)}>
              {c.nome} <span style={{ opacity: .55 }}>({fotos.filter((f) => f.category === c.slug).length})</span>
            </button>
          ))}
        </div>
      )}

      <div className="masonry">
        {lista.map((f, idx) => (
          <figure className="tile" key={f.slug} onClick={() => setI(idx)} tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setI(idx) } }}
            role="button" aria-label={`Ampliar: ${f.alt}`} style={{ margin: 0, marginBottom: 16 }}>
            <img src={src(f.slug, 800)} srcSet={srcSet(f.slug)}
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 380px"
              alt={f.alt} width={f.width} height={f.height} loading={idx < 6 ? 'eager' : 'lazy'} decoding="async"
              style={{ backgroundImage: `url(${f.lqip})`, backgroundSize: 'cover' }} />
            <figcaption>{f.alt}</figcaption>
          </figure>
        ))}
      </div>

      {i !== null && lista[i] && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Visualizador de imagem" onClick={close}>
          <button className="lb-x" onClick={close} aria-label="Fechar">✕</button>
          {lista.length > 1 && <>
            <button className="lb-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Foto anterior">‹</button>
            <button className="lb-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Próxima foto">›</button>
          </>}
          <div onClick={(e) => e.stopPropagation()} style={{ display: 'grid', justifyItems: 'center' }}>
            <img src={src(lista[i].slug, 1600)} alt={lista[i].alt} />
            <p className="lb-cap">{lista[i].alt} <span style={{ opacity: .55 }}>· {i + 1} de {lista.length}</span></p>
          </div>
        </div>
      )}
    </>
  )
}
