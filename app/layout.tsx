import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import './sections.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Jsonld from '@/components/Jsonld'
import { StickyBar, SiteEffects } from '@/components/SiteClient'
import { SITE, PAGAMENTO, socialMeta } from '@/lib/site'
import { AREAS } from '@/lib/areas'
import { SERVICOS } from '@/lib/servicos'

// Archivo com eixo de largura: títulos semi-expandidos, no espírito do letreiro quadrado do logo.
const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--f-display', display: 'swap' })
// Texto corrido na fonte do sistema (SF no iPhone/Mac, Roboto no Android): zero download, leitura nativa.

const TITLE = 'Corrimão e Guarda-Corpo em Inox em BH | Alfa Inox'
const DESC = 'Corrimão, guarda-corpo de inox e de vidro e acessibilidade NBR 9050 em BH. Oficina própria desde 2010: medimos, fabricamos e instalamos. Peça no WhatsApp.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: '%s | Alfa Inox' },
  description: DESC,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  ...socialMeta({ card: 'default', titulo: TITLE, descricao: DESC, url: '/' }),
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } as Metadata['robots'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  formatDetection: { telephone: false },
  category: 'Construção civil',
}

export const viewport: Viewport = {
  themeColor: '#f4f6f7',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.legalName,
  description:
    'Fabricação e instalação de corrimão, guarda-corpo de inox e de vidro, acessibilidade NBR 9050, portões e gradis em aço inox em Belo Horizonte e região metropolitana.',
  url: `${SITE.url}/`,
  telephone: SITE.phone,
  email: SITE.email,
  image: [`${SITE.url}/og/default.jpg`],
  logo: `${SITE.url}/brand/mark-512.png`,
  foundingDate: String(SITE.foundedYear),
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: PAGAMENTO.join(', '),
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
  contactPoint: [
    { '@type': 'ContactPoint', telephone: `+${SITE.whatsapp}`, contactType: 'sales', areaServed: 'BR', availableLanguage: 'Portuguese', contactOption: 'WhatsApp' },
    { '@type': 'ContactPoint', telephone: SITE.phone, contactType: 'customer service', areaServed: 'BR', availableLanguage: 'Portuguese' },
  ],
  areaServed: AREAS.map((a) => ({ '@type': 'City', name: a.nome, containedInPlace: { '@type': 'State', name: 'Minas Gerais' } })),
  knowsLanguage: 'pt-BR',
  sameAs: [SITE.social.instagram, SITE.social.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços em aço inox',
    itemListElement: SERVICOS.map((s) => ({ '@type': 'Offer', itemOffered: { '@id': `${SITE.url}/servicos/${s.slug}/#service` } })),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={display.variable}>
      <body>
        <Header />
        <main id="conteudo" className="escada">{children}</main>
        <Footer />
        <StickyBar />
        <SiteEffects />
        <Jsonld data={localBusiness} />
        <Jsonld data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE.url}/#website`,
          url: `${SITE.url}/`,
          name: SITE.name,
          inLanguage: 'pt-BR',
          publisher: { '@id': `${SITE.url}/#business` },
        }} />
      </body>
    </html>
  )
}
