import { identity } from '../../data/site';
import NetworkGlobe from './NetworkGlobe';

const META = [
  { label: 'Focus', value: 'Full Stack · AI' },
  { label: 'Core stack', value: 'Python · FastAPI' },
  { label: 'Approach', value: 'Research-driven' },
];

function CornerMarks() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-ink/20" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-ink/20" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-ink/20" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-ink/20" />
    </div>
  );
}

export default function HeroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_55%_at_50%_25%,rgba(108,59,219,0.16),transparent_72%)]"
      />

      <div className="relative rounded-[2.1rem] border border-mist bg-white/75 p-2 shadow-panel backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-mist/90 bg-haze">
          <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-70" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(232,189,83,0.13),transparent_35%)]"
          />
          <CornerMarks />

          <div className="relative flex flex-col px-5 pb-5 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-ink/40">
              <span>Portfolio</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-brand-500" aria-hidden="true" />
                PY · API · AI
              </span>
            </div>

            <div className="mt-4 flex flex-1 flex-col items-center justify-center">
              <NetworkGlobe />
              <p className="mt-1 text-center font-display text-[13px] font-medium tracking-[-0.01em] text-ink/80">
                {identity.name}
              </p>
              <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                Full Stack · AI · Automation
              </p>
            </div>

            <dl className="mt-4 divide-y divide-mist/90 border-t border-mist/90">
              {META.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                    {item.label}
                  </dt>
                  <dd className="font-mono text-[11.5px] text-ink/70">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
