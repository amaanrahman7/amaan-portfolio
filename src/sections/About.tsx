import { BIO, SKILLS } from '../data/content'

function About() {
  return (
    <section id="about" className="bg-black font-hn">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">About</p>
        <p className="mt-6 max-w-3xl font-hn text-2xl leading-relaxed text-cream sm:text-4xl">{BIO}</p>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {SKILLS.map((group) => (
            <div key={group.label} className="border-t border-cream/15 pt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cream/50">{group.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/90 sm:text-base">
                {group.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
