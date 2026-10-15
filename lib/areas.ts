// Cidades atendidas → /areas-atendidas/<slug>/. Cada cidade tem texto próprio (tipo de imóvel, relevo,
// pedidos típicos), não troca-nome. Nenhuma obra, cliente ou avaliação inventada: as fotos mostradas são
// obras reais da Alfa Inox na Grande BH, sem afirmar que foram feitas naquela cidade.
// Estas são também as únicas cidades que a saudação do hero (lib/geo.ts) pode mostrar.
export type Area = {
  slug: string
  nome: string
  tipo: 'capital' | 'cidade'
  distancia?: string
  descricao: string
  contexto: string[]
  pedidos: string[]
  bairros: string[]
  fotos: string[]
  faq: { q: string; a: string }[]
}

export const AREAS: Area[] = [
  {
    slug: 'belo-horizonte',
    nome: 'Belo Horizonte',
    tipo: 'capital',
    descricao:
      'Nossa oficina fica na Avenida Américo Vespúcio, no bairro Aparecida, e atendemos a capital inteira — da região Centro-Sul ao Barreiro, da Pampulha a Venda Nova.',
    contexto: [
      'BH é uma cidade de morro: muita casa tem escada externa na entrada, garagem em desnível e sobrado com escada interna em U. É o terreno onde o corrimão sob medida faz diferença, porque quase nenhum lance é igual ao outro.',
      'Nos prédios da Centro-Sul e da Pampulha, os pedidos mais comuns são troca de corrimão de escada de emergência, guarda-corpo de varanda e adequação de rampa à NBR 9050 nas áreas comuns.',
    ],
    pedidos: ['Corrimão de escada externa de entrada', 'Guarda-corpo de vidro em varanda com vista', 'Corrimão de parede em escada de prédio', 'Rampa com corrimão duplo em condomínio'],
    bairros: [
      'Savassi', 'Lourdes', 'Funcionários', 'Santo Agostinho', 'Belvedere', 'Mangabeiras',
      'Sion', 'Buritis', 'Estoril', 'Gutierrez', 'Anchieta', 'Cidade Jardim',
      'Pampulha', 'Ouro Preto', 'Castelo', 'Planalto', 'Serra', 'Cidade Nova',
      'Santa Efigênia', 'Floresta', 'Aparecida', 'Caiçara', 'Barreiro', 'Venda Nova',
    ],
    fotos: ['corrimao-inox-escada-entrada-externa', 'guarda-corpo-vidro-cobertura-piscina-deck', 'corrimao-parede-inox-escada-condominio', 'guarda-corpo-inox-escada-interna-sala', 'corrimao-inox-curvo-area-externa-condominio', 'guarda-corpo-inox-academia-comercial'],
    faq: [
      { q: 'Onde fica a oficina da Alfa Inox em BH?', a: 'Na Avenida Américo Vespúcio, 105, bairro Aparecida, região Noroeste de Belo Horizonte. Atendemos de segunda a sábado, das 8h às 17h.' },
      { q: 'Vocês atendem prédio na região Centro-Sul?', a: 'Sim. Atendemos condomínios e prédios comerciais em toda a capital, com proposta formal por item para a assembleia.' },
    ],
  },
  {
    slug: 'nova-lima',
    nome: 'Nova Lima',
    tipo: 'cidade',
    distancia: '20 km do centro de BH',
    descricao:
      'Atendemos Nova Lima e o Vetor Sul, onde se concentram condomínios fechados e prédios altos com varandas de vista para a serra.',
    contexto: [
      'Em Nova Lima predominam casas de condomínio com pé-direito alto, mezanino e áreas de piscina, e prédios no Vila da Serra e no Vale do Sereno com varandas amplas. É onde mais aparece pedido de guarda-corpo de vidro com inox.',
      'Muitos condomínios têm regras de fachada e de horário de obra. Organizamos a instalação dentro dessas regras e o projeto segue o padrão aprovado pela administração.',
    ],
    pedidos: ['Guarda-corpo de vidro em varanda e cobertura', 'Guarda-corpo de mezanino em casa de condomínio', 'Corrimão e guarda-corpo em área de piscina (inox 316)', 'Escada interna com guarda-corpo de vidro'],
    bairros: ['Vila da Serra', 'Vale do Sereno', 'Alphaville', 'Jardim Canadá', 'Village Terrasse', 'Centro'],
    fotos: ['guarda-corpo-vidro-inox-area-externa', 'guarda-corpo-inox-mezanino-vao-interno', 'guarda-corpo-vidro-escada-interna', 'guarda-corpo-vidro-cobertura-piscina-deck', 'guarda-corpo-inox-escada-moderna', 'guarda-corpo-vidro-inox-escada'],
    faq: [
      { q: 'Vocês seguem as regras de obra do condomínio em Nova Lima?', a: 'Sim. Combinamos horário, acesso de material e padrão de fachada com a administração antes de instalar.' },
      { q: 'Qual vidro usar na varanda de prédio alto?', a: 'Vidro laminado, na espessura definida pelo vão e pela altura. Em área elevada ele é a recomendação técnica, porque continua inteiro mesmo se trincar.' },
    ],
  },
  {
    slug: 'contagem',
    nome: 'Contagem',
    tipo: 'cidade',
    distancia: '20 km do centro de BH',
    descricao:
      'Atendemos Contagem em obras residenciais e, com frequência, em galpões, indústrias e prédios comerciais da região da Cidade Industrial e do Eldorado.',
    contexto: [
      'Contagem mistura bairros residenciais com muita casa de dois pavimentos e uma das maiores áreas industriais de Minas. Em empresa, o pedido costuma ser guarda-corpo de mezanino, escada de acesso e adequação de rampa e banheiro à NBR 9050.',
      'Nas casas, a troca de corrimão e grade de ferro enferrujados por inox é o serviço mais comum.',
    ],
    pedidos: ['Guarda-corpo de mezanino em galpão', 'Corrimão em escada de acesso industrial', 'Barras de apoio em banheiro PCD de empresa', 'Troca de grade de ferro por gradil de inox'],
    bairros: ['Eldorado', 'Cidade Industrial', 'Riacho das Pedras', 'Nova Contagem', 'Centro', 'Água Branca'],
    fotos: ['guarda-corpo-inox-corredor-mezanino', 'guarda-corpo-inox-travessas-horizontais-area-externa', 'barras-apoio-inox-banheiro-acessivel-nbr9050', 'gradil-inox-fechamento-parede', 'corrimao-inox-escada-externa-residencial', 'guarda-corpo-inox-fachada-comercial'],
    faq: [
      { q: 'Vocês atendem indústria em Contagem?', a: 'Sim. Fazemos guarda-corpo, corrimão e adequação de acessibilidade em galpões e prédios comerciais, com nota fiscal e proposta por item.' },
      { q: 'Dá para instalar em mezanino metálico?', a: 'Dá. A fixação muda — em estrutura metálica usamos chapa de base e parafusos em vez de chumbador — e isso é definido na medição.' },
    ],
  },
  {
    slug: 'betim',
    nome: 'Betim',
    tipo: 'cidade',
    distancia: '30 km do centro de BH',
    descricao:
      'Cobrimos Betim para projetos residenciais e comerciais, incluindo adequação à NBR 9050 em prédios de uso coletivo e troca de guarda-corpos de ferro corroídos.',
    contexto: [
      'Betim tem muitos prédios comerciais, clínicas e escolas que passam por vistoria de acessibilidade. Corrimão duplo de rampa e barras de apoio de banheiro são pedidos frequentes.',
      'Nas residências, aparecem bastante sobrados com escada externa lateral, onde o corrimão de parede em inox resolve o apoio sem ocupar a largura da escada.',
    ],
    pedidos: ['Corrimão duplo de rampa (NBR 9050)', 'Barras de apoio em clínicas e escolas', 'Corrimão de parede em escada externa', 'Substituição de guarda-corpo de ferro'],
    bairros: ['Centro', 'Angola', 'Jardim Teresópolis', 'Icaivera', 'Vianópolis'],
    fotos: ['corrimao-inox-rampa-acesso-predio', 'barra-apoio-inox-banheiro-curva', 'corrimao-inox-escada-entrada-residencia', 'guarda-corpo-inox-escada-externa-lateral', 'corrimao-parede-inox-escada-interna', 'guarda-corpo-inox-varanda-comercial'],
    faq: [
      { q: 'Vocês fazem adequação de acessibilidade para vistoria em Betim?', a: 'Sim. Executamos corrimão duplo de rampa e barras de apoio nas medidas da NBR 9050 e entregamos memorial descritivo das medidas executadas.' },
    ],
  },
  {
    slug: 'sabara',
    nome: 'Sabará',
    tipo: 'cidade',
    distancia: '25 km do centro de BH',
    descricao:
      'Atendemos Sabará com fabricação sob medida para escadas de casas em terreno inclinado, muito comuns na cidade, onde o corrimão calandrado resolve lances irregulares.',
    contexto: [
      'Sabará é uma cidade colonial de ladeiras: casa com escada externa estreita, degraus de alturas diferentes e muro de arrimo. É o cenário em que corrimão de kit não encaixa e o corrimão medido e calandrado faz sentido.',
      'No centro histórico, imóveis tombados podem ter regras de intervenção na fachada. Nesses casos, conversamos antes sobre o que pode ser instalado e onde.',
    ],
    pedidos: ['Corrimão em escada externa de ladeira', 'Corrimão curvo acompanhando escada irregular', 'Corrimão de parede em escada estreita', 'Guarda-corpo em laje e terraço'],
    bairros: ['Centro', 'Roça Grande', 'Centro Histórico', 'Pompéu'],
    fotos: ['corrimao-inox-curvo-jardim', 'corrimao-inox-escada-externa-jardim', 'corrimao-parede-inox-lance-escada', 'corrimao-inox-escada-entrada-externa', 'guarda-corpo-inox-escada-externa-acesso', 'corrimao-parede-inox-escada-caracol'],
    faq: [
      { q: 'Dá para fazer corrimão em escada com degraus irregulares?', a: 'Dá — é para isso que medimos no local. O tubo é calandrado e os prumos são ajustados degrau a degrau para acompanhar a inclinação real.' },
    ],
  },
  {
    slug: 'santa-luzia',
    nome: 'Santa Luzia',
    tipo: 'cidade',
    distancia: '25 km do centro de BH',
    descricao:
      'Atendemos Santa Luzia e o vetor norte da região metropolitana em projetos residenciais, condomínios e comércio.',
    contexto: [
      'Em Santa Luzia o pedido mais comum é residencial: escada interna de sobrado, escada externa de acesso e guarda-corpo de laje e varanda. Nos condomínios horizontais aparecem também gradis de fechamento.',
      'Para quem está construindo, vale chamar antes do acabamento final: dá para deixar a fixação prevista e o corrimão entra limpo depois.',
    ],
    pedidos: ['Guarda-corpo de escada interna de sobrado', 'Corrimão de escada externa', 'Guarda-corpo de laje e varanda', 'Gradil de fechamento em condomínio'],
    bairros: ['São Benedito', 'Centro', 'Frimisa', 'Palmital'],
    fotos: ['guarda-corpo-inox-escada-lance-reto', 'guarda-corpo-inox-escada-degraus-claros', 'gradil-inox-externo-jardim', 'corrimao-inox-escada-externa-area-gourmet', 'guarda-corpo-inox-escada-vao-interno', 'corrimao-inox-escada-interna-clara'],
    faq: [
      { q: 'Posso chamar vocês antes de terminar a obra?', a: 'Pode, e ajuda. Na fase de reboco e piso dá para prever a fixação e o nível do acabamento; o guarda-corpo entra depois, sem retrabalho.' },
    ],
  },
  {
    slug: 'lagoa-santa',
    nome: 'Lagoa Santa',
    tipo: 'cidade',
    distancia: '35 km do centro de BH',
    descricao:
      'Atendemos Lagoa Santa e Confins, com pedidos concentrados em casas de condomínio, áreas de piscina e varandas — situações em que indicamos o inox AISI 316.',
    contexto: [
      'Lagoa Santa cresceu com condomínios de casas amplas, quase sempre com piscina, área gourmet e varanda. Perto de água com cloro, o inox 316 resiste melhor e é o que recomendamos.',
      'Também são comuns escadas externas ligando os níveis do terreno até a área de lazer, onde o corrimão precisa aguentar sol e chuva sem manchar.',
    ],
    pedidos: ['Guarda-corpo de vidro na área da piscina', 'Corrimão de escada de piscina em inox 316', 'Corrimão de escada externa entre níveis do terreno', 'Guarda-corpo de varanda'],
    bairros: ['Centro', 'Condomínios da Lagoa', 'Várzea', 'Joá'],
    fotos: ['corrimao-inox-escada-piscina', 'guarda-corpo-vidro-cobertura-piscina-deck', 'corrimao-inox-escada-externa-area-gourmet', 'guarda-corpo-vidro-inox-area-externa', 'corrimao-inox-curvo-jardim', 'guarda-corpo-inox-escada-externa-lateral-casa'],
    faq: [
      { q: 'Por que inox 316 perto da piscina?', a: 'O 316 tem molibdênio na liga e resiste melhor ao cloro e aos produtos de tratamento da água. O 304 pode manchar com o tempo nesse ambiente.' },
    ],
  },
  {
    slug: 'ribeirao-das-neves',
    nome: 'Ribeirão das Neves',
    tipo: 'cidade',
    distancia: '30 km do centro de BH',
    descricao:
      'Atendemos Ribeirão das Neves em obras residenciais e comerciais, com medição no local antes de fechar o valor.',
    contexto: [
      'Em Ribeirão das Neves, Justinópolis e Veneza, a maior parte dos pedidos é residencial: casas que ganharam o segundo andar e precisam de escada com corrimão e guarda-corpo de laje.',
      'Em comércio de rua, aparecem portões sociais e grades de proteção em inox no lugar do ferro.',
    ],
    pedidos: ['Corrimão e guarda-corpo de escada nova', 'Guarda-corpo de laje', 'Portão social em inox', 'Grade de proteção de janela'],
    bairros: ['Centro', 'Justinópolis', 'Veneza'],
    fotos: ['guarda-corpo-inox-escada-piso-colorido', 'guarda-corpo-inox-escada-parede-vermelha', 'corrimao-inox-escada-entrada-residencia', 'gradil-inox-fechamento-parede', 'guarda-corpo-inox-escada-portao-seguranca', 'corrimao-parede-inox-escada-residencia'],
    faq: [
      { q: 'Vocês atendem Justinópolis?', a: 'Sim, Justinópolis e os demais distritos de Ribeirão das Neves estão na nossa área de atendimento.' },
    ],
  },
  {
    slug: 'vespasiano',
    nome: 'Vespasiano',
    tipo: 'cidade',
    distancia: '30 km do centro de BH',
    descricao:
      'Atendemos Vespasiano e a região do Aeroporto de Confins para corrimão, guarda-corpo e gradis em inox.',
    contexto: [
      'O vetor norte cresceu com loteamentos e condomínios novos e com empresas ligadas ao aeroporto. Em casa, o pedido típico é escada interna e guarda-corpo de varanda; em empresa, corrimão de escada e acessibilidade.',
    ],
    pedidos: ['Guarda-corpo de escada interna', 'Guarda-corpo de varanda', 'Corrimão e acessibilidade em prédio comercial', 'Gradil de fechamento'],
    bairros: ['Centro', 'Morro Alto', 'Nova Pampulha'],
    fotos: ['guarda-corpo-inox-escada-granito', 'guarda-corpo-inox-escada-interna-residencial', 'corrimao-inox-rampa-acessibilidade-duplo', 'gradil-inox-varanda-comercial-coberta', 'guarda-corpo-inox-escada-granito-interna', 'corrimao-inox-corredor-interno'],
    faq: [
      { q: 'Vocês atendem empresas perto do aeroporto?', a: 'Sim. Atendemos empresas da região de Vespasiano e Confins com proposta formal e nota fiscal.' },
    ],
  },
  {
    slug: 'ibirite',
    nome: 'Ibirité',
    tipo: 'cidade',
    distancia: '25 km do centro de BH',
    descricao:
      'Atendemos Ibirité e o vetor oeste da região metropolitana, em projetos residenciais e comerciais.',
    contexto: [
      'Em Ibirité os pedidos são principalmente de casas: escada interna e externa, guarda-corpo de laje e portão. Muitas escadas já existem e recebem o corrimão depois de prontas — o que pede medição cuidadosa de cada degrau.',
    ],
    pedidos: ['Corrimão de escada já pronta', 'Guarda-corpo de laje', 'Portão social em inox', 'Corrimão de parede'],
    bairros: ['Centro', 'Durval de Barros', 'Marilândia'],
    fotos: ['corrimao-parede-inox-escada-interna', 'corrimao-inox-escada-granito-interna', 'guarda-corpo-inox-escada-externa-acesso', 'corrimao-inox-parede-escada-predial', 'gradil-inox-externo-jardim', 'corrimao-inox-escada-interna-madeira'],
    faq: [
      { q: 'Dá para colocar corrimão em escada que já está pronta?', a: 'Dá. É o caso mais comum: medimos cada degrau, fabricamos na oficina e fixamos com chumbador, sem quebrar o revestimento.' },
    ],
  },
  {
    slug: 'brumadinho',
    nome: 'Brumadinho',
    tipo: 'cidade',
    distancia: '45 km do centro de BH',
    descricao:
      'Atendemos Brumadinho e a região de Casa Branca, com foco em casas de campo, áreas de piscina e varandas com vista para a serra.',
    contexto: [
      'Em Brumadinho as casas costumam ser de campo, com varanda grande, área de piscina e escada externa em pedra ou madeira. Guarda-corpo de vidro com inox preserva a vista, e o corrimão de inox aguenta tempo e umidade sem perder o acabamento.',
      'Como é mais longe da oficina, organizamos medição e instalação em visitas planejadas.',
    ],
    pedidos: ['Guarda-corpo de vidro em varanda com vista', 'Corrimão em escada externa de pedra', 'Corrimão e guarda-corpo em área de piscina', 'Guarda-corpo de deck'],
    bairros: ['Centro', 'Casa Branca', 'Condomínios da região'],
    fotos: ['guarda-corpo-vidro-inox-area-externa', 'corrimao-inox-escada-externa-jardim', 'guarda-corpo-vidro-cobertura-piscina-deck', 'corrimao-inox-curvo-jardim', 'guarda-corpo-vidro-verde-interno', 'corrimao-inox-escada-piscina'],
    faq: [
      { q: 'Vocês vão até Casa Branca?', a: 'Vamos. Agendamos a medição e a instalação em visitas planejadas para a região de Brumadinho.' },
    ],
  },
]

export const findArea = (slug: string) => AREAS.find((a) => a.slug === slug)
