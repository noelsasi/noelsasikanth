import type { ReactNode, MouseEvent } from 'react'

/*
 * Shared primitives. Button geometry, contrast pairs, and container widths
 * live here so every surface inherits the same rules instead of each
 * component re-deriving them.
 *
 * Geometry (from DESIGN-coinbase.md): every interactive control is a pill,
 * every container card is 24px, every avatar is a full circle.
 */

export const CONTAINER = 'mx-auto w-full max-w-content px-6 md:px-10'

type ButtonTone = 'accent' | 'quiet' | 'on-band'

const TONE: Record<ButtonTone, { base: string; style: React.CSSProperties }> = {
  // White on #1447e6 = 7.4:1. Passes AA for body text, not just large.
  accent: {
    base: 'text-[color:var(--accent-on)]',
    style: { backgroundColor: 'var(--accent)' },
  },
  // Ink on #eef0f3 = 16.1:1.
  quiet: {
    base: 'text-[color:var(--ink)]',
    style: { backgroundColor: 'var(--surface-strong)' },
  },
  // White text on a transparent control sitting over the dark band,
  // given a visible stroke so it never floats unanchored.
  'on-band': {
    base: 'text-[color:var(--on-band)]',
    style: {
      backgroundColor: 'transparent',
      border: '1px solid rgba(255,255,255,0.32)',
    },
  },
}

interface ActionProps {
  children: ReactNode
  tone?: ButtonTone
  href?: string
  onClick?: () => void
  large?: boolean
  external?: boolean
  className?: string
  ariaLabel?: string
}

/*
 * One control for links and buttons alike. `whitespace-nowrap` is load-bearing:
 * it guarantees a CTA label never wraps to a second line at desktop.
 */
export function Action({
  children,
  tone = 'accent',
  href,
  onClick,
  large = false,
  external = false,
  className = '',
  ariaLabel,
}: ActionProps) {
  const t = TONE[tone]
  const size = large ? 'h-14 px-8 text-base' : 'h-11 px-5 text-[15px]'
  const cls = [
    'inline-flex items-center justify-center gap-2 rounded-pill font-semibold',
    'whitespace-nowrap transition-[transform,background-color,opacity] duration-150',
    'active:scale-[0.98] cursor-pointer',
    size,
    t.base,
    className,
  ].join(' ')

  const hover = (e: MouseEvent<HTMLElement>) => {
    if (tone === 'accent') e.currentTarget.style.backgroundColor = 'var(--accent-active)'
    else e.currentTarget.style.opacity = '0.82'
  }
  const leave = (e: MouseEvent<HTMLElement>) => {
    if (tone === 'accent') e.currentTarget.style.backgroundColor = 'var(--accent)'
    else e.currentTarget.style.opacity = '1'
  }

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cls}
        style={t.style}
        onMouseEnter={hover}
        onMouseLeave={leave}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={[cls, 'border-0'].join(' ')}
      style={t.style}
      onMouseEnter={hover}
      onMouseLeave={leave}
    >
      {children}
    </button>
  )
}

/* Stack chip. Neutral by default so the accent stays scarce. */
export function Chip({ label, onBand = false }: { label: string; onBand?: boolean }) {
  return (
    <span
      className="inline-block rounded-pill px-2.5 py-1 text-xs font-medium"
      style={
        onBand
          ? { backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--on-band-soft)' }
          : { backgroundColor: 'var(--surface-strong)', color: 'var(--body)' }
      }
    >
      {label}
    </span>
  )
}

/* Section heading. Vertical stack, never a split header with a corner floater. */
export function SectionHead({
  title,
  lede,
  onBand = false,
}: {
  title: string
  lede?: string
  onBand?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <h2
        className="display text-display-md"
        style={{ color: onBand ? 'var(--on-band)' : 'var(--ink)' }}
      >
        {title}
      </h2>
      {lede && (
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: onBand ? 'var(--on-band-soft)' : 'var(--body)' }}
        >
          {lede}
        </p>
      )}
    </div>
  )
}
