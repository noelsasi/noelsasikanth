import { motion } from 'framer-motion'
import { products } from '../data/portfolio'

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

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          Things I've built
        </h2>
        <p className="text-sm mb-12" style={{ color: 'var(--text-faint)' }}>
          Products I designed, architected, and shipped — most independently.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative flex flex-col p-5 rounded-xl border transition-all duration-200"
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
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3
                  className="text-base font-semibold transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {product.name}
                </h3>
                <span
                  className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium border"
                  style={
                    product.badgeVariant === 'solo'
                      ? { backgroundColor: 'var(--accent-bg)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }
                      : { backgroundColor: 'var(--violet-bg)', color: 'var(--violet)', borderColor: 'var(--violet-border)' }
                  }
                >
                  {product.badge}
                </span>
              </div>
              {product.url && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${product.name}`}
                  className="shrink-0 mt-0.5 transition-colors"
                  style={{ color: 'var(--text-faint)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>

            <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
              {product.description}
            </p>

            <p className="text-xs italic leading-relaxed mb-3" style={{ color: 'var(--accent)', opacity: 0.8 }}>
              {product.signal}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {product.stack.map((s) => <Tag key={s} label={s} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
