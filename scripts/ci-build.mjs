/**
 * Garante que `out/` exista antes do `wrangler deploy`.
 *
 * O Cloudflare Workers Builds executa o *deploy command* mesmo quando o
 * *build command* está vazio no painel — e aí o wrangler falha com
 * "assets.directory ... does not exist". Rodando o build no postinstall,
 * o deploy funciona independentemente da configuração do painel.
 *
 * Só roda em CI: localmente `npm install` continua instantâneo.
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'

const emCI = ['WORKERS_CI', 'CF_PAGES', 'CI', 'GITHUB_ACTIONS'].some((v) => process.env[v])

if (!emCI) {
  process.exit(0)
}

if (fs.existsSync('out/index.html')) {
  console.log('[ci-build] out/ já existe — pulando build')
  process.exit(0)
}

console.log('[ci-build] CI detectado, gerando out/ com `next build`…')
execSync('npx --no-install next build', { stdio: 'inherit' })
