export const SITE = {
  name: 'Alfa Inox',
  legalName: 'Alfa Inox — Corrimão e Guarda-Corpo em Aço Inox',
  url: 'https://alfainoxbh.com.br',
  tagline: 'Corrimão e guarda-corpo em aço inox em Belo Horizonte',
  foundedYear: 2010,
  yearsInBusiness: 15,
  /** Telefone fixo (confirmado pelo dono em 14/10/2026): links tel:, NAP e schema. */
  phone: '+55 31 2298-1234',
  phoneRaw: '+553122981234',
  phoneDisplay: '(31) 2298-1234',
  /** WhatsApp = canal principal de orçamento (CTA primário em todo o site). */
  whatsapp: '5531972379813',
  whatsappDisplay: '(31) 97237-9813',
  email: 'vendas@alfainoxbh.com.br',
  address: {
    street: 'Avenida Américo Vespúcio, 105',
    district: 'Aparecida',
    city: 'Belo Horizonte',
    state: 'MG',
    stateName: 'Minas Gerais',
    postalCode: '31230-580',
    country: 'BR',
  },
  geo: { lat: -19.8869, lng: -43.9483 },
  hours: 'Segunda a sábado, das 8h às 17h',
  hoursShort: 'Seg–Sáb, 8h–17h',
  hoursSchema: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '17:00' },
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
export const ogCard = (name: string) => `${SITE.url}/og/${name}.jpg`

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
