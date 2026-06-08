import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { journalEntries } from '../data/portfolio'

export default function JournalIndex() {
  return (
    <section id="journal" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          Engineering Journal
        </h2>
        <p className="text-sm mb-12" style={{ color: 'var(--text-faint)' }}>
          A full account of every company, every project, and what I learned.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {journalEntries.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={`/journal/${entry.slug}`}
              className="group flex flex-col h-full p-5 rounded-xl border transition-all duration-200"
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
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <p className="text-xs mb-1" style={{ color: 'var(--text-faint)' }}>
                    {entry.timeline} · {entry.location}
                  </p>
                  <h3 className="text-base font-semibold transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {entry.company}
                  </h3>
                  <p className="text-sm mt-0.5 font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {entry.title}
                  </p>
                </div>
                <span className="shrink-0 mt-1 transition-colors" style={{ color: 'var(--text-faint)' }}>→</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {entry.teaser}
              </p>
              <p className="text-xs mt-4" style={{ color: 'var(--accent)' }}>
                Read entry →
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
