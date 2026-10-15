// Perguntas gerais (home + /faq/). Respostas diretas, só com fatos confirmados.
import { SITE } from './site'

export type QA = { q: string; a: string }

export const FAQ_GERAL: QA[] = [
  { q: 'Quanto custa um corrimão de inox em Belo Horizonte?', a: 'Depende do modelo (parede, com prumos, com travessas), da liga (304 ou 316), do diâmetro e da espessura do tubo e da quantidade de curvas e patamares. Mande fotos e a medida aproximada pelo WhatsApp e respondemos com uma estimativa; o valor fechado sai depois da medição no local.' },
  { q: 'Como peço o orçamento?', a: `Pelo WhatsApp ${SITE.whatsappDisplay}, com fotos do local e a medida aproximada em metros lineares, ou pelo formulário de orçamento do site. Depois agendamos a medição para fechar a proposta.` },
  { q: 'Quais as formas de pagamento?', a: `O sinal, que reserva a fabricação, pode ser pago em dinheiro, Pix ou cartão. As condições do restante vão escritas na proposta.` },
  { q: 'Qual o prazo de entrega?', a: 'Depois da aprovação e da medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis, conforme o tamanho do projeto. O prazo do seu pedido vai escrito na proposta.' },
  { q: 'Vocês instalam em obra já pronta?', a: 'Sim. A maioria das nossas instalações acontece em obra acabada, com fixação por chumbador e sapata flangeada, sem quebra-quebra.' },
  { q: 'O inox pode enferrujar?', a: 'Inox 304 e 316 não corroem em uso normal. Pontos alaranjados quase sempre são partículas de ferro da obra depositadas na superfície e saem com limpeza adequada. O que enferruja de verdade é o inox 430 vendido como "inox" em propostas muito baratas — material que não usamos.' },
  { q: 'Emitem nota fiscal e atendem condomínios e empresas?', a: 'Sim. Emitimos nota fiscal, faturamos para CNPJ e fazemos proposta formal por item, no formato que síndicos e construtoras precisam.' },
  { q: 'Qual a altura certa do guarda-corpo e do corrimão?', a: 'Guarda-corpo de sacada, varanda e mezanino: no mínimo 1,10 m (NBR 14718). Corrimão de escada: 92 cm da quina do degrau (NBR 9050), com um segundo tubo a 70 cm em rampas.' },
  { q: 'Inox 304 ou 316?', a: 'O 304 atende escadas internas e áreas externas comuns em BH. O 316 resiste melhor a cloro e maresia e é o indicado na beira da piscina e na sauna.' },
  { q: 'Em quais cidades vocês atendem?', a: 'Belo Horizonte, Nova Lima, Contagem, Betim, Sabará, Santa Luzia, Lagoa Santa, Ribeirão das Neves, Vespasiano, Ibirité e Brumadinho.' },
  { q: 'Onde fica a Alfa Inox?', a: `Na ${SITE.address.street}, bairro ${SITE.address.district}, em Belo Horizonte. Atendimento de segunda a sábado, das 8h às 17h, pelo WhatsApp ${SITE.whatsappDisplay} ou pelo telefone ${SITE.phoneDisplay}.` },
  { q: 'Vocês fazem guarda-corpo de vidro?', a: 'Fazemos o conjunto completo: estrutura de inox, vidro laminado ou temperado, ferragens e instalação. Em área elevada indicamos vidro laminado.' },
]
