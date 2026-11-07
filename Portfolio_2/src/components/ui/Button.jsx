import { cn } from '../../lib/cn';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/55 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45';

const variants = {
  primary:
    'bg-brand-600 text-white shadow-[0_16px_36px_-18px_rgba(108,59,219,0.85)] hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_22px_46px_-18px_rgba(108,59,219,0.75)]',
  outline:
    'border border-mist bg-white/80 text-ink backdrop-blur-sm hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-soft',
  dark: 'bg-ink text-white hover:-translate-y-0.5 hover:bg-ink/90',
  ghostDark:
    'border border-white/15 bg-white/[0.04] text-white/85 hover:-translate-y-0.5 hover:border-brand-400/60 hover:bg-white/[0.08] hover:text-white',
  quiet: 'text-ink/60 hover:text-brand-700',
  quietDark: 'text-white/55 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-3.5 text-sm sm:text-[15px]',
  icon: 'h-10 w-10 p-0',
};

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <Tag className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Tag>
  );
}

export { base as buttonBase, variants as buttonVariants, sizes as buttonSizes };
