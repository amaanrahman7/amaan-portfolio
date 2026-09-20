import { EDUCATION, LEADERSHIP_EXPERIENCE, WORK_EXPERIENCE } from '../data/content'
import Reveal from '../components/Reveal'

type Entry = {
  company: string
  location?: string
  role: string
  date: string
  bullets: string[]
}

function ExperienceRow({ entry, delay = 0 }: { entry: Entry; delay?: number }) {
  return (
    <Reveal delay={delay} className="grid grid-cols-1 gap-4 border-t border-cream/15 py-8 sm:grid-cols-[1fr_2fr] sm:gap-10">
      <div>
        <p className="font-hn text-xl text-cream sm:text-2xl">{entry.company}</p>
        <p className="mt-1 text-sm text-cream/60">{entry.role}</p>
        <p className="mt-1 text-sm text-cream/40">
          {entry.date}
          {entry.location ? ` · ${entry.location}` : ''}
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="text-sm leading-relaxed text-cream/80 sm:text-base">
            {bullet}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

function Experience() {
  return (
    <section id="experience" className="bg-black font-hn">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Experience</p>

        <div className="mt-10">
          {WORK_EXPERIENCE.map((entry, i) => (
            <ExperienceRow key={entry.company} entry={entry} delay={i * 80} />
          ))}
        </div>

        <p className="mt-20 text-xs uppercase tracking-[0.3em] text-cream/50">Leadership</p>
        <div className="mt-10">
          {LEADERSHIP_EXPERIENCE.map((entry) => (
            <ExperienceRow key={entry.company} entry={entry} />
          ))}
        </div>

        <p className="mt-20 text-xs uppercase tracking-[0.3em] text-cream/50">Education</p>
        <Reveal className="mt-10 border-t border-cream/15 py-8">
          <p className="font-hn text-xl text-cream sm:text-2xl">{EDUCATION.school}</p>
          <p className="mt-1 text-sm text-cream/60">
            {EDUCATION.degree} &middot; {EDUCATION.minor}
          </p>
          <p className="mt-1 text-sm text-cream/40">
            {EDUCATION.date} &middot; {EDUCATION.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
