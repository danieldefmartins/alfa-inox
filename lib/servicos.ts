export type FAQ = { q: string; a: string }

export type Servico = {
  slug: string
  nome: string
  navNome: string
  h1: string
  title: string
  description: string
  resumo: string
  categoriaFotos: string
  icone: string
  intro: string[]
  modelos: { nome: string; texto: string }[]
  aplicacoes: string[]
  especificacoes: { label: string; valor: string }[]
  faq: FAQ[]
}

export const SERVICOS: Servico[] = [
  {
    slug: 'corrimao-inox',
    nome: 'Corrimão em Aço Inox',
    navNome: 'Corrimão de Inox',
    h1: 'Corrimão em aço inox em Belo Horizonte',
    title: 'Corrimão de Aço Inox em BH | Fabricação e Instalação',
    description:
      'Corrimão em aço inox 304 e 316 para escadas, rampas e corredores em Belo Horizonte e região. Fabricação própria, medição no local e instalação. Orçamento sem compromisso.',
    resumo:
      'Corrimão de parede, de escada e de rampa em inox escovado ou polido, dimensionado conforme a NBR 9050.',
    categoriaFotos: 'corrimao-inox',
    icone: 'corrimao',
    intro: [
      'O corrimão é o item de segurança mais usado de uma escada — e o que mais aparece. Na Alfa Inox ele é fabricado sob medida em aço inox AISI 304 ou 316, com solda TIG e acabamento escovado ou polido espelhado, para durar décadas sem enferrujar, descascar ou exigir pintura.',
      'Trabalhamos com corrimão de parede, corrimão com prumos apoiados no degrau e corrimão duplo para rampas de acessibilidade. Cada projeto começa com medição no local, porque escada torta, degrau irregular e parede fora de esquadro são a regra — não a exceção — e só a medição garante um corrimão que acompanha o lance sem emendas aparentes.',
    ],
    modelos: [
      { nome: 'Corrimão de parede', texto: 'Fixado diretamente na alvenaria com suportes de inox, ideal para escadas de prédios, corredores e lances estreitos onde não há espaço para prumos.' },
      { nome: 'Corrimão de escada com prumos', texto: 'Tubo superior de 1½" ou 2" apoiado em prumos fixados no degrau ou na lateral da escada — a solução mais comum em residências e sobrados.' },
      { nome: 'Corrimão duplo para rampas', texto: 'Duas alturas de tubo (0,92 m e 0,70 m) com prolongamento de 30 cm nas extremidades, atendendo à NBR 9050 para acessibilidade.' },
      { nome: 'Corrimão curvo e em raio', texto: 'Calandrado sob medida para escadas em curva, caracol e caminhos de jardim, sem emendas visíveis nas curvas.' },
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
      { label: 'Liga', valor: 'AISI 304 (padrão) ou AISI 316 (litoral / piscina / ambiente agressivo)' },
      { label: 'Diâmetro do tubo', valor: '1½" (38,1 mm) ou 2" (50,8 mm)' },
      { label: 'Espessura da parede', valor: '1,2 mm a 1,5 mm' },
      { label: 'Acabamento', valor: 'Escovado (fosco) ou polido espelhado' },
      { label: 'Altura padrão', valor: '92 cm do nível do piso / focinho do degrau' },
      { label: 'Fixação', valor: 'Chumbador ou parabolt em inox, base flangeada' },
    ],
    faq: [
      { q: 'Quanto custa o metro de corrimão de inox em BH?', a: 'O preço varia principalmente com o modelo, o diâmetro do tubo e a quantidade de curvas. Um corrimão de parede simples é a opção mais econômica; um corrimão de escada com prumos e travessas custa mais por metro linear. Como cada escada tem uma medida, fazemos a medição no local e enviamos o orçamento fechado, sem surpresa depois.' },
      { q: 'Vocês fazem a medição no local?', a: 'Sim. A medição em Belo Horizonte e região metropolitana é feita por nossa equipe e não tem custo para orçamentos aprovados. É ela que garante que o corrimão chegue pronto e encaixe no lance.' },
      { q: 'Qual a altura correta do corrimão?', a: 'A NBR 9050 estabelece 92 cm medidos do piso ou do focinho do degrau até o topo do tubo. Em rampas e escadas com uso por crianças, indica-se um segundo corrimão a 70 cm.' },
      { q: 'Inox 304 ou 316: qual usar?', a: 'O 304 atende com folga ambientes internos e externos em Belo Horizonte. O 316 leva molibdênio na composição e resiste melhor a cloro e maresia — por isso é a escolha certa para borda de piscina, sauna e imóveis no litoral.' },
      { q: 'Quanto tempo leva do orçamento à instalação?', a: 'Depois da aprovação e da medição, o prazo médio de fabricação e instalação é de 7 a 15 dias úteis, conforme o tamanho do projeto.' },
    ],
  },
  {
    slug: 'guarda-corpo-inox',
    nome: 'Guarda-Corpo em Aço Inox',
    navNome: 'Guarda-Corpo de Inox',
    h1: 'Guarda-corpo em aço inox para escadas, sacadas e mezaninos',
    title: 'Guarda-Corpo de Aço Inox em BH | Escadas e Sacadas',
    description:
      'Guarda-corpo de aço inox sob medida em Belo Horizonte: escadas, sacadas, mezaninos e varandas. Travessas horizontais, prumos verticais ou cabo de aço. Fabricação própria e instalação.',
    resumo:
      'Guarda-corpo 100% inox com travessas horizontais, prumos verticais ou cabo de aço, para escadas, sacadas e mezaninos.',
    categoriaFotos: 'guarda-corpo-inox',
    icone: 'guardacorpo',
    intro: [
      'O guarda-corpo é o que separa um desnível de um acidente. Ele precisa de altura, espaçamento e fixação corretos — e, quando é feito em aço inox, ainda entrega isso com um acabamento que valoriza o imóvel e não exige manutenção.',
      'Fabricamos guarda-corpo integralmente em inox, do prumo à sapata, com solda TIG e polimento das juntas. O modelo é definido no projeto: travessas horizontais, prumos verticais (obrigatórios quando há circulação de crianças), painel de vidro ou cabo de aço tensionado.',
    ],
    modelos: [
      { nome: 'Travessas horizontais', texto: 'O modelo mais pedido em Belo Horizonte: 3 a 5 tubos horizontais de ½" ou 1" entre prumos de 1½". Visual leve e custo equilibrado.' },
      { nome: 'Prumos verticais', texto: 'Barras verticais com espaçamento máximo de 11 cm entre eixos — a configuração recomendada onde há crianças, pois não permite escalada.' },
      { nome: 'Inox com vidro', texto: 'Estrutura de inox com painéis de vidro temperado ou laminado, preservando a vista e a luz natural do ambiente.' },
      { nome: 'Cabo de aço tensionado', texto: 'Cabos de inox tensionados entre prumos, com estética náutica e máxima transparência visual.' },
    ],
    aplicacoes: [
      'Escadas internas e externas',
      'Sacadas, varandas e terraços',
      'Mezaninos e vãos de escada',
      'Beira de piscina e deck',
      'Fachadas e vitrines comerciais',
      'Academias, clínicas, escolas e lojas',
    ],
    especificacoes: [
      { label: 'Liga', valor: 'AISI 304 (padrão) ou AISI 316' },
      { label: 'Prumos', valor: 'Tubo 1½" ou 2", parede 1,2 mm a 1,5 mm' },
      { label: 'Travessas', valor: 'Tubo ½", ¾" ou 1"' },
      { label: 'Altura', valor: '1,10 m em pavimentos elevados (NBR 14718) / 92 cm em escadas' },
      { label: 'Espaçamento entre prumos', valor: 'Até 1,20 m entre eixos, conforme o vão' },
      { label: 'Fixação', valor: 'Sapata flangeada com chumbador em inox, no piso ou na lateral da laje' },
    ],
    faq: [
      { q: 'Qual a altura mínima de um guarda-corpo?', a: 'Pela NBR 14718, guarda-corpos de sacadas e áreas elevadas devem ter no mínimo 1,10 m de altura. Em escadas, admite-se 92 cm medidos do focinho do degrau. Em edificações acima de 12 m, a norma pode exigir alturas maiores — verificamos isso no projeto.' },
      { q: 'Travessas horizontais são permitidas com crianças?', a: 'Travessas horizontais funcionam como degraus e facilitam a escalada. Onde há crianças pequenas, a orientação técnica é usar prumos verticais com espaçamento máximo de 11 cm, ou painel de vidro. Nós indicamos o modelo adequado ao seu caso antes de fechar o orçamento.' },
      { q: 'O inox mancha ou enferruja?', a: 'O aço inox forma uma camada passiva de óxido de cromo que se regenera sozinha. Manchas de ferrugem em inox quase sempre vêm de contaminação por partículas de ferro (respingo de esmerilhadeira, obra ao lado) e saem com limpeza adequada — não são corrosão da peça.' },
      { q: 'Dá para instalar em obra já pronta?', a: 'Sim. A grande maioria dos nossos guarda-corpos é instalada em obra acabada, com fixação por chumbador e sapata, sem quebra-quebra.' },
    ],
  },
  {
    slug: 'guarda-corpo-de-vidro',
    nome: 'Guarda-Corpo de Vidro com Inox',
    navNome: 'Guarda-Corpo de Vidro',
    h1: 'Guarda-corpo de vidro com estrutura em aço inox',
    title: 'Guarda-Corpo de Vidro com Inox em BH | Temperado e Laminado',
    description:
      'Guarda-corpo de vidro temperado ou laminado com estrutura de aço inox em Belo Horizonte. Sacadas, escadas, piscinas e mezaninos. Projeto, fabricação e instalação.',
    resumo:
      'Vidro temperado ou laminado com prumos, torres ou botões de inox — segurança sem bloquear a vista.',
    categoriaFotos: 'guarda-corpo-vidro',
    icone: 'vidro',
    intro: [
      'Quando o desnível dá para uma vista, uma piscina ou uma sala de pé-direito duplo, o guarda-corpo de vidro resolve a segurança sem fechar o ambiente. A estrutura em inox segura o painel e assume o papel estético; o vidro desaparece.',
      'Trabalhamos com vidro temperado e com vidro laminado. Para áreas elevadas, sacadas e beira de piscina, a recomendação técnica é sempre o laminado: se romper, os fragmentos ficam presos à película de PVB e o painel não cai.',
    ],
    modelos: [
      { nome: 'Vidro entre prumos de inox', texto: 'Painéis encaixados entre prumos verticais de inox, com corrimão superior em tubo. O modelo mais econômico da linha em vidro.' },
      { nome: 'Torres de inox', texto: 'Painéis presos por torres (pinças duplas) de inox fixadas no piso ou na lateral da laje, com ou sem corrimão superior.' },
      { nome: 'Botões / spider', texto: 'Vidro fixado por botões de inox atravessando furos no painel — visual mínimo, sem moldura.' },
      { nome: 'Perfil U embutido', texto: 'Painel encaixado em perfil contínuo de inox no piso, com o vidro aparentemente saindo do chão.' },
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
      { label: 'Altura', valor: '1,10 m em pavimentos elevados' },
    ],
    faq: [
      { q: 'Vidro temperado ou laminado para guarda-corpo?', a: 'O temperado é mais barato, mas se quebra se estilhaça por inteiro e o painel deixa de existir. O laminado mantém os cacos presos à película de PVB, continuando a barrar a passagem. Para sacada, mezanino e piscina, indicamos laminado.' },
      { q: 'O guarda-corpo de vidro é seguro para crianças?', a: 'Sim — é um dos modelos mais seguros, porque não tem apoio para escalada e não tem vãos. A exigência é usar a espessura correta e vidro laminado em áreas elevadas.' },
      { q: 'A limpeza dá trabalho?', a: 'A marca de mão aparece mais do que em outros modelos, mas a limpeza é simples: água, detergente neutro e rodinho. O inox pede apenas pano macio na direção do escovado.' },
      { q: 'Vocês fornecem o vidro também?', a: 'Sim. Entregamos o conjunto completo — estrutura em inox, vidro, ferragens e instalação — com um único responsável pelo resultado.' },
    ],
  },
  {
    slug: 'acessibilidade-nbr-9050',
    nome: 'Acessibilidade e NBR 9050',
    navNome: 'Acessibilidade',
    h1: 'Corrimão de rampa e barras de apoio conforme a NBR 9050',
    title: 'Corrimão NBR 9050 e Barras de Apoio em Inox | BH',
    description:
      'Corrimão duplo para rampas, barras de apoio para banheiro acessível e sinalização tátil em aço inox conforme a NBR 9050, em Belo Horizonte. Adequação para condomínios e comércios.',
    resumo:
      'Corrimão duplo de rampa, barras de apoio de banheiro PCD e adequação de prédios à NBR 9050.',
    categoriaFotos: 'acessibilidade',
    icone: 'acessibilidade',
    intro: [
      'Acessibilidade deixou de ser diferencial: é exigência legal para prédios comerciais, condomínios, clínicas, escolas e estabelecimentos abertos ao público. A NBR 9050 define medidas exatas de corrimão, rampa e barra de apoio — e é ela que o fiscal, o bombeiro e o laudo do AVCB consultam.',
      'Executamos a adequação completa em aço inox: corrimão duplo com prolongamento nas extremidades, barras de apoio de banheiro PCD, barras para lavatório e apoios de bacia sanitária. Inox é o material indicado porque não descasca, aguenta apoio de peso e resiste à limpeza pesada com produto químico.',
    ],
    modelos: [
      { nome: 'Corrimão duplo de rampa', texto: 'Duas alturas — 0,92 m e 0,70 m — em ambos os lados da rampa, com prolongamento horizontal de 30 cm no início e no fim de cada segmento.' },
      { nome: 'Barra de apoio reta', texto: 'Barras de 80 cm ou 70 cm em tubo de 1½", instaladas nas laterais da bacia sanitária do banheiro acessível.' },
      { nome: 'Barra de apoio em L', texto: 'Combinação horizontal + vertical para apoio na transferência da cadeira de rodas para a bacia.' },
      { nome: 'Barra para lavatório e box', texto: 'Barras de apoio e articuladas para lavatório, box de chuveiro e banheira.' },
    ],
    aplicacoes: [
      'Rampas de acesso de prédios e condomínios',
      'Banheiros acessíveis (PCD) em comércios e escritórios',
      'Clínicas, consultórios e casas de repouso',
      'Escolas, igrejas e espaços de eventos',
      'Adequação para vistoria e AVCB',
      'Residências adaptadas para idosos',
    ],
    especificacoes: [
      { label: 'Altura do corrimão', valor: '0,92 m e 0,70 m (duplo), medidos do piso' },
      { label: 'Prolongamento', valor: '30 cm horizontais no início e no fim de cada segmento' },
      { label: 'Diâmetro empunhadura', valor: '3,0 cm a 4,5 cm (tubo 1½")' },
      { label: 'Afastamento da parede', valor: 'Mínimo de 4 cm livres' },
      { label: 'Barra de apoio', valor: 'Comprimento mínimo de 80 cm, resistindo a 1,5 kN' },
      { label: 'Material', valor: 'Inox AISI 304 escovado — superfície antiderrapante ao toque' },
    ],
    faq: [
      { q: 'Meu prédio precisa se adequar à NBR 9050?', a: 'Edificações de uso público e de uso coletivo — incluindo áreas comuns de condomínios, comércios, clínicas e escritórios — precisam atender à norma. Reformas e mudanças de uso costumam disparar a exigência na aprovação do projeto e na vistoria do Corpo de Bombeiros.' },
      { q: 'Qual a altura do corrimão de rampa?', a: 'A NBR 9050 exige corrimão duplo, a 0,92 m e a 0,70 m do piso, nos dois lados da rampa, com prolongamento horizontal de 30 cm nas extremidades.' },
      { q: 'A barra de apoio tem que aguentar quanto peso?', a: 'A norma exige resistência a uma força de 1,5 kN (aproximadamente 150 kg) em qualquer ponto e direção. Isso depende tanto do tubo quanto do chumbamento — por isso avaliamos a parede antes de instalar.' },
      { q: 'Vocês emitem documentação para a vistoria?', a: 'Entregamos memorial descritivo com as medidas executadas e as especificações do material, que serve de apoio ao responsável técnico do laudo.' },
    ],
  },
  {
    slug: 'portoes-e-gradis-inox',
    nome: 'Portões e Gradis em Inox',
    navNome: 'Portões e Gradis',
    h1: 'Portões, gradis e fechamentos em aço inox',
    title: 'Portões e Gradis de Aço Inox em BH | Fechamentos',
    description:
      'Portões, gradis, grades de proteção e fechamentos em aço inox sob medida em Belo Horizonte. Solução durável que não enferruja e dispensa pintura.',
    resumo:
      'Portões sociais, gradis de fechamento, grades de proteção e telas de segurança em inox sob medida.',
    categoriaFotos: 'portoes-gradis',
    icone: 'portao',
    intro: [
      'Portão e gradil em ferro pedem lixa e tinta a cada dois anos. Em aço inox, o mesmo elemento atravessa quinze anos com limpeza de rotina — o que muda completamente a conta no longo prazo, principalmente em condomínio.',
      'Fabricamos portões sociais, gradis de fechamento de jardim e varanda, grades de proteção de janela e portões de segurança para escada, sempre sob medida e com o mesmo acabamento do corrimão e do guarda-corpo da obra.',
    ],
    modelos: [
      { nome: 'Portão social', texto: 'Portão de pedestre em inox com fechadura embutida, dobradiças em inox e preenchimento em tubos, chapa perfurada ou vidro.' },
      { nome: 'Gradil de fechamento', texto: 'Fechamento de jardim, varanda coberta e divisas em módulos de inox, com prumos verticais ou travessas.' },
      { nome: 'Grade de proteção', texto: 'Grades de janela e vão em inox, com espaçamento seguro e visual muito mais leve que o ferro.' },
      { nome: 'Portão de escada', texto: 'Portãozinho de segurança no topo ou na base da escada, integrado ao guarda-corpo, para crianças e pets.' },
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
      { q: 'Portão de inox vale mais a pena que ferro?', a: 'O investimento inicial é maior, mas o ferro exige raspagem e repintura periódicas e, em área externa, tende a perder a peça em 10 a 15 anos por corrosão. O inox mantém o acabamento com limpeza simples, o que costuma inverter a conta a partir do quinto ano.' },
      { q: 'Dá para automatizar?', a: 'Sim. Portões de correr e de abrir em inox aceitam automatizadores convencionais, dimensionados para o peso da folha.' },
      { q: 'Vocês fazem em inox escovado igual ao corrimão?', a: 'Sim — e é o que recomendamos, para que portão, gradil, corrimão e guarda-corpo da mesma obra tenham exatamente o mesmo acabamento.' },
    ],
  },
  {
    slug: 'condominios-e-empresas',
    nome: 'Condomínios e Empresas',
    navNome: 'Condomínios e Empresas',
    h1: 'Aço inox para condomínios, obras e empresas',
    title: 'Inox para Condomínios e Obras em BH | Corrimão e Guarda-Corpo',
    description:
      'Atendimento a condomínios, construtoras, síndicos e empresas em Belo Horizonte: corrimão, guarda-corpo e acessibilidade em aço inox com orçamento formal, ART e execução programada.',
    resumo:
      'Atendimento a síndicos, construtoras e empresas: orçamento formal, execução programada e acabamento padronizado.',
    categoriaFotos: 'guarda-corpo-inox',
    icone: 'predio',
    intro: [
      'Obra de condomínio e de empresa tem exigências que a obra residencial não tem: orçamento formal para assembleia, prazo que respeita a rotina do prédio, equipe identificada e execução que não interdita a circulação por dias seguidos.',
      'Em quinze anos atendendo Belo Horizonte, estruturamos o atendimento para isso. Entregamos proposta detalhada por item, com quantitativo em metro linear, especificação de liga e acabamento — o documento que o síndico leva para a assembleia e a construtora anexa à medição.',
    ],
    modelos: [
      { nome: 'Áreas comuns', texto: 'Corrimão de escada predial, guarda-corpo de hall, mezanino e área de lazer, todos com o mesmo padrão de acabamento.' },
      { nome: 'Adequação de acessibilidade', texto: 'Corrimão duplo de rampa e banheiro PCD conforme a NBR 9050, para vistoria e regularização.' },
      { nome: 'Obra nova e construtoras', texto: 'Fornecimento por etapa de obra, com medição em campo e entrega programada por pavimento.' },
      { nome: 'Manutenção e substituição', texto: 'Troca de guarda-corpo de ferro corroído, recuperação de fixações e polimento de peças existentes.' },
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
      { label: 'Documentação', valor: 'Memorial descritivo e especificação de material; ART sob demanda' },
      { label: 'Execução', valor: 'Programada por etapa, com equipe identificada' },
      { label: 'Garantia', valor: 'Garantia formal de fabricação e instalação' },
      { label: 'Pagamento', valor: 'Faturamento com CNPJ e condições parceladas' },
    ],
    faq: [
      { q: 'Vocês emitem nota fiscal e faturam para CNPJ?', a: 'Sim. Emitimos nota fiscal e trabalhamos com condições de pagamento adequadas a condomínios, construtoras e empresas.' },
      { q: 'Conseguem executar sem interditar a escada do prédio?', a: 'Sim. Planejamos a execução por lance e por período, mantendo a circulação. A maior parte da fabricação acontece na nossa oficina; em obra fica a montagem e a fixação.' },
      { q: 'Dão orçamento para assembleia?', a: 'Damos — com descrição por item, quantitativo e validade, no formato que o síndico precisa apresentar aos condôminos.' },
      { q: 'Atendem construtoras com medição por etapa?', a: 'Sim, é parte relevante do nosso volume. Fornecemos por pavimento ou por bloco, acompanhando o cronograma da obra.' },
    ],
  },
]

export const findServico = (slug: string) => SERVICOS.find((s) => s.slug === slug)
