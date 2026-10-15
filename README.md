# Alfa Inox — site institucional

Site da **Alfa Inox**, fabricante de corrimão, guarda-corpo e acessibilidade em aço inox
em Belo Horizonte/MG. Construído para crescimento orgânico (SEO local + conteúdo).

## Stack

- **Next.js 16** (App Router) com `output: 'export'` → HTML 100% estático
- **Sem framework de CSS** — design system próprio em `app/globals.css`
- **Fontes:** títulos em Archivo (self-hosted via `next/font`), texto na fonte do sistema
- Deploy: **Cloudflare Workers** (assets estáticos), domínio `alfainoxbh.com.br` (apex, **sem** www)

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera ./out
```

## Estrutura de conteúdo

Todo o conteúdo editorial vive em `lib/`, sem CMS:

| Arquivo | O que controla |
|---|---|
| `lib/site.ts` | NAP (nome, endereço, telefone), horário, redes sociais |
| `lib/servicos.ts` | Páginas de serviço: copy, modelos, ficha técnica, FAQ |
| `lib/areas.ts` | Cidades atendidas → páginas locais de SEO |
| `lib/blog.ts` | Artigos do blog (HTML inline) |
| `lib/photos.json` | Manifesto de fotos (gerado — **não editar à mão**) |

### Adicionar fotos

1. Jogue os `.jpg` originais em `fotos/`
2. Adicione uma linha em `scripts/photos.map.json`:
   `["<nome-do-arquivo-sem-extensão>", "<slug-seo>", "<categoria>", "<texto-alt>", "<residencial|comercial>", ["tags"]]`
3. Rode `node scripts/build-photos.mjs`

O script gera WebP em 400/800/1600 px, extrai dimensões e cria o placeholder LQIP.
Categorias válidas: `corrimao-inox`, `guarda-corpo-inox`, `guarda-corpo-vidro`,
`acessibilidade`, `portoes-gradis`. A tag `destaque` promove a foto para a home.

### Adicionar um artigo

Acrescente um objeto em `POSTS` (`lib/blog.ts`). O `sitemap.xml`, o schema
`BlogPosting` e os links "continue lendo" se atualizam sozinhos.

## Marca e compartilhamento

Logo 2026 (pacote completo em `Logo/2026/`; o logo antigo fica em `Logo/*.PNG` só como histórico).
Um único componente desenha a marca: `components/Logo.tsx`, que lê `public/brand/` no build (`lib/brand.ts`).

| Arquivo | Uso |
|---|---|
| `public/brand/logo.svg` | Cabeçalho (horizontal colorido, viewBox recortado) |
| `public/brand/logo-dark.svg` | Rodapé e fundos escuros (branco) |
| `public/brand/mark.svg`, `mark-512.png` | Símbolo — schema `logo` |
| `public/favicon.*`, `apple-touch-icon.png`, `android-chrome-*.png` | Favicons do pacote |

Para trocar o logo, substitua esses arquivos e rode `npm run build`. Cores: petróleo `#0B7A94` (só CTAs, em
`--accent` no `app/globals.css`) e carvão `#2E3A40`. Tokens completos em `docs/DESIGN.md`.

### Cartões de compartilhamento (WhatsApp, Facebook, LinkedIn)

31 cartões 1200×630 em `public/og/` — um por página, com o logo novo. Regerar: `npm run og` (Playwright).
O nome segue `servico-<slug>`, `area-<slug>`, `post-<slug>`.

## SEO — o que já está pronto

- `sitemap.xml` e `robots.txt` gerados no build
- Canonical em todas as páginas, Open Graph, títulos e descriptions únicos
- JSON-LD: `HomeAndConstructionBusiness` (NAP + horário + área atendida),
  `Service`, `FAQPage`, `BlogPosting`, `BreadcrumbList`, `ImageGallery`
- Nomes de arquivo de imagem e `alt` descritivos em português (SEO de imagens)
- Open Graph + Twitter Card com imagem própria por página, e `manifest.webmanifest`
- Páginas locais por cidade em `/areas-atendidas/<cidade>/`

## Domínio

O host canônico é o **apex** (`alfainoxbh.com.br`), definido em `lib/site.ts` → `SITE.url`.
É dele que saem canonical, `sitemap.xml`, `robots.txt` e as URLs absolutas de `og:image`.

Se um dia o site passar a usar `www`, mude **só** essa linha e rode o build — mas só
depois que o `www` existir no DNS, senão as prévias de link param de carregar (o
WhatsApp e o Facebook buscam o `og:image` pela URL absoluta anunciada na página).

Dois ajustes ficam no painel da Cloudflare, não no repositório:

- **SSL/TLS → Edge Certificates → Always Use HTTPS: On** — sem isso o `http://`
  é servido em texto puro e o Chrome marca "Não seguro".
- **DNS: `www` → apex** (CNAME proxiado ou Redirect Rule), para quem digitar o
  endereço com `www` não bater em erro de conexão.

## Deploy

Cloudflare Workers Builds a partir deste repositório:

- **Build command:** `npm run build`
- **Output directory:** `out`

**Por que existe um `postinstall`:** o Workers Builds executa o *deploy command*
mesmo com o *build command* vazio no painel — e aí o `wrangler deploy` falha com
`assets.directory ... does not exist`, porque `out/` nunca foi gerado. O
`scripts/ci-build.mjs` roda no `postinstall` e gera `out/` quando detecta CI
(`WORKERS_CI`, `CF_PAGES`, `CI` ou `GITHUB_ACTIONS`), tornando o deploy
independente da configuração do painel. Fora de CI ele não faz nada, então
`npm install` local continua instantâneo.

Se preferir o caminho convencional, basta preencher **Build command: `npm run build`**
no painel — o `postinstall` detecta que `out/` já existe e pula.

Preview: `npm run preview:deploy` (worker `preview-alfa-inox`, só workers.dev). Produção só pelo merge na `main`, com OK do dono. Ver `HANDOFF.md`.
