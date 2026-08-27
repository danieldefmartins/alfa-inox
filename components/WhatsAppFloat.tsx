import { waLink, WA_DEFAULT } from '@/lib/site'
import { WhatsAppIcon } from './Icons'

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener"
      aria-label="Falar com a Alfa Inox no WhatsApp">
      <WhatsAppIcon size={30} />
    </a>
  )
}
