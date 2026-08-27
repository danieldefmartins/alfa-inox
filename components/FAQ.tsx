export default function FAQ({ itens, titulo = 'Perguntas frequentes' }: { itens: { q: string; a: string }[]; titulo?: string }) {
  if (!itens?.length) return null
  return (
    <section className="section tinted">
      <div className="wrap-narrow">
        <p className="eyebrow">Dúvidas</p>
        <h2 style={{ marginBottom: 34 }}>{titulo}</h2>
        {itens.map((f) => (
          <details className="faq-item" key={f.q}>
            <summary>{f.q}</summary>
            <div><p>{f.a}</p></div>
          </details>
        ))}
      </div>
    </section>
  )
}
