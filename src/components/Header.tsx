import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS } from '../data/content'

function isExternal(href: string) {
  return href.startsWith('http')
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 pb-4 transition-colors duration-300 sm:px-10 sm:pt-8 sm:pb-6 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <a
          href="#"
          className="anim-fade-up font-hn text-lg tracking-wide text-cream"
          style={{ animationDelay: '800ms' }}
        >
          Amaan
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="anim-fade-up whitespace-nowrap text-sm text-cream"
            style={{ animationDelay: '900ms' }}
          >
            Texas Tech Computer Science 2026
          </span>

          <nav className="flex flex-col gap-0.5 text-sm text-cream">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-0.5 text-sm text-cream">
            {SOCIAL_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={isExternal(link.href) ? '_blank' : undefined}
                rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="anim-fade-up relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
          style={{ animationDelay: '900ms' }}
        >
          <span
            className="block h-[1.5px] w-6 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'translateY(0) rotate(0)' }}
          />
          <span
            className="block h-[1.5px] w-6 bg-cream transition-opacity duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[1.5px] w-6 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'translateY(0) rotate(0)' }}
          />
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        className={`fixed right-0 top-0 z-40 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] sm:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 z-50 text-cream transition-all duration-500 ease-out"
          style={{
            transitionDelay: open ? '300ms' : '0ms',
            transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
            opacity: open ? 1 : 0,
          }}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <p
          className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ease-out"
          style={{
            transitionDelay: open ? '250ms' : '0ms',
            transform: open ? 'translateY(0)' : 'translateY(8px)',
            opacity: open ? 1 : 0,
          }}
        >
          Site Index
        </p>

        <nav className="mt-4 flex flex-col gap-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-hn text-4xl text-cream transition-all duration-500 ease-out"
              style={{
                transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(1.5rem)',
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p
          className="mt-10 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ease-out"
          style={{
            transitionDelay: open ? '500ms' : '0ms',
            transform: open ? 'translateY(0)' : 'translateY(8px)',
            opacity: open ? 1 : 0,
          }}
        >
          Find Me
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={isExternal(link.href) ? '_blank' : undefined}
              rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
              className="text-sm text-cream transition-all duration-500 ease-out"
              style={{
                transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(1rem)',
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
