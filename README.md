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

## Marca e compartilhamento

Arte original em `Logo/`. Assets derivados (versionados) em `public/marca/`:

| Arquivo | Uso |
|---|---|
| `alfa-inox-horizontal.webp` | Cabeçalho (fundo claro) |
| `alfa-inox-icone.png` | Monograma com alpha — favicon, rodapé, cartões sociais |
| `alfa-inox-vertical.webp` | Reserva para peças verticais |

**Atenção:** o wordmark original é azul-marinho e **some em fundo escuro**. Por isso o
rodapé e os cartões sociais usam `LogoEscuro` — monograma + wordmark em texto vivo.

Ícones (`app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`) são o monograma sobre
um ladrilho grafite, para ler bem na aba do navegador em tema claro e escuro.

### Cartões de compartilhamento (WhatsApp, Facebook, LinkedIn)

31 cartões 1200×630 em `public/og/` — um por página. Regerar:

```bash
# baixe Archivo (700/800) e Inter (400/600) em .woff2 para uma pasta
OG_FONTS=/caminho/para/fonts node --experimental-strip-types scripts/build-og.mjs
```

O script lê `lib/servicos.ts`, `lib/areas.ts` e `lib/blog.ts`, monta todos os cartões
numa única página HTML, tira **um** screenshot com o Chrome e fatia o resultado — por
isso rodar leva ~1 min mesmo gerando 31 imagens. Média de 82 KB por cartão, bem abaixo
do limite de pré-visualização do WhatsApp.

Ao adicionar um serviço, cidade ou artigo, rode o script de novo: o nome do cartão
segue o padrão `servico-<slug>`, `area-<slug>`, `post-<slug>`.

## SEO — o que já está pronto

- `sitemap.xml` e `robots.txt` gerados no build
- Canonical em todas as páginas, Open Graph, títulos e descriptions únicos
- JSON-LD: `HomeAndConstructionBusiness` (NAP + horário + área atendida),
  `Service`, `FAQPage`, `BlogPosting`, `BreadcrumbList`, `ImageGallery`
- Nomes de arquivo de imagem e `alt` descritivos em português (SEO de imagens)
- Open Graph + Twitter Card com imagem própria por página, e `manifest.webmanifest`
- Páginas locais por cidade em `/areas-atendidas/<cidade>/`

## Deploy

Cloudflare Workers Builds a partir deste repositório:

- **Build command:** `npm run build`
- **Output directory:** `out`

**Importante:** o `wrangler deploy` só publica o que estiver em `out/`, e `out/` é
gerado pelo build. Se o *Build command* estiver vazio no painel, o deploy falha com
`assets.directory ... does not exist`.

Localmente: `npm run deploy` (roda o build e publica em seguida).
