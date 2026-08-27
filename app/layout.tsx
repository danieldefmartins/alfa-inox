import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Jsonld from '@/components/Jsonld'
import { SITE } from '@/lib/site'

const display = Archivo({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display', display: 'swap' })
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Corrimão e Guarda-Corpo em Aço Inox em BH | Alfa Inox',
    template: '%s | Alfa Inox',
  },
  description:
    'Alfa Inox: 15 anos fabricando e instalando corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte e região. Medição no local e orçamento sem compromisso.',
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Corrimão e Guarda-Corpo em Aço Inox em BH | Alfa Inox',
    description:
      'Fabricação própria e instalação de corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte e região metropolitana.',
    images: [{ url: '/fotos/guarda-corpo-inox-mezanino-vao-interno-1600.webp', width: 1600, height: 900, alt: 'Guarda-corpo de aço inox instalado pela Alfa Inox' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } as Metadata['robots'],
  category: 'Construção civil',
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.legalName,
  description:
    'Fabricação e instalação de corrimão, guarda-corpo, acessibilidade NBR 9050, portões e gradis em aço inox em Belo Horizonte e região metropolitana.',
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/fotos/guarda-corpo-inox-mezanino-vao-interno-1600.webp`,
  foundingDate: String(SITE.foundedYear),
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Dinheiro, Pix, Cartão de crédito, Transferência bancária',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  openingHoursSpecification: SITE.hoursSchema.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: [
    'Belo Horizonte', 'Nova Lima', 'Contagem', 'Betim', 'Sabará', 'Santa Luzia',
    'Lagoa Santa', 'Ribeirão das Neves', 'Vespasiano', 'Ibirité', 'Brumadinho',
  ].map((n) => ({ '@type': 'City', name: n, containedInPlace: { '@type': 'State', name: 'Minas Gerais' } })),
  knowsLanguage: 'pt-BR',
  sameAs: [SITE.social.instagram, SITE.social.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços em aço inox',
    itemListElement: [
      'Corrimão em aço inox', 'Guarda-corpo em aço inox', 'Guarda-corpo de vidro com inox',
      'Acessibilidade NBR 9050', 'Portões e gradis em inox',
    ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n, areaServed: 'Belo Horizonte, MG' } })),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Jsonld data={localBusiness} />
        <Jsonld data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE.url}/#website`,
          url: SITE.url,
          name: SITE.name,
          inLanguage: 'pt-BR',
          publisher: { '@id': `${SITE.url}/#business` },
        }} />
      </body>
    </html>
  )
}
