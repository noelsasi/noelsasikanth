import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { journalEntries } from '../data/portfolio'
import { SectionHead, CONTAINER } from './ui/primitives'

/*
 * Layout family: full-width editorial rows on a soft-gray band.
 * Deliberately NOT the card grid used by Products. Four entries read as a
 * chronology, so a stacked list with a single hairline between rows carries
 * it better than tiles. Company and years sit in a left rail, the writing
 * gets the wide column.
 */

export default function JournalIndex() {
  const reduce = useReducedMotion()

  const reveal = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section
      id="journal"
      className="py-section"
      style={{ backgroundColor: 'var(--surface-soft)' }}
    >
      <div className={CONTAINER}>
        <motion.div {...reveal(0)}>
          <SectionHead
            title="An engineering journal."
            lede="Every company, every project, and what the work actually taught me. Written long-form, not bulleted."
          />
        </motion.div>

        <div className="mt-14">
          {journalEntries.map((entry, i) => (
            <motion.div {...reveal(i + 1)} key={entry.id}>
              <Link
                to={`/journal/${entry.slug}`}
                className="group grid grid-cols-1 gap-4 border-t py-8 transition-opacity hover:opacity-70 md:grid-cols-12 md:gap-10"
                style={{ borderColor: 'var(--hairline)' }}
              >
                <div className="md:col-span-3">
                  <p className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>
                    {entry.company}
                  </p>
                  <p className="numeric mt-1.5 text-xs" style={{ color: 'var(--muted)' }}>
                    {entry.timeline}
                  </p>
                  <p className="mt-0.5 text-xs" style={{ color: 'var(--muted)' }}>
                    {entry.location}
                  </p>
                </div>

                <div className="md:col-span-8">
                  <h3
                    className="display text-2xl md:text-[1.75rem]"
                    style={{ color: 'var(--ink)' }}
                  >
                    {entry.title}
                  </h3>
                  <p
                    className="mt-3 max-w-[62ch] text-[15px] leading-relaxed"
                    style={{ color: 'var(--body)' }}
                  >
                    {entry.teaser}
                  </p>
                </div>

                <div className="flex items-start md:col-span-1 md:justify-end">
                  <ArrowRight
                    size={20}
                    weight="regular"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: 'var(--accent)' }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: 'var(--hairline)' }} />
        </div>
      </div>
    </section>
  )
}
