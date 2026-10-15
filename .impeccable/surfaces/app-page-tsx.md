---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/servicos","app/areas-atendidas","app/blog","app/orcamento","app/galeria"]
---

# Surface brief — site Alfa Inox (home + modelos internos)

Scope: all public templates (home, serviço, cidade, artigo, orçamento, galeria). Visitor mode: Persuade (galeria = Experience).
Audience/job: morador ou síndico da Grande BH, no celular, quer ver obra real e chamar no WhatsApp. Proof: 53 fotos reais, ficha técnica (liga, tubo, norma), endereço da oficina. Constraints: pt-BR, sem números/depoimentos inventados, logo trocável, acento único isolado em --accent.
Run note: subagent run without an attendee; the decision page could not be answered, so the assigned direction was built code-led and the substitution is disclosed in HANDOFF.md.

## Direction contract
THESIS: The page is a staircase with its handrail: one continuous brushed-steel rail line runs down the page and every section is a "lance" that ends on a "patamar". Refuses the category default of a dark hero with stats + a wall of icon cards.
OWN-WORLD: Cool steel-white ground (#F3F4F5), graphite ink #1B232B, steel greys for rules and secondary text; graphite bands for the closing CTA and footer. Archivo semi-expanded for headlines, Inter for text. Photos are the colour. One green accent only on WhatsApp/CTA buttons. Hairline rails (steel line with round "suportes") instead of cards and borders.
STORY: See a real installed rail in seconds, understand "fábrica própria em BH, mede, fabrica, instala", see the work, read the technical facts, tap WhatsApp.
FIRST VIEWPORT: Full-bleed real photo (mezanino com guarda-corpo) ~78vh desktop, ~64vh phone; H1 bottom-left in large Archivo on a graphite scrim: "Corrimão e guarda-corpo em inox em <Cidade>." One line below, WhatsApp primary + "Ver obras" secondary. The rail line starts under the hero and continues down the page.
FORM: candidate 6 of 7 (staircase-and-handrail page), seed: 80a15e11.
SIGNATURE: the steel rail on the left margin polishes with scroll progress (CSS scroll-driven, static fallback); each section heading sits on a round rail support.
