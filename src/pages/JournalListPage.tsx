import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { journalEntries } from '../data/portfolio'

export default function JournalListPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="text-xs mb-6 inline-block transition-colors"
            style={{ color: 'var(--text-faint)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
          >
            ← Back home
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Engineering Journal
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            A full account of every company, every project, and what I learned.
          </p>
        </motion.div>

        <div className="space-y-3">
          {journalEntries.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/journal/${entry.slug}`}
                className="group flex items-start justify-between gap-4 p-5 rounded-xl border transition-all duration-200"
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--surface)'
                  e.currentTarget.style.borderColor = 'var(--accent-border)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'var(--bg)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div className="flex-1">
                  <p className="text-xs mb-1" style={{ color: 'var(--text-faint)' }}>
                    {entry.timeline} · {entry.location}
                  </p>
                  <h2 className="text-base font-semibold mb-0.5 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {entry.company}
                  </h2>
                  <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>{entry.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{entry.teaser}</p>
                </div>
                <span className="shrink-0 mt-1 text-lg transition-colors" style={{ color: 'var(--text-faint)' }}>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
