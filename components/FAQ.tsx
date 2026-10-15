import Jsonld from './Jsonld'
import { Plus } from './Icons'

/** Perguntas visíveis + FAQPage schema com o mesmo texto (nunca schema sem a pergunta na página). */
export default function FAQ({ itens, titulo = 'Perguntas frequentes', intro, schema = true, white = false }: {
  itens: { q: string; a: string }[]; titulo?: string; intro?: string; schema?: boolean; white?: boolean
}) {
  if (!itens?.length) return null
  return (
    <section className={`section${white ? ' white' : ''}`}>
      <div className="wrap two wide-left" style={{ alignItems: 'start' }}>
        <div className="head" style={{ marginBottom: 0 }}>
          <h2>{titulo}</h2>
          {intro && <p className="lede">{intro}</p>}
        </div>
        <div className="faq">
          {itens.map((f) => (
            <details key={f.q}>
              <summary>{f.q}<Plus /></summary>
              <div className="ans"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
      {schema && (
        <Jsonld data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: itens.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }} />
      )}
    </section>
  )
}
