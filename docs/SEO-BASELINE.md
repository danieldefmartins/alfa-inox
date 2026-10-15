# SEO baseline — alfainoxbh.com.br (antes do rebuild premium)

Coletado em 14/10/2026. Fonte: Google Search Console (`sc-domain:alfainoxbh.com.br`, API via `mcp-search-console`), auditoria `audit-site.mjs` (build e site ao vivo) e autocomplete do Google (pt-BR, BR).

## Search Console — últimos 90 dias (14/07 → 12/10/2026)

Dados começam em 26/08/2026 (site novo).

| Métrica | Valor |
|---|---|
| Cliques | 18 |
| Impressões | 604 |
| CTR | 3,0% |
| Posição média | 4,2 |
| Dispositivo | celular 431 impr. / desktop 172 / tablet 1 |
| País | Brasil 580 impr. (EUA 21) |

**Páginas com impressão:** praticamente só a home (597 impr., 17 cliques). Uma URL `http://…/servicos/guarda-corpo-inox/` (com **http**) teve 8 impressões → o HTTP não redireciona para HTTPS (ver abaixo).

**Consultas principais (impressões · posição):**

| Consulta | Impr. | Pos. |
|---|---|---|
| inox | 66 | 2,4 |
| alfa inox | 62 | 2,1 (6 cliques) |
| inox -304 | 20 | 2,4 |
| inox em bh | 10 | 2,8 |
| aço inox bh | 7 | **18,6** (página 2) |
| corrimão de inox | 6 | 2,2 |
| guarda corpo | 6 | 5,2 |
| aço inox belo horizonte | 5 | 1,0 |
| serralheiro inox / serralheria inox | 4 / 3 | 1,0 |
| alpha inox / alinox | 3 / 4 | 8,7 / 7,5 (variações do nome) |
| guarda corpo inox | 3 | 4,3 |
| grade de inox | 2 | 8,0 |
| guarda corpo de vidro | 2 | **16,0** (página 2) |

Leitura: a marca e "inox"/"inox em BH" já aparecem; as buscas de serviço (corrimão, guarda-corpo, vidro) quase não têm impressão porque **as páginas internas não estão indexadas**.

**Sitemap:** `https://alfainoxbh.com.br/sitemap.xml` enviado em 14/10/2026, 31 URLs enviadas, **0 indexadas**, 0 erros.

**Inspeção de URL:**

| URL | Situação |
|---|---|
| `/` | Enviada e indexada (último rastreio 09/10) |
| `/servicos/corrimao-inox/` | Descoberta — atualmente não indexada |
| `/servicos/guarda-corpo-de-vidro/` | Descoberta — atualmente não indexada |
| `/areas-atendidas/nova-lima/` | Descoberta — atualmente não indexada |
| `/blog/quanto-custa-corrimao-de-inox/` | Descoberta — atualmente não indexada |

## Auditoria (antes)

- **Build:** 6 ERROS — `img-heavy` (ícone PNG de 438 KB no rodapé) e 5 `placeholder` (falso positivo: a palavra "todo" em português casa com "TODO" no script); 196 avisos (heading pulando nível, títulos > 60, descrições > 155, imagens não-lazy, sem `llms.txt`, páginas finas).
- **Ao vivo:** 7 ERROS — os mesmos + `https-redirect`: **`http://alfainoxbh.com.br/` não redireciona para https** (serve em texto puro). Aviso: `www.alfainoxbh.com.br` não resolve.

## Pesquisa de palavras-chave (autocomplete Google, pt-BR)

- **corrimão de inox** → para escada, escada externa, banheiro, com vidro, piscina, rampa, "preço", "perto de mim", escada interna
- **corrimão inox preço** → "preço metro", "bh preço", "escada inox preço", "aço inox preço"
- **corrimão inox bh** → "preço", "fotos", "belo horizonte mg" (atenção: "Corrimão Inox BH" também é nome de concorrente)
- **guarda corpo inox** → com vidro, escada, "preço metro", sacada, quadrado, preto, vertical, com cabo de aço, acessibilidade
- **guarda corpo de vidro preço** → m2, metro linear, varanda, escada, sacada, piscina
- **barra de apoio inox** → banheiro, 80 cm, 70 cm, 40 cm, 304, chuveiro
- **corrimão rampa nbr 9050** → "altura corrimão rampa nbr 9050"; **corrimão escada nbr 9050**
- **portão de inox** → garagem, preço, pequeno, com vidro, para escada, de correr
- **guarda corpo sacada** → vidro, inox, alumínio, barato

## Mapa palavra-chave → página (uma principal por página)

| Página | Palavra-chave principal | Secundárias |
|---|---|---|
| `/` | corrimão e guarda-corpo em inox em BH | inox em bh, aço inox bh, alfa inox |
| `/servicos/corrimao-inox/` | corrimão de inox em BH | corrimão de inox para escada (interna/externa), corrimão curvo |
| `/servicos/guarda-corpo-inox/` | guarda-corpo de inox | guarda corpo inox escada, sacada, vertical, cabo de aço |
| `/servicos/guarda-corpo-de-vidro/` | guarda-corpo de vidro em BH | guarda corpo de vidro sacada / piscina / escada |
| `/servicos/acessibilidade-nbr-9050/` | corrimão NBR 9050 e barra de apoio inox | altura corrimão rampa nbr 9050, barra de apoio 80 cm |
| `/servicos/portoes-e-gradis-inox/` | portão de inox | gradil de inox, grade de inox, portão de escada |
| `/servicos/condominios-e-empresas/` | corrimão e guarda-corpo para condomínio | adequação NBR 9050 condomínio |
| `/areas-atendidas/<cidade>/` | corrimão e guarda-corpo de inox em <cidade> | — |
| `/blog/quanto-custa-corrimao-de-inox/` | preço corrimão inox metro | corrimão inox preço metro linear |
| `/blog/inox-304-ou-316/` | inox 304 ou 316 | inox -304 (consulta real do GSC) |
| `/blog/altura-guarda-corpo-nbr-14718/` | altura guarda-corpo NBR 14718 | — |
| `/blog/corrimao-nbr-9050-acessibilidade/` | corrimão NBR 9050 | — |
| `/blog/guarda-corpo-vidro-ou-inox/` | guarda-corpo de vidro ou inox | — |
| `/monte-seu-guarda-corpo/` | monte seu guarda-corpo (ferramenta) | — |

## O que comparar em 28 dias

`compare_search_periods` (GSC) a partir do dia em que o site novo for publicado: páginas indexadas (meta: as 34 do sitemap), impressões de "corrimão de inox", "guarda corpo de vidro", "aço inox bh" (hoje posição 18,6) e cliques no WhatsApp.
