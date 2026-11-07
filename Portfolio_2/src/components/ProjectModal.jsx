import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import Chip from './ui/Chip';
import Button from './ui/Button';
import Modal from './ui/Modal';

function DetailBlock({ label, children }) {
  return (
    <section className="border-t border-mist/80 py-6 first:border-t-0 first:pt-0">
      <h3 className="font-mono text-[10px] uppercase tracking-[0.26em] text-brand-600">{label}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function ProjectModal({ project, onClose }) {
  const [snapshot, setSnapshot] = useState(project);

  // Keep the last project rendered while the exit animation plays.
  useEffect(() => {
    if (project) setSnapshot(project);
  }, [project]);

  const data = project ?? snapshot;

  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      labelledBy="project-modal-title"
      panelClassName="max-w-3xl"
      closeLabel="Close project details"
    >
      {data ? (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto rounded-3xl">
          <header className="relative overflow-hidden rounded-t-3xl border-b border-mist bg-haze px-6 pb-7 pt-8 sm:px-9">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand-200/80 bg-white px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-brand-700">
                  {data.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                  {data.category}
                </span>
              </div>

              <h2
                id="project-modal-title"
                className="mt-4 max-w-xl font-display text-[clamp(1.5rem,4vw,2.05rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-ink"
              >
                {data.title}
              </h2>

              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-ink/55">{data.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {data.stack.map((technology) => (
                  <li key={technology}>
                    <Chip tone="light">{technology}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div className="px-6 pb-8 pt-7 sm:px-9">
            <DetailBlock label="Overview">
              <p className="text-[14.5px] leading-[1.8] text-ink/65">{data.detail.overview}</p>
            </DetailBlock>

            <DetailBlock label="Problem statement">
              <p className="text-[14.5px] leading-[1.8] text-ink/65">{data.detail.problem}</p>
            </DetailBlock>

            <DetailBlock label="Technical approach">
              <ol className="space-y-3">
                {data.detail.approach.map((step, index) => (
                  <li key={step} className="flex gap-3.5">
                    <span className="mt-0.5 font-mono text-[10px] text-brand-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-[14px] leading-relaxed text-ink/65">{step}</span>
                  </li>
                ))}
              </ol>
            </DetailBlock>

            <DetailBlock label="Architecture">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {data.detail.architecture.map((layer) => (
                  <div
                    key={layer.step}
                    className="rounded-2xl border border-mist bg-haze/60 p-4 transition-colors hover:border-brand-200"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-brand-600">
                        {layer.step}
                      </span>
                      <span className="h-px flex-1 bg-mist" aria-hidden="true" />
                    </div>
                    <h4 className="mt-2 font-display text-[13.5px] font-medium tracking-[-0.01em] text-ink">
                      {layer.title}
                    </h4>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/55">{layer.text}</p>
                  </div>
                ))}
              </div>
            </DetailBlock>

            <DetailBlock label="Challenges & learning outcomes">
              <div className="space-y-4">
                {data.detail.challenges.map((challenge) => (
                  <div key={challenge.title}>
                    <h4 className="font-display text-[13.5px] font-medium tracking-[-0.01em] text-ink">
                      {challenge.title}
                    </h4>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink/55">{challenge.text}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-5 space-y-2.5 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
                {data.detail.learnings.map((learning) => (
                  <li key={learning} className="flex gap-2.5 text-[13px] leading-relaxed text-ink/65">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {learning}
                  </li>
                ))}
              </ul>
            </DetailBlock>

            <div className="flex flex-wrap items-center gap-3 border-t border-mist/80 pt-6">
              {data.links.github ? (
                <Button as="a" href={data.links.github} target="_blank" rel="noreferrer noopener" variant="dark" size="sm">
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  View Repository
                </Button>
              ) : null}

              {data.links.live ? (
                <Button as="a" href={data.links.live} target="_blank" rel="noreferrer noopener" variant="outline" size="sm">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Live Demo
                </Button>
              ) : null}

              {!data.links.github && !data.links.live ? (
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/35">
                  Repository and demo links will be published when available
                </p>
              ) : null}

              <button
                type="button"
                onClick={onClose}
                className="group ml-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-700"
              >
                Close
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
