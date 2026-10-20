# Product

<!-- impeccable:product-schema 1 -->

> Written by an agent from the lead's brief (14/10/2026) and the repository. No interview was possible in this run; facts marked *(inferido)* came from the brief/repo and should be confirmed by the owner.

## Platform

web

## Users

- Moradores de Belo Horizonte e região metropolitana reformando ou terminando casa/sobrado: precisam de corrimão de escada, guarda-corpo de sacada, mezanino ou piscina. Chegam pelo celular (Google, Instagram, indicação) e querem ver obras reais e falar no WhatsApp.
- Síndicos, administradoras, construtoras e comércios: precisam de orçamento formal, adequação à NBR 9050 (rampas, barras de apoio) e execução sem parar o prédio.

## Product Purpose

Site institucional e de geração de orçamentos da Alfa Inox. Sucesso = conversa no WhatsApp (canal principal no Brasil) ou formulário de orçamento recebido, e posição no Google para "corrimão inox BH", "guarda-corpo de vidro BH" e variações por cidade.

## Positioning

Fabricação própria em Belo Horizonte (oficina na Rua Cantagalo, 1449, Aparecida): mede no local, fabrica sob medida em inox 304/316 e instala com equipe própria — não revende kit pronto.

## Operating Context

Visitante no celular, muitas vezes na própria obra, comparando 2–3 orçamentos. Manda foto do lance pelo WhatsApp. Síndico leva proposta para assembleia.

## Capabilities and Constraints

- Next.js 16 static export, Cloudflare Workers (`alfa-inox`), deploy via Workers Builds na `main`.
- 100% pt-BR. WhatsApp e telefone principal: (31) 2298-0072 (conectado ao 360). (31) 98777-0220 é o WhatsApp pessoal do Daniel. Seg–Sex 9h–21h, Sáb 9h–14h.
- Formulário: envia ao 360 CRM (workspace Alfa Inox, formulário `alfa-inox-orcamento`); se o 360 falhar, oferece o mesmo pedido no WhatsApp. Quem marca o consentimento recebe o WhatsApp automático "Pedido pelo site".
- Logo novo em produção: o logo é um componente trocável (`components/Logo.tsx` + `public/brand/`).

## Brand Commitments

- Paleta neutra grafite + aço escovado até o logo novo sair; um único acento, só em CTAs, isolado numa variável CSS.
- Fotos reais de obras (53 em `fotos/`), nunca banco de imagem.

## Evidence on Hand

- 53 fotos reais de obras (`fotos/`, processadas em `public/fotos/`).
- "15 anos / desde 2010" (dito pelo dono).
- NÃO existem: avaliações citáveis, contagem de obras, prêmios, certificações. Não inventar.

## Product Principles

1. Prova antes de promessa: a obra fotografada vende mais que qualquer adjetivo.
2. WhatsApp em um toque, de qualquer ponto da página.
3. Técnica explicada em português simples (norma, liga, espessura) — é o que separa fábrica de revenda.
4. Nada de número ou depoimento que o dono não confirmou.

## Accessibility & Inclusion

Serviço de acessibilidade (NBR 9050) é linha de produto: o próprio site precisa ser exemplar — contraste AA, alvos ≥ 44 px, foco visível, movimento reduzido respeitado.
