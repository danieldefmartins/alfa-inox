export type Post = {
  slug: string
  title: string
  h1: string
  description: string
  date: string
  updated?: string
  categoria: string
  leitura: string
  foto: string
  resumo: string
  faq?: { q: string; a: string }[]
  html: string
}

export const POSTS: Post[] = [
  {
    slug: 'quanto-custa-corrimao-de-inox',
    title: 'Quanto Custa um Corrimão de Inox? Preço por Metro em 2026',
    h1: 'Quanto custa um corrimão de inox? O que realmente pesa no preço',
    description:
      'Entenda o que define o preço do metro linear de corrimão de aço inox em 2026: modelo, liga, diâmetro, curvas e instalação. Guia direto de quem fabrica em Belo Horizonte.',
    date: '2026-08-10',
    categoria: 'Preços',
    leitura: '7 min',
    foto: 'corrimao-inox-escada-granito-interna',
    resumo:
      'Os cinco fatores que mais mexem no valor do metro linear — e por que orçamento por telefone quase sempre sai errado.',
    faq: [
      { q: 'Corrimão de inox é mais caro que o de ferro?', a: 'No investimento inicial, sim. Mas o ferro exige raspagem e repintura a cada 2 ou 3 anos em área externa. Somando manutenção, o inox costuma empatar entre o quinto e o sétimo ano e sair na frente daí em diante.' },
      { q: 'Dá para orçar corrimão pelo WhatsApp?', a: 'Dá para estimar. Com fotos e a medida aproximada do lance, conseguimos indicar uma faixa. O valor fechado sai depois da medição no local, porque degrau irregular e parede fora de esquadro mudam a quantidade de peças.' },
      { q: 'A instalação está inclusa no preço do metro?', a: 'Na Alfa Inox, sim: o orçamento é fechado e inclui fabricação, material de fixação e instalação em Belo Horizonte e região metropolitana.' },
    ],
    html: `
<p>É a primeira pergunta de praticamente todo mundo que nos procura — e a resposta honesta é que não existe um preço único por metro. Existe uma faixa, e o que move o seu projeto dentro dela são cinco variáveis. Este texto explica cada uma delas para que você consiga ler um orçamento de corrimão sem depender de fé.</p>

<h2>1. O modelo é o que mais pesa</h2>
<p>Um <strong>corrimão de parede</strong> é a configuração mais econômica: um tubo contínuo, suportes a cada 1,2 m e nada mais. Um <strong>corrimão de escada com prumos e travessas</strong> pode custar o dobro ou mais pelo mesmo metro linear, porque cada prumo é uma peça cortada, soldada, polida e chumbada individualmente.</p>
<p>Ordem crescente de custo, na prática:</p>
<ul>
  <li>Corrimão de parede simples</li>
  <li>Corrimão de escada com prumos, sem travessas</li>
  <li>Corrimão com travessas horizontais (3 a 5 tubos)</li>
  <li>Guarda-corpo com prumos verticais a cada 11 cm</li>
  <li>Guarda-corpo com vidro laminado</li>
</ul>

<h2>2. A liga: 304 ou 316</h2>
<p>O <strong>AISI 304</strong> é o padrão de mercado e atende com folga o clima de Belo Horizonte, inclusive em área externa. O <strong>AISI 316</strong> leva molibdênio na composição, resiste muito melhor a cloro e maresia, e custa em torno de 30% a 50% mais caro.</p>
<p>Vale 316 quando: borda de piscina, sauna, área com produto químico, imóvel no litoral. Não vale quando é escada interna — é dinheiro gasto num ganho que você nunca vai perceber.</p>

<h2>3. Diâmetro e espessura da parede do tubo</h2>
<p>Aqui mora a pegadinha mais comum dos orçamentos baratos. Dois corrimãos podem parecer idênticos na foto e ter preços muito diferentes porque um usa tubo de parede <strong>1,2 mm</strong> e o outro, <strong>0,8 mm</strong>. O de parede fina amassa com apoio de peso, vibra ao ser segurado e não deveria ser usado como corrimão.</p>
<p>Ao comparar propostas, exija que apareça no papel: <em>liga, diâmetro e espessura da parede</em>. Se não aparece, você não está comparando a mesma coisa.</p>

<h2>4. Curvas, patamares e emendas</h2>
<p>Escada reta de um lance é o cenário barato. Cada patamar, cada mudança de direção e cada curva calandrada acrescenta trabalho de bancada. Escada em U com dois patamares tem, tipicamente, seis pontos de conforme — e cada um deles é solda, esmerilho e polimento manual até a emenda sumir.</p>
<p>É por isso que o preço por metro de uma escada em caracol não conversa com o preço por metro de um corredor reto.</p>

<h2>5. Acabamento e instalação</h2>
<p>O <strong>escovado</strong> (fosco) é o padrão e o mais usado. O <strong>polido espelhado</strong> exige etapas adicionais de polimento e custa mais — além de marcar mais digital no dia a dia.</p>
<p>Na instalação, o que muda o valor é o substrato: chumbar em concreto é rotina; em degrau de granito exige furação com broca diamantada e cuidado para não trincar a peça; em drywall exige reforço estrutural prévio.</p>

<h2>Como pedir um orçamento que não muda depois</h2>
<p>Para receber um número confiável já no primeiro contato, mande:</p>
<ul>
  <li><strong>Fotos do lance inteiro</strong>, de frente e de lado</li>
  <li><strong>A medida aproximada</strong> em metros lineares (fita métrica pelo corrimão, acompanhando a inclinação)</li>
  <li><strong>Quantos patamares e curvas</strong> existem</li>
  <li><strong>Se há crianças</strong> na casa — isso define se cabe travessa horizontal ou se precisa de prumo vertical</li>
  <li><strong>Interno ou externo</strong>, e se há piscina por perto</li>
</ul>
<p>Com isso, conseguimos indicar uma faixa realista na hora. O valor fechado sai depois da medição no local, que na Alfa Inox não tem custo em Belo Horizonte e região metropolitana.</p>

<h2>O erro mais caro: escolher pelo menor preço</h2>
<p>Trocar um corrimão custa mais que instalar o primeiro, porque envolve remoção, reparo dos furos antigos e, muitas vezes, retoque no revestimento. Uma proposta significativamente abaixo das outras normalmente está economizando em espessura de parede, em quantidade de prumos ou na qualidade do chumbador — e os três aparecem em menos de dois anos.</p>
`,
  },
  {
    slug: 'inox-304-ou-316',
    title: 'Inox 304 ou 316: Qual Escolher para Corrimão e Guarda-Corpo',
    h1: 'Inox 304 ou 316: qual usar no seu corrimão',
    description:
      'A diferença real entre aço inox AISI 304 e 316 em corrimão e guarda-corpo: composição, resistência à corrosão, custo e em que situações cada um se justifica.',
    date: '2026-07-22',
    categoria: 'Materiais',
    leitura: '5 min',
    foto: 'guarda-corpo-vidro-cobertura-piscina-deck',
    resumo:
      'Molibdênio, cloro e maresia: quando o 316 é obrigatório e quando ele é só custo a mais.',
    faq: [
      { q: 'Dá para diferenciar 304 de 316 olhando?', a: 'Não. Visualmente são idênticos. A verificação confiável é por análise química ou pelo certificado do fabricante do tubo. Por isso a liga precisa estar escrita no orçamento.' },
      { q: 'Inox 430 serve para corrimão?', a: 'Não recomendamos. O 430 é ferrítico, tem menos níquel e corrói com facilidade em área externa e em contato com umidade. Aparece em propostas muito baratas e é a causa mais comum de "corrimão de inox enferrujado".' },
    ],
    html: `
<p>Todo orçamento de corrimão deveria trazer a liga escrita. Quando não traz, quase sempre é porque o material não é o que o cliente imagina. Entender a diferença entre 304 e 316 leva cinco minutos e evita um problema de dez anos.</p>

<h2>O que muda na composição</h2>
<p>Os dois são aços inoxidáveis austeníticos, com cromo e níquel. A diferença decisiva é que o <strong>AISI 316 contém de 2% a 3% de molibdênio</strong>, e o 304 não contém nada.</p>
<p>O molibdênio faz uma coisa específica: aumenta muito a resistência à <em>corrosão por pites</em> — aqueles pontinhos escuros que aparecem e furam a superfície. E quem causa pite é, principalmente, o íon cloreto: cloro de piscina, sal marinho, alguns produtos de limpeza.</p>

<h2>Quando o 304 resolve (a maioria dos casos)</h2>
<p>Em Belo Horizonte, o 304 atende com folga:</p>
<ul>
  <li>Escadas internas de qualquer tipo</li>
  <li>Corrimão de parede em prédios e corredores</li>
  <li>Guarda-corpo de sacada e varanda</li>
  <li>Escadas externas, entradas e jardins</li>
  <li>Gradis, portões e grades</li>
  <li>Barras de apoio de banheiro</li>
</ul>
<p>Não estamos no litoral, não temos maresia e a poluição urbana da capital não é agressiva o suficiente para justificar o custo extra nesses cenários.</p>

<h2>Quando o 316 se justifica</h2>
<ul>
  <li><strong>Borda de piscina e área molhada com cloro</strong> — o respingo de água clorada é a situação clássica de pite</li>
  <li><strong>Sauna e spa</strong> — calor, umidade e produtos químicos combinados</li>
  <li><strong>Imóveis no litoral</strong> — maresia ataca o 304 em poucos anos</li>
  <li><strong>Cozinhas industriais e áreas de processo</strong> — limpeza pesada com produto clorado</li>
  <li><strong>Ambientes industriais</strong> com vapores ácidos</li>
</ul>
<p>Nesses casos, o 316 não é luxo: é o que evita trocar a peça inteira em cinco anos.</p>

<h2>Cuidado com o "inox" que não é 304</h2>
<p>A maior parte das reclamações de <em>corrimão de inox enferrujando</em> não é problema de 304 versus 316 — é <strong>AISI 430</strong> vendido como inox genérico. O 430 é ferrítico, tem menos níquel, é magnético (gruda ímã) e não aguenta área externa. É o material que aparece nas propostas com o menor preço da praça.</p>
<p>Teste rápido em casa: encoste um ímã de geladeira. Se grudar com força, provavelmente é 430. O 304 e o 316 são praticamente não magnéticos, embora possam apresentar leve atração em regiões que sofreram dobra ou solda — isso é normal e não indica material errado.</p>

<h2>Manchas de ferrugem no 304: quase sempre contaminação</h2>
<p>Um ponto que confunde muita gente: pontos alaranjados na superfície de um inox 304 raramente são o inox corroendo. Costumam ser <strong>partículas de ferro depositadas</strong> — respingo de esmerilhadeira usada na obra ao lado, contato com ferramenta de aço carbono, água de escoamento de estrutura enferrujada.</p>
<p>Essas partículas oxidam sobre a superfície e parecem ferrugem da peça. Saem com passivação ou com limpeza específica para inox, e a peça volta ao normal. Por isso, ao instalar corrimão em obra corrida, protegemos as peças até a etapa final.</p>

<h2>Resumo prático</h2>
<p>Se tem cloro, sal ou química pesada perto, especifique <strong>316</strong>. Fora isso, <strong>304 com parede de 1,2 mm ou mais</strong> é a escolha certa em quase toda obra em BH. E, em qualquer cenário, exija a liga escrita na proposta.</p>
`,
  },
  {
    slug: 'altura-guarda-corpo-nbr-14718',
    title: 'Altura Mínima de Guarda-Corpo: o que Diz a NBR 14718',
    h1: 'Altura mínima de guarda-corpo: o que a norma exige',
    description:
      'Alturas exigidas pela NBR 14718 para guarda-corpo de sacada, escada e mezanino, espaçamento entre prumos e por que travessa horizontal é problema onde há crianças.',
    date: '2026-07-05',
    categoria: 'Normas',
    leitura: '6 min',
    foto: 'guarda-corpo-inox-corredor-mezanino',
    resumo:
      '1,10 m, 92 cm ou 1,30 m? A altura depende de onde o guarda-corpo está — e do pé-direito do prédio.',
    faq: [
      { q: 'Qual a altura mínima de guarda-corpo de sacada?', a: 'A NBR 14718 estabelece 1,10 m como altura mínima para guarda-corpos de áreas elevadas, medidos do piso acabado até o topo. Em edificações mais altas, a norma pode exigir 1,30 m.' },
      { q: 'Guarda-corpo de escada pode ter 92 cm?', a: 'Sim. Em lances de escada, a altura é medida a partir do focinho do degrau e 92 cm é aceito. No patamar, a altura volta a ser a de área elevada.' },
      { q: 'Qual o espaçamento máximo entre prumos?', a: 'Onde há circulação de crianças, o vão livre entre elementos não deve permitir a passagem de uma esfera de 11 cm — na prática, prumos verticais espaçados no máximo 11 cm entre faces.' },
    ],
    html: `
<p>Guarda-corpo é elemento de segurança, e a norma que rege o assunto no Brasil é a <strong>ABNT NBR 14718</strong> — Guarda-corpos para edificação. Ela não é sugestão: em obra nova, é o que o projeto precisa atender para aprovação, e em caso de acidente é o que se compara.</p>

<h2>As alturas que você precisa saber</h2>
<ul>
  <li><strong>1,10 m</strong> — altura mínima geral para guarda-corpo em área elevada: sacada, varanda, mezanino, terraço, patamar. Medida do piso acabado ao topo do guarda-corpo.</li>
  <li><strong>92 cm</strong> — admitido em <em>lances inclinados de escada</em>, medidos verticalmente a partir do focinho do degrau. Ao chegar no patamar, volta a valer 1,10 m.</li>
  <li><strong>1,30 m</strong> — exigido quando o desnível é grande (edificações altas), conforme a análise de risco prevista na norma.</li>
</ul>
<p>Um erro comum em reforma: instalar 92 cm na sacada porque "na escada é assim". Na sacada, não é.</p>

<h2>O critério da esfera de 11 cm</h2>
<p>Além da altura, a norma limita os vãos. O princípio é simples e vale a pena memorizar: <strong>nenhum vão do guarda-corpo pode permitir a passagem de uma esfera de 11 cm de diâmetro</strong>, em locais com circulação de crianças.</p>
<p>Onze centímetros é, aproximadamente, o diâmetro da cabeça de uma criança pequena. A lógica da norma é impedir que o corpo passe por um vão e a cabeça fique presa — ou o contrário.</p>

<h2>Travessa horizontal: bonita, mas nem sempre indicada</h2>
<p>O guarda-corpo de travessas horizontais é o modelo mais pedido em Belo Horizonte, e por bons motivos: é leve visualmente, custa menos que prumo vertical e combina com quase tudo.</p>
<p>O problema é que <strong>travessa horizontal funciona como degrau</strong>. Uma criança de três anos escala um guarda-corpo de travessas em segundos. Por isso, em residência com criança pequena, em escola, em creche e em área de lazer de condomínio, a orientação técnica é usar:</p>
<ul>
  <li>Prumos <strong>verticais</strong> com no máximo 11 cm entre faces, ou</li>
  <li><strong>Painel de vidro</strong> laminado, que não tem apoio nenhum, ou</li>
  <li>Tela ou chapa perfurada com malha fechada</li>
</ul>
<p>Nós sempre perguntamos sobre crianças antes de fechar o modelo. Não é burocracia: é o item que mais gera arrependimento depois de instalado.</p>

<h2>Resistência: o guarda-corpo tem que aguentar empurrão</h2>
<p>A norma também define esforços. O guarda-corpo precisa resistir a uma <strong>força horizontal aplicada no topo</strong> — da ordem de 0,5 kN/m em uso residencial e mais em áreas de aglomeração de público, como estádios e casas de show.</p>
<p>Na prática, isso se traduz em duas coisas que ninguém vê depois de pronto: a <strong>espessura da parede do tubo do prumo</strong> e a <strong>qualidade do chumbamento</strong>. Um guarda-corpo com prumo de parede fina, ou chumbado em contrapiso solto, atende à estética e falha no ensaio.</p>

<h2>Vidro em guarda-corpo: temperado ou laminado</h2>
<p>Para guarda-corpo de área elevada, a recomendação técnica é <strong>vidro laminado</strong>. O motivo é o comportamento na falha: o temperado, ao romper, se estilhaça inteiro e o vão fica aberto instantaneamente. O laminado mantém os fragmentos presos à película de PVB, e a barreira continua existindo até a substituição.</p>

<h2>E na hora de contratar</h2>
<p>Peça que o orçamento traga, no mínimo: altura do guarda-corpo, espaçamento entre prumos, diâmetro e espessura de parede dos tubos, liga do inox e tipo de fixação. É o conjunto mínimo para saber se a peça atende à norma — e para comparar propostas de verdade.</p>
`,
  },
  {
    slug: 'corrimao-nbr-9050-acessibilidade',
    title: 'Corrimão NBR 9050: Medidas e Exigências de Acessibilidade',
    h1: 'Corrimão conforme a NBR 9050: as medidas que a vistoria cobra',
    description:
      'Alturas de 0,92 m e 0,70 m, prolongamento de 30 cm, diâmetro de empunhadura e afastamento da parede: o guia prático da NBR 9050 para corrimão de rampa e escada.',
    date: '2026-06-18',
    categoria: 'Normas',
    leitura: '6 min',
    foto: 'corrimao-inox-rampa-acessibilidade-duplo',
    resumo:
      'O checklist que síndico, arquiteto e responsável técnico usam para não reprovar na vistoria.',
    faq: [
      { q: 'Corrimão de rampa precisa ser duplo?', a: 'Sim. A NBR 9050 exige corrimão em duas alturas — 0,92 m e 0,70 m — instalados nos dois lados da rampa.' },
      { q: 'O que é o prolongamento de 30 cm?', a: 'É um trecho horizontal do corrimão que continua além do início e do fim do lance, permitindo apoio antes de iniciar e depois de concluir a descida. É um dos itens mais reprovados em vistoria.' },
      { q: 'Qual o diâmetro correto do tubo?', a: 'A empunhadura deve ter seção circular entre 3,0 cm e 4,5 cm de diâmetro — o tubo de 1½" (38,1 mm) atende com folga.' },
    ],
    html: `
<p>A <strong>ABNT NBR 9050</strong> é a norma de acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos. Ela vale para prédios de uso público e de uso coletivo — o que inclui áreas comuns de condomínios, comércios, clínicas, escolas e escritórios.</p>
<p>Este é o conjunto de medidas que efetivamente aparece na vistoria.</p>

<h2>Alturas: 0,92 m e 0,70 m</h2>
<p>O corrimão de rampas e escadas de uso coletivo deve ser <strong>duplo</strong>: uma altura a <strong>0,92 m</strong> e outra a <strong>0,70 m</strong>, medidas do piso (ou do focinho do degrau) até a face superior do tubo.</p>
<p>A altura mais baixa não é detalhe estético: ela atende crianças, pessoas de baixa estatura e usuários de cadeira de rodas que se impulsionam pelo corrimão.</p>

<h2>Nos dois lados</h2>
<p>Rampas e escadas de uso coletivo precisam de corrimão <strong>em ambos os lados</strong>. Um único corrimão só é aceito em situações específicas de uso restrito.</p>

<h2>Prolongamento de 30 cm — o item mais reprovado</h2>
<p>O corrimão deve continuar <strong>30 cm horizontalmente além do início e do fim</strong> de cada segmento de rampa ou lance de escada, com a extremidade recurvada — voltada para a parede, para baixo ou fechada em curva.</p>
<p>É o item que mais reprova adequação em vistoria, porque quase todo corrimão antigo termina exatamente onde a rampa termina. A função é permitir que a pessoa se apoie antes de começar e depois de terminar o percurso, quando o corpo ainda está em desequilíbrio.</p>
<p>A extremidade recurvada tem motivo próprio: ponta reta engancha alça de bolsa, manga de roupa e mão.</p>

<h2>Empunhadura e afastamento</h2>
<ul>
  <li><strong>Seção circular de 3,0 cm a 4,5 cm</strong> de diâmetro — tubo de 1½" (38,1 mm) está dentro</li>
  <li><strong>Mínimo de 4 cm livres</strong> entre o corrimão e a parede, para a mão passar sem raspar</li>
  <li>Sem arestas vivas e <strong>sem interrupção</strong> ao longo do lance — a mão deve poder deslizar de ponta a ponta</li>
  <li>Fixação que não interfira na passagem da mão (suportes por baixo, não por cima)</li>
</ul>

<h2>Barras de apoio no banheiro acessível</h2>
<p>No banheiro PCD, as barras seguem regras próprias:</p>
<ul>
  <li>Comprimento mínimo de <strong>80 cm</strong> nas laterais da bacia sanitária</li>
  <li>Resistência a uma força de <strong>1,5 kN</strong> (cerca de 150 kg) em qualquer ponto e direção</li>
  <li>Altura de instalação de <strong>75 cm</strong> do piso, no eixo da barra</li>
  <li>Barras para lavatório, box e banheira conforme o layout aprovado</li>
</ul>
<p>O requisito de 1,5 kN merece atenção: ele depende tanto do tubo quanto da parede. Barra excelente chumbada em drywall sem reforço arranca. Por isso avaliamos o substrato antes de instalar — e, quando necessário, indicamos o reforço.</p>

<h2>Por que inox nessas aplicações</h2>
<p>Corrimão e barra de apoio são superfícies de contato permanente, limpas com frequência e com produto forte, e submetidas a carga real de apoio. Inox 304 escovado resolve os três: não descasca como pintura, não corrói com álcool e desinfetante, e tem a rigidez necessária.</p>
<p>Peça pintada, nessas condições, começa a lascar em pouco tempo — e superfície lascada em barra de apoio de banheiro vira ponto de corte.</p>

<h2>Checklist rápido antes da vistoria</h2>
<ul>
  <li>Corrimão duplo, 0,92 m e 0,70 m, nos dois lados?</li>
  <li>Prolongamento de 30 cm no início e no fim, com ponta recurvada?</li>
  <li>Tubo entre 3,0 cm e 4,5 cm, com 4 cm livres da parede?</li>
  <li>Corrimão contínuo, sem interrupção no patamar intermediário?</li>
  <li>Barras de banheiro com 80 cm, a 75 cm do piso, bem chumbadas?</li>
</ul>
<p>Se algum item ficou de fora, ele vai voltar como pendência. Fazemos essa adequação em Belo Horizonte e região — com medição no local e memorial descritivo das medidas executadas.</p>
`,
  },
  {
    slug: 'como-limpar-corrimao-de-inox',
    title: 'Como Limpar Corrimão de Aço Inox (e o que Nunca Usar)',
    h1: 'Como limpar e conservar corrimão de aço inox',
    description:
      'A rotina certa de limpeza para corrimão e guarda-corpo de inox, o que fazer com manchas de ferrugem e os cinco produtos que destroem o acabamento.',
    date: '2026-06-02',
    categoria: 'Manutenção',
    leitura: '4 min',
    foto: 'corrimao-parede-inox-escada-condominio',
    resumo:
      'Pano macio no sentido do escovado resolve 95% dos casos. E existe uma lista curta de produtos que você precisa manter longe.',
    faq: [
      { q: 'Posso usar palha de aço no inox?', a: 'Nunca. A palha de aço comum deixa partículas de ferro cravadas na superfície, e essas partículas oxidam e formam pontos de ferrugem no seu inox. Use pano macio ou, no máximo, esponja não abrasiva.' },
      { q: 'Apareceram pontos de ferrugem no meu corrimão. Perdi a peça?', a: 'Quase sempre não. São partículas de ferro depositadas na superfície, não corrosão do inox. Removem-se com produto específico para inox ou passivação, e a peça volta ao normal.' },
    ],
    html: `
<p>Aço inox é chamado de inoxidável porque forma sozinho uma camada invisível de óxido de cromo que se regenera quando arranhada. A manutenção existe para <strong>não atrapalhar</strong> esse mecanismo — e não para "proteger" a peça com produtos.</p>

<h2>A rotina que basta</h2>
<p>Para corrimão e guarda-corpo de uso normal, uma vez por semana:</p>
<ol>
  <li>Pano de microfibra <strong>úmido em água morna com detergente neutro</strong></li>
  <li>Passe <strong>no sentido do escovado</strong> (as linhas do acabamento), nunca em círculos</li>
  <li>Enxágue com pano úmido em água limpa</li>
  <li><strong>Seque</strong> com pano seco — água parada deixa marca de mineral, principalmente em água dura</li>
</ol>
<p>Esse é o procedimento completo. Não precisa de cera, óleo ou "produto para inox" na rotina.</p>

<h2>Marca de digital em polido espelhado</h2>
<p>O acabamento polido marca muito mais que o escovado — é a natureza dele. Para corrimão de uso intenso, o escovado é sempre a indicação mais prática. Em peças polidas, um pano de microfibra levemente umedecido em álcool isopropílico resolve as digitais sem risco.</p>

<h2>Pontos de ferrugem: entenda antes de esfregar</h2>
<p>Aqueles pontinhos alaranjados que aparecem, principalmente em obra recém-entregue, quase nunca são o inox corroendo. São <strong>partículas de ferro depositadas</strong> na superfície: respingo de esmerilhadeira, poeira de corte de vergalhão, contato com ferramenta de aço carbono, escorrimento de água de estrutura enferrujada.</p>
<p>A partícula oxida em cima do inox e parece ferrugem da peça. O tratamento é remover a contaminação com produto específico para inox (à base de ácido cítrico ou passivante) e enxaguar bem. A peça volta ao original.</p>
<p>Se o ponto voltar sempre no mesmo lugar, investigue a fonte: normalmente há um parafuso, suporte ou tubulação de aço carbono pingando ali.</p>

<h2>Os cinco produtos que você nunca deve usar</h2>
<ul>
  <li><strong>Palha de aço comum</strong> — crava ferro na superfície; é a causa número um de "inox enferrujado"</li>
  <li><strong>Água sanitária e produtos clorados</strong> — o cloro ataca a camada passiva e causa corrosão por pite</li>
  <li><strong>Ácido muriático</strong> — usado em limpeza pós-obra de piso, mancha e corrói inox irremediavelmente. Proteja o corrimão antes de qualquer limpeza pesada de piso</li>
  <li><strong>Saponáceo em pó e abrasivos</strong> — riscam e destroem a uniformidade do escovado</li>
  <li><strong>Escova de aço carbono</strong> — mesmo problema da palha de aço</li>
</ul>

<h2>Cuidados durante a obra</h2>
<p>A maior parte dos danos que vemos acontece nas semanas seguintes à instalação, não com o tempo. Se o corrimão foi instalado antes do fim da obra:</p>
<ul>
  <li>Envolva as peças em plástico-bolha ou filme até a limpeza final</li>
  <li>Nunca use esmerilhadeira perto de inox descoberto</li>
  <li>Avise a equipe de limpeza pós-obra sobre o ácido muriático</li>
  <li>Não apoie ferramentas de aço carbono sobre o corrimão</li>
</ul>

<h2>Riscos e amassados</h2>
<p>Riscos superficiais em inox escovado podem ser recuperados com polimento no sentido do escovado, por quem tem a lixa e a técnica corretas. Amassado em tubo de parede fina não tem recuperação — é substituição de peça. Mais um motivo para não economizar na espessura na hora de contratar.</p>
`,
  },
  {
    slug: 'guarda-corpo-vidro-ou-inox',
    title: 'Guarda-Corpo de Vidro ou de Inox: Qual Escolher',
    h1: 'Guarda-corpo de vidro ou de inox: comparativo honesto',
    description:
      'Custo, segurança, manutenção, estética e comportamento com crianças: comparativo entre guarda-corpo 100% inox e guarda-corpo de vidro com estrutura de inox.',
    date: '2026-05-14',
    categoria: 'Escolha',
    leitura: '5 min',
    foto: 'guarda-corpo-vidro-inox-escada',
    resumo:
      'Não existe melhor absoluto — existe o adequado para o seu vão, o seu orçamento e quem circula por ali.',
    faq: [
      { q: 'Guarda-corpo de vidro é mais caro?', a: 'Em geral sim, especialmente com vidro laminado, que é o indicado para áreas elevadas. A diferença varia com a espessura do vidro e o tipo de fixação — torres e botões custam mais que painel entre prumos.' },
      { q: 'Vidro é seguro com crianças?', a: 'É um dos modelos mais seguros: não tem vão e não oferece apoio para escalada. Exige apenas a espessura correta e vidro laminado em área elevada.' },
    ],
    html: `
<p>Quem chega até aqui já decidiu que quer inox. A dúvida que sobra é o preenchimento: manter tudo em tubo de inox ou colocar vidro entre a estrutura. Vamos comparar pelos critérios que realmente decidem.</p>

<h2>Custo</h2>
<p><strong>Inox integral</strong> costuma sair mais barato, principalmente no modelo de travessas horizontais. <strong>Vidro</strong> adiciona o custo do painel, das ferragens de fixação e do transporte cuidadoso — e o laminado, indicado para áreas elevadas, custa mais que o temperado.</p>
<p>Dentro da linha de vidro, a ordem de custo é: painel entre prumos (mais econômico) → torres → botões/spider → perfil U embutido (mais caro).</p>

<h2>Vista e sensação de espaço</h2>
<p>Aqui o vidro ganha sem discussão. Em sacada com vista, em escada de sala com pé-direito duplo e em área de piscina, o vidro devolve o cenário que o guarda-corpo tiraria. Em ambiente pequeno, ele também não fecha visualmente o espaço.</p>
<p>Se o guarda-corpo está num vão interno sem vista relevante, esse ganho some — e a conta pende para o inox.</p>

<h2>Crianças</h2>
<p>Vidro é excelente: não tem vão e não tem onde pisar. Inox com <strong>prumos verticais</strong> a 11 cm é igualmente adequado. Inox com <strong>travessas horizontais</strong> é o modelo a evitar, porque vira escada.</p>
<p>Ou seja: o critério "criança" não elimina o inox, elimina um modelo específico de inox.</p>

<h2>Manutenção</h2>
<p>O vidro mostra digital, respingo de chuva e poeira muito mais do que o tubo. Não é difícil de limpar — água, detergente neutro e rodinho — mas é mais frequente. Em sacada exposta à chuva de BH, isso significa limpeza a cada duas semanas para manter o visual.</p>
<p>O inox escovado disfarça marca e pede pano macio ocasional. Para quem quer o mínimo de manutenção, inox integral vence.</p>

<h2>Vento e área externa</h2>
<p>Guarda-corpo de vidro em sacada alta funciona como <strong>vela</strong>: bloqueia o vento em vez de deixá-lo passar. Isso é bom para conforto (menos vento na varanda) e exige atenção no dimensionamento das fixações, porque a carga de vento vai toda para as torres e para a laje.</p>
<p>O inox de travessas deixa o vento passar e trabalha com esforços menores.</p>

<h2>Durabilidade</h2>
<p>Os dois duram décadas. A diferença está no modo de falha: inox amassa ou risca, mas continua funcionando. Vidro, se trincar por impacto, precisa de substituição do painel inteiro — e é aqui que o laminado se paga, porque continua barrando a passagem até a troca.</p>

<h2>A solução mais escolhida: os dois</h2>
<p>Boa parte dos nossos projetos combina: <strong>vidro onde há vista</strong> — sacada, escada da sala, borda de piscina — e <strong>inox integral onde é circulação</strong> — escada de serviço, mezanino interno, área externa lateral. O acabamento do inox é o mesmo nas duas partes, então a casa lê como um projeto só.</p>

<h2>Como decidir em uma pergunta</h2>
<p>Olhe para o vão e pergunte: <em>"tem alguma coisa do outro lado que eu quero ver?"</em>. Se tem, vidro. Se não tem, inox integral resolve melhor e por menos.</p>
`,
  },
]

export const findPost = (slug: string) => POSTS.find((p) => p.slug === slug)
export const postsOrdenados = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date))
