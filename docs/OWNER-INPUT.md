# O que falta do dono (Alfa Inox)

Respostas já recebidas em 14/10/2026: telefone fixo (31) 2298-1234 é real (está no site); a Alfa Inox tem conta no 360; o sinal pode ser pago em dinheiro, Pix ou cartão (está no site).

## 1. 360 CRM — formulário (só configuração, o código já está pronto)
Preencher em `lib/site.ts` → `SITE.crm`:
- `formSlug` e `workspaceId` do formulário de orçamento publicado no workspace da Alfa Inox;
- os ids dos campos (`first_name`, `phone`, `service`, …) exatamente como no formulário publicado;
- o texto de consentimento do formulário no 360 precisa ser **idêntico** a `CONSENT_TEXT` em `lib/site.ts` (o site recusa enviar se o texto mudar — falha fechada);
- o campo de serviço deve aceitar estas opções (ou ser texto livre): Corrimão de Inox, Guarda-Corpo de Inox, Guarda-Corpo de Vidro, Acessibilidade, Portões e Gradis, Condomínios e Empresas, Outro / não sei ainda;
- para fotos: campos `photo_1..3` do tipo arquivo no formulário.
Depois: trocar o fixture sintético de `scripts/crm.test.mjs` pelo JSON real (GET do formulário), rodar `npm test` e mandar **um lead de teste** pelo preview.
- Branding no 360 (Settings → General): subir `public/brand/mark-512.png` e a cor `#0B7A94`.

## 2. Pagamento e processo (não inventamos nada disso)
- Qual o **percentual** do sinal? Existe parcelamento no cartão? Em quantas vezes? O restante é pago quando (entrega, instalação)?
- Os prazos de **7 a 15 dias úteis** (do site antigo) estão certos?
- A **medição no local é gratuita** sempre, ou só para orçamento aprovado? O site antigo dizia "sem custo"; o novo diz só "medimos no local" até confirmar.
- Existe **garantia** formal (quanto tempo, o que cobre)? O site antigo citava "garantia formal"; tiramos até confirmar.
- **ART** sob demanda é verdade? (Tiramos do site.)
- Faturam para CNPJ com nota fiscal — confirmado? (Mantido, veio do site antigo.)

## 3. Prova social (não publicamos nada sem fonte)
- Link do **Google Business Profile** e nota/quantidade de avaliações reais — para mostrar avaliações com nome e data.
- Os 3 depoimentos do site antigo ("Magno Coelho", "Rita de Cássia", "Síndico — Condomínio") foram **removidos**: não há fonte. Se forem avaliações reais do Google, mande o link.
- "500+ obras" e "centenas de obras" foram removidos. Se houver um número real (ex.: notas emitidas), podemos usar.

## 4. Fotos
- **Cidade de cada obra** (para a legenda "serviço + cidade" na galeria). Hoje só uma foto tem cidade conhecida (BH).
- Fotos sem a marca d'água "SHOT ON REDMI" (algumas têm no canto) e, se possível, uma foto **horizontal de alta resolução** para o topo da home no desktop.
- Foto da oficina e da equipe (para "A empresa").

## 5. Redes e cadastros
- Instagram/Facebook `@alfainoxbh` existem e são esses endereços? (estão no schema `sameAs`).
- CNPJ e razão social (para rodapé e política de privacidade).
- Responsável técnico / registro CREA, se houver.

## 6. Publicação (precisa do OK)
- Aprovar o preview e autorizar o merge da branch `premium-rebuild` na `main` (o Workers Builds publica sozinho).
- Cloudflare (painel): **Always Use HTTPS = ON** (hoje `http://` não redireciona), registro `www` → apex, AI bots = Allow.
