import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Corrimão e Guarda-Corpo em Aço Inox`,
    short_name: SITE.name,
    description: 'Fabricação e instalação de corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte e região.',
    lang: 'pt-BR',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#0d1117',
    icons: [
      { src: '/marca/icone-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/marca/icone-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/marca/icone-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
