// Regras do "Monte seu guarda-corpo". Só normas e recomendações técnicas que já estão no site
// (NBR 14718, NBR 9050, 304 x 316, laminado em área elevada). Nenhum preço: o valor sai na medição.
export type Tipo = 'travessas' | 'prumos' | 'vidro' | 'cabo'
export type Acabamento = 'escovado' | 'polido'
export type Aplicacao = 'escada' | 'sacada' | 'mezanino' | 'piscina'
export type Local = 'interno' | 'externo'

export type Config = { tipo: Tipo; acabamento: Acabamento; aplicacao: Aplicacao; local: Local; metros: number; criancas: boolean }

export const PADRAO: Config = { tipo: 'vidro', acabamento: 'escovado', aplicacao: 'sacada', local: 'externo', metros: 6, criancas: false }

export const TIPOS: { id: Tipo; nome: string; desc: string }[] = [
  { id: 'travessas', nome: 'Inox com travessas', desc: 'Tubos horizontais entre prumos' },
  { id: 'prumos', nome: 'Inox com prumos verticais', desc: 'Barras a cada 11 cm' },
  { id: 'vidro', nome: 'Inox + vidro', desc: 'Painéis de vidro com estrutura de inox' },
  { id: 'cabo', nome: 'Cabo de aço', desc: 'Cabos de inox tensionados' },
]
export const ACABAMENTOS: { id: Acabamento; nome: string; desc: string }[] = [
  { id: 'escovado', nome: 'Escovado', desc: 'Fosco, disfarça marcas' },
  { id: 'polido', nome: 'Polido espelhado', desc: 'Brilho de espelho' },
]
export const APLICACOES: { id: Aplicacao; nome: string }[] = [
  { id: 'escada', nome: 'Escada' },
  { id: 'sacada', nome: 'Sacada ou varanda' },
  { id: 'mezanino', nome: 'Mezanino' },
  { id: 'piscina', nome: 'Beira de piscina' },
]
export const LOCAIS: { id: Local; nome: string }[] = [
  { id: 'interno', nome: 'Interno' },
  { id: 'externo', nome: 'Externo' },
]

export const METROS = { min: 1, max: 40 }

export const nomeDe = <T extends { id: string; nome: string }>(list: T[], id: string) => list.find((x) => x.id === id)?.nome ?? id

export function ficha(c: Config) {
  const altura = c.aplicacao === 'escada' ? '0,92 m da quina do degrau' : '1,10 m do piso acabado'
  const norma = c.aplicacao === 'escada' ? 'NBR 9050 / NBR 14718' : 'NBR 14718'
  const liga = c.aplicacao === 'piscina' ? 'AISI 316 (resiste ao cloro)' : 'AISI 304'
  const vidro = c.tipo === 'vidro' ? (c.aplicacao === 'escada' && c.local === 'interno' ? 'Temperado ou laminado' : 'Laminado (continua inteiro se trincar)') : null
  const avisos: string[] = []
  if (c.criancas && (c.tipo === 'travessas' || c.tipo === 'cabo'))
    avisos.push('Com crianças pequenas, travessas e cabos horizontais viram degrau. Indicamos prumos verticais a cada 11 cm ou vidro.')
  if (c.aplicacao === 'piscina' && c.local === 'interno') avisos.push('Piscina coberta: ainda assim indicamos inox 316, pelo vapor com cloro.')
  if (c.aplicacao === 'escada' && c.tipo !== 'vidro') avisos.push('Na escada o tubo superior funciona como corrimão: empunhadura de 1½" e altura de 92 cm.')
  const modulos = Math.max(1, Math.ceil(c.metros / 1.2))
  return { altura, norma, liga, vidro, avisos, modulos }
}

export function resumo(c: Config) {
  const f = ficha(c)
  return [
    'Olá! Montei meu guarda-corpo no site da Alfa Inox:',
    `• Modelo: ${nomeDe(TIPOS, c.tipo)}`,
    `• Acabamento: ${nomeDe(ACABAMENTOS, c.acabamento)}`,
    `• Onde: ${nomeDe(APLICACOES, c.aplicacao)} (${c.local})`,
    `• Metragem aproximada: ${c.metros} m lineares`,
    c.criancas ? '• Há crianças pequenas no local' : null,
    `• Liga sugerida: ${f.liga} · altura ${f.altura}`,
    f.vidro ? `• Vidro: ${f.vidro}` : null,
    '',
    'Gostaria de um orçamento.',
  ].filter((l) => l !== null).join('\n')
}

/** Leitura/escrita na URL (?tipo=vidro&acab=escovado&onde=sacada&local=externo&m=6&kids=1) */
export function fromParams(q: URLSearchParams): Config {
  const pick = <T extends string>(v: string | null, ok: readonly T[], d: T) => (v && (ok as readonly string[]).includes(v) ? (v as T) : d)
  const m = Math.round(Number(q.get('m')))
  return {
    tipo: pick(q.get('tipo'), ['travessas', 'prumos', 'vidro', 'cabo'] as const, PADRAO.tipo),
    acabamento: pick(q.get('acab'), ['escovado', 'polido'] as const, PADRAO.acabamento),
    aplicacao: pick(q.get('onde'), ['escada', 'sacada', 'mezanino', 'piscina'] as const, PADRAO.aplicacao),
    local: pick(q.get('local'), ['interno', 'externo'] as const, PADRAO.local),
    metros: Number.isFinite(m) && m >= METROS.min && m <= METROS.max ? m : PADRAO.metros,
    criancas: q.get('kids') === '1',
  }
}
export function toParams(c: Config) {
  const q = new URLSearchParams({ tipo: c.tipo, acab: c.acabamento, onde: c.aplicacao, local: c.local, m: String(c.metros) })
  if (c.criancas) q.set('kids', '1')
  return q
}
