import { motion, useReducedMotion } from 'framer-motion'
import { experience, education } from '../data/portfolio'
import { SectionHead, CONTAINER } from './ui/primitives'

/*
 * Layout family: two-column timeline on white. Role metadata pins left,
 * highlights run right against a single continuous rule.
 *
 * The rule is structural (it organises the chronology), which is the only
 * justification for a decorative-looking line. No dots on the list items.
 */

export default function Experience() {
  const reduce = useReducedMotion()

  const reveal = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section id="experience" className="py-section" style={{ backgroundColor: 'var(--canvas)' }}>
      <div className={CONTAINER}>
        <motion.div {...reveal(0)}>
          <SectionHead
            title="Seven years, four companies."
            lede="Full-time roles shipping production software for insurers, lenders, and offshore inspection teams."
          />
        </motion.div>

        <div className="mt-14 space-y-12">
          {experience.map((job, i) => (
            <motion.article
              {...reveal(i + 1)}
              key={job.company}
              className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--ink)' }}>
                  {job.role}
                </h3>
                <p className="mt-1 text-base" style={{ color: 'var(--accent)' }}>
                  {job.company}
                </p>
                <p className="numeric mt-2 text-xs" style={{ color: 'var(--muted)' }}>
                  {job.timeline}
                </p>
                <p className="mt-0.5 text-xs" style={{ color: 'var(--muted)' }}>
                  {job.location}, {job.type}
                </p>
              </div>

              <div
                className="border-l-0 md:col-span-8 md:border-l md:pl-10"
                style={{ borderColor: 'var(--hairline)' }}
              >
                <ul className="space-y-3">
                  {job.highlights.map((point, j) => (
                    <li
                      key={j}
                      className="max-w-[68ch] text-[15px] leading-relaxed"
                      style={{ color: 'var(--body)' }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Education. Same two-column rhythm, lighter weight. */}
        <motion.div
          {...reveal(experience.length + 1)}
          className="mt-16 border-t pt-12"
          style={{ borderColor: 'var(--hairline)' }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-10">
            <h3 className="text-lg font-semibold md:col-span-4" style={{ color: 'var(--ink)' }}>
              Education
            </h3>
            <div className="space-y-6 md:col-span-8">
              {education.map((edu) => (
                <div key={edu.institution}>
                  <p className="text-[15px] font-semibold" style={{ color: 'var(--ink)' }}>
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-[15px]" style={{ color: 'var(--body)' }}>
                    {edu.degree}, {edu.field}
                  </p>
                  <p className="numeric mt-1 text-xs" style={{ color: 'var(--muted)' }}>
                    {edu.timeline}, {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
