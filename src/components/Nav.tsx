import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Nav() {
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()
  const isHome = pathname === '/'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-sm"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--nav-bg)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-semibold tracking-wide transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          NS
        </Link>

        <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {isHome ? (
            <>
              <button onClick={() => scrollTo('products')} className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0 text-sm font-normal" style={{ color: 'inherit' }}>Work</button>
              <button onClick={() => scrollTo('journal')} className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0 text-sm font-normal" style={{ color: 'inherit' }}>Journal</button>
              <button onClick={() => scrollTo('experience')} className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0 text-sm font-normal" style={{ color: 'inherit' }}>Experience</button>
              <button onClick={() => scrollTo('skills')} className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0 text-sm font-normal" style={{ color: 'inherit' }}>Skills</button>
              <button onClick={() => scrollTo('contact')} className="hover:opacity-100 opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0 text-sm font-normal" style={{ color: 'inherit' }}>Contact</button>
            </>
          ) : (
            <>
              <Link to="/" className="hover:opacity-100 opacity-70 transition-opacity" style={{ color: 'inherit' }}>Home</Link>
              <Link to="/journal" className="hover:opacity-100 opacity-70 transition-opacity" style={{ color: 'inherit' }}>Journal</Link>
            </>
          )}

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md transition-colors hover:opacity-100 opacity-60"
            style={{ color: 'var(--text-secondary)' }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  )
}
