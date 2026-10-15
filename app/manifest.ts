import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Corrimão e Guarda-Corpo em Aço Inox`,
    short_name: SITE.name,
    description: 'Corrimão, guarda-corpo e acessibilidade em aço inox em Belo Horizonte e região.',
    lang: 'pt-BR',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b7a94',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
