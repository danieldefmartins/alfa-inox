/**
 * Logo horizontal (fundo claro). A altura vem do CSS (`.logo-hdr`) para poder
 * crescer no mobile, onde só dividimos a barra com o botão do menu.
 */
export function LogoHorizontal({ className = 'logo-hdr' }: { className?: string }) {
  return (
    <img
      src="/marca/alfa-inox-horizontal.webp"
      alt="Alfa Inox — especialistas em guarda-corpo em aço inox"
      width={1051}
      height={400}
      className={className}
      fetchPriority="high"
    />
  )
}

/** Versão para fundo escuro: o wordmark original é azul-marinho e sumiria. */
export function LogoEscuro({ height = 44 }: { height?: number }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <img
        src="/marca/alfa-inox-icone.png"
        alt=""
        aria-hidden
        width={647}
        height={731}
        style={{ height, width: 'auto', filter: 'brightness(1.15)' }}
        loading="lazy"
      />
      <span className="logo" style={{ fontSize: height * 0.52 }}>
        <span style={{ color: '#fff' }}>ALFA</span>
        <span className="metal-text">INOX</span>
      </span>
    </span>
  )
}
