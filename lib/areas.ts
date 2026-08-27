export type Area = {
  slug: string
  nome: string
  tipo: 'capital' | 'cidade'
  descricao: string
  bairros: string[]
  distancia?: string
}

export const AREAS: Area[] = [
  {
    slug: 'belo-horizonte',
    nome: 'Belo Horizonte',
    tipo: 'capital',
    descricao:
      'Nossa base fica na Avenida Américo Vespúcio, no bairro Aparecida, e atendemos toda a capital — da região Central e Savassi ao Belvedere, Buritis, Pampulha, Barreiro e Venda Nova.',
    bairros: [
      'Savassi', 'Lourdes', 'Funcionários', 'Santo Agostinho', 'Belvedere', 'Mangabeiras',
      'Sion', 'Buritis', 'Estoril', 'Gutierrez', 'Anchieta', 'Cidade Jardim',
      'Pampulha', 'Ouro Preto', 'Castelo', 'Planalto', 'Serra', 'Cidade Nova',
      'Santa Efigênia', 'Floresta', 'Aparecida', 'Caiçara', 'Barreiro', 'Venda Nova',
    ],
  },
  {
    slug: 'nova-lima',
    nome: 'Nova Lima',
    tipo: 'cidade',
    distancia: '20 km do centro de BH',
    descricao:
      'Atendemos Nova Lima e todo o Vetor Sul, com forte presença nos condomínios fechados da região — onde guarda-corpo de vidro com inox e corrimão de escada em áreas de vista são os pedidos mais frequentes.',
    bairros: ['Vila da Serra', 'Vale do Sereno', 'Alphaville', 'Jardim Canadá', 'Village Terrasse', 'Centro'],
  },
  {
    slug: 'contagem',
    nome: 'Contagem',
    tipo: 'cidade',
    distancia: '20 km do centro de BH',
    descricao:
      'Atendemos Contagem em obras residenciais e, com frequência, em galpões, indústrias e prédios comerciais que precisam de guarda-corpo, escada de acesso e adequação de acessibilidade.',
    bairros: ['Eldorado', 'Cidade Industrial', 'Riacho das Pedras', 'Nova Contagem', 'Centro', 'Água Branca'],
  },
  {
    slug: 'betim',
    nome: 'Betim',
    tipo: 'cidade',
    distancia: '30 km do centro de BH',
    descricao:
      'Cobrimos Betim para projetos residenciais e comerciais, incluindo adequação à NBR 9050 em prédios de uso coletivo e substituição de guarda-corpos de ferro corroídos.',
    bairros: ['Centro', 'Angola', 'Jardim Teresópolis', 'Icaivera', 'Vianópolis'],
  },
  {
    slug: 'sabara',
    nome: 'Sabará',
    tipo: 'cidade',
    distancia: '25 km do centro de BH',
    descricao:
      'Atendemos Sabará com fabricação sob medida para escadas de casas em terreno inclinado — muito comum na região —, onde o corrimão calandrado resolve lances irregulares.',
    bairros: ['Centro', 'Roça Grande', 'Sabará Centro Histórico', 'Pompéu'],
  },
  {
    slug: 'santa-luzia',
    nome: 'Santa Luzia',
    tipo: 'cidade',
    distancia: '25 km do centro de BH',
    descricao:
      'Atendemos Santa Luzia e o vetor norte da região metropolitana em projetos residenciais, condomínios e comércio.',
    bairros: ['São Benedito', 'Centro', 'Frimisa', 'Palmital'],
  },
  {
    slug: 'lagoa-santa',
    nome: 'Lagoa Santa',
    tipo: 'cidade',
    distancia: '35 km do centro de BH',
    descricao:
      'Atendemos Lagoa Santa e Confins, com demanda concentrada em casas de condomínio, áreas de piscina e varandas — situações em que indicamos o inox AISI 316.',
    bairros: ['Centro', 'Condomínios da Lagoa', 'Várzea', 'Joá'],
  },
  {
    slug: 'ribeirao-das-neves',
    nome: 'Ribeirão das Neves',
    tipo: 'cidade',
    distancia: '30 km do centro de BH',
    descricao:
      'Atendemos Ribeirão das Neves em obras residenciais e comerciais, com medição no local e instalação sem custo adicional de deslocamento.',
    bairros: ['Centro', 'Justinópolis', 'Veneza'],
  },
  {
    slug: 'vespasiano',
    nome: 'Vespasiano',
    tipo: 'cidade',
    distancia: '30 km do centro de BH',
    descricao:
      'Atendemos Vespasiano e região do aeroporto para corrimão, guarda-corpo e gradis em inox.',
    bairros: ['Centro', 'Morro Alto', 'Nova Pampulha'],
  },
  {
    slug: 'ibirite',
    nome: 'Ibirité',
    tipo: 'cidade',
    distancia: '25 km do centro de BH',
    descricao:
      'Atendemos Ibirité e o vetor oeste da região metropolitana, em projetos residenciais e comerciais.',
    bairros: ['Centro', 'Durval de Barros', 'Marilândia'],
  },
  {
    slug: 'brumadinho',
    nome: 'Brumadinho',
    tipo: 'cidade',
    distancia: '45 km do centro de BH',
    descricao:
      'Atendemos Brumadinho e região, com foco em casas de campo, áreas de piscina e varandas com vista — cenários em que o guarda-corpo de vidro com inox se paga em conforto visual.',
    bairros: ['Centro', 'Casa Branca', 'Condomínios da região'],
  },
]

export const findArea = (slug: string) => AREAS.find((a) => a.slug === slug)
