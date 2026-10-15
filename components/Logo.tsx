/**
 * O ÚNICO lugar que desenha a marca. Server component: lê public/brand/ no build (lib/brand.ts).
 * - Com public/brand/logo.svg (ou .png/.webp): usa o arquivo (logo-dark.* no rodapé, se existir).
 * - Sem arquivo: wordmark provisório em texto ("ALFA INOX") ao lado do símbolo provisório.
 */
import { brandFiles } from '@/lib/brand'

export default function Logo({ tone = 'light', height = 40 }: { tone?: 'light' | 'dark'; height?: number }) {
  const { logo, logoDark } = brandFiles()
  const file = tone === 'dark' ? logoDark : logo
  if (file) {
    return (
      <img
        src={file.src}
        alt="Alfa Inox"
        width={Math.round((file.width / file.height) * height)}
        height={height}
        className="logo-img"
        style={{ height }}
        decoding="async"
      />
    )
  }
  return (
    <span className="wordmark" aria-label="Alfa Inox">
      <svg width={height * 0.8} height={height * 0.8} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id={`lg-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e9ecef" /><stop offset=".45" stopColor="#9aa3ab" />
            <stop offset=".7" stopColor="#dfe3e6" /><stop offset="1" stopColor="#8e979f" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill={tone === 'dark' ? '#2a3540' : '#1b232b'} />
        <path d="M14 50 28 14h8l14 36h-8.2l-3-8.2H25.2l-3 8.2Zm13.6-15h8.8L32 22.6Z" fill={`url(#lg-${tone})`} />
        <path d="M10 40.5 54 25" stroke={`url(#lg-${tone})`} strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span aria-hidden="true">ALFA <b>INOX</b></span>
    </span>
  )
}
