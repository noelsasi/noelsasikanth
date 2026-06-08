import { motion } from 'framer-motion'
import profilePic from '../assets/profile-pic.jpg'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-24 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16"
      >
        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
              style={{
                borderColor: 'var(--accent-border)',
                backgroundColor: 'var(--accent-bg)',
                color: 'var(--accent)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
              Open to founding engineer &amp; senior roles — Global
            </span>
          </div>

          <h1
            className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            I build products<br />from 0 to 1.
          </h1>

          <p className="text-base md:text-lg max-w-xl leading-relaxed mb-2" style={{ color: 'var(--text-secondary)' }}>
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Noel Sasikanth</span>
            {' '}— Product Engineer · Full-Stack · AI Systems
          </p>

          <p className="text-sm md:text-base max-w-xl leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
            7+ years shipping across healthtech, edtech, logistics, and AI —
            from solo SaaS builds to leading engineering teams.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('products')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-colors cursor-pointer border-0"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              View my work ↓
            </button>
            <a
              href="mailto:noelsasikanth@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition-colors"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-border)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >
              Get in touch →
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="shrink-0 flex justify-center md:justify-end">
          <div
            className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2"
            style={{ borderColor: 'var(--border)' }}
          >
            <img
              src={profilePic}
              alt="Noel Sasikanth"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
