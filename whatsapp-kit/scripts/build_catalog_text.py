import csv, os, sys
sys.path.insert(0, os.path.dirname(__file__))
from catalog_specs import SPECS

K = '/Users/danielmartins/Projects/Alfa-Inox/whatsapp-kit/catalogo'
U = 'https://alfainoxbh.com.br/servicos/'
ITEMS = {
    '01-corrimao-de-parede': ('Corrimão de parede em inox', 'corrimao-inox/',
        'Tubo de inox fixado na parede com suportes de inox, para escadas de casa e de prédio, corredores e lances estreitos.\n'
        'Feito sob medida para acompanhar o lance, em inox 304 ou 316, escovado ou polido. Altura conforme a ABNT NBR 9050.'),
    '02-corrimao-de-escada': ('Corrimão de escada com prumos', 'corrimao-inox/',
        'Corrimão apoiado em prumos fixados no degrau ou na lateral da escada. É o modelo mais comum em casas, sobrados e entradas.\n'
        'Medimos no local, fabricamos e instalamos com equipe própria.'),
    '03-corrimao-curvo': ('Corrimão curvo de inox', 'corrimao-inox/',
        'Tubo de inox curvado sob medida para escada em curva, caminho de jardim e áreas externas de condomínio.\n'
        'Acompanha o desenho do local, com acabamento escovado ou polido.'),
    '04-guarda-corpo-de-escada': ('Guarda-corpo de inox para escada', 'guarda-corpo-inox/',
        'Proteção lateral para escada interna ou externa, com travessas horizontais ou prumos verticais.\n'
        'Onde há crianças, recomendamos prumos verticais. Fabricação própria, solda TIG e acabamento das juntas.'),
    '05-guarda-corpo-sacada-mezanino': ('Guarda-corpo de sacada e mezanino', 'guarda-corpo-inox/',
        'Guarda-corpo de inox para sacada, varanda, mezanino e vão de escada, na altura que a norma pede (mínimo de 1,10 m).\n'
        'Modelos com travessas, prumos verticais ou cabo de aço.'),
    '06-guarda-corpo-de-vidro': ('Guarda-corpo de vidro com inox', 'guarda-corpo-de-vidro/',
        'Estrutura de inox com painéis de vidro laminado ou temperado, para escada, mezanino, cobertura e área de piscina.\n'
        'Preserva a vista e a luz do ambiente.'),
    '07-corrimao-rampa-nbr9050': ('Corrimão duplo para rampa', 'acessibilidade-nbr-9050/',
        'Corrimão em duas alturas (0,92 m e 0,70 m) dos dois lados da rampa, como pede a ABNT NBR 9050.\n'
        'Para prédios, comércios e condomínios que precisam de acessibilidade ou vão passar por vistoria.'),
    '08-barras-de-apoio-pcd': ('Barras de apoio para banheiro', 'acessibilidade-nbr-9050/',
        'Barras de apoio em inox para banheiro acessível: retas, em L e para lavatório e box.\n'
        'Medidas e posições conforme a ABNT NBR 9050, definidas na visita conforme o layout do banheiro.'),
    '09-portoes-e-gradis': ('Portões e gradis de inox', 'portoes-e-gradis-inox/',
        'Portão social, gradil de fechamento e grade de proteção em inox, sob medida.\n'
        'Não enferruja e não precisa de pintura.'),
    '10-portao-de-escada': ('Portão de escada (crianças e pets)', 'portoes-e-gradis-inox/',
        'Portãozinho de inox no topo ou na base da escada, integrado ao guarda-corpo.\n'
        'Mais segurança para crianças e pets, com o mesmo acabamento do resto da escada.'),
    '11-corrimao-para-piscina': ('Corrimão de inox para piscina', 'corrimao-inox/',
        'Corrimão para entrada de piscina e escada externa, em inox 316, mais resistente ao cloro.\n'
        'Fixação firme no piso, feito sob medida para a sua piscina.'),
    '12-condominios-e-empresas': ('Condomínios e empresas', 'condominios-e-empresas/',
        'Corrimão, guarda-corpo e acessibilidade para áreas comuns, comércios, academias e obras novas.\n'
        'Proposta formal por item e execução programada para não parar o prédio.'),
}
PRECO = 'Sob orçamento'

assert set(ITEMS) == set(SPECS)
md = ['# Catálogo — Alfa Inox', '',
      f'{len(ITEMS)} itens para **Ferramentas comerciais > Catálogo > Adicionar novo item**. '
      'Em cada item: fotos (até 3, na ordem), nome, preço em branco, descrição e link do site. '
      'Os mesmos dados estão em `catalogo.csv`.', '',
      '> Preço: deixe o campo **em branco** e escreva “Sob orçamento” na descrição (já incluído abaixo). '
      'Todas as fotos são de obras reais da Alfa Inox, recortadas em 1080×1080 com correção leve de luz e cor.', '']
rows = []
for slug, (nome, path, desc) in ITEMS.items():
    assert len(nome) <= 40, nome
    imgs = [f'imagens/{slug}-{i}.jpg' for i in range(1, len(SPECS[slug]) + 1)]
    full = desc + '\nPreço: sob orçamento. Peça pelo WhatsApp.'
    md += [f'## {slug[:2]}. {nome}', '',
           f'**Nome:** {nome}  ', f'**Preço:** {PRECO}  ', f'**Link:** {U}{path}  ',
           '**Imagens:** ' + ', '.join(f'`{p}`' for p in imgs), '',
           '**Descrição:**', '', '```', full, '```', '',
           ' '.join(f'![{nome} {i+1}]({p})' for i, p in enumerate(imgs)), '']
    rows.append([nome, full, PRECO, U + path, ' | '.join(imgs)])
open(f'{K}/README.md', 'w').write('\n'.join(md))
with open(f'{K}/catalogo.csv', 'w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['nome', 'descricao', 'preco', 'link', 'imagens'])
    w.writerows(rows)
print(len(rows), sum(len(v) for v in SPECS.values()))
