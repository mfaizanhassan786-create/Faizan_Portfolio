import { cn } from '../../lib/cn';

/**
 * Small label / technology badge used across project and skill cards.
 */
export default function Chip({ children, tone = 'light', className }) {
  const tones = {
    light: 'border-mist bg-white text-ink/65',
    haze: 'border-mist/80 bg-haze text-ink/60',
    brand: 'border-brand-200/70 bg-brand-50 text-brand-700',
    dark: 'border-white/12 bg-white/[0.05] text-white/65',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-[0.02em]',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
