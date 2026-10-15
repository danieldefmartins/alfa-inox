'use client'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import { waLink } from '@/lib/site'
import { WhatsAppIcon, Doc } from '../Icons'
import Desenho from './Desenho'
import { ACABAMENTOS, APLICACOES, LOCAIS, METROS, PADRAO, TIPOS, ficha, fromParams, resumo, toParams, type Config } from './modelo'

function Group<T extends string>({ legend, name, value, options, onChange, cols }: {
  legend: string; name: string; value: T; options: { id: T; nome: string; desc?: string }[]; onChange: (v: T) => void; cols?: number
}) {
  return (
    <fieldset className="cfg-group">
      <legend>{legend}</legend>
      <div className="seg" style={cols ? { gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` } : undefined}>
        {options.map((o) => (
          <label key={o.id} className="choice">
            <input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} />
            <span>
              <span className="c-name">{o.nome}</span>
              {o.desc && <span className="c-desc">{o.desc}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function Configurador() {
  const id = useId().replace(/:/g, '')
  const [c, setC] = useState<Config>(PADRAO)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setC(fromParams(new URLSearchParams(location.search)))
    setReady(true)
  }, [])
  useEffect(() => {
    if (!ready) return
    const url = `${location.pathname}?${toParams(c)}`
    history.replaceState(null, '', url)
  }, [c, ready])

  const set = <K extends keyof Config>(k: K) => (v: Config[K]) => setC((x) => ({ ...x, [k]: v }))
  const f = ficha(c)
  const metros = (v: number) => set('metros')(Math.min(METROS.max, Math.max(METROS.min, Math.round(v) || METROS.min)))

  return (
    <div className="cfg">
      <div className="cfg-stage">
        <div className="cfg-draw">
          <Desenho c={c} id={`d${id}`} />
        </div>
        <dl className="cfg-ficha" aria-live="polite">
          <div><dt>Altura</dt><dd>{f.altura}</dd></div>
          <div><dt>Liga sugerida</dt><dd>{f.liga}</dd></div>
          <div><dt>Norma</dt><dd>{f.norma}</dd></div>
          {f.vidro && <div><dt>Vidro</dt><dd>{f.vidro}</dd></div>}
        </dl>
        {f.avisos.length > 0 && (
          <ul className="cfg-avisos">{f.avisos.map((a) => <li key={a}>{a}</li>)}</ul>
        )}
      </div>

      <form className="cfg-panel" onSubmit={(e) => e.preventDefault()} aria-label="Opções do guarda-corpo">
        <Group legend="1. Modelo" name="tipo" value={c.tipo} options={TIPOS} onChange={set('tipo')} cols={2} />
        <Group legend="2. Acabamento do inox" name="acab" value={c.acabamento} options={ACABAMENTOS} onChange={set('acabamento')} cols={2} />
        <Group legend="3. Onde vai ficar" name="onde" value={c.aplicacao} options={APLICACOES} onChange={set('aplicacao')} cols={2} />
        <Group legend="4. Ambiente" name="local" value={c.local} options={LOCAIS} onChange={set('local')} cols={2} />
        <fieldset className="cfg-group">
          <legend><label htmlFor={`${id}-m`}>5. Metragem aproximada</label></legend>
          <div className="meter">
            <button type="button" className="icon-btn" aria-label="Diminuir um metro" onClick={() => metros(c.metros - 1)} disabled={c.metros <= METROS.min}>−</button>
            <input id={`${id}-m`} type="range" min={METROS.min} max={METROS.max} step={1} value={c.metros} onChange={(e) => metros(+e.target.value)} aria-valuetext={`${c.metros} metros lineares`} />
            <button type="button" className="icon-btn" aria-label="Aumentar um metro" onClick={() => metros(c.metros + 1)} disabled={c.metros >= METROS.max}>+</button>
            <output htmlFor={`${id}-m`} className="num"><strong>{c.metros}</strong> m</output>
          </div>
          <p className="small muted" style={{ margin: '8px 0 0' }}>Meça pela borda do piso ou pela linha da escada. Não precisa ser exato: medimos no local.</p>
        </fieldset>
        <label className="consent" style={{ fontSize: '.95rem', color: 'var(--ink)' }}>
          <input type="checkbox" checked={c.criancas} onChange={(e) => set('criancas')(e.target.checked)} />
          <span>Há crianças pequenas no local</span>
        </label>
        <div className="cfg-actions">
          <a className="btn btn-cta btn-lg" href={waLink(resumo(c))} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> Enviar no WhatsApp</a>
          <Link className="btn btn-line btn-lg" href={`/orcamento/?${toParams(c)}`}><Doc size={18} /> Usar no pedido de orçamento</Link>
        </div>
        <p className="form-note">Sem preço automático: o valor depende da medição. Você recebe a estimativa pelo WhatsApp.</p>
      </form>
    </div>
  )
}
