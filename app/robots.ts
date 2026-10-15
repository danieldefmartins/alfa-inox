import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export const dynamic = 'force-static'

// Buscadores E assistentes de IA liberados de propósito (skill premium-website, bloco 5).
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'meta-externalagent', 'DuckAssistBot', 'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: AI_BOTS, allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
