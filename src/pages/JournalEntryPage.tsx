import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { journalEntries } from '../data/portfolio'
import { Chip, CONTAINER } from '../components/ui/primitives'

/*
 * Long-form reading surface. Narrative column caps at 68ch; the project list
 * below runs wider in a 2-up grid so it reads as a reference appendix rather
 * than more prose.
 */

export default function JournalEntryPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const reduce = useReducedMotion()

  const idx = journalEntries.findIndex((e) => e.slug === slug)
  const entry = journalEntries[idx]
  const prev = idx > 0 ? journalEntries[idx - 1] : null
  const next = idx >= 0 && idx < journalEntries.length - 1 ? journalEntries[idx + 1] : null

  useEffect(() => {
    if (!entry) navigate('/journal', { replace: true })
  }, [entry, navigate])

  // Reset scroll when moving between entries via prev/next.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!entry) return null

  const paragraphs = entry.narrative.split('\n\n').filter(Boolean)

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
      }

  return (
    <article className="min-h-[100dvh] pt-16" style={{ backgroundColor: 'var(--canvas)' }}>
      {/* Header band. Inverted so the entry opens with a clear title moment. */}
      <header className="py-20" style={{ backgroundColor: 'var(--band)' }}>
        <div className={CONTAINER}>
          <motion.div {...reveal} className="max-w-3xl">
            <Link
              to="/journal"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--on-band-soft)' }}
            >
              <ArrowLeft size={16} weight="regular" />
              All entries
            </Link>

            <p className="numeric text-sm" style={{ color: 'var(--on-band-soft)' }}>
              {entry.timeline}
            </p>
            <h1 className="display mt-3 text-display-lg" style={{ color: 'var(--on-band)' }}>
              {entry.title}
            </h1>
            <p className="mt-4 text-lg" style={{ color: 'var(--on-band-soft)' }}>
              {entry.company}, {entry.location}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {entry.stack.map((s) => (
                <Chip key={s} label={s} onBand />
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <div className={`${CONTAINER} py-20`}>
        {/* Narrative */}
        <div className="max-w-[68ch]">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="mb-6 text-[17px] leading-[1.7]"
              style={{ color: 'var(--body)' }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-20 border-t pt-12" style={{ borderColor: 'var(--hairline)' }}>
          <h2 className="display text-display-sm" style={{ color: 'var(--ink)' }}>
            What I built here
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {entry.projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-xl p-6"
                style={{ backgroundColor: 'var(--surface-soft)' }}
              >
                <h3 className="text-base font-semibold" style={{ color: 'var(--ink)' }}>
                  {project.name}
                </h3>
                <p
                  className="mt-3 flex-1 text-[15px] leading-relaxed"
                  style={{ color: 'var(--body)' }}
                >
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <Chip key={s} label={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / next */}
        <nav
          className="mt-16 flex items-start justify-between gap-6 border-t pt-8"
          style={{ borderColor: 'var(--hairline)' }}
        >
          {prev ? (
            <Link to={`/journal/${prev.slug}`} className="group flex flex-col gap-1">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-medium"
                style={{ color: 'var(--muted)' }}
              >
                <ArrowLeft size={14} weight="regular" />
                Previous
              </span>
              <span
                className="text-[15px] font-semibold transition-opacity group-hover:opacity-70"
                style={{ color: 'var(--ink)' }}
              >
                {prev.company}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link to={`/journal/${next.slug}`} className="group flex flex-col items-end gap-1 text-right">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-medium"
                style={{ color: 'var(--muted)' }}
              >
                Next
                <ArrowRight size={14} weight="regular" />
              </span>
              <span
                className="text-[15px] font-semibold transition-opacity group-hover:opacity-70"
                style={{ color: 'var(--ink)' }}
              >
                {next.company}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  )
}
