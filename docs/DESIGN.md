# Alfa Inox — Design system

A página é uma escada com o seu corrimão: um trilho de aço escovado desce pela margem esquerda (desktop) e cada título de seção "apoia" num suporte redondo. O que vende são as fotos reais das obras; o resto é carvão, cinza-aço e muito respiro. Fonte única dos tokens: `app/globals.css` (`:root`) + `app/sections.css`.

## Marca (Logo/2026)

- Logo horizontal: `public/brand/logo.svg` (cores, fundo claro) · `public/brand/logo-dark.svg` (branco, rodapé) · `public/brand/logo-on-dark.svg` (cores sobre escuro: A petróleo, cartões OG) · símbolo `public/brand/mark.svg` / `mark-512.png` (schema).
- Componente único: `components/Logo.tsx` (lê `public/brand/` via `lib/brand.ts`). Nenhuma página referencia o arquivo do logo direto.
- Favicons em `public/`: `favicon.ico`, `favicon.svg`, `favicon-16x16/32x32/48x48.png`, `apple-touch-icon.png` (180), `android-chrome-192x192/512x512.png`; manifest em `app/manifest.ts`.
- Pacote completo (vertical, wordmark, PNG 3200 px, variações) em `Logo/2026/`. O logo antigo continua em `Logo/*.PNG` só como histórico.

## Cor

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#0B7A94` petróleo (marca) | **Só** CTAs (WhatsApp, orçamento) e estado selecionado do configurador |
| `--accent-press` | `#086579` | hover/pressionado do CTA |
| `--accent-on-dark` | `#7FCADB` | links sobre carvão |
| `--ink` / `--graphite` | `#2E3A40` carvão (marca) | texto principal, faixas escuras, hero |
| `--ink-2` | `#435157` | texto secundário (8,6:1 no fundo) |
| `--muted` | `#5A676E` | legendas (5,4:1) |
| `--steel` | `#8E999F` | traços, ícones discretos |
| `--hair` / `--hair-2` | `#D5DBDE` / `#E6EAEC` | divisórias |
| `--ground` | `#F4F6F7` | fundo |
| `--surface` | `#FFFFFF` | seções brancas, cartões de formulário |
| rodapé | `#232C31` | |

Contraste verificado: branco sobre `--accent` 4,97:1 · `--ink` sobre `--ground` 10,8:1 · axe 0 violações em todas as páginas-modelo.

## Tipografia

- **Títulos:** Archivo variável com eixo de largura, `font-stretch: 112%`, peso 700, tracking −0,02 a −0,03em (eco do letreiro quadrado e largo do logo). Auto-hospedada por `next/font`.
- **Texto:** fonte do sistema (`system-ui` → SF no iPhone/Mac, Roboto no Android). Zero download, leitura nativa.
- Escala: h1 `clamp(2.35rem → 5rem)` (hero `→ 4.25rem`), h2 `clamp(1.8rem → 2.9rem)`, h3 `clamp(1.15rem → 1.35rem)`, corpo 17px / 1,6, lede `clamp(1.08rem → 1.28rem)`. Medida de texto ≤ 70ch.

## Espaço, forma, sombra

- Escala 4/8: `--s-1…--s-10` = 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Seção: `clamp(64px, 9vw, 128px)`. Largura máxima 1240 px; margem 16 px no celular, 32 px a partir de 720 px.
- Raios angulares (como o "A"): `--r-sm 4`, `--r 8`, `--r-lg 12`, `--r-btn 8`. Chips de filtro são as únicas pílulas.
- Sombras: `--shadow-1` (cartões de formulário), `--shadow-2` (menu suspenso). Sem sombras duras.

## Movimento

- Curvas: `--ease-out cubic-bezier(.23,1,.32,1)`, `--ease-io cubic-bezier(.77,0,.175,1)`.
- Botões: `scale(.97)` no toque, 160 ms. Hover só em `(hover: hover) and (pointer: fine)`.
- Assinatura: o trilho lateral "é polido" conforme a rolagem (`animation-timeline: scroll()`, só transform; sem suporte = trilho estático).
- Seções entram com opacidade + 14 px (600 ms), só se `prefers-reduced-motion: no-preference`; conteúdo visível sem JS.
- Configurador: troca de modelo com fade de 260 ms. Saudação por cidade: fade de opacidade.

## Componentes

- **Hero da home** (`.hero3`): foto real em tela cheia (até 88svh no desktop; no celular ocupa a primeira tela acima da barra fixa), véu carvão suave embaixo/à esquerda (sem diagonal, sem formas). Título grande à esquerda; no desktop a linha de apoio + CTAs ficam numa coluna estreita à direita, alinhada à base, com um filete fino em cima. Pôster LCP em AVIF/WebP com prioridade alta. H1 com a cidade do visitante (`<CityName>`).
- **Linhas de serviço** (`.rows/.row`): miniatura + título + resumo + seta — índice, não parede de cartões.
- **Galeria** (`components/portfolio/`): alvenaria em colunas, filtros com estado na URL (`?tipo=`), visualizador com teclado e gesto.
- **Passos** (`.steps`): cinco degraus que sobem da esquerda para a direita no desktop, com o perfil de aço embaixo de cada degrau.
- **Formulário** (`components/OrcamentoForm.tsx`): campos ≥ 50 px, 16 px de fonte (sem zoom no iOS), erros que dizem o que fazer, falha → mesmo pedido pronto no WhatsApp.
- **Barra fixa no celular** (`.bar`): WhatsApp (acento) · Ligar · Orçamento, com `safe-area-inset-bottom`; o `body` reserva a altura.
- **Configurador** (`components/configurador/`): desenho técnico SVG (vista lateral, cotas, aço escovado x polido), ficha com altura/liga/norma, envio ao WhatsApp ou ao formulário.

## Não fazer

Gradiente em texto, "eyebrow" acima de títulos, números inventados, depoimentos sem fonte, ícones genéricos em grade de cartões, segunda cor de destaque.
