import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from '../context/ThemeContext'
import { Action, CONTAINER } from './ui/primitives'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/*
 * Nav sits at 64px and renders on one line at desktop. Section links collapse
 * below md; the primary CTA stays visible at every width.
 */
const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'journal', label: 'Journal' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()
  const isHome = pathname === '/'

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: 'var(--hairline)', backgroundColor: 'var(--nav-bg)' }}
    >
      <div className={`${CONTAINER} flex h-16 items-center justify-between gap-6`}>
        <Link
          to="/"
          className="text-[15px] font-semibold tracking-tight"
          style={{ color: 'var(--ink)' }}
        >
          Noel Sasikanth
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {isHome ? (
            <div className="hidden items-center gap-1 md:flex">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className="rounded-pill border-0 bg-transparent px-3 py-2 text-sm font-medium transition-opacity hover:opacity-100"
                  style={{ color: 'var(--body)', opacity: 0.85 }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="hidden items-center gap-1 md:flex">
              <Link
                to="/"
                className="rounded-pill px-3 py-2 text-sm font-medium"
                style={{ color: 'var(--body)' }}
              >
                Home
              </Link>
              <Link
                to="/journal"
                className="rounded-pill px-3 py-2 text-sm font-medium"
                style={{ color: 'var(--body)' }}
              >
                Journal
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid h-10 w-10 place-items-center rounded-pill border-0 bg-transparent transition-opacity hover:opacity-70"
            style={{ color: 'var(--muted)' }}
          >
            {theme === 'dark' ? <Sun size={18} weight="regular" /> : <Moon size={18} weight="regular" />}
          </button>

          <Action href="mailto:noelsasikanth@gmail.com">Get in touch</Action>
        </div>
      </div>
    </nav>
  )
}
