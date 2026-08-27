export const SITE = {
  name: 'Alfa Inox',
  legalName: 'Alfa Inox — Corrimão e Guarda-Corpo em Aço Inox',
  url: 'https://www.alfainoxbh.com.br',
  tagline: 'Corrimão e guarda-corpo em aço inox em Belo Horizonte',
  foundedYear: 2010,
  yearsInBusiness: 15,
  phone: '+55 31 97237-9813',
  phoneRaw: '+5531972379813',
  phoneDisplay: '(31) 97237-9813',
  whatsapp: '5531972379813',
  email: 'vendas@alfainoxbh.com.br',
  address: {
    street: 'Avenida Américo Vespúcio, 105',
    district: 'Aparecida',
    city: 'Belo Horizonte',
    state: 'MG',
    stateName: 'Minas Gerais',
    postalCode: '31230-580',
    country: 'BR',
  },
  geo: { lat: -19.8869, lng: -43.9483 },
  hours: 'Segunda a sábado, das 8h às 17h',
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '17:00' },
  ],
  social: {
    instagram: 'https://www.instagram.com/alfainoxbh',
    facebook: 'https://www.facebook.com/alfainoxbh',
  },
} as const

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`

export const WA_DEFAULT =
  'Olá! Vim pelo site da Alfa Inox e gostaria de um orçamento de corrimão / guarda-corpo em aço inox.'

export const fullAddress = `${SITE.address.street} — ${SITE.address.district}, ${SITE.address.city}/${SITE.address.state}`

/**
 * Cartão de compartilhamento (WhatsApp, Facebook, LinkedIn, X).
 * Os arquivos são gerados por `node --experimental-strip-types scripts/build-og.mjs`.
 */
export const ogCard = (name: string) => `${SITE.url}/og/${name}.jpg`

export function socialMeta({
  card = 'default', titulo, descricao, url, tipo = 'website',
}: { card?: string; titulo: string; descricao: string; url: string; tipo?: 'website' | 'article' }) {
  const images = [{ url: ogCard(card), width: 1200, height: 630, alt: `${titulo} — ${SITE.name}`, type: 'image/jpeg' }]
  return {
    openGraph: {
      type: tipo,
      locale: 'pt_BR',
      siteName: SITE.name,
      title: titulo,
      description: descricao,
      url: `${SITE.url}${url}`,
      images,
    },
    twitter: { card: 'summary_large_image' as const, title: titulo, description: descricao, images: [ogCard(card)] },
  }
}
