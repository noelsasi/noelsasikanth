import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { products } from '../data/portfolio'
import { Chip, SectionHead, CONTAINER } from './ui/primitives'

/*
 * Layout family: full-bleed dark band with an asymmetric bento.
 * Exactly 4 cells for 4 products: one lead cell spanning 7 columns, three
 * supporting cells. No empty tiles, no four-equal-cards row.
 *
 * The band is the page's first inversion and marks "here is the work".
 */

export default function Products() {
  const reduce = useReducedMotion()
  const [lead, ...rest] = products

  const reveal = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section id="work" className="py-section" style={{ backgroundColor: 'var(--band)' }}>
      <div className={CONTAINER}>
        <motion.div {...reveal(0)}>
          <SectionHead
            onBand
            title="Products I designed, built, and shipped."
            lede="Four products taken from an empty repository to something people use. Architecture, interface, and deployment all mine."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-start gap-4 lg:grid-cols-12">
          {/* Lead cell */}
          <motion.a
            {...reveal(1)}
            href={lead.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col justify-between rounded-xl p-8 transition-colors lg:col-span-7"
            style={{ backgroundColor: 'var(--band-elevated)' }}
          >
            <div>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="display text-display-sm"
                    style={{ color: 'var(--on-band)' }}
                  >
                    {lead.name}
                  </h3>
                  <p className="mt-2 text-xs font-medium" style={{ color: 'var(--on-band-soft)' }}>
                    {lead.badge}
                  </p>
                </div>
                <ArrowUpRight
                  size={22}
                  weight="regular"
                  className="mt-1 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: 'var(--on-band-soft)' }}
                />
              </div>
              <p
                className="max-w-[52ch] text-base leading-relaxed"
                style={{ color: 'var(--on-band-soft)' }}
              >
                {lead.description}
              </p>
              <p className="mt-5 max-w-[52ch] text-sm leading-relaxed" style={{ color: 'var(--on-band)' }}>
                {lead.signal}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {lead.stack.map((s) => (
                <Chip key={s} label={s} onBand />
              ))}
            </div>
          </motion.a>

          {/* Supporting rail. Three cards stacked beside the lead. */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {rest.map((p, i) => (
            <motion.a
              {...reveal(i + 2)}
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl p-6 transition-colors"
              style={{ backgroundColor: 'var(--band-elevated)' }}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--on-band)' }}>
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs" style={{ color: 'var(--on-band-soft)' }}>
                    {p.badge}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  weight="regular"
                  className="mt-1 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  style={{ color: 'var(--on-band-soft)' }}
                />
              </div>
              <p
                className="flex-1 text-sm leading-relaxed"
                style={{ color: 'var(--on-band-soft)' }}
              >
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => (
                  <Chip key={s} label={s} onBand />
                ))}
              </div>
            </motion.a>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
