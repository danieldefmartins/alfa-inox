// Worker do site (produção `alfa-inox` e preview): serve os arquivos estáticos de out/ e responde /api/geo/
// com a cidade do visitante (geolocalização por IP da Cloudflare). Só /api/* passa por aqui primeiro
// (assets.run_worker_first); todas as outras requisições vão direto para os arquivos estáticos.
const worker = {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === '/api/geo' || url.pathname === '/api/geo/') {
      const cf = request.cf || {}
      return Response.json(
        { city: cf.city || '', region: cf.region || '', regionCode: cf.regionCode || '' },
        { headers: { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex' } },
      )
    }
    return env.ASSETS.fetch(request)
  },
}

export default worker
