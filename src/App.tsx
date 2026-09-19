import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const BG_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85'

const FRONT_IMAGE =
  'https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png'

const NAV_LINKS = ['Story', 'Jobs', 'Message']
const SOCIAL_LINKS = ['Instagram', 'TikTok', 'YouTube']

function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black font-hn">
      {/* Background */}
      <img src={BG_IMAGE} alt="" className="anim-fade-in absolute inset-0 h-full w-full object-cover" />

      {/* Marquee name */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-cream sm:text-[26vh]">
          <span className="pr-[6vw]">Marcus &mdash; Bennet&nbsp;</span>
          <span className="pr-[6vw]">Marcus &mdash; Bennet&nbsp;</span>
        </div>
      </div>

      {/* Cream rule */}
      <div className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28" />

      {/* Desktop / mobile footer */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          <p>Visuals Composer</p>
          <p>Digital Crafter</p>
          <p>Obsessed by The Office</p>
        </div>
        <div className="anim-fade-up text-right" style={{ animationDelay: '1550ms' }}>
          <p>A homage to</p>
          <p>Marcus Holloway</p>
        </div>
      </footer>

      {/* Front portrait cutout */}
      <img
        src={FRONT_IMAGE}
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
      />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#"
          className="anim-fade-up font-hn text-lg tracking-wide text-cream"
          style={{ animationDelay: '800ms' }}
        >
          Marcus
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span className="anim-fade-up text-sm text-cream" style={{ animationDelay: '900ms' }}>
            2025
          </span>

          <nav className="flex flex-col gap-0.5 text-sm text-cream">
            {NAV_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-0.5 text-sm text-cream">
            {SOCIAL_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {label}
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
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              className="font-hn text-4xl text-cream transition-all duration-500 ease-out"
              style={{
                transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(1.5rem)',
                opacity: open ? 1 : 0,
              }}
            >
              {label}
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
          {SOCIAL_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              className="text-sm text-cream transition-all duration-500 ease-out"
              style={{
                transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(1rem)',
                opacity: open ? 1 : 0,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
