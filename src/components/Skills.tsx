import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'
import { Chip, SectionHead, CONTAINER } from './ui/primitives'

/*
 * Layout family: label-left / chips-right rows on a soft-gray band.
 * Seven groups is past the point where a uniform card grid reads well, so
 * each group gets a row keyed by its label. Chips stay neutral: the accent
 * is reserved for actions, not for decorating a stack list.
 */

export default function Skills() {
  const reduce = useReducedMotion()

  const reveal = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section
      id="skills"
      className="py-section"
      style={{ backgroundColor: 'var(--surface-soft)' }}
    >
      <div className={CONTAINER}>
        <motion.div {...reveal(0)}>
          <SectionHead title="What I work with." />
        </motion.div>

        <div className="mt-12">
          {skillGroups.map((group, i) => (
            <motion.div
              {...reveal(i + 1)}
              key={group.label}
              className="grid grid-cols-1 gap-3 border-t py-5 md:grid-cols-12 md:items-baseline md:gap-8"
              style={{ borderColor: 'var(--hairline)' }}
            >
              <p
                className="text-sm font-semibold md:col-span-3"
                style={{ color: 'var(--ink)' }}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2 md:col-span-9">
                {group.items.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: 'var(--hairline)' }} />
        </div>
      </div>
    </section>
  )
}
