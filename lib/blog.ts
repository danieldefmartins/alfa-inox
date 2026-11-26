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
  /** Resposta curta mostrada em destaque no topo do artigo (artigos novos). */
  resposta?: string
  /** Cartão de compartilhamento já existente em public/og (sem ele, usa post-<slug>). */
  og?: string
  faq?: { q: string; a: string }[]
  html: string
}

export const POSTS: Post[] = [
  {
    slug: 'quanto-custa-corrimao-de-inox',
    title: 'Quanto Custa Corrimão de Inox? Preço por Metro',
    h1: 'Quanto custa um corrimão de inox? O que realmente pesa no preço',
    description:
      'O que define o preço do metro linear de corrimão de inox: modelo, liga, diâmetro, curvas e instalação. Guia direto de quem fabrica em Belo Horizonte.',
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
<p>É a primeira pergunta de quase cada pessoa que nos procura — e a resposta honesta é que não existe um preço único por metro. Existe uma faixa, e o que move o seu projeto dentro dela são cinco variáveis. Este texto explica cada uma delas para que você consiga ler um orçamento de corrimão sem depender de fé.</p>

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
    title: 'Inox 304 ou 316: Qual Usar no Corrimão',
    h1: 'Inox 304 ou 316: qual usar no seu corrimão',
    description:
      'A diferença real entre aço inox AISI 304 e 316 em corrimão e guarda-corpo: composição, resistência à corrosão, custo e em que situações cada um se justifica.',
    date: '2026-07-22',
    categoria: 'Materiais',
    leitura: '5 min',
    foto: 'corrimao-inox-escada-piscina',
    resumo:
      'Molibdênio, cloro e maresia: quando o 316 é obrigatório e quando ele é só custo a mais.',
    faq: [
      { q: 'Dá para diferenciar 304 de 316 olhando?', a: 'Não. Visualmente são idênticos. A verificação confiável é por análise química ou pelo certificado do fabricante do tubo. Por isso a liga precisa estar escrita no orçamento.' },
      { q: 'Inox 430 serve para corrimão?', a: 'Não recomendamos. O 430 é ferrítico, tem menos níquel e corrói com facilidade em área externa e em contato com umidade. Aparece em propostas muito baratas e é a causa mais comum de "corrimão de inox enferrujado".' },
    ],
    html: `
<p>Qualquer orçamento de corrimão deveria trazer a liga escrita. Quando não traz, quase sempre é porque o material não é o que o cliente imagina. Entender a diferença entre 304 e 316 leva cinco minutos e evita um problema de dez anos.</p>

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
    title: 'Altura do Guarda-Corpo pela NBR 14718',
    h1: 'Altura mínima de guarda-corpo: o que a norma exige',
    description:
      'Alturas da NBR 14718 para guarda-corpo de sacada, escada e mezanino, espaçamento entre prumos e por que travessa horizontal é risco onde há crianças.',
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
    title: 'Corrimão NBR 9050: Medidas de Acessibilidade',
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
<p>É o item que mais reprova adequação em vistoria, porque quase sempre o corrimão antigo termina exatamente onde a rampa termina. A função é permitir que a pessoa se apoie antes de começar e depois de terminar o percurso, quando o corpo ainda está em desequilíbrio.</p>
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
    title: 'Como Limpar Corrimão de Inox Sem Manchar',
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
  {
    slug: 'corrimao-de-ferro-ou-inox',
    title: 'Corrimão de Ferro ou de Inox: Qual Vale Mais',
    h1: 'Ferro ou inox no corrimão e no guarda-corpo: o que muda na prática',
    description:
      'Ferro ou inox em corrimão, guarda-corpo e grade: ferrugem, pintura, custo ao longo dos anos e quando vale trocar. Explicado por quem fabrica em BH.',
    date: '2026-11-26',
    categoria: 'Materiais',
    leitura: '6 min',
    foto: 'corrimao-inox-escada-externa-residencial',
    og: 'servico-corrimao-inox',
    resumo:
      'Onde o ferro começa a enferrujar, quanto ele pede de manutenção e em que situação ainda faz sentido escolher ferro.',
    resposta:
      'O ferro custa menos para instalar, mas pede lixa e tinta de tempos em tempos e enferruja onde a pintura abre. O inox custa mais no começo e depois só pede limpeza. Em área externa, com o sol forte e as chuvas de verão de BH, o inox costuma compensar. Em área interna e seca, ferro bem pintado ainda é uma escolha honesta.',
    faq: [
      { q: 'Corrimão de ferro enferruja mesmo pintado?', a: 'Enferruja onde a pintura abre: na solda, na base chumbada no piso, nos parafusos e onde a mão e o anel raspam todo dia. Com repintura em dia ele dura, mas a manutenção é parte do custo.' },
      { q: 'Quanto tempo leva para o inox compensar o preço?', a: 'Em área externa, o ferro costuma pedir raspagem e repintura a cada 2 ou 3 anos. Somando essas manutenções, o inox costuma empatar entre o quinto e o sétimo ano e sair na frente daí em diante. Em área interna a conta é mais lenta.' },
      { q: 'Dá para trocar o corrimão de ferro por inox sem quebrar o piso?', a: 'Na maioria dos casos, sim. Retiramos as peças antigas, cortamos rente e tapamos os pontos de fixação. O inox entra com base flangeada e chumbador, que cobrem a área ao redor do furo novo.' },
      { q: 'Como saber se o orçamento é de inox de verdade?', a: 'Peça a liga escrita na proposta (AISI 304 ou 316), além do diâmetro e da espessura da parede do tubo. Um ímã que gruda com força indica inox 430 ou aço comum, que não servem para área externa.' },
    ],
    html: `
<p>Muita gente chega até nós com um corrimão de ferro descascando e uma dúvida simples: vale pintar de novo ou já é hora de trocar por inox? A resposta depende de onde a peça está e de quanto você está disposto a cuidar dela. Abaixo, o que cada material faz ao longo dos anos, sem propaganda.</p>

<h2>O que chamam de "ferro" no orçamento</h2>
<p>O corrimão "de ferro" da serralheria comum é, na verdade, <strong>aço carbono</strong>: tubo redondo, metalon (tubo quadrado ou retangular) ou barra maciça. Ele é resistente, fácil de soldar e barato. O problema é que, em contato com água e oxigênio, enferruja. Por isso ele sempre leva fundo anticorrosivo e tinta, ou vem galvanizado (com uma camada de zinco).</p>
<p>O <strong>aço inox</strong> é uma liga com cromo e níquel. O cromo forma na superfície uma película fina que protege o metal e se refaz sozinha quando a peça é riscada. É isso que dispensa a tinta.</p>

<h2>Onde a ferrugem do ferro começa</h2>
<p>Ferro bem pintado não enferruja de uma vez. A ferrugem entra pelos pontos fracos, e são sempre os mesmos:</p>
<ul>
  <li><strong>A base chumbada no piso</strong>, onde a água da limpeza e da chuva fica parada</li>
  <li><strong>As soldas</strong>, que são a parte mais difícil de pintar por igual</li>
  <li><strong>O tubo de cima</strong>, onde a mão, o anel e a chave raspam a tinta todo dia</li>
  <li><strong>Parafusos e suportes</strong> de aço comum</li>
</ul>
<p>Em escada externa e em sacada aberta, a combinação de sol forte com as chuvas de verão de Belo Horizonte acelera esse ciclo. A tinta resseca, trinca e a água entra. Quando a ferrugem aparece por baixo da tinta, o serviço deixa de ser só repintar: é raspar até o metal, tratar e pintar de novo.</p>

<h2>Manutenção ao longo dos anos</h2>
<p>Em área externa, ferro pede raspagem e repintura a cada 2 ou 3 anos para continuar apresentável. Em área interna seca, esse intervalo é bem maior. O inox, nas duas situações, pede limpeza com pano macio e detergente neutro (temos um <a href="/blog/como-limpar-corrimao-de-inox/">guia de limpeza do inox</a> para isso).</p>
<p>Na conta do dinheiro, o inox é mais caro na instalação. Somando as manutenções do ferro em área externa, ele costuma empatar entre o quinto e o sétimo ano e sair na frente daí em diante. Em área interna, essa virada demora mais.</p>

<h2>Quando o ferro ainda faz sentido</h2>
<p>Não vamos fingir que inox é sempre a resposta. Ferro é uma escolha razoável quando:</p>
<ul>
  <li>A peça fica em <strong>área interna e seca</strong> e você não se importa de pintar de tempos em tempos</li>
  <li>O projeto pede um <strong>desenho ornamental</strong> de ferro trabalhado, que combina com a fachada da casa</li>
  <li>A obra é <strong>provisória</strong> ou o orçamento do momento não comporta o inox</li>
</ul>
<p>Fora desses casos, principalmente em escada externa, sacada, beira de piscina e área de serviço molhada, o inox resolve o problema de vez.</p>

<h2>Aparência e peso</h2>
<p>O inox trabalha bem com linhas retas: tubo redondo, travessas horizontais, prumos verticais e vidro. Fica leve na fachada e combina com projeto moderno. O ferro permite peças maciças e ornamentos, mas a cor depende da tinta, que desbota no sol.</p>
<p>Um detalhe que pouca gente percebe: o tubo de inox de boa espessura é firme na mão sem ser pesado. Tubo de parede fina, de qualquer material, vibra e amassa. Por isso a espessura da parede tem que vir escrita no orçamento.</p>

<h2>Trocar ferro por inox: como é a obra</h2>
<p>A troca é a obra mais comum que fazemos em escada com corrimão antigo. O caminho costuma ser este:</p>
<ol>
  <li>Medimos no local, com o corrimão velho ainda instalado</li>
  <li>Fabricamos as peças de inox na nossa oficina</li>
  <li>No dia da instalação, retiramos o ferro, cortamos rente as partes chumbadas e tratamos os pontos antigos</li>
  <li>Instalamos o inox com base flangeada e chumbador de inox, que cobre a área ao redor do furo novo</li>
</ol>
<p>Na maioria das escadas, isso acontece sem quebrar piso nem revestimento. Se o degrau é de granito, a furação é feita com broca diamantada.</p>

<h2>Cuidado com o inox que não é inox</h2>
<p>Parte da fama de "inox que enferruja" vem de peças feitas com <strong>inox 430</strong> ou com aço comum cromado, vendidos como inox. Eles mancham em pouco tempo em área externa. Exija na proposta a liga (AISI 304 ou 316), o diâmetro e a espessura da parede do tubo. Explicamos a diferença entre as ligas no artigo <a href="/blog/inox-304-ou-316/">inox 304 ou 316</a>.</p>

<h2>Quer trocar o seu?</h2>
<p>Mande fotos do corrimão ou do guarda-corpo atual pelo WhatsApp (31) 2298-0072, de frente e de lado, com a medida aproximada. Veja também a página de <a href="/servicos/corrimao-inox/">corrimão de inox em BH</a> e a de <a href="/servicos/guarda-corpo-inox/">guarda-corpo de inox</a>, ou faça o <a href="/orcamento/">pedido de orçamento</a> pelo site.</p>
`,
  },
  {
    slug: 'guarda-corpo-para-sacada',
    title: 'Guarda-Corpo para Sacada: Modelos e Altura',
    h1: 'Guarda-corpo para sacada e varanda: modelo, altura e fixação',
    description:
      'Como escolher o guarda-corpo da sacada: inox com travessas, prumos ou vidro, altura de 1,10 m, fixação no piso ou na laje e o padrão da fachada do prédio.',
    date: '2026-11-26',
    categoria: 'Escolha',
    leitura: '7 min',
    foto: 'guarda-corpo-inox-polido-sacada-residencia',
    og: 'servico-guarda-corpo-inox',
    resumo:
      'Os três modelos que mais instalamos em sacada, a altura que a norma pede e o que decide entre fixar no piso ou na lateral da laje.',
    resposta:
      'Em sacada e varanda o guarda-corpo precisa ter pelo menos 1,10 m a partir do piso acabado (NBR 14718) e não pode deixar vão por onde passe uma esfera de 11 cm. Os modelos mais usados são inox com travessas, inox com prumos verticais e vidro laminado com estrutura de inox. Com criança em casa, fique com prumos verticais ou vidro. Em prédio, confirme antes o padrão da fachada com o síndico.',
    faq: [
      { q: 'Qual a altura do guarda-corpo da sacada?', a: 'No mínimo 1,10 m, medidos do piso acabado até o topo, como pede a NBR 14718 para áreas elevadas. Se houver mureta ou floreira onde dê para subir, a altura útil deve ser conferida a partir dela.' },
      { q: 'Guarda-corpo de sacada com travessa horizontal é seguro?', a: 'Para adultos, sim. Com criança pequena, a travessa vira degrau. Nesse caso indicamos prumos verticais com no máximo 11 cm entre si, ou vidro laminado.' },
      { q: 'É melhor fixar no piso ou na lateral da laje?', a: 'Na lateral da laje o guarda-corpo libera o piso inteiro da sacada e não fura a impermeabilização, mas a borda precisa ter concreto firme. No piso a instalação é mais simples e cada furo é vedado. A escolha sai da visita técnica.' },
      { q: 'Preciso de autorização do condomínio para trocar o guarda-corpo?', a: 'Em geral, sim, porque o guarda-corpo faz parte da fachada. Converse com o síndico e consulte a convenção antes de fechar o modelo. A nossa proposta descreve modelo, liga e acabamento, o que ajuda nessa conversa.' },
      { q: 'Vidro de sacada pode ser temperado?', a: 'Em sacada indicamos vidro laminado. Se ele trincar, os pedaços ficam presos à película e o painel continua barrando a passagem. O temperado, quando quebra, se desfaz por inteiro.' },
    ],
    html: `
<p>Sacada é o lugar da casa onde o guarda-corpo trabalha mais: pega sol, chuva, gente encostada olhando a vista e, às vezes, criança correndo. É também onde ele mais aparece, tanto de dentro quanto da rua. Este guia junta o que conversamos com cada cliente antes de fechar um guarda-corpo de sacada ou varanda em BH.</p>

<h2>A altura: 1,10 m do piso acabado</h2>
<p>A <strong>NBR 14718</strong> pede no mínimo <strong>1,10 m</strong> em sacadas, varandas, terraços e qualquer área elevada, medidos do piso acabado até o topo do guarda-corpo. Dois cuidados que fazem diferença na obra:</p>
<ul>
  <li><strong>Piso ainda por assentar:</strong> se o porcelanato entra depois, a altura tem que considerar a espessura do piso novo e da argamassa</li>
  <li><strong>Mureta ou floreira:</strong> se há uma mureta baixa ou jardineira onde uma criança consegue subir, a altura útil deve ser conferida a partir dela</li>
</ul>
<p>Também não pode haver vão por onde passe uma esfera de <strong>11 cm</strong>. Os detalhes da norma estão no artigo sobre a <a href="/blog/altura-guarda-corpo-nbr-14718/">altura do guarda-corpo pela NBR 14718</a>. Em caso de dúvida sobre a exigência do seu imóvel, confirme com o responsável técnico da obra.</p>

<h2>Os três modelos que mais instalamos em sacada</h2>
<h3>Inox com travessas horizontais</h3>
<p>Prumos de 1½" com três a cinco tubos horizontais. É o mais pedido: visual leve, deixa o vento passar e tem custo equilibrado. O ponto contra é que travessa horizontal funciona como degrau, então não é o modelo para casa com criança pequena.</p>
<h3>Inox com prumos verticais</h3>
<p>Barras verticais com no máximo 11 cm entre si. Não dá apoio para escalar e continua deixando o vento e a luz passarem. É a recomendação quando há crianças.</p>
<h3>Vidro laminado com inox</h3>
<p>Painéis de vidro presos por prumos, torres ou perfil no piso, com ou sem corrimão em cima. Preserva a vista, e em BH, com tanto prédio e casa em terreno de morro, é o modelo que mais pedem para varanda com vista da cidade. Para sacada, o vidro tem que ser <strong>laminado</strong>. Comparamos os dois materiais no artigo <a href="/blog/guarda-corpo-vidro-ou-inox/">guarda-corpo de vidro ou de inox</a>.</p>

<h2>Fixação no piso ou na lateral da laje</h2>
<p>Essa decisão muda o visual, a área útil e o risco de infiltração.</p>
<ul>
  <li><strong>No piso:</strong> sapata flangeada com chumbador de inox sobre o piso da sacada. É a instalação mais simples. Como o piso de sacada costuma ser impermeabilizado, cada furo precisa ser vedado com cuidado para a água não descer para o andar de baixo.</li>
  <li><strong>Na lateral da laje:</strong> os prumos são presos na face lateral da borda. Libera o piso inteiro, deixa a sacada mais larga e não fura a impermeabilização. Exige concreto firme na borda e acesso por fora, o que pode pedir andaime ou balancim em andar alto.</li>
</ul>
<p>A escolha sai da visita técnica: olhamos o acabamento da borda, a espessura da laje e o acesso.</p>

<h2>Sol, chuva e a liga certa</h2>
<p>Para sacada e varanda em Belo Horizonte, o <strong>inox 304</strong> atende com folga. O <strong>316</strong> vale a diferença quando a sacada fica colada à piscina, onde o respingo de cloro ataca o metal. O acabamento <strong>escovado</strong> disfarça marca de chuva e de mão; o <strong>polido</strong> brilha mais e pede limpeza mais frequente.</p>
<p>Em andar alto com vidro, lembre que o painel segura o vento em vez de deixá-lo passar. A fixação precisa ser dimensionada para essa carga, e isso é parte do projeto.</p>

<h2>Prédio: o guarda-corpo também é fachada</h2>
<p>Em apartamento, o guarda-corpo da sacada faz parte da fachada do prédio. Antes de trocar o modelo ou o material, converse com o síndico e consulte a convenção do condomínio. Muitos prédios exigem o mesmo desenho e a mesma cor em todas as unidades. Se o prédio inteiro vai trocar, a página de <a href="/servicos/condominios-e-empresas/">condomínios e empresas</a> explica como montamos a proposta para a assembleia.</p>

<h2>O que mandar para receber o orçamento</h2>
<ul>
  <li>Fotos da sacada de frente e de lado, mostrando a borda e o piso</li>
  <li>A medida do perímetro em metros lineares</li>
  <li>A altura da mureta, se houver</li>
  <li>O andar e como é o acesso (elevador, escada estreita)</li>
  <li>Se há crianças ou pets na casa</li>
</ul>
<p>Mande pelo WhatsApp (31) 2298-0072 ou pelo <a href="/orcamento/">pedido de orçamento</a>. Se quiser testar modelos antes, use o <a href="/monte-seu-guarda-corpo/">configurador de guarda-corpo</a>. Veja também as páginas de <a href="/servicos/guarda-corpo-inox/">guarda-corpo de inox</a> e de <a href="/servicos/guarda-corpo-de-vidro/">guarda-corpo de vidro em BH</a>.</p>
`,
  },
  {
    slug: 'grade-de-inox-para-janela',
    title: 'Grade de Inox para Janela: Vale a Pena?',
    h1: 'Grade de inox para janela e vão: quando vale e como escolher',
    description:
      'Grade de inox para janela, vão e área de serviço: vantagens sobre o ferro, espaçamento entre barras, fixação na alvenaria e o que pedir no orçamento em BH.',
    date: '2026-11-26',
    categoria: 'Escolha',
    leitura: '5 min',
    foto: 'gradil-inox-fechamento-parede',
    og: 'servico-portoes-e-gradis-inox',
    resumo:
      'Modelos, espaçamento entre barras, a fixação que segura de verdade e o cuidado com a saída de emergência.',
    resposta:
      'Vale quando a grade pega chuva ou quando você cansou de pintar. A grade de inox não enferruja, fica mais leve na fachada que a de ferro e é feita sob medida para o vão. Para proteger criança, use barras com no máximo 11 cm entre si, a mesma referência do guarda-corpo. Contra invasão, o que mais pesa é a fixação na alvenaria.',
    faq: [
      { q: 'Grade de inox é mais cara que a de ferro?', a: 'Na instalação, sim. A diferença volta com o tempo, porque a grade de inox não pede lixa nem tinta. Em janela que pega chuva, a conta costuma favorecer o inox depois de alguns anos.' },
      { q: 'Qual o espaçamento entre as barras da grade?', a: 'Para impedir a passagem de criança, usamos como referência no máximo 11 cm entre barras, a mesma medida que a norma pede para guarda-corpo. Grade só decorativa pode ter outro espaçamento.' },
      { q: 'A grade é presa na esquadria da janela?', a: 'Não recomendamos. A esquadria de alumínio não foi feita para segurar a grade. Fixamos na alvenaria, com chumbador de inox, por dentro ou por fora do vão.' },
      { q: 'Dá para fazer grade com abertura?', a: 'Dá para prever uma folha com dobradiças e trava pelo lado de dentro. Em janela de quarto, isso ajuda na saída em caso de emergência. É um detalhe que se define no projeto.' },
    ],
    html: `
<p>Grade de janela costuma ser lembrada só quando a de ferro começa a soltar ferrugem na parede ou quando chega um bebê em casa. Nessas horas, o inox aparece como opção. Abaixo, o que considerar antes de pedir uma grade de inox para janela, vão de escada, área de serviço ou cobogó aberto.</p>

<h2>Onde a grade de inox compensa</h2>
<ul>
  <li><strong>Janela que pega chuva</strong>, onde a grade de ferro mancha o peitoril e a parede de laranja</li>
  <li><strong>Área de serviço e varanda técnica</strong>, com umidade e produto de limpeza</li>
  <li><strong>Apartamento com criança</strong>, em janela baixa ou vão aberto para o lado de fora</li>
  <li><strong>Fachada nova</strong>, onde o desenho limpo do inox combina com o resto do projeto</li>
</ul>
<p>Em janela interna e protegida, a grade de ferro bem pintada ainda funciona. A diferença do inox aparece onde há água. Explicamos a comparação completa no artigo <a href="/blog/corrimao-de-ferro-ou-inox/">ferro ou inox</a>.</p>

<h2>Modelos de grade em inox</h2>
<ul>
  <li><strong>Barras verticais</strong> de tubo redondo ou quadrado: o modelo mais discreto e o mais seguro para criança</li>
  <li><strong>Barras horizontais</strong>: visual moderno, mas viram escada; servem onde não há criança</li>
  <li><strong>Barra chata</strong>: perfil mais fino, bom para janelas pequenas</li>
  <li><strong>Chapa perfurada</strong>: fecha mais a visão e serve como proteção e privacidade ao mesmo tempo</li>
</ul>
<p>Fazemos a grade no mesmo acabamento do corrimão e do guarda-corpo da obra, escovado ou polido, para que tudo combine.</p>

<h2>Espaçamento entre barras</h2>
<p>Para segurança de criança, a referência que usamos é a mesma do guarda-corpo: <strong>no máximo 11 cm</strong> entre barras, para que não passe a cabeça. Abaixo de 1,10 m do piso, barras horizontais não são indicadas, porque viram apoio para escalar. Se a grade é só para fechar um vão decorativo, o espaçamento pode ser outro, decidido pelo desenho.</p>

<h2>Fixação: onde a grade segura de verdade</h2>
<p>Uma grade é tão forte quanto a fixação dela. Alguns cuidados:</p>
<ul>
  <li><strong>Na alvenaria, nunca na esquadria.</strong> Janela de alumínio ou de PVC não foi feita para segurar grade.</li>
  <li><strong>Chumbador de inox</strong> em parede maciça ou concreto. Em bloco vazado, o tipo de fixação muda e avaliamos na visita.</li>
  <li><strong>Por dentro ou por fora do vão:</strong> por dentro é mais fácil de instalar e limpar; por fora protege a janela inteira, mas pede acesso externo.</li>
</ul>

<h2>Não esqueça da saída de emergência</h2>
<p>Grade fixa em janela de quarto dificulta a saída numa emergência. Vale prever uma folha com dobradiças e trava pelo lado de dentro, que só se abre de dentro de casa. É um detalhe de projeto que precisa ser pensado antes da fabricação.</p>

<h2>Manutenção</h2>
<p>A grade de inox pede limpeza com pano, água e detergente neutro. Se aparecer ponto alaranjado, quase sempre é sujeira de ferro vinda da obra ou da grade antiga, e sai com limpeza adequada. Nosso <a href="/blog/como-limpar-corrimao-de-inox/">guia de limpeza</a> vale também para grades.</p>

<h2>Como pedir o orçamento</h2>
<p>Mande pelo WhatsApp (31) 2298-0072 uma foto de cada janela ou vão, de frente, com a largura e a altura aproximadas, e diga se há crianças em casa. Conheça a página de <a href="/servicos/portoes-e-gradis-inox/">portões, grades e gradis de inox</a> ou faça o <a href="/orcamento/">pedido de orçamento</a> pelo site.</p>
`,
  },
]

export const findPost = (slug: string) => POSTS.find((p) => p.slug === slug)
export const postsOrdenados = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date))
