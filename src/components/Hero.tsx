import { motion, useReducedMotion } from 'framer-motion'
import profilePic from '../assets/profile-pic.jpg'
import { Action, CONTAINER } from './ui/primitives'

/*
 * Asymmetric split hero. Left column carries the message, right column carries
 * the person plus three verifiable facts.
 *
 * Text-element budget (max 4): headline, subtext, CTAs, and the availability
 * line. No trust micro-strip, no tagline under the CTAs, no scroll cue.
 *
 * The metric column is real data drawn from the work below, not invented
 * spec-aesthetic numbers.
 */

const FACTS = [
  { value: '7+', label: 'Years shipping' },
  { value: '4', label: 'Products solo' },
  { value: '2', label: 'Promotions' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const reduce = useReducedMotion()

  // Entry animation communicates hierarchy: the message resolves before the
  // supporting facts. Collapses to static under reduced motion.
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section
      id="hero"
      className="flex min-h-[100dvh] items-center pb-24 pt-28 lg:pb-16 lg:pt-24"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Message */}
          <div className="lg:col-span-7">
            <motion.p
              {...enter(0)}
              className="mb-6 text-sm font-medium"
              style={{ color: 'var(--accent)' }}
            >
              Open to founding engineer and senior roles
            </motion.p>

            <motion.h1
              {...enter(0.08)}
              className="display-tight text-display-mega"
              style={{ color: 'var(--ink)' }}
            >
              I build products
              <br />
              from 0 to 1.
            </motion.h1>

            <motion.p
              {...enter(0.16)}
              className="mt-7 max-w-[46ch] text-lg leading-relaxed"
              style={{ color: 'var(--body)' }}
            >
              Product engineer and tech lead. I take systems from first commit to
              production, across healthtech, logistics, and AI.
            </motion.p>

            <motion.div {...enter(0.24)} className="mt-10 flex flex-wrap gap-3">
              <Action large onClick={() => scrollTo('work')}>
                View my work
              </Action>
              <Action
                large
                tone="quiet"
                href="/noelsasikanth/Noel_Sasikanth_Resume_Frontend.pdf"
                external
              >
                Resume
              </Action>
            </motion.div>
          </div>

          {/* Person and facts */}
          <motion.div {...enter(0.32)} className="lg:col-span-5">
            <div
              className="overflow-hidden rounded-xl"
              style={{ backgroundColor: 'var(--surface-soft)' }}
            >
              <img
                src={profilePic}
                alt="Noel Sasikanth"
                width={640}
                height={560}
                fetchPriority="high"
                className="aspect-[8/7] w-full object-cover object-top"
              />
              <div className="grid grid-cols-3 gap-4 px-6 py-6">
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <p className="numeric text-2xl" style={{ color: 'var(--ink)' }}>
                      {f.value}
                    </p>
                    <p
                      className="mt-1.5 text-xs leading-snug"
                      style={{ color: 'var(--muted)' }}
                    >
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
