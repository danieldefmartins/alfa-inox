# HANDOFF — Alfa Inox, rebuild premium (branch `premium-rebuild`)

**Preview:** https://preview-alfa-inox.danieldefmartins.workers.dev (worker `preview-alfa-inox`, só workers.dev, sem domínio).
**Produção** (alfainoxbh.com.br, worker `alfa-inox`, Workers Builds a partir da `main`): **não publicado** — precisa do OK do dono para o merge.

## O que mudou

**Marca (Logo/2026)** — pacote do logo novo versionado em `Logo/2026/` (o antigo fica em `Logo/*.PNG` como histórico; `public/marca/` saiu).
- Cabeçalho: `public/brand/logo.svg` (horizontal colorido, viewBox recortado ao desenho). Rodapé e fundos escuros: `public/brand/logo-dark.svg` (branco). Schema/ícone: `public/brand/mark.svg` + `mark-512.png`.
- Tudo passa por `components/Logo.tsx` (lê `public/brand/` no build via `lib/brand.ts`). Para trocar o logo: substituir esses 3 arquivos, nada mais.
- Favicons do pacote em `public/` (ico, svg, 16/32/48, apple-touch 180, android 192/512) + `app/manifest.ts` (theme `#0B7A94`).
- 31 cartões OG refeitos com o logo novo em cores sobre escuro (`public/brand/logo-on-dark.svg`), foto em tela cheia + véu carvão, sem diagonal (`npm run og` → `public/og/*.jpg`, Playwright).
- `og:image`/`twitter:image` usam `OG_ORIGIN` no build: `npm run preview:deploy` aponta para o workers.dev (para o dono ver os cartões novos); o build de produção usa https://alfainoxbh.com.br. Canonicals sempre no domínio.
- Paleta: petróleo `#0B7A94` só em CTAs; carvão `#2E3A40` como tinta e faixas escuras. Tokens em `docs/DESIGN.md`.

**15/10 — fotos, endereço, avaliações:**
- Hero agora usa foto de banco licenciada (escada moderna em edifício corporativo, `public/estoque/`, AVIF/WebP), recorte por tela. Fotos de banco só em hero e áreas editoriais (faixa "Design moderno", topo de Corrimão, Vidro, Condomínios e Lagoa Santa) — nunca na galeria nem como obra. Regras e pesos em `docs/photo-sources.md`; originais fora do git (`fotos/estoque-original/`).
- A foto real do corrimão duplo (escolha anterior do dono) foi para a coluna "Comercial e condomínios".
- +12 fotos de obras confirmadas pelo dono (galeria agora com 65): faixa de catálogo e marca d'água cortadas, metadados removidos, sem ampliar as pequenas. `scripts/build-photos.mjs` ficou incremental (não apaga mais `public/fotos`).
- Endereço trocado para o do Google: R. Cantagalo, 1449 – Aparecida, CEP 31230-770, geo -19.8878277, -43.9537465; `sameAs` + `hasMap` com o perfil; link "Ver no Google Maps" (sem mapa embutido).
- Nota Google "5,0 · 14 avaliações" no hero, rodapé e contato; seção "O que dizem no Google" na home (Daniel M., Zélia M., Nathalia M., Carlos M.) e uma avaliação por serviço; texto literal, sem schema de review.
- Cartão OG padrão com a foto do hero.

**Hero (escolha anterior do dono):** foto do corrimão duplo de inox na área de lazer de um condomínio (`corrimao-inox-rampa-acessibilidade-duplo`, AVIF/WebP), recorte ajustado por tela; linha de apoio: projetos residenciais e comerciais com o design moderno dos projetos de alto padrão. Nova seção "Para a sua casa e para o seu negócio" (residencial x comercial, com fotos reais) + "Design moderno, como nos projetos de alto padrão" (inox com vidro, linhas retas, escovado/espelhado, fixação discreta — só o que as fotos e os modelos fabricados mostram). Meta description da home e `llms.txt` atualizados; cartão OG padrão com a mesma foto.

**Serviços na home** — grade editorial com fotos grandes (2 destaques ~480 px + 4 de 380 px no desktop; carrossel com rolagem lateral e cartões 4:5 no celular), uma foto real por serviço sem repetir o hero nem a 1ª linha de obras; as 6 imagens verificadas com rolagem real.

**Design** — mundo próprio (não parece Prime/EDX): título Archivo semi-expandido (eco do letreiro do logo), corpo na fonte do sistema, hero com foto real em tela cheia e véu carvão suave (título grande à esquerda, linha + CTAs numa coluna à direita alinhada à base) — a versão com painel diagonal foi descartada pelo dono, índice de serviços em linhas (não cartões), passos em degraus, trilho de aço na margem que "é polido" com a rolagem.

**Conversão** — WhatsApp é o CTA principal em todo lugar (mensagem pronta por página/serviço/cidade); barra fixa no celular (WhatsApp · Ligar · Orçamento); telefone fixo (31) 2298-1234 nos links `tel:`, NAP e schema.
- Formulário `/orcamento/` (e embutido em cada serviço): integração 360 CRM completa (`lib/crm.ts`, portado do Prime: token `GET /forms/:slug`, `/direct-submit` ≥ 2 s após o token, `/direct-uploads` para fotos, atribuição UTM/gclid, consentimento LGPD opcional e desmarcado). **Ligado em 20/10/2026**: `crm.formSlug = alfa-inox-orcamento`, workspace Alfa Inox (snapshot do formulário real em `scripts/fixtures/360-form.json`). Com slug vazio o formulário volta a entregar o pedido pronto no WhatsApp. Se o CRM falhar depois de ligado, o erro oferece o mesmo pedido no WhatsApp e o telefone (nunca falha em silêncio). Testes: `npm test` (14 passando, fetch simulado, nenhum lead real).
- "Como funciona" + **formas de pagamento do sinal** (dinheiro, Pix, cartão) — só o que o dono confirmou.

**Recurso "uau"** — `/monte-seu-guarda-corpo/`: configurador (inox com travessas, prumos verticais, inox + vidro, cabo de aço · escovado/polido · escada/sacada/mezanino/piscina · interno/externo · metragem · crianças). Desenho técnico SVG ao vivo com cotas (1,10 m / 0,92 m, vão ≤ 11 cm), ficha com liga sugerida (316 na piscina), vidro laminado em área elevada e aviso de travessa com criança; envia ao WhatsApp ou pré-preenche o formulário. Estado na URL. Sem preço automático (não há preços aprovados). SVG puro, zero JS extra no LCP; teaser na home.

**Geo** — `worker/site.mjs` responde `/api/geo/` com `request.cf` (`run_worker_first: ["/api/*"]` em `wrangler.jsonc` e `wrangler.preview.jsonc`; nome `alfa-inox` mantido). O hero diz "Corrimão e guarda-corpo em inox em **<Cidade>**." só para as 11 cidades com página (comparação sem acento: "Sabara" → Sabará), região Minas Gerais; HTML do servidor mantém "Belo Horizonte". A linha de prova vira "Atendemos <Cidade> — ver a página da cidade".

**Conteúdo** (pt-BR, honesto)
- 6 páginas de serviço com ~900–1.300 palavras: o que é, para quem, modelos, respostas diretas (altura, liga, vidro…), o que muda o preço, ficha técnica, obras, processo, formulário, FAQ, cidades, artigos relacionados. Uma palavra-chave por página (`keyword` em `lib/servicos.ts`, mapa em `docs/SEO-BASELINE.md`).
- 11 páginas de cidade com texto próprio (relevo, tipo de imóvel, pedidos comuns, bairros, FAQ local) — sem obra ou cliente inventado.
- Novas: `/faq/`, `/monte-seu-guarda-corpo/`, `/privacidade/` (LGPD). Reescritas: `/sobre/`, `/contato/`, `/galeria/`, `/servicos/`, `/areas-atendidas/`, `/blog/`.
- Galeria estilo Prime: alvenaria, filtros com estado na URL (`?tipo=corrimao|guarda-corpo|vidro|escadas|acessibilidade|comercial|gradis` — só os que as fotos sustentam), visualizador com teclado/gesto, legendas "serviço + descrição" e cidade **só quando conhecida** (`CIDADE_DA_FOTO` em `lib/photos.ts`).
- Removido por não ter fonte: 3 depoimentos, "500+ obras", "centenas de obras", "inox certificado", "medição sem custo", "garantia formal", "ART", história da oficina "com um torno".
- `public/llms.txt`, `robots` liberando buscadores e IAs (bloqueia só `/api/`), sitemap com imagens da galeria, JSON-LD: HomeAndConstructionBusiness (logo novo, telefone fixo + ContactPoint WhatsApp, `paymentAccepted`), WebSite, Service (`@id` por serviço), FAQPage, BlogPosting, BreadcrumbList, ImageGallery, ItemList, ContactPage, AboutPage, WebApplication.
- Fotos: miniaturas de 200 px novas (`-200.webp`, pipeline `scripts/build-photos.mjs` atualizado e sem caminho fixo), `srcset` com larguras reais.

## Números (verificados)

- `npm run build` ok · **auditoria `audit-site.mjs out`: 0 ERROS, 0 avisos** (`docs/seo-audit.json`; antes: 6 erros no build, 7 ao vivo).
- **Lighthouse** (`docs/lighthouse.md`; JSON completo da home em `docs/lighthouse/`):

| Modo | Página | Perf | A11y | BP | SEO | LCP |
|---|---|---|---|---|---|---|
| mobile | / | 91 | 100 | 100 | 100 | 3,5 s |
| desktop | / | 100 | 100 | 100 | 100 | 0,8 s |
| mobile | serviço (vidro) | 96 | 100 | 100 | 100 | 2,9 s |
| mobile | cidade (Nova Lima) | 92 | 100 | 100 | 100 | 3,3 s |
| mobile | galeria | 91 | 100 | 100 | 100 | 3,5 s |
| desktop | galeria | 100 | 100 | 100 | 100 | 0,7 s |
| mobile | orçamento | 97 | 100 | 100 | 100 | 2,6 s |
| mobile | configurador | 96 | 100 | 100 | 100 | 2,7 s |
| mobile | artigo | 95 | 100 | 100 | 100 | 3,0 s |

CLS 0 e TBT 0 ms em todas. O LCP mobile simulado (3,3–3,5 s) fica acima da meta de 2,0 s da skill: o limite é o peso total que começa a baixar junto (JS do Next ~160 KB + fonte Archivo 90 KB + foto do hero 57 KB). Próximo passo se quiser < 2,5 s: hero mobile em AVIF e subset da Archivo.
- **Screenshots** 390 e 1440 (+ primeira tela com a barra fixa, + home com saudação "Nova Lima") em `docs/screens/` (JPG): home, serviço, cidade, artigo, orçamento, galeria, configurador, contato. Sem rolagem horizontal, sem erro de console, axe 0 violações (`node scripts/screens.mjs`). Obs.: em capturas de página inteira, uma ou outra miniatura lazy pode aparecer cinza (carregamento); na navegação real carregam.
- Detector impeccable: só falsos positivos (`broken-image` no componente `<Img>`).

## Decisões
- Buscadores e IAs liberados de propósito (bloco 5 da skill).
- Fonte de texto = sistema (performance + cara de app Apple); só os títulos baixam fonte.
- Processo de design: impeccable sem entrevista (agente sem canal com o dono): PRODUCT.md marcado como inferido; direção sorteada (concept-seed `80a15e11`, "escada com corrimão") construída em modo code-led; contrato em `.impeccable/surfaces/app-page-tsx.md`.

## Do dono
Ver `docs/OWNER-INPUT.md` (slug/workspace do 360, percentual do sinal/parcelamento, prazo, medição gratuita?, garantia, avaliações do Google, cidade de cada foto, CNPJ).

## Próximas 5 ações
1. Dono aprova o preview → merge `premium-rebuild` → `main` (Workers Builds publica) → rodar `audit-site.mjs https://alfainoxbh.com.br` (0 erros) e `curl https://alfainoxbh.com.br/api/geo/`.
2. Cloudflare: **Always Use HTTPS = ON** (hoje o http não redireciona), `www` → apex, AI bots Allow. Depois GSC: reenviar sitemap (34 URLs) e pedir indexação das 6 páginas de serviço (hoje "Descoberta – não indexada").
3. ~~Ligar o 360~~ feito em 20/10/2026 (slug, workspace, teste contra o formulário real, lead de teste ao vivo).
4. Google Business Profile: conferir NAP idêntico (fixo + WhatsApp), subir 20+ fotos com legenda serviço + cidade, link com UTM; trazer avaliações reais para o site.
5. Em 28 dias: `compare_search_periods` no GSC contra o baseline (`docs/SEO-BASELINE.md`) e reforçar as páginas em posição 8–20 ("aço inox bh", "guarda corpo de vidro").

## Comandos
`npm run build` · `npm run preview` (wrangler dev :8788) · `npm run preview:deploy` (só preview) · `npm run audit` · `npm test` · `npm run og` · `node scripts/screens.mjs <url> docs/screens` · `node scripts/lighthouse.mjs`
