'use client'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Close } from '../Icons'

type Chip = { id: string; nome: string; n: number }
type Item = { src: string; cap: string; w: number; h: number }

export default function PortfolioIsland({ chips, total, children }: { chips: Chip[]; total: number; children: React.ReactNode }) {
  const [tipo, setTipo] = useState('')
  const [shown, setShown] = useState(total)
  const [lb, setLb] = useState<{ items: Item[]; i: number } | null>(null)
  const grid = useRef<HTMLDivElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  // estado inicial pela URL (?tipo=vidro)
  useLayoutEffect(() => {
    const t = new URLSearchParams(location.search).get('tipo') ?? ''
    if (chips.some((c) => c.id === t)) setTipo(t)
  }, [chips])

  // aplica o filtro no DOM renderizado pelo servidor
  useLayoutEffect(() => {
    const root = grid.current
    if (!root) return
    let n = 0
    root.querySelectorAll<HTMLElement>('li[data-f]').forEach((li) => {
      const ok = !tipo || (li.dataset.f ?? '').split(' ').includes(tipo)
      li.hidden = !ok
      if (ok) n++
    })
    setShown(n)
  }, [tipo])

  const choose = (t: string) => {
    setTipo(t)
    const q = new URLSearchParams(location.search)
    if (t) q.set('tipo', t); else q.delete('tipo')
    history.replaceState(null, '', `${location.pathname}${q.size ? `?${q}` : ''}`)
  }

  // abre o visualizador a partir de qualquer foto visível
  useEffect(() => {
    const root = grid.current
    if (!root) return
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-lb]')
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return
      e.preventDefault()
      const links = [...root.querySelectorAll<HTMLAnchorElement>('li:not([hidden]) a[data-lb]')]
      opener.current = a
      setLb({ items: links.map((l) => ({ src: l.dataset.lb!, cap: l.dataset.cap ?? '', w: +(l.dataset.w ?? 0), h: +(l.dataset.h ?? 0) })), i: links.indexOf(a) })
    }
    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [])

  const close = useCallback(() => { setLb(null); requestAnimationFrame(() => opener.current?.focus()) }, [])
  const go = useCallback((d: number) => setLb((s) => (s ? { ...s, i: (s.i + d + s.items.length) % s.items.length } : s)), [])

  useEffect(() => {
    if (!lb) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.documentElement.style.overflow = '' }
  }, [lb, close, go])

  // swipe no celular
  const touch = useRef<number | null>(null)
  const item = lb?.items[lb.i]

  return (
    <>
      {chips.length > 1 && (
        <div className="filters" role="toolbar" aria-label="Filtrar obras por tipo">
          <button type="button" aria-pressed={!tipo} onClick={() => choose('')}>Todas as obras<span className="n">{total}</span></button>
          {chips.map((c) => (
            <button type="button" key={c.id} aria-pressed={tipo === c.id} onClick={() => choose(c.id)}>{c.nome}<span className="n">{c.n}</span></button>
          ))}
        </div>
      )}
      <p className="sr-only" aria-live="polite">{shown} fotos</p>
      <div ref={grid}>{children}</div>
      {lb && item && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Visualizador de fotos" onClick={close}
          onTouchStart={(e) => { touch.current = e.touches[0].clientX }}
          onTouchEnd={(e) => { if (touch.current === null) return; const dx = e.changedTouches[0].clientX - touch.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); touch.current = null }}>
          <button className="x" type="button" onClick={close} aria-label="Fechar" autoFocus><Close /></button>
          {lb.items.length > 1 && (
            <>
              <button className="prev" type="button" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Foto anterior"><ChevronLeft /></button>
              <button className="next" type="button" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Próxima foto"><ChevronRight /></button>
            </>
          )}
          <figure onClick={(e) => e.stopPropagation()} key={item.src}>
            <img src={item.src} alt={item.cap} width={item.w || undefined} height={item.h || undefined} />
            <figcaption>{item.cap} <span style={{ opacity: .6 }}>· {lb.i + 1} de {lb.items.length}</span></figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
