// Páginas de serviço. Uma palavra-chave principal por página (campo `keyword`), sem canibalizar a home
// ("corrimão e guarda-corpo em inox em BH") nem os artigos do blog.
// ATENÇÃO (auditoria): não use a palavra "todo" em texto visível — o script de auditoria a confunde com "TODO".
export type FAQ = { q: string; a: string }
export type Bloco = { h: string; resposta: string; p?: string[]; lista?: string[] }

export type Servico = {
  slug: string
  nome: string
  navNome: string
  keyword: string
  h1: string
  title: string
  description: string
  resumo: string
  categoriaFotos: string
  /** Foto principal do topo da página (slug de lib/photos.json). */
  capa: string
  intro: string[]
  paraQuem: string[]
  modelos: { nome: string; texto: string }[]
  blocos: Bloco[]
  precoFatores: string[]
  aplicacoes: string[]
  especificacoes: { label: string; valor: string }[]
  faq: FAQ[]
}

export const SERVICOS: Servico[] = [
  {
    slug: 'corrimao-inox',
    nome: 'Corrimão de Inox',
    navNome: 'Corrimão de Inox',
    keyword: 'corrimão de inox em BH',
    h1: 'Corrimão de inox em BH, feito sob medida para a sua escada',
    title: 'Corrimão de Inox em BH: Escada, Parede e Rampa',
    description:
      'Corrimão de inox 304 ou 316 em BH: de parede, de escada com prumos, curvo e duplo para rampa. Medimos no local, fabricamos e instalamos. Peça pelo WhatsApp.',
    resumo: 'De parede, de escada, curvo ou duplo para rampa, em inox escovado ou polido.',
    categoriaFotos: 'corrimao-inox',
    capa: 'corrimao-parede-inox-escada-condominio',
    intro: [
      'Corrimão de inox é o tubo de apoio que acompanha a escada, a rampa ou o corredor para a mão de quem passa. Na Alfa Inox ele é fabricado sob medida em aço inox AISI 304 ou 316, com solda TIG e acabamento escovado ou polido, e instalado pela nossa própria equipe em Belo Horizonte e região.',
      'Cada projeto começa com medição no local, porque degrau irregular, parede fora de esquadro e patamar fora de nível são a regra em escada pronta. É a medição que garante um corrimão que acompanha o lance sem emenda aparente e sem folga na fixação.',
    ],
    paraQuem: [
      'Para quem tem escada em casa ou sobrado e quer um apoio firme que não enferruja nem pede pintura; para condomínios que precisam de corrimão nas escadas de emergência e nas rampas de acesso; e para comércios que vão passar por vistoria e precisam das medidas da NBR 9050.',
      'Também é a troca mais comum que fazemos em escada com corrimão de ferro descascando ou de madeira solta: o inox resolve o apoio e o acabamento de uma vez.',
    ],
    modelos: [
      { nome: 'Corrimão de parede', texto: 'Tubo fixado na alvenaria com suportes de inox. Ideal para escadas de prédio, corredores e lances estreitos onde não cabe prumo.' },
      { nome: 'Corrimão de escada com prumos', texto: 'Tubo superior de 1½" ou 2" apoiado em prumos fixados no degrau ou na lateral da escada. É o modelo mais comum em casas e sobrados.' },
      { nome: 'Corrimão duplo para rampa', texto: 'Duas alturas de tubo (0,92 m e 0,70 m) com prolongamento de 30 cm nas pontas, como pede a NBR 9050.' },
      { nome: 'Corrimão curvo e calandrado', texto: 'Tubo curvado sob medida para escada em curva, caracol e caminho de jardim, sem emenda visível na curva.' },
    ],
    blocos: [
      {
        h: 'Qual a altura certa do corrimão de escada?',
        resposta: 'A NBR 9050 define 92 cm do piso ou da quina do degrau até o topo do tubo. Onde há crianças, cadeirantes ou rampas, a norma pede um segundo tubo a 70 cm.',
        p: ['Além da altura, o tubo precisa ficar a pelo menos 4 cm da parede (para a mão fechar em volta) e ter empunhadura entre 3 e 4,5 cm de diâmetro. Corrimão de escada com mais de um lance deve ser contínuo nos patamares sempre que possível.'],
      },
      {
        h: 'Inox 304 ou 316 para corrimão?',
        resposta: 'Para escada interna e área externa comum em BH, o inox 304 atende com folga. O 316 vale a diferença em beira de piscina, sauna, área com produto químico de limpeza forte ou imóvel no litoral.',
        p: ['O que realmente estraga corrimão barato não é a escolha entre 304 e 316: é tubo de parede fina ou inox 430 vendido como "inox". Na nossa proposta a liga, o diâmetro e a espessura da parede do tubo vêm escritos.'],
      },
      {
        h: 'Escovado ou polido?',
        resposta: 'O escovado (fosco) disfarça marca de mão e risco do dia a dia e é o mais pedido. O polido espelhado brilha mais e combina com projeto moderno, mas mostra digital com mais facilidade.',
      },
    ],
    precoFatores: [
      'Modelo: corrimão de parede é o mais econômico; com prumos e travessas custa mais por metro.',
      'Curvas, patamares e mudanças de direção: cada uma é solda e polimento à mão.',
      'Liga (304 ou 316), diâmetro e espessura da parede do tubo.',
      'Acabamento escovado ou polido espelhado.',
      'Tipo de fixação: concreto é rotina; granito pede broca diamantada; drywall pede reforço.',
    ],
    aplicacoes: [
      'Escadas internas de casas e sobrados',
      'Escadas de acesso e entradas externas',
      'Escadas prediais e áreas comuns de condomínios',
      'Rampas de acessibilidade em prédios e comércios',
      'Corredores, mezaninos e passarelas',
      'Áreas de piscina e áreas gourmet',
    ],
    especificacoes: [
      { label: 'Liga', valor: 'AISI 304 (padrão) ou AISI 316 (piscina, sauna, ambiente agressivo)' },
      { label: 'Diâmetro do tubo', valor: '1½" (38,1 mm) ou 2" (50,8 mm)' },
      { label: 'Espessura da parede', valor: '1,2 mm a 1,5 mm' },
      { label: 'Acabamento', valor: 'Escovado (fosco) ou polido espelhado' },
      { label: 'Altura', valor: '92 cm do piso ou da quina do degrau (NBR 9050)' },
      { label: 'Fixação', valor: 'Chumbador ou parabolt em inox, base flangeada' },
    ],
    faq: [
      { q: 'Quanto custa o metro de corrimão de inox em BH?', a: 'Depende do modelo, do diâmetro do tubo, da liga e da quantidade de curvas. Corrimão de parede simples é a opção mais econômica; corrimão de escada com prumos e travessas custa mais por metro linear. Mande fotos e a medida aproximada pelo WhatsApp para receber uma estimativa; o valor fechado sai depois da medição.' },
      { q: 'Vocês fazem a medição no local?', a: 'Sim. A medição em Belo Horizonte e na região metropolitana é feita pela nossa equipe. É ela que garante que o corrimão chegue pronto e encaixe no lance.' },
      { q: 'Qual a altura correta do corrimão?', a: 'A NBR 9050 estabelece 92 cm do piso ou da quina do degrau até o topo do tubo. Em rampas e onde há crianças, indica-se um segundo corrimão a 70 cm.' },
      { q: 'Inox 304 ou 316: qual usar?', a: 'O 304 atende ambientes internos e externos comuns em Belo Horizonte. O 316 tem molibdênio e resiste melhor a cloro e maresia, por isso é a escolha para borda de piscina e sauna.' },
      { q: 'Quanto tempo leva do orçamento à instalação?', a: 'Depois da aprovação e da medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis, conforme o tamanho do projeto. O prazo exato vai escrito na proposta.' },
      { q: 'Dá para instalar corrimão em escada de granito?', a: 'Dá. A furação no granito é feita com broca diamantada e com cuidado para não trincar a pedra; a base flangeada do prumo cobre o furo.' },
    ],
  },
  {
    slug: 'guarda-corpo-inox',
    nome: 'Guarda-Corpo de Inox',
    navNome: 'Guarda-Corpo de Inox',
    keyword: 'guarda-corpo de inox',
    h1: 'Guarda-corpo de inox para escada, sacada e mezanino',
    title: 'Guarda-Corpo de Inox em BH para Escada e Sacada',
    description:
      'Guarda-corpo de inox sob medida em BH: travessas horizontais, prumos verticais ou cabo de aço, na altura da NBR 14718. Fabricação própria e instalação.',
    resumo: 'Travessas, prumos verticais ou cabo de aço para escadas, sacadas e mezaninos.',
    categoriaFotos: 'guarda-corpo-inox',
    capa: 'guarda-corpo-inox-escada-interna-sala',
    intro: [
      'Guarda-corpo é a barreira que impede a queda em escada, sacada, mezanino e qualquer desnível. Feito em aço inox, ele entrega a altura e a resistência que a norma pede com um acabamento que valoriza o imóvel e não precisa de pintura.',
      'Fabricamos guarda-corpo inteiramente em inox, do prumo à sapata, com solda TIG e polimento das juntas. O modelo é definido no projeto: travessas horizontais, prumos verticais, painel de vidro ou cabo de aço tensionado.',
    ],
    paraQuem: [
      'Para quem está terminando a obra e precisa fechar escada e mezanino, para quem quer trocar um guarda-corpo de ferro que já enferrujou e para condomínios e comércios com varandas, halls e áreas de lazer.',
      'Se há crianças pequenas na casa, isso muda o modelo: falamos disso antes do orçamento, não depois.',
    ],
    modelos: [
      { nome: 'Travessas horizontais', texto: 'De 3 a 5 tubos horizontais de ½" ou 1" entre prumos de 1½". Visual leve e custo equilibrado — o modelo mais pedido.' },
      { nome: 'Prumos verticais', texto: 'Barras verticais com no máximo 11 cm entre si. É a configuração recomendada onde há crianças, porque não dá apoio para escalar.' },
      { nome: 'Inox com vidro', texto: 'Estrutura de inox com painéis de vidro laminado ou temperado, que preservam a vista e a luz.' },
      { nome: 'Cabo de aço tensionado', texto: 'Cabos de inox esticados entre prumos, com estética náutica e máxima transparência.' },
    ],
    blocos: [
      {
        h: 'Qual a altura mínima do guarda-corpo?',
        resposta: 'Pela NBR 14718, guarda-corpo de sacada, varanda, mezanino e qualquer área elevada precisa de no mínimo 1,10 m de altura, medidos do piso acabado ao topo.',
        p: ['Em escada, o corrimão do guarda-corpo fica a 92 cm da quina do degrau. Vãos entre elementos não podem deixar passar uma esfera de 11 cm — é por isso que o espaçamento entre prumos verticais segue essa medida.'],
      },
      {
        h: 'Travessa horizontal é segura com criança em casa?',
        resposta: 'Travessa horizontal funciona como degrau e facilita a escalada. Onde há crianças pequenas, a orientação técnica é usar prumos verticais a cada 11 cm ou painel de vidro.',
        p: ['A travessa continua uma boa escolha em escadas internas de adultos, áreas comerciais e locais onde a escalada não é um risco real. A decisão é sua, mas a recomendação vai por escrito.'],
      },
      {
        h: 'Dá para instalar em obra pronta?',
        resposta: 'Sim. A maioria dos nossos guarda-corpos é instalada em obra acabada, com sapata flangeada e chumbador no piso ou na lateral da laje, sem quebra-quebra.',
      },
    ],
    precoFatores: [
      'Modelo de preenchimento: travessas custam menos que prumos verticais a cada 11 cm, que custam menos que vidro.',
      'Altura e vão entre prumos (definidos pela norma e pela estrutura).',
      'Fixação no piso ou na lateral da laje, e o tipo de piso.',
      'Liga 304 ou 316 e acabamento escovado ou polido.',
      'Escada com curva, patamar ou desnível variável.',
    ],
    aplicacoes: [
      'Escadas internas e externas',
      'Sacadas, varandas e terraços',
      'Mezaninos e vãos de escada',
      'Beira de piscina e deck',
      'Fachadas e varandas comerciais',
      'Academias, clínicas, escolas e lojas',
    ],
    especificacoes: [
      { label: 'Liga', valor: 'AISI 304 (padrão) ou AISI 316' },
      { label: 'Prumos', valor: 'Tubo 1½" ou 2", parede 1,2 mm a 1,5 mm' },
      { label: 'Travessas', valor: 'Tubo ½", ¾" ou 1"' },
      { label: 'Altura', valor: '1,10 m em áreas elevadas (NBR 14718) · 92 cm em escadas' },
      { label: 'Vão entre elementos', valor: 'Até 11 cm onde a norma exige' },
      { label: 'Fixação', valor: 'Sapata flangeada com chumbador em inox, no piso ou na lateral da laje' },
    ],
    faq: [
      { q: 'Qual a altura mínima de um guarda-corpo?', a: 'Pela NBR 14718, guarda-corpos de sacadas e áreas elevadas devem ter no mínimo 1,10 m de altura. Em escadas, admite-se 92 cm medidos da quina do degrau. Verificamos a exigência do seu caso no projeto.' },
      { q: 'Travessas horizontais são permitidas com crianças?', a: 'Elas facilitam a escalada. Onde há crianças pequenas, a orientação técnica é usar prumos verticais com no máximo 11 cm entre si, ou painel de vidro. Indicamos o modelo adequado antes de fechar o orçamento.' },
      { q: 'O inox mancha ou enferruja?', a: 'O aço inox forma uma camada protetora de óxido de cromo que se regenera sozinha. Pontos de ferrugem no inox quase sempre vêm de partículas de ferro da obra (respingo de esmerilhadeira) e saem com limpeza adequada — não são corrosão da peça.' },
      { q: 'Dá para instalar em obra já pronta?', a: 'Sim. A grande maioria dos nossos guarda-corpos é instalada em obra acabada, com fixação por chumbador e sapata, sem quebra-quebra.' },
      { q: 'Guarda-corpo de inox ou de ferro?', a: 'O ferro custa menos no começo, mas pede lixa e tinta periodicamente e, em área externa, enferruja. O inox mantém o acabamento só com limpeza. Em poucos anos a conta costuma virar a favor do inox.' },
      { q: 'Vocês fazem o projeto?', a: 'Sim. Depois da medição definimos com você modelo, altura, espaçamento e fixação, e isso tudo vai descrito na proposta.' },
    ],
  },
  {
    slug: 'guarda-corpo-de-vidro',
    nome: 'Guarda-Corpo de Vidro com Inox',
    navNome: 'Guarda-Corpo de Vidro',
    keyword: 'guarda-corpo de vidro em BH',
    h1: 'Guarda-corpo de vidro com inox em BH',
    title: 'Guarda-Corpo de Vidro com Inox em BH',
    description:
      'Guarda-corpo de vidro laminado ou temperado com estrutura de inox em BH, para sacada, escada, piscina e mezanino. Projeto, fabricação e instalação.',
    resumo: 'Vidro laminado ou temperado com prumos, torres ou botões de inox.',
    categoriaFotos: 'guarda-corpo-vidro',
    capa: 'guarda-corpo-vidro-escada-interna',
    intro: [
      'Guarda-corpo de vidro é o fechamento de segurança feito com painéis de vidro presos a uma estrutura de inox. Ele protege o desnível sem tapar a vista, a piscina ou a sala de pé-direito duplo: o inox segura o painel e o vidro quase desaparece.',
      'Trabalhamos com vidro temperado e laminado. Para sacada, mezanino, cobertura e beira de piscina recomendamos o laminado: se ele quebrar, os pedaços ficam presos à película e o painel continua barrando a passagem.',
    ],
    paraQuem: [
      'Para coberturas e varandas com vista, áreas de piscina, escadas e mezaninos de casa com pé-direito alto, e para lojas, restaurantes e hotéis que querem segurança sem fechar o ambiente.',
      'Em BH, com tanto prédio e casa em terreno de morro, é o modelo que mais pedem para varanda com vista da cidade.',
    ],
    modelos: [
      { nome: 'Vidro entre prumos de inox', texto: 'Painéis encaixados entre prumos verticais de inox, com corrimão superior em tubo. O modelo mais econômico da linha em vidro.' },
      { nome: 'Torres de inox', texto: 'Painéis presos por torres (pinças duplas) de inox fixadas no piso ou na lateral da laje, com ou sem corrimão.' },
      { nome: 'Botões (spider)', texto: 'Vidro fixado por botões de inox que atravessam o painel — visual mínimo, sem moldura.' },
      { nome: 'Perfil U embutido', texto: 'Painel encaixado em perfil contínuo de inox no piso: o vidro parece sair do chão.' },
    ],
    blocos: [
      {
        h: 'Vidro temperado ou laminado no guarda-corpo?',
        resposta: 'Em área elevada, laminado. O temperado é mais barato, mas quando quebra vira cacos miúdos e o painel deixa de existir; o laminado racha e continua inteiro, preso à película de PVB.',
        p: ['Espessuras usuais: temperado de 10 ou 12 mm; laminado de 8 mm (4+4) a 20 mm (10+10), definido pelo vão, pela altura e pela fixação.'],
      },
      {
        h: 'Guarda-corpo de vidro é seguro para crianças?',
        resposta: 'É um dos modelos mais seguros: não tem vão por onde passar nem apoio para escalar. A condição é usar a espessura correta e vidro laminado em áreas elevadas.',
      },
      {
        h: 'Precisa de corrimão em cima do vidro?',
        resposta: 'Em escada, sim — o corrimão é o apoio da mão. Em sacada e mezanino, o tubo superior ajuda a amarrar os painéis e evita que alguém se apoie direto na borda do vidro; em sistemas com torre ou perfil U ele pode ser dispensado conforme o projeto.',
      },
    ],
    precoFatores: [
      'Tipo e espessura do vidro (temperado ou laminado, incolor, verde, fumê ou extraclear).',
      'Sistema de fixação: prumos, torres, botões ou perfil U.',
      'Corrimão superior em tubo ou não.',
      'Altura, quantidade de painéis e recortes.',
      'Acesso para subir o vidro (escada estreita, andar alto, içamento).',
    ],
    aplicacoes: [
      'Sacadas e varandas com vista',
      'Escadas internas e vãos de mezanino',
      'Cercamento de piscina',
      'Coberturas e terraços',
      'Lojas, restaurantes e hotéis',
    ],
    especificacoes: [
      { label: 'Vidro temperado', valor: '10 mm ou 12 mm' },
      { label: 'Vidro laminado', valor: '8 mm (4+4) a 20 mm (10+10) — indicado para áreas elevadas' },
      { label: 'Cores', valor: 'Incolor, verde, fumê ou extraclear' },
      { label: 'Estrutura', valor: 'Inox AISI 304 ou 316, escovado ou polido' },
      { label: 'Altura', valor: '1,10 m em áreas elevadas (NBR 14718)' },
    ],
    faq: [
      { q: 'Vidro temperado ou laminado para guarda-corpo?', a: 'O temperado é mais barato, mas se quebra se desfaz por inteiro. O laminado mantém os cacos presos à película e continua barrando a passagem. Para sacada, mezanino e piscina, indicamos laminado.' },
      { q: 'O guarda-corpo de vidro é seguro para crianças?', a: 'Sim — não tem apoio para escalada nem vãos. A exigência é usar a espessura correta e vidro laminado em áreas elevadas.' },
      { q: 'A limpeza dá trabalho?', a: 'Marca de mão aparece mais do que em outros modelos, mas a limpeza é simples: água, detergente neutro e rodo. O inox pede só pano macio no sentido do escovado.' },
      { q: 'Vocês fornecem o vidro também?', a: 'Sim. Entregamos o conjunto completo — estrutura em inox, vidro, ferragens e instalação — com um único responsável pelo resultado.' },
      { q: 'Qual a altura do guarda-corpo de vidro na sacada?', a: 'No mínimo 1,10 m do piso acabado, como pede a NBR 14718 para áreas elevadas.' },
      { q: 'Dá para usar vidro na beira da piscina?', a: 'Dá, e fica muito bonito. Nesse caso indicamos vidro laminado e estrutura em inox 316, que resiste melhor ao cloro.' },
    ],
  },
  {
    slug: 'acessibilidade-nbr-9050',
    nome: 'Acessibilidade NBR 9050',
    navNome: 'Acessibilidade',
    keyword: 'corrimão NBR 9050 e barra de apoio inox',
    h1: 'Corrimão de rampa e barras de apoio em inox pela NBR 9050',
    title: 'Corrimão NBR 9050 e Barra de Apoio Inox em BH',
    description:
      'Corrimão duplo de rampa e barras de apoio de inox para banheiro acessível em BH, nas medidas da NBR 9050. Adequação de condomínios, clínicas e comércios.',
    resumo: 'Corrimão duplo de rampa e barras de apoio para banheiro PCD.',
    categoriaFotos: 'acessibilidade',
    capa: 'corrimao-inox-rampa-acessibilidade-duplo',
    intro: [
      'A NBR 9050 é a norma brasileira de acessibilidade: ela define a altura do corrimão de rampa, o prolongamento nas pontas e o tamanho e a posição das barras de apoio do banheiro acessível. Prédios de uso coletivo e estabelecimentos abertos ao público precisam atender a ela.',
      'Executamos a adequação em aço inox: corrimão duplo com prolongamento, barras de apoio de banheiro PCD, barras para lavatório e box. Inox é o material indicado porque aguenta o peso de quem se apoia, não descasca e resiste à limpeza pesada com produto químico.',
    ],
    paraQuem: [
      'Para condomínios que precisam regularizar rampas e escadas, clínicas, consultórios e casas de repouso, escolas, igrejas e comércios que vão passar por vistoria — e para famílias adaptando a casa para um idoso ou para quem usa cadeira de rodas.',
    ],
    modelos: [
      { nome: 'Corrimão duplo de rampa', texto: 'Duas alturas — 0,92 m e 0,70 m — dos dois lados da rampa, com prolongamento horizontal de 30 cm no início e no fim de cada segmento.' },
      { nome: 'Barra de apoio reta', texto: 'Barras de 80 cm ou 70 cm em tubo de 1½", instaladas nas laterais e no fundo da bacia sanitária.' },
      { nome: 'Barra de apoio em L', texto: 'Combinação horizontal + vertical para apoio na transferência da cadeira de rodas para a bacia.' },
      { nome: 'Barra para lavatório e box', texto: 'Barras fixas e articuladas para lavatório, box de chuveiro e banheira.' },
    ],
    blocos: [
      {
        h: 'Qual a altura do corrimão de rampa pela NBR 9050?',
        resposta: 'Corrimão duplo, a 0,92 m e a 0,70 m do piso, nos dois lados da rampa, com prolongamento horizontal de 30 cm no início e no fim.',
        p: ['O tubo precisa ter empunhadura entre 3 e 4,5 cm, ficar a pelo menos 4 cm da parede e ser contínuo, sem interrupção nos patamares. As pontas são arredondadas ou voltadas para a parede, para não prender a roupa.'],
      },
      {
        h: 'Quanto peso a barra de apoio precisa aguentar?',
        resposta: 'A norma pede resistência a 1,5 kN (cerca de 150 kg) em qualquer ponto e direção. Isso depende do tubo e, principalmente, do chumbamento — por isso avaliamos a parede antes de instalar.',
      },
      {
        h: 'Meu prédio precisa se adequar?',
        resposta: 'Edificações de uso público e coletivo — inclusive áreas comuns de condomínio, comércio, clínica e escritório — precisam atender à NBR 9050. Reforma e mudança de uso costumam disparar a exigência na aprovação e na vistoria.',
      },
    ],
    precoFatores: [
      'Metragem de rampa e quantidade de lados com corrimão.',
      'Número de barras e o tipo (reta, em L, articulada).',
      'Tipo de parede: alvenaria maciça, bloco vazado ou drywall (que precisa de reforço).',
      'Prazo da vistoria e execução por etapas.',
    ],
    aplicacoes: [
      'Rampas de acesso de prédios e condomínios',
      'Banheiros acessíveis (PCD) em comércios e escritórios',
      'Clínicas, consultórios e casas de repouso',
      'Escolas, igrejas e espaços de eventos',
      'Adequação para vistoria',
      'Residências adaptadas para idosos',
    ],
    especificacoes: [
      { label: 'Altura do corrimão', valor: '0,92 m e 0,70 m (duplo), medidos do piso' },
      { label: 'Prolongamento', valor: '30 cm horizontais no início e no fim de cada segmento' },
      { label: 'Empunhadura', valor: '3,0 cm a 4,5 cm (tubo 1½")' },
      { label: 'Afastamento da parede', valor: 'Mínimo de 4 cm livres' },
      { label: 'Barra de apoio', valor: 'Comprimento mínimo de 80 cm, resistência de 1,5 kN' },
      { label: 'Material', valor: 'Inox AISI 304 escovado' },
    ],
    faq: [
      { q: 'Meu prédio precisa se adequar à NBR 9050?', a: 'Edificações de uso público e coletivo — incluindo áreas comuns de condomínios, comércios, clínicas e escritórios — precisam atender à norma. Reformas e mudanças de uso costumam disparar a exigência.' },
      { q: 'Qual a altura do corrimão de rampa?', a: 'A NBR 9050 exige corrimão duplo, a 0,92 m e a 0,70 m do piso, nos dois lados da rampa, com prolongamento horizontal de 30 cm nas extremidades.' },
      { q: 'A barra de apoio tem que aguentar quanto peso?', a: 'A norma exige resistência a 1,5 kN (cerca de 150 kg) em qualquer ponto e direção. Isso depende do tubo e do chumbamento — por isso avaliamos a parede antes.' },
      { q: 'Vocês entregam documentação para a vistoria?', a: 'Entregamos memorial descritivo com as medidas executadas e as especificações do material, que serve de apoio ao responsável técnico.' },
      { q: 'Qual o tamanho da barra de apoio do banheiro PCD?', a: 'As barras laterais e de fundo da bacia têm no mínimo 80 cm. Para lavatório e box há modelos e medidas próprios, que definimos na visita conforme o layout do banheiro.' },
    ],
  },
  {
    slug: 'portoes-e-gradis-inox',
    nome: 'Portões e Gradis de Inox',
    navNome: 'Portões e Gradis',
    keyword: 'portão de inox',
    h1: 'Portão e gradil de inox sob medida',
    title: 'Portão e Gradil de Inox Sob Medida em BH',
    description:
      'Portão social, gradil de fechamento, grade de proteção e portão de escada em inox sob medida em BH. Não enferruja e não pede pintura. Peça no WhatsApp.',
    resumo: 'Portões sociais, gradis de fechamento, grades e portão de escada.',
    categoriaFotos: 'portoes-gradis',
    capa: 'gradil-inox-varanda-comercial-coberta',
    intro: [
      'Portão e gradil de inox são fechamentos feitos inteiramente em aço inox: portão de pedestre, gradil de jardim e varanda, grade de janela e portãozinho de escada. Diferente do ferro, não precisam de lixa e tinta a cada poucos anos.',
      'Fabricamos sob medida e com o mesmo acabamento do corrimão e do guarda-corpo da obra, para que tudo combine.',
    ],
    paraQuem: [
      'Para casas e prédios que querem trocar portão e grade de ferro que vivem enferrujando, comércios com varanda ou área coberta, e famílias com crianças pequenas ou pets que precisam de um portão no topo da escada.',
    ],
    modelos: [
      { nome: 'Portão social', texto: 'Portão de pedestre em inox com fechadura embutida, dobradiças de inox e preenchimento em tubos, chapa perfurada ou vidro.' },
      { nome: 'Gradil de fechamento', texto: 'Fechamento de jardim, varanda coberta e divisa em módulos de inox, com prumos verticais ou travessas.' },
      { nome: 'Grade de proteção', texto: 'Grade de janela e vão em inox, com espaçamento seguro e visual muito mais leve que o ferro.' },
      { nome: 'Portão de escada', texto: 'Portãozinho no topo ou na base da escada, integrado ao guarda-corpo, para crianças e pets.' },
    ],
    blocos: [
      {
        h: 'Portão de inox vale mais a pena que o de ferro?',
        resposta: 'O inox custa mais na compra, mas não pede repintura e não perde a peça para a ferrugem. Em área externa, a conta costuma virar a favor do inox depois de alguns anos.',
      },
      {
        h: 'Dá para automatizar o portão de inox?',
        resposta: 'Sim. Portões de correr e de abrir em inox aceitam motores convencionais, dimensionados para o peso da folha.',
      },
    ],
    precoFatores: [
      'Tamanho da folha e tipo (abrir ou correr).',
      'Preenchimento: tubos, barra chata, chapa perfurada ou vidro.',
      'Ferragens: fechadura, dobradiças, puxador e mola.',
      'Tubo redondo ou quadrado, escovado ou polido.',
    ],
    aplicacoes: [
      'Entradas sociais de casas e prédios',
      'Fechamento de jardins e áreas de convívio',
      'Varandas comerciais e áreas cobertas',
      'Proteção de janelas e vãos',
      'Segurança de escada para crianças e pets',
    ],
    especificacoes: [
      { label: 'Liga', valor: 'AISI 304 (padrão) ou AISI 316' },
      { label: 'Estrutura', valor: 'Tubo quadrado ou redondo, 1½" a 2"' },
      { label: 'Preenchimento', valor: 'Tubos, barras chatas, chapa perfurada ou vidro' },
      { label: 'Ferragens', valor: 'Dobradiças, fechaduras e puxadores em inox' },
      { label: 'Acabamento', valor: 'Escovado ou polido' },
    ],
    faq: [
      { q: 'Portão de inox vale mais a pena que ferro?', a: 'O investimento inicial é maior, mas o ferro exige raspagem e repintura periódicas e, em área externa, enferruja. O inox mantém o acabamento com limpeza simples.' },
      { q: 'Dá para automatizar?', a: 'Sim. Portões de correr e de abrir em inox aceitam automatizadores convencionais, dimensionados para o peso da folha.' },
      { q: 'Vocês fazem em inox escovado igual ao corrimão?', a: 'Sim — e é o que recomendamos, para que portão, gradil, corrimão e guarda-corpo da mesma obra tenham o mesmo acabamento.' },
      { q: 'Fazem portãozinho de escada para criança e pet?', a: 'Fazemos, integrado ao guarda-corpo, com trava no lado de dentro e abertura para o lado do patamar.' },
    ],
  },
  {
    slug: 'condominios-e-empresas',
    nome: 'Condomínios e Empresas',
    navNome: 'Condomínios e Empresas',
    keyword: 'corrimão e guarda-corpo para condomínio',
    h1: 'Corrimão e guarda-corpo de inox para condomínios e empresas',
    title: 'Corrimão e Guarda-Corpo para Condomínios em BH',
    description:
      'Inox para condomínios, construtoras e empresas em BH: corrimão, guarda-corpo e acessibilidade com proposta por item, nota fiscal e execução programada.',
    resumo: 'Proposta formal por item, nota fiscal e execução programada.',
    categoriaFotos: 'guarda-corpo-inox',
    capa: 'guarda-corpo-inox-varanda-comercial',
    intro: [
      'Obra de condomínio e de empresa tem exigências que a obra de casa não tem: proposta formal para a assembleia, prazo que respeita a rotina do prédio, equipe identificada e execução que não fecha a escada por dias seguidos.',
      'Atendemos síndicos, administradoras, construtoras e empresas com proposta detalhada por item, quantitativo em metro linear, liga e acabamento especificados — o documento que o síndico leva para a assembleia e a construtora anexa à medição.',
    ],
    paraQuem: [
      'Para síndicos e administradoras que precisam trocar corrimão e guarda-corpo das áreas comuns ou adequar rampas à NBR 9050; para construtoras que precisam de fornecimento por etapa; e para academias, clínicas, lojas e escritórios.',
    ],
    modelos: [
      { nome: 'Áreas comuns', texto: 'Corrimão de escada predial, guarda-corpo de hall, mezanino e área de lazer, com o mesmo padrão de acabamento.' },
      { nome: 'Adequação de acessibilidade', texto: 'Corrimão duplo de rampa e banheiro PCD conforme a NBR 9050, para vistoria e regularização.' },
      { nome: 'Obra nova e construtoras', texto: 'Fornecimento por etapa, com medição em campo e entrega programada por pavimento.' },
      { nome: 'Manutenção e substituição', texto: 'Troca de guarda-corpo de ferro corroído, recuperação de fixações e polimento de peças existentes.' },
    ],
    blocos: [
      {
        h: 'Como fica a escada do prédio durante a obra?',
        resposta: 'Planejamos a execução por lance e por período, mantendo a circulação. A maior parte da fabricação acontece na nossa oficina; no prédio ficam a montagem e a fixação.',
      },
      {
        h: 'O que vai na proposta para a assembleia?',
        resposta: 'Descrição por item, quantitativo em metro linear, liga, diâmetro e espessura do tubo, acabamento, prazo e validade — no formato que o síndico apresenta aos condôminos.',
      },
    ],
    precoFatores: [
      'Metragem total e número de pavimentos.',
      'Padrão do modelo (o mesmo em todos os lances costuma baratear).',
      'Janela de execução (horário comercial, fins de semana, etapas).',
      'Retirada e descarte de peças antigas.',
    ],
    aplicacoes: [
      'Condomínios residenciais e comerciais',
      'Construtoras e incorporadoras',
      'Academias, clínicas e consultórios',
      'Lojas, restaurantes e hotéis',
      'Escolas, igrejas e espaços de eventos',
      'Indústrias e áreas técnicas',
    ],
    especificacoes: [
      { label: 'Proposta', valor: 'Orçamento formal por item, com quantitativo em metro linear' },
      { label: 'Documentação', valor: 'Memorial descritivo e especificação de material' },
      { label: 'Execução', valor: 'Programada por etapa, com equipe identificada' },
      { label: 'Faturamento', valor: 'Nota fiscal e faturamento para CNPJ' },
    ],
    faq: [
      { q: 'Vocês emitem nota fiscal e faturam para CNPJ?', a: 'Sim. Emitimos nota fiscal e combinamos as condições de pagamento com condomínios, construtoras e empresas na proposta.' },
      { q: 'Conseguem executar sem interditar a escada do prédio?', a: 'Sim. Planejamos a execução por lance e por período, mantendo a circulação. A maior parte da fabricação acontece na nossa oficina.' },
      { q: 'Dão orçamento para assembleia?', a: 'Damos — com descrição por item, quantitativo e validade, no formato que o síndico precisa apresentar aos condôminos.' },
      { q: 'Atendem construtoras com medição por etapa?', a: 'Sim. Fornecemos por pavimento ou por bloco, acompanhando o cronograma da obra.' },
    ],
  },
]

export const findServico = (slug: string) => SERVICOS.find((s) => s.slug === slug)
