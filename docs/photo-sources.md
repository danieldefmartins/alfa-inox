# Origem das fotos

## 1. Obras da Alfa Inox (galeria, "Obras reais", páginas de serviço e cidade)

| Conjunto | Origem | Arquivos |
|---|---|---|
| 53 fotos `fotos/1000*.jpg` | Fotos de obras enviadas pelo dono (celular) | `public/fotos/<slug>-{200,400,800,1600}.webp` |
| 12 fotos `fotos/web-01…12.jpg` | **Obras da Alfa Inox confirmadas pelo dono em 15/10/2026, coletadas de posts na web** (`~/Downloads/inox/`) | idem |

Tratamento das 12 confirmadas: metadados removidos. `web-01` teve a faixa de catálogo cortada ("46 · SACADA INOX POLIDO"). `web-03` teve a marca d'água do canto inferior direito cortada. `web-08` teve as barras pretas laterais cortadas. As pequenas (até 926 px) só geram tamanhos até a largura original, sem ampliar, e entram só em grades e miniaturas. Legendas sem cidade, que não é conhecida.
**Fora:** `a8azIOqrFj76dFDm3hzuIvTOL5PuDOMQhmDRNDxC.jpeg` é uma imagem 3D (render), não foto de obra, e não é usado.

## 2. Fotos de banco licenciadas (só hero e áreas editoriais)

Fornecidas pelo dono em 15/10/2026 (`~/Downloads/inox/2`, licença de banco de imagens). **Nunca** aparecem na galeria, nunca são legendadas como obra da Alfa Inox e nunca entram no schema `ImageGallery`. O alt descreve a cena de forma neutra. Os originais (5–17 MB) ficam em `fotos/estoque-original/`, que está no gitignore. No site só vão as versões otimizadas, geradas por `python3 ~/.claude/skills/premium-website/scripts/optimize-images.py scripts/estoque.map.json public/estoque` (AVIF + WebP, EXIF removido, dentro dos limites de peso).

| Arquivo publicado | Original | Uso |
|---|---|---|
| `escada-moderna-guarda-corpo-inox-edificio-corporativo` | modern-staircase-in-contemporary-office-building-2026-09-22-00-23-14-utc.jpg | Hero da home no desktop e cartão OG padrão |
| `guarda-corpo-vidro-inox-interior-moderno-colunas` | bright-modern-interior-with-columns-and-glass-rail-2026-09-23-13-16-30-utc.jpeg | Hero da home no celular; topo de "Guarda-corpo de vidro" |
| `escada-saguao-guarda-corpo-inox-alto-padrao` | architectural-staircase-with-metal-railings-and-su-2026-09-21-11-11-03-utc.jpg | Faixa "Design moderno" da home |
| `escada-pedra-corrimao-inox-area-externa` | stone-stairs-with-metal-handrail-leading-upward-2026-09-24-18-02-23-utc.jpg | Topo de "Corrimão de inox" |
| `escadaria-corrimao-inox-duplo-edificio` | abstract-indoor-architecture-stairway-with-metal-h-2026-09-25-08-12-51-utc.jpg | Topo de "Condomínios e empresas" |
| `corrimao-inox-escada-piscina-pastilha-azul` | swimming-pool-detail-with-blue-tile-and-railing-2026-09-24-12-44-51-utc.JPG | Topo da página de Lagoa Santa (piscinas) |

Não usados (ficam guardados): blue-staircase…, close-up-view-of-granite-steps…, indoor-staircase-with-stainless…, staircase-interior-architecture…
`E108ZZST.jpg.avif` (origem desconhecida na web): **não usar**.

Pesos gerados (WebP; o AVIF fica de 15% a 40% menor):

| Arquivo | 480w | 800w | 1200w | 1920w |
|---|---|---|---|---|
| escada-moderna…corporativo | 18 KB | 39 KB | 70 KB | 137 KB |
| guarda-corpo-vidro…colunas | 23 KB | 45 KB | 75 KB | 145 KB |
| escada-saguao…alto-padrao | 18 KB | 39 KB | 70 KB | 147 KB |
| escada-pedra…externa | 83 KB | 142 KB | 224 KB | 436 KB |
| corrimao-inox-escada-piscina… | 42 KB | 112 KB | 227 KB | 369 KB |
| escadaria…edificio | 28 KB | 74 KB | 156 KB | 359 KB |

Todos dentro dos limites da skill (480w 90 KB · 800w 150 KB · 1200w 250 KB · 1920w 450 KB).
