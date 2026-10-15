// Saudação pela cidade do visitante. O HTML do servidor sempre traz "Belo Horizonte" (é o que o Google indexa);
// o navegador pergunta /api/geo/ (geolocalização por IP da Cloudflare, aproximada) e troca o nome da cidade
// só quando é uma cidade que atendemos E que tem página própria em /areas-atendidas/. Qualquer outra resposta
// mantém o texto padrão, sem aviso. A Cloudflare às vezes devolve nomes sem acento ("Sabara", "Ibirite"):
// por isso a comparação ignora acentos e caixa.
import { AREAS } from './areas'

export type VisitorCity = { name: string; slug: string }

export const norm = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim()

const KNOWN = new Map<string, VisitorCity>(AREAS.map((a) => [norm(a.nome), { name: a.nome, slug: a.slug }]))

/** Mapeia a resposta de geolocalização para uma cidade atendida, ou null. Exige Minas Gerais. */
export function matchCity(city?: string | null, region?: string | null): VisitorCity | null {
  if (!city) return null
  if (region && !['minas gerais', 'mg'].includes(norm(region))) return null
  return KNOWN.get(norm(city)) ?? null
}

export const CITY_KEY = 'alfa-visitor-city'
let pending: Promise<VisitorCity | null> | null = null

/** Uma requisição por aba (sessionStorage); nunca lança erro. */
export function getVisitorCity(): Promise<VisitorCity | null> {
  if (pending) return pending
  pending = (async () => {
    try {
      const cached = sessionStorage.getItem(CITY_KEY)
      if (cached !== null) return cached ? (JSON.parse(cached) as VisitorCity) : null
    } catch {}
    try {
      const res = await fetch('/api/geo/', { cache: 'no-store' })
      const data = res.ok ? ((await res.json()) as { city?: string; region?: string }) : {}
      const match = matchCity(data.city, data.region)
      try { sessionStorage.setItem(CITY_KEY, match ? JSON.stringify(match) : '') } catch {}
      return match
    } catch {
      return null
    }
  })()
  return pending
}
