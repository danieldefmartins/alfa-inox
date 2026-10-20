export const SITE = {
  name: 'Alfa Inox',
  legalName: 'Alfa Inox — Corrimão e Guarda-Corpo em Aço Inox',
  url: 'https://alfainoxbh.com.br',
  tagline: 'Corrimão e guarda-corpo em aço inox em Belo Horizonte',
  foundedYear: 2010,
  yearsInBusiness: 15,
  /** Telefone fixo (confirmado pelo dono em 14/10/2026): links tel:, NAP e schema. */
  phone: '+55 31 2298-0072',
  phoneRaw: '+553122980072',
  phoneDisplay: '(31) 2298-0072',
  /** WhatsApp = canal principal de orçamento (CTA primário em todo o site). */
  whatsapp: '553122980072',
  whatsappDisplay: '(31) 2298-0072',
  email: 'vendas@alfainoxbh.com.br',
  address: {
    street: 'Rua Cantagalo, 1449',
    district: 'Aparecida',
    city: 'Belo Horizonte',
    state: 'MG',
    stateName: 'Minas Gerais',
    postalCode: '31230-770',
    country: 'BR',
  },
  geo: { lat: -19.8878277, lng: -43.9537465 },
  /** Perfil no Google (Google Business Profile, categoria "Metalwork"). Nota conferida em 15/10/2026. */
  google: {
    url: 'https://maps.app.goo.gl/PV49gRLGiDH517TU7',
    mapsUrl: 'https://www.google.com/maps/place/?q=place_id&ftid=0xa691ad5790dd51:0xcc4d4d49f001d5cf',
    rating: 5.0,
    count: 14,
    checked: '2026-10-15',
    /** Citações LITERAIS de avaliações do Google (nome + inicial do sobrenome, decisão do dono 15/10/2026). Nunca editar o texto. */
    depoimentos: [
      { nome: 'Daniel M.', texto: 'Excelente empresa, fiz um projeto comercial grande com eles, acabaram dentro do prazo e com qualidade de primeira. Obrigado Carlos' },
      { nome: 'Zélia M.', texto: 'Alfa Inox é uma excelente empresa! Produtos de alto nível; bons preços; profissionais competentes e trabalhos de primeira qualidade; entrega rápida. Gostei muito dos trabalhos realizados em minha casa. Parabéns!' },
      { nome: 'Nathalia M.', texto: 'Experiência fantástica. Equipe profissional e competente. Fizeram toda estrutura de corrimões pra minha empresa. Estará sempre em minhas indicações.' },
      { nome: 'Carlos M.', texto: 'Excelente preço, entrega muito rápida e qualidade e muita segurança!! Não preciso fazer outros orçamentos, super indico!!' },
      { nome: 'Yezo D.', texto: 'Excelente trabalho! O serviço foi entregue antes do prazo e feito com muita excelência. Parabéns aos profissionais 👏🏻' },
      { nome: 'Maria Clara M.', texto: 'Excelente trabalho!! Pode confiar de olhos fechados!!! Indico para todos!' },
      { nome: 'Bruno L.', texto: 'Entregou o que prometeu no tempo certo. Parabéns !!!' },
      { nome: 'Andre S.', texto: 'Excelente trabalho feito pelo Carlos' },
      { nome: 'Simone M.', texto: 'Excelente trabalho!!!' },
    ],
  },
  hours: 'Segunda a sexta, das 9h às 21h, e sábado, das 9h às 14h',
  hoursShort: 'Seg–Sex 9h–21h · Sáb 9h–14h',
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '21:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  social: {
    instagram: 'https://www.instagram.com/alfainoxbh',
    facebook: 'https://www.facebook.com/alfainoxbh',
  },
  /**
   * Formulário nativo do 360 CRM (mesmo cliente do site Prime: app/lib/crm.ts lá, lib/crm.ts aqui).
   * `formSlug` vazio = o formulário de orçamento entrega tudo no WhatsApp (nunca um formulário morto).
   * Quando a Alfa Inox tiver um workspace + formulário publicado no 360, preencha slug, workspaceId e os ids
   * dos campos abaixo exatamente como estão no formulário publicado.
   */
  crm: {
    apiBase: 'https://api.get360crm.com',
    formSlug: '' as string,
    workspaceId: '' as string,
    fields: {
      firstName: 'first_name',
      lastName: 'last_name',
      phone: 'phone',
      email: 'email',
      address: 'address',
      service: 'service',
      message: 'message',
      sourcePage: 'source_page',
      photos: ['photo_1', 'photo_2', 'photo_3'] as readonly string[],
    },
  },
} as const

/** Texto do consentimento de mensagens (opcional, desmarcado). Precisa bater com o publicado no formulário do 360. */
export const CONSENT_TEXT =
  'Opcional: aceito receber mensagens da Alfa Inox por WhatsApp ou SMS sobre este orçamento, a medição e a obra. Posso cancelar a qualquer momento respondendo SAIR. Meus dados são tratados conforme a LGPD. Veja a Política de Privacidade.'

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`

export const WA_DEFAULT =
  'Olá! Vim pelo site da Alfa Inox e gostaria de um orçamento de corrimão / guarda-corpo em aço inox.'

export const telHref = `tel:${SITE.phoneRaw}`
export const waTelHref = `tel:+${SITE.whatsapp}`

/** Formas de pagamento do sinal (confirmado pelo dono em 14/10/2026). Percentual e parcelamento: ver OWNER-INPUT. */
export const PAGAMENTO = ['Dinheiro', 'Pix', 'Cartão'] as const

export const fullAddress = `${SITE.address.street} — ${SITE.address.district}, ${SITE.address.city}/${SITE.address.state}`

/**
 * Cartão de compartilhamento (WhatsApp, Facebook, LinkedIn, X).
 * Os arquivos são gerados por `node --experimental-strip-types scripts/build-og.mjs`.
 */
// Origem das imagens de compartilhamento. Produção: o domínio. O build do PREVIEW define OG_ORIGIN com a URL
// do workers.dev para o dono ver os cartões novos antes de publicar. Canonicals continuam sempre em SITE.url.
const OG_ORIGIN = (process.env.OG_ORIGIN || SITE.url).replace(/\/$/, '')
export const ogCard = (name: string) => `${OG_ORIGIN}/og/${name}.jpg`

export function socialMeta({
  card = 'default', titulo, descricao, url, tipo = 'website',
}: { card?: string; titulo: string; descricao: string; url: string; tipo?: 'website' | 'article' }) {
  const images = [{ url: ogCard(card), width: 1200, height: 630, alt: `${titulo} — ${SITE.name}`, type: 'image/jpeg' }]
  return {
    openGraph: {
      type: tipo,
      locale: 'pt_BR',
      siteName: SITE.name,
      title: titulo,
      description: descricao,
      url: `${SITE.url}${url}`,
      images,
    },
    twitter: { card: 'summary_large_image' as const, title: titulo, description: descricao, images: [ogCard(card)] },
  }
}
