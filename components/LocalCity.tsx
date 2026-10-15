'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getVisitorCity, type VisitorCity } from '@/lib/geo'
import { Pin } from './Icons'

function useVisitorCity() {
  const [city, setCity] = useState<VisitorCity | null>(null)
  useEffect(() => {
    let live = true
    getVisitorCity().then((c) => live && setCity(c))
    return () => { live = false }
  }, [])
  return city
}

/** Nome da cidade do visitante quando atendemos; senão o `fallback` (texto do servidor, o indexado). */
export function CityName({ fallback }: { fallback: string }) {
  const city = useVisitorCity()
  return (
    <span className={city ? 'city-swap' : undefined} key={city?.name ?? fallback}>
      {city?.name ?? fallback}
    </span>
  )
}

/** Linha de prova do hero: "Atendemos <cidade>" com link para a página da cidade; senão o endereço da oficina. */
export function CityProof({ fallback }: { fallback: string }) {
  const city = useVisitorCity()
  if (!city) return <span><Pin size={16} /> {fallback}</span>
  return (
    <Link href={`/areas-atendidas/${city.slug}/`} className="city-swap">
      <Pin size={16} /> Atendemos {city.name} — ver a página da cidade
    </Link>
  )
}
