import { motion } from 'framer-motion'
import { experience, education } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          Experience
        </h2>
        <p className="text-sm mb-12" style={{ color: 'var(--text-faint)' }}>
          7+ years across four companies — full-time, shipping production software.
        </p>
      </motion.div>

      {/* Work timeline */}
      <div className="relative">
        {/* vertical line */}
        <div
          className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
          style={{ backgroundColor: 'var(--border)' }}
        />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="md:pl-8 relative"
            >
              {/* dot */}
              <div
                className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full hidden md:block"
                style={{ backgroundColor: 'var(--accent)' }}
              />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {job.role}
                    <span className="font-normal mx-2" style={{ color: 'var(--text-faint)' }}>at</span>
                    <span style={{ color: 'var(--accent)' }}>{job.company}</span>
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>
                    {job.location} · {job.type}
                  </p>
                </div>
                <span
                  className="text-xs font-medium shrink-0 mt-0.5"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {job.timeline}
                </span>
              </div>

              <ul className="space-y-1.5">
                {job.highlights.map((point, j) => (
                  <li key={j} className="flex gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-faint)' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-16 pt-10 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--text-faint)' }}>
          Education
        </h3>
        {education.map((edu) => (
          <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
            <div>
              <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                {edu.institution}
              </p>
              <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                {edu.degree} · {edu.field}
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-faint)' }}>
                {edu.location}
              </p>
            </div>
            <span className="text-xs font-medium shrink-0" style={{ color: 'var(--text-faint)' }}>
              {edu.timeline}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
