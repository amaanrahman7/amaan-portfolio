import portrait from '../assets/photos/portrait-cutout.webp'

function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black font-hn">
      {/* Marquee name */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-cream sm:text-[26vh]">
          <span className="pr-[6vw]">Amaan Rahman&nbsp;</span>
          <span className="pr-[6vw]">Amaan Rahman&nbsp;</span>
        </div>
      </div>

      {/* Portrait */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <img
          src={portrait}
          alt="Amaan Rahman"
          className="anim-rise-in h-[85vh] w-auto object-contain sm:h-[95vh]"
        />
      </div>

      {/* Cream rule */}
      <div className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28" />

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          <p>B.S. Computer Science</p>
          <p>Texas Tech University</p>
          <p>Class of 2026</p>
        </div>
        <a
          href="#contact"
          className="anim-fade-up text-right transition-opacity duration-300 hover:opacity-60"
          style={{ animationDelay: '1550ms' }}
        >
          <p>Get in touch</p>
          <p>amaanrahman9@gmail.com</p>
        </a>
      </footer>
    </section>
  )
}

export default Hero
