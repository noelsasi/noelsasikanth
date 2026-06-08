import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto w-full border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-lg"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          Let's build something.
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          I'm looking for founding engineer, senior engineer, or tech lead roles —
          ideally at product-driven companies globally. Remote or relocation.
        </p>

        <a
          href="mailto:noelsasikanth@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-colors mb-8"
          style={{ backgroundColor: 'var(--accent)' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
        >
          Email me →
        </a>

        <div className="flex flex-wrap gap-5 text-sm">
          {[
            { label: 'GitHub', href: 'https://github.com/noelsasi' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/noelsasikanth' },
            { label: 'Resume PDF', href: '/noelsasikanth/Noel_Sasikanth_Resume_Frontend.pdf' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--text-faint)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
