import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { journalEntries } from '../data/portfolio'
import { useEffect } from 'react'

function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs border"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
    >
      {label}
    </span>
  )
}

export default function JournalEntryPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const idx = journalEntries.findIndex((e) => e.slug === slug)
  const entry = journalEntries[idx]
  const prev = idx > 0 ? journalEntries[idx - 1] : null
  const next = idx < journalEntries.length - 1 ? journalEntries[idx + 1] : null

  useEffect(() => {
    if (!entry) navigate('/journal')
  }, [entry, navigate])

  if (!entry) return null

  const paragraphs = entry.narrative.split('\n\n').filter(Boolean)

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/journal"
            className="text-xs mb-8 inline-block transition-colors"
            style={{ color: 'var(--text-faint)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
          >
            ← All entries
          </Link>

          <p className="text-sm mb-2" style={{ color: 'var(--text-faint)' }}>
            {entry.timeline} · {entry.location}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
            {entry.company}
          </h1>
          <p className="text-lg font-medium mb-6" style={{ color: 'var(--text-secondary)' }}>
            {entry.title}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-10">
            {entry.stack.map((s) => <Tag key={s} label={s} />)}
          </div>

          <div className="border-t pt-10 mb-12" style={{ borderColor: 'var(--border)' }}>
            {paragraphs.map((para, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {para}
              </p>
            ))}
          </div>

          <div className="border-t pt-8 mb-12" style={{ borderColor: 'var(--border)' }}>
            <h2 className="text-base font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>Projects</h2>
            <div className="space-y-4">
              {entry.projects.map((project) => (
                <div
                  key={project.name}
                  className="p-4 rounded-xl border"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <h3 className="text-sm font-semibold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => <Tag key={s} label={s} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
            {prev ? (
              <Link
                to={`/journal/${prev.slug}`}
                className="group flex flex-col gap-0.5"
              >
                <span className="text-xs transition-colors" style={{ color: 'var(--text-faint)' }}>← Previous</span>
                <span className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  {prev.company}
                </span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/journal/${next.slug}`}
                className="group flex flex-col gap-0.5 text-right"
              >
                <span className="text-xs transition-colors" style={{ color: 'var(--text-faint)' }}>Next →</span>
                <span className="text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  {next.company}
                </span>
              </Link>
            ) : <div />}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
