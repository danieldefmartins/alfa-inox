// Desenho técnico (vista lateral) do guarda-corpo configurado. SVG puro, sem JS — roda no servidor (home)
// e no cliente (configurador). Ilustrativo, fora de escala no comprimento; alturas proporcionais.
import type { Config } from './modelo'

const W = 960
const HGT = 560
const X0 = 150
const X1 = 875
const SPAN = X1 - X0
const FLOOR = 420 // topo do piso (sacada, mezanino, piscina)
const ST_Y0 = 492 // quina do primeiro degrau
const ST_RISE = 270
const PX_M = 200 // px por metro (alturas)

const fmt = (n: number) => n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function Desenho({ c, id = 'cfg', title }: { c: Config; id?: string; title?: string }) {
  const stair = c.aplicacao === 'escada'
  const hM = stair ? 0.92 : 1.1
  const H = hM * PX_M
  const slope = stair ? ST_RISE / SPAN : 0
  const deg = stair ? (-Math.atan(slope) * 180) / Math.PI : 0
  const base = (x: number) => (stair ? ST_Y0 - (x - X0) * slope : FLOOR)
  const n = Math.min(8, Math.max(2, Math.ceil(c.metros / 1.2)))
  const posts = Array.from({ length: n + 1 }, (_, j) => X0 + (j * SPAN) / n)
  const g = `${id}-${c.acabamento}`
  const mods = posts.slice(0, -1).map((xa, j) => ({ xa, xb: posts[j + 1] }))
  const len = (xa: number, xb: number) => Math.hypot(xb - xa, base(xb) - base(xa))

  // barra paralela ao piso/à escada na fração f da altura, entre xa e xb
  const bar = (xa: number, xb: number, f: number, t: number, key: string) => {
    const ya = base(xa) - f * H
    return <rect key={key} x={xa} y={ya - t / 2} width={len(xa, xb)} height={t} rx={t / 2} transform={`rotate(${deg} ${xa} ${ya})`} fill={`url(#${g}-h)`} />
  }

  const steps: string[] = []
  if (stair) {
    const k = 9
    const w = SPAN / k
    const r = ST_RISE / k
    let d = `M 20 ${ST_Y0 + r} H ${X0 - 4} V ${ST_Y0}`
    for (let i = 0; i < k; i++) {
      const x = X0 - 4 + i * w
      const y = ST_Y0 - i * r
      d += ` H ${x + w} V ${y - r}`
    }
    d += ` H ${W - 20} V ${HGT} H 20 Z`
    steps.push(d)
  }

  const externo = c.local === 'externo'
  return (
    <svg viewBox={stair ? `0 0 ${W} ${HGT}` : `0 140 ${W} ${HGT - 140}`} role="img" aria-label={title ?? 'Desenho do guarda-corpo configurado'} className="cfg-svg">
      <defs>
        {c.acabamento === 'escovado' ? (
          <>
            <linearGradient id={`${g}-h`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7d878d" /><stop offset=".35" stopColor="#cdd4d8" /><stop offset=".5" stopColor="#eef1f2" /><stop offset=".68" stopColor="#b5bec3" /><stop offset="1" stopColor="#737d83" /></linearGradient>
            <linearGradient id={`${g}-v`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7d878d" /><stop offset=".35" stopColor="#cdd4d8" /><stop offset=".5" stopColor="#eef1f2" /><stop offset=".68" stopColor="#b5bec3" /><stop offset="1" stopColor="#737d83" /></linearGradient>
          </>
        ) : (
          <>
            <linearGradient id={`${g}-h`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3c454a" /><stop offset=".28" stopColor="#ffffff" /><stop offset=".45" stopColor="#5d686e" /><stop offset=".62" stopColor="#f4f7f8" /><stop offset="1" stopColor="#323a3f" /></linearGradient>
            <linearGradient id={`${g}-v`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#3c454a" /><stop offset=".28" stopColor="#ffffff" /><stop offset=".45" stopColor="#5d686e" /><stop offset=".62" stopColor="#f4f7f8" /><stop offset="1" stopColor="#323a3f" /></linearGradient>
          </>
        )}
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dcebf0" /><stop offset="1" stopColor="#f4f6f7" /></linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0b7a94" stopOpacity=".16" /><stop offset=".5" stopColor="#0b7a94" stopOpacity=".07" /><stop offset="1" stopColor="#0b7a94" stopOpacity=".2" /></linearGradient>
        <pattern id={`${id}-hatch`} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V10" stroke="#c3cbd0" strokeWidth="2" /></pattern>
      </defs>

      {/* fundo */}
      <rect width={W} height={HGT} fill={externo ? `url(#${id}-sky)` : '#eef1f3'} />
      {externo ? (
        <path d="M0 330 C 90 300 150 262 240 280 C 330 298 380 236 470 250 C 560 264 610 222 700 238 C 790 254 860 214 960 236 V 560 H 0 Z" fill="#cbd9df" opacity=".7" />
      ) : (
        <g opacity=".6">
          <rect x="640" y="70" width="150" height="110" rx="4" fill="#fff" stroke="#d5dbde" />
          <path d="M715 70v110M640 125h150" stroke="#d5dbde" />
        </g>
      )}

      {/* piso / laje / escada */}
      {stair ? (
        <path d={steps[0]} fill="#d6dde1" stroke="#aeb8be" strokeWidth="1.5" />
      ) : (
        <>
          <rect x="20" y={FLOOR} width={W - 40} height="28" fill="#d6dde1" stroke="#aeb8be" strokeWidth="1.5" />
          {c.aplicacao === 'mezanino' && <rect x="20" y={FLOOR + 28} width={W - 40} height={HGT - FLOOR - 28} fill={`url(#${id}-hatch)`} opacity=".7" />}
          {c.aplicacao === 'piscina' && (
            <g>
              <rect x="20" y={FLOOR + 28} width={W - 40} height={HGT - FLOOR - 28} fill="#9fd3df" />
              <path d={`M40 ${FLOOR + 62} q 30 -10 60 0 t 60 0 t 60 0 t 60 0 M520 ${FLOOR + 92} q 30 -10 60 0 t 60 0 t 60 0 t 60 0`} stroke="#fff" strokeWidth="3" fill="none" opacity=".8" />
            </g>
          )}
          {c.aplicacao === 'sacada' && <rect x="20" y={FLOOR + 28} width={W - 40} height={HGT - FLOOR - 28} fill="#e4e9ec" />}
        </>
      )}

      {/* preenchimento (troca com fade) */}
      <g key={c.tipo + c.aplicacao + n} className="cfg-fade">
        {c.tipo === 'travessas' && mods.flatMap(({ xa, xb }, j) => [0.2, 0.38, 0.56, 0.74].map((f, i) => bar(xa + 5, xb - 5, f, 7, `t${j}-${i}`)))}
        {c.tipo === 'cabo' && mods.flatMap(({ xa, xb }, j) =>
          [0.1, 0.21, 0.32, 0.43, 0.54, 0.65, 0.76, 0.87].map((f, i) => (
            <line key={`c${j}-${i}`} x1={xa + 5} y1={base(xa + 5) - f * H} x2={xb - 5} y2={base(xb - 5) - f * H} stroke="#55616a" strokeWidth="1.6" />
          )),
        )}
        {c.tipo === 'prumos' && mods.flatMap(({ xa, xb }, j) => {
          const gap = 22 // 11 cm
          const k = Math.max(1, Math.floor((xb - xa - 10) / gap))
          const step = (xb - xa) / (k + 1)
          return [
            bar(xa + 5, xb - 5, 0.07, 6, `pb${j}`),
            ...Array.from({ length: k }, (_, i) => {
              const x = xa + step * (i + 1)
              const yb = base(x) - 0.07 * H
              const yt = base(x) - H + 6
              return <rect key={`p${j}-${i}`} x={x - 2.5} y={yt} width="5" height={yb - yt} fill={`url(#${g}-v)`} />
            }),
          ]
        })}
        {c.tipo === 'vidro' && mods.map(({ xa, xb }, j) => {
          const a = xa + 11, b = xb - 11
          const pts = [[a, base(a) - 0.06 * H], [b, base(b) - 0.06 * H], [b, base(b) - 0.9 * H], [a, base(a) - 0.9 * H]]
          return (
            <g key={`v${j}`}>
              <polygon points={pts.map((p) => p.join(',')).join(' ')} fill={`url(#${id}-glass)`} stroke="#0b7a94" strokeOpacity=".35" strokeWidth="1.5" />
              <line x1={a + 18} y1={base(a + 18) - 0.18 * H} x2={a + 70} y2={base(a + 70) - 0.78 * H} stroke="#fff" strokeWidth="3" opacity=".6" strokeLinecap="round" />
              <rect x={a - 6} y={base(a) - 0.3 * H} width="8" height="14" rx="2" fill={`url(#${g}-v)`} />
              <rect x={a - 6} y={base(a) - 0.75 * H} width="8" height="14" rx="2" fill={`url(#${g}-v)`} />
              <rect x={b - 2} y={base(b) - 0.3 * H} width="8" height="14" rx="2" fill={`url(#${g}-v)`} />
              <rect x={b - 2} y={base(b) - 0.75 * H} width="8" height="14" rx="2" fill={`url(#${g}-v)`} />
            </g>
          )
        })}
      </g>

      {!stair && <ellipse cx={(X0 + X1) / 2} cy={FLOOR + 2} rx={(X1 - X0) / 2 + 30} ry="6" fill="#2e3a40" opacity=".08" />}
      {/* prumos estruturais + sapatas */}
      {posts.map((x, j) => (
        <g key={`post${j}`}>
          <rect x={x - 6} y={base(x) - H} width="12" height={H} rx="2" fill={`url(#${g}-v)`} />
          <rect x={x - 13} y={base(x) - 5} width="26" height="5" rx="1.5" fill="#7d878d" />
        </g>
      ))}
      {/* corrimão superior */}
      {bar(X0 - 22, X1 + 22, 1, 12, 'top')}

      {/* cotas */}
      <g fill="none" stroke="#5a676e" strokeWidth="1.2" fontFamily="Inter, system-ui, sans-serif">
        <path d={`M${X0 - 52} ${base(X0)} V${base(X0) - H} M${X0 - 60} ${base(X0)} h16 M${X0 - 60} ${base(X0) - H} h16`} />
        <text x={X0 - 64} y={base(X0) - H / 2} fill="#2e3a40" stroke="none" fontSize="20" fontWeight="600" textAnchor="end" dominantBaseline="middle">{fmt(hM)} m</text>
        {c.tipo === 'prumos' && (() => {
          const xa = posts[0] + (posts[1] - posts[0]) / 2
          const y = base(xa) - 0.45 * H
          return (
            <g>
              <path d={`M${xa - 2} ${y} h22`} stroke="#0b7a94" strokeWidth="2" />
              <text x={xa + 30} y={y} fill="#0b7a94" stroke="none" fontSize="17" fontWeight="600" dominantBaseline="middle">vão ≤ 11 cm</text>
            </g>
          )
        })()}
      </g>
      <text x={W / 2} y={HGT - 18} textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="18" fontWeight="600" fill="#2e3a40">
        {c.metros} m lineares · prumos a cada 1,2 m ou menos · ilustração fora de escala
      </text>
    </svg>
  )
}
