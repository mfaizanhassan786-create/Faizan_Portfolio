import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Brain, Compass, Database, Monitor, Server, Workflow } from 'lucide-react';
import { skillGroups } from '../data/skills';
import { cn } from '../lib/cn';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const ICONS = {
  server: Server,
  brain: Brain,
  database: Database,
  monitor: Monitor,
  workflow: Workflow,
  compass: Compass,
};

const totalSkills = skillGroups.reduce((count, group) => count + group.skills.length, 0);

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const reduceMotion = useReducedMotion();
  const active = skillGroups.find((group) => group.id === activeId) ?? skillGroups[0];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative scroll-mt-24 border-t border-mist/70 bg-paper py-24 sm:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="skills-title"
            index="02"
            eyebrow="Skills"
            title="Technical Expertise"
            subtitle="Technologies I explore and work with — organised by the problems they solve."
          />
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/35">
              <span className="h-1 w-1 rounded-full bg-brand-500" aria-hidden="true" />
              {skillGroups.length} categories · {totalSkills} technologies
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-4" y={16}>
            <div className="min-w-0 lg:sticky lg:top-28">
              <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 no-scrollbar lg:hidden">
                {skillGroups.map((group) => {
                  const isActive = group.id === active.id;
                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => setActiveId(group.id)}
                      aria-pressed={isActive}
                      className={cn(
                        'shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] transition duration-300',
                        isActive
                          ? 'border-brand-600 bg-brand-600 text-white'
                          : 'border-mist bg-white text-ink/60'
                      )}
                    >
                      {group.title}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 hidden flex-col gap-1.5 lg:mt-0 lg:flex">
                {skillGroups.map((group, index) => {
                  const Icon = ICONS[group.icon] ?? Server;
                  const isActive = group.id === active.id;
                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => setActiveId(group.id)}
                      aria-pressed={isActive}
                      className={cn(
                        'group relative flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ease-premium',
                        isActive
                          ? 'border-brand-200 bg-white shadow-soft'
                          : 'border-transparent bg-transparent hover:border-mist hover:bg-white/60'
                      )}
                    >
                      <span
                        className={cn(
                          'grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition duration-300',
                          isActive
                            ? 'border-brand-200 bg-brand-50 text-brand-700'
                            : 'border-mist bg-white text-ink/45 group-hover:text-brand-600'
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            'block truncate font-display text-[13.5px] font-medium tracking-[-0.01em] transition-colors',
                            isActive ? 'text-ink' : 'text-ink/65'
                          )}
                        >
                          {group.title}
                        </span>
                        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                          {String(group.skills.length).padStart(2, '0')} technologies
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          'font-mono text-[10px] transition-opacity',
                          isActive ? 'text-brand-600 opacity-100' : 'text-ink/25 opacity-0 group-hover:opacity-100'
                        )}
                      >
                        0{index + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-8" delay={0.08} y={22}>
            <div className="relative overflow-hidden rounded-3xl border border-mist bg-white p-6 shadow-soft sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(52,120,246,0.10),transparent_70%)]"
              />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-mist/80 pb-5">
                    <div className="max-w-md">
                      <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-ink sm:text-xl">
                        {active.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/55">{active.blurb}</p>
                    </div>
                    <span className="rounded-full border border-mist bg-haze px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                      {String(active.skills.length).padStart(2, '0')} items
                    </span>
                  </div>

                  <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-8">
                    {active.skills.map((skill, index) => (
                      <li
                        key={skill}
                        className="group flex items-center gap-3 border-b border-mist/60 py-3.5 last:border-b-0"
                      >
                        <span className="font-mono text-[10px] text-ink/25 transition-colors group-hover:text-brand-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-[14px] text-ink/75 transition-colors group-hover:text-ink">
                          {skill}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-mist transition-colors group-hover:bg-brand-400"
                        />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
