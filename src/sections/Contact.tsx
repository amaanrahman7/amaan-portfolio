import { SOCIAL_LINKS } from '../data/content'
import Reveal from '../components/Reveal'

function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="bg-black font-hn">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Contact</p>
          <a
            href="mailto:amaanrahman9@gmail.com"
            className="mt-6 block font-hn text-4xl text-cream transition-opacity duration-300 hover:opacity-60 sm:text-7xl"
          >
            amaanrahman9@gmail.com
          </a>
        </Reveal>

        <Reveal delay={150} className="mt-16 flex flex-wrap gap-x-10 gap-y-2 border-t border-cream/15 pt-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={!link.href.startsWith('mailto:') ? '_blank' : undefined}
              rel={!link.href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
              className="text-sm text-cream/70 transition-opacity duration-300 hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </Reveal>

        <p className="mt-16 text-xs text-cream/40">&copy; {year} Amaan Rahman</p>
      </div>
    </section>
  )
}

export default Contact
