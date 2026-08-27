# Alfa Inox — site institucional

Site da **Alfa Inox**, fabricante de corrimão, guarda-corpo e acessibilidade em aço inox
em Belo Horizonte/MG. Construído para crescimento orgânico (SEO local + conteúdo).

## Stack

- **Next.js 16** (App Router) com `output: 'export'` → HTML 100% estático
- **Sem framework de CSS** — design system próprio em `app/globals.css`
- **Fontes self-hosted** via `next/font` (Archivo + Inter), zero requisição externa
- Deploy: **Cloudflare Workers** (assets estáticos), domínio `alfainoxbh.com.br`

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

## SEO — o que já está pronto

- `sitemap.xml` e `robots.txt` gerados no build
- Canonical em todas as páginas, Open Graph, títulos e descriptions únicos
- JSON-LD: `HomeAndConstructionBusiness` (NAP + horário + área atendida),
  `Service`, `FAQPage`, `BlogPosting`, `BreadcrumbList`, `ImageGallery`
- Nomes de arquivo de imagem e `alt` descritivos em português (SEO de imagens)
- Páginas locais por cidade em `/areas-atendidas/<cidade>/`

## Deploy

Cloudflare Workers Builds a partir deste repositório:

- **Build command:** `npm run build`
- **Output directory:** `out`

Ou manualmente: `npx wrangler deploy`
