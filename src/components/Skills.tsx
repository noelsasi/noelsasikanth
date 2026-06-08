import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-12" style={{ color: 'var(--text-primary)' }}>
          Skills
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-faint)' }}>
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-sm border rounded-md"
                  style={{
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--surface)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
