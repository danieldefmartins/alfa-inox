export const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.49 1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.71.63.72.23 1.38.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z"/>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23z"/>
  </svg>
)

export const Arrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

export const Check = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export const Phone = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
)

export const Pin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

export const Clock = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
)

export const Mail = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
  </svg>
)

const line = (d: React.ReactNode, size: number, w = 1.8) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)
export const Plus = ({ size = 20 }: { size?: number }) => line(<path d="M12 5v14M5 12h14" />, size)
export const Close = ({ size = 22 }: { size?: number }) => line(<path d="M18 6 6 18M6 6l12 12" />, size, 2)
export const Menu = ({ size = 22 }: { size?: number }) => line(<path d="M4 7h16M4 12h16M4 17h16" />, size, 2)
export const ChevronLeft = ({ size = 22 }: { size?: number }) => line(<path d="m15 18-6-6 6-6" />, size, 2)
export const ChevronRight = ({ size = 22 }: { size?: number }) => line(<path d="m9 18 6-6-6-6" />, size, 2)
export const ChevronDown = ({ size = 14 }: { size?: number }) => line(<path d="m6 9 6 6 6-6" />, size, 2.2)
export const Camera = ({ size = 22 }: { size?: number }) => line(<><path d="M14.5 4h-5L7.5 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.5z" /><circle cx="12" cy="13" r="3.5" /></>, size)
export const Ruler = ({ size = 22 }: { size?: number }) => line(<><path d="M21.3 15.3 8.7 2.7a1 1 0 0 0-1.4 0L2.7 7.3a1 1 0 0 0 0 1.4l12.6 12.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" /><path d="m7.5 10.5 2-2M10.5 13.5l2-2M13.5 16.5l2-2" /></>, size)
export const Wrench = ({ size = 22 }: { size?: number }) => line(<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />, size)
export const Doc = ({ size = 22 }: { size?: number }) => line(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></>, size)
export const Factory = ({ size = 22 }: { size?: number }) => line(<><path d="M2 20h20M4 20V9l6 4V9l6 4V4h4v16" /></>, size)
export const Card = ({ size = 22 }: { size?: number }) => line(<><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>, size)

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const ServiceIcon = ({ name, size = 34 }: { name: string; size?: number }) => {
  const p: Record<string, React.ReactNode> = {
    corrimao: <><path d="M3 18 21 6" {...S} /><path d="M6 21v-5M11 18v-5M16 15v-5" {...S} /></>,
    guardacorpo: <><path d="M3 7h18M3 12h18M3 17h18" {...S} /><path d="M6 4v16M18 4v16" {...S} /></>,
    vidro: <><rect x="4" y="5" width="16" height="14" rx="1" {...S} /><path d="m7 16 6-8M12 16l5-6" {...S} /></>,
    acessibilidade: <><circle cx="12" cy="4.5" r="2" {...S} /><path d="M9 9h6M12 9v6M12 15h4l2 5M12 15H8l-2 5" {...S} /></>,
    portao: <><rect x="3" y="5" width="18" height="15" rx="1" {...S} /><path d="M7 5v15M12 5v15M17 5v15M3 11h18" {...S} /></>,
    predio: <><path d="M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M15 21V9h4a1 1 0 0 1 1 1v11M2 21h20" {...S} /><path d="M8 7h2M8 11h2M8 15h2" {...S} /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{p[name] ?? p.corrimao}</svg>
}
