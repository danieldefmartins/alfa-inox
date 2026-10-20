# Modelos de WhatsApp (templates) — Alfa Inox

Modelos são as únicas mensagens que a Alfa pode **iniciar** no WhatsApp oficial (31) 2298-0072.
Quando o cliente responde, abre a janela de 24h e a conversa segue livre no 360.

**Regra de ouro para gerar conversa:** toda mensagem termina com **botões de resposta rápida**
(um toque = cliente responde = conversa aberta). Nada de link solto como única ação.

Variáveis: `{{1}}` = primeiro nome do cliente, demais conforme cada modelo.
Categoria **Utilidade** = sobre algo que o cliente pediu (mais barata, aprovação rápida).
Categoria **Marketing** = iniciativa da Alfa (exige forma de pagamento na conta do WhatsApp e opt-in).

---

## A. Gerar conversa com quem já demonstrou interesse (Utilidade)

### 1. `novo_pedido_site` — lead do formulário do site (enviar na hora)
> Olá, {{1}}! Aqui é a Alfa Inox. Recebemos seu pedido de orçamento de **{{2}}** pelo site.
> Para adiantar, pode mandar fotos do local e a medida aproximada por aqui?
Botões: **Mandar fotos agora** · **Prefiro uma visita** · **Me liguem**

### 2. `ligacao_perdida` — cliente ligou e ninguém atendeu
> Olá! Vimos sua ligação para a Alfa Inox e não conseguimos atender. Como podemos ajudar?
Botões: **Quero um orçamento** · **Me liguem de volta** · **Já resolvi**

### 3. `orcamento_enviado` — orçamento pronto
> {{1}}, seu orçamento de **{{2}}** está pronto: {{3}}
> Qualquer dúvida sobre medidas, acabamento ou prazo, é só responder aqui.
Botões: **Aprovar orçamento** · **Tenho dúvidas** · **Quero ajustar**

### 4. `retomada_orcamento` — orçamento sem resposta há 3 dias
> Oi, {{1}}! Conseguiu ver o orçamento de **{{2}}** que enviamos?
> Se quiser, ajustamos acabamento ou medida para caber melhor no seu projeto.
Botões: **Quero fechar** · **Ajustar orçamento** · **Ainda estou decidindo**

### 5. `confirmar_visita` — visita técnica agendada
> {{1}}, sua visita técnica da Alfa Inox está marcada para **{{2}}**, às **{{3}}**, em {{4}}.
Botões: **Confirmo** · **Preciso remarcar**

### 6. `lembrete_visita` — véspera da visita
> Lembrete: amanhã, às **{{2}}**, vamos medir seu projeto, {{1}}. Alguém estará no local?
Botões: **Sim, confirmado** · **Remarcar**

### 7. `andamento_obra` — fabricação pronta / instalação
> Boa notícia, {{1}}! Seu **{{2}}** está pronto e a instalação pode ser em **{{3}}**.
Botões: **Confirmo a data** · **Escolher outra data**

### 8. `obra_concluida_avaliacao` — depois da instalação
> {{1}}, obrigado por escolher a Alfa Inox! Ficou tudo como você esperava?
Botões: **Ficou ótimo** · **Preciso de um ajuste**
(Quem toca "Ficou ótimo" recebe, já na conversa aberta, o link de avaliação do Google.)

---

## B. Gerar conversa nova com a base (Marketing — só para quem aceitou receber)

### 9. `reativar_cliente` — clientes de 1+ ano atrás
> Olá, {{1}}! Aqui é a Alfa Inox. Faz um tempo que fizemos seu **{{2}}**.
> Está precisando de algo novo — corrimão, guarda-corpo, portão ou ajuste no que já tem?
Botões: **Tenho um projeto novo** · **Revisão/ajuste** · **Agora não**

### 10. `indicacao` — pedir indicação a cliente satisfeito
> {{1}}, que bom que gostou do seu projeto! Conhece alguém em BH precisando de corrimão ou guarda-corpo em inox?
> Quem você indicar ganha **{{2}}**.
Botões: **Quero indicar** · **Agora não**

### 11. `condominios` — síndicos / administradoras
> Olá, {{1}}! A Alfa Inox atende condomínios na Grande BH com corrimão e guarda-corpo em inox, adequação à NBR 9050 e rampas de acessibilidade.
> Podemos fazer uma visita técnica sem compromisso?
Botões: **Agendar visita** · **Mandar informações** · **Agora não**

### 12. `inox_limpeza_manutencao` — conteúdo útil que puxa conversa
> {{1}}, uma dica rápida: inox se limpa com pano macio, água e detergente neutro — nunca palha de aço ou cloro.
> Notou alguma mancha ou parafuso solto no seu? Fazemos revisão.
Botões: **Quero uma revisão** · **Está tudo certo**

---

### Observações
- Botão **"Agora não"** é obrigatório nos de marketing: reduz denúncias e protege a nota do número.
- Sem **preço** nos modelos (pedido do dono).
- Variáveis precisam de exemplo ao enviar para aprovação da Meta (ex.: {{1}} = "Ana", {{2}} = "corrimão de escada").
- Os modelos 1, 2, 4, 5, 6 e 8 podem ser **automáticos** no 360 (lead do site, ligação perdida, orçamento parado 3 dias, agenda e conclusão).
