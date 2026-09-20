import { PROJECTS } from '../data/content'

function Projects() {
  return (
    <section id="projects" className="bg-black font-hn">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:px-10 sm:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Projects</p>

        <div className="mt-10">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="grid grid-cols-1 gap-4 border-t border-cream/15 py-8 sm:grid-cols-[1fr_2fr] sm:gap-10"
            >
              <div>
                <p className="font-hn text-xl text-cream sm:text-2xl">{project.name}</p>
                <p className="mt-1 text-sm text-cream/40">{project.date}</p>
                <p className="mt-3 text-sm text-cream/60">{project.tech.join(', ')}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-cream underline underline-offset-4 transition-opacity duration-300 hover:opacity-60"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
              <ul className="flex flex-col gap-3">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm leading-relaxed text-cream/80 sm:text-base">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
