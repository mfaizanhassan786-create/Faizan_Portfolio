import { useCallback, useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import { identity } from '../data/site';
import Chip from './ui/Chip';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import ProjectModal from './ProjectModal';
import ProjectVisual from './visuals/ProjectVisual';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate scroll-mt-24 overflow-hidden bg-ink py-24 text-white sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-70" />
        <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(108,59,219,0.22),transparent_68%)]" />
        <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(52,120,246,0.16),transparent_70%)]" />
      </div>

      <div className="container-page relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="projects-title"
            index="03"
            eyebrow="Projects"
            title="Selected Projects"
            subtitle="Turning technical ideas into practical solutions."
            tone="dark"
          />
          <Reveal delay={0.1}>
            <a
              href={identity.socials.github.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55 transition duration-300 hover:border-brand-400/60 hover:text-white"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              All repositories
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 space-y-5 lg:mt-14 lg:space-y-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="group relative grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.05] hover:shadow-[0_40px_90px_-50px_rgba(108,59,219,0.9)] lg:grid-cols-12">
                <div
                  className={`relative min-h-[15rem] border-b border-white/10 lg:col-span-5 lg:min-h-[20rem] lg:border-b-0 ${
                    index % 2 === 0 ? 'lg:order-2 lg:border-l' : 'lg:order-1 lg:border-r'
                  }`}
                >
                  <ProjectVisual variant={project.visual} />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/60 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-white/60 backdrop-blur">
                    {project.number}
                  </span>
                </div>

                <div className="flex flex-col p-6 sm:p-8 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-300">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-[clamp(1.35rem,2.6vw,1.85rem)] font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3.5 max-w-xl text-[14px] leading-[1.75] text-white/55 sm:text-[14.5px]">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <li key={technology}>
                        <Chip tone="dark">{technology}</Chip>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
                    <Button
                      type="button"
                      onClick={() => setSelected(project)}
                      variant="primary"
                      size="sm"
                    >
                      <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                      View Details
                    </Button>

                    {project.links.github ? (
                      <Button
                        as="a"
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        variant="ghostDark"
                        size="sm"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        GitHub
                      </Button>
                    ) : null}

                    {project.links.live ? (
                      <Button
                        as="a"
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        variant="ghostDark"
                        size="sm"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        Live Demo
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={closeModal} />
    </section>
  );
}
