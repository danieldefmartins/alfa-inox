import type { Metadata } from 'next'
import { SITE, fullAddress } from '@/lib/site'
import Crumbs from '@/components/Crumbs'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a Alfa Inox trata os dados enviados pelo site e pelo WhatsApp para responder pedidos de orçamento, conforme a LGPD (Lei 13.709/2018).',
  alternates: { canonical: '/privacidade/' },
}

export default function PrivacidadePage() {
  return (
    <>
      <section className="phead" style={{ paddingBottom: 24 }}>
        <div className="wrap narrow">
          <Crumbs itens={[{ nome: 'Política de privacidade' }]} />
          <h1>Política de privacidade</h1>
          <p className="lede">Como tratamos os dados que você nos envia, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap narrow prose">
          <h2>Quem somos</h2>
          <p>Alfa Inox, {fullAddress}. Contato para assuntos de privacidade: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ou WhatsApp {SITE.whatsappDisplay}.</p>
          <h2>Quais dados coletamos</h2>
          <p>Quando você pede um orçamento pelo site, coletamos o que você digita: nome, telefone ou WhatsApp, e-mail (opcional), cidade e bairro, a descrição do local e, se você enviar, fotos do local. Também registramos de onde veio a visita (por exemplo, a página de entrada e parâmetros de campanha como utm_source), para saber quais canais trazem pedidos.</p>
          <p>Quando você usa o botão do WhatsApp, a conversa acontece no próprio WhatsApp e segue também as regras de privacidade desse aplicativo.</p>
          <h2>Para que usamos</h2>
          <ul>
            <li>Responder o seu pedido, preparar a estimativa e agendar a medição;</li>
            <li>Enviar a proposta e acompanhar a obra;</li>
            <li>Com o seu consentimento (caixa opcional no formulário), enviar mensagens por WhatsApp ou SMS sobre o orçamento, a medição e a obra.</li>
          </ul>
          <p>Não vendemos nem compartilhamos o seu telefone ou os seus dados com terceiros para fins de marketing. Os dados ficam no nosso sistema de atendimento, usado apenas pela equipe da Alfa Inox.</p>
          <h2>Por quanto tempo guardamos</h2>
          <p>Pelo tempo necessário para atender o pedido e cumprir obrigações legais e fiscais (por exemplo, a nota fiscal de uma obra contratada). Pedidos que não viram obra podem ser excluídos quando você pedir.</p>
          <h2>Seus direitos</h2>
          <p>Você pode pedir acesso, correção ou exclusão dos seus dados e revogar o consentimento de mensagens a qualquer momento, respondendo SAIR a uma mensagem ou escrevendo para {SITE.email}.</p>
          <h2>Cookies e armazenamento no navegador</h2>
          <p>O site não usa cookies de publicidade. Ele guarda no seu navegador, por até 90 dias, a origem da visita (para atribuir o pedido ao canal certo) e, durante a sessão, a cidade aproximada usada para personalizar a saudação da página inicial. A cidade vem da localização aproximada do seu provedor de internet e não é enviada a ninguém.</p>
          <p className="muted">Atualizada em outubro de 2026.</p>
        </div>
      </section>
    </>
  )
}
