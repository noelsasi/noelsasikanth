import { motion, useReducedMotion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, FilePdf } from '@phosphor-icons/react'
import { Action, CONTAINER } from './ui/primitives'

/*
 * Closing dark CTA band. Mirrors the Products band so the page opens and
 * closes on the same inversion, which is what makes it read as rhythm
 * rather than as a section that wandered in from another site.
 *
 * Single CTA intent on the whole page: "Get in touch" in the nav and here.
 * No second phrasing of the same action.
 */

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/noelsasi', Icon: GithubLogo },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/noelsasikanth', Icon: LinkedinLogo },
  {
    label: 'Resume',
    href: '/noelsasikanth/Noel_Sasikanth_Resume_Frontend.pdf',
    Icon: FilePdf,
  },
]

export default function Contact() {
  const reduce = useReducedMotion()

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
      }

  return (
    <footer id="contact" className="py-section" style={{ backgroundColor: 'var(--band)' }}>
      <div className={CONTAINER}>
        <motion.div {...reveal} className="max-w-3xl">
          <h2 className="display text-display-lg" style={{ color: 'var(--on-band)' }}>
            Looking for a founding
            <br className="hidden sm:block" /> or senior engineer?
          </h2>
          <p
            className="mt-6 max-w-[52ch] text-lg leading-relaxed"
            style={{ color: 'var(--on-band-soft)' }}
          >
            I am open to product-driven teams globally, remote or relocating. The
            fastest way to reach me is email.
          </p>

          <div className="mt-10">
            <Action large href="mailto:noelsasikanth@gmail.com">
              Get in touch
            </Action>
          </div>

          <div
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-8"
            style={{ borderColor: 'var(--band-hairline)' }}
          >
            {LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--on-band-soft)' }}
              >
                <Icon size={18} weight="regular" />
                {label}
              </a>
            ))}
            <p
              className="ml-auto text-xs"
              style={{ color: 'var(--on-band-soft)', opacity: 0.7 }}
            >
              Noel Sasikanth, {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
