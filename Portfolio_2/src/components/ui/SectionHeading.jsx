import { cn } from '../../lib/cn';
import Reveal from './Reveal';

export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'left',
  className,
  id,
}) {
  const isDark = tone === 'dark';
  const centered = align === 'center';

  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      <Reveal>
        <div className={cn('flex items-center gap-3', centered && 'justify-center')}>
          {index ? (
            <span
              className={cn(
                'font-mono text-[11px] tracking-[0.28em]',
                isDark ? 'text-white/35' : 'text-ink/35'
              )}
            >
              {index}
            </span>
          ) : null}
          <span className={cn('h-px w-7', isDark ? 'bg-white/20' : 'bg-ink/15')} />
          <span
            className={cn(
              'font-mono text-[11px] uppercase tracking-[0.28em]',
              isDark ? 'text-brand-300' : 'text-brand-600'
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2
          id={id}
          className={cn(
            'mt-5 font-display text-[clamp(1.85rem,4.2vw,3.05rem)] font-semibold leading-[1.06] tracking-[-0.035em]',
            isDark ? 'text-white' : 'text-ink'
          )}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              'mt-4 text-[15px] leading-relaxed sm:text-base',
              isDark ? 'text-white/55' : 'text-ink/55'
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
