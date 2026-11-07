import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { about, assets, identity } from '../data/site';
import Chip from './ui/Chip';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-24 border-t border-mist/70 bg-haze py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(108,59,219,0.08),transparent_68%)]" />
      </div>

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5" y={28}>
            <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-mist"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-mist bg-white p-1.5 shadow-soft">
                <div className="overflow-hidden rounded-[1.4rem] bg-haze">
                  <img
                    src={assets.profileImage}
                    alt={assets.profileImageAlt}
                    width="800"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-mist bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
                <div className="min-w-0">
                  <p className="truncate font-display text-[13px] font-medium tracking-[-0.01em] text-ink">
                    {identity.name}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    Python · Backend · AI
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-50 font-mono text-[10px] font-medium text-brand-700"
                >
                  MFH
                </span>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-2">
              <a
                href={identity.socials.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-mist bg-white py-2.5 text-[13px] text-ink/65 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={identity.socials.linkedin.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-mist bg-white py-2.5 text-[13px] text-ink/65 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              id="about-title"
              index={about.index}
              eyebrow={about.eyebrow}
              title={about.title}
              subtitle={about.subtitle}
            />

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, position) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.05 * position}>
                  <p className="text-[15px] leading-[1.8] text-ink/65 sm:text-base">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ink/35">
                Technical interests
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <li key={interest}>
                    <Chip tone="haze" className="bg-white">
                      {interest}
                    </Chip>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mt-9">
              <a
                href={identity.socials.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-brand-700"
              >
                Explore my repositories
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 border-t border-mist/80 pt-12 sm:grid-cols-3 sm:gap-5">
          {about.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.07}>
              <div className="group h-full rounded-2xl border border-mist bg-white/70 p-5 transition duration-300 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-soft">
                <p className="font-mono text-[10px] tracking-[0.22em] text-brand-600">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-[15px] font-medium tracking-[-0.01em] text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{principle.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
