import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Menu, X } from 'lucide-react';
import { assets, identity, navigation } from '../data/site';
import useActiveSection from '../hooks/useActiveSection';
import useScrollLock from '../hooks/useScrollLock';
import { cn } from '../lib/cn';
import Button from './ui/Button';

const SECTION_IDS = navigation.map((item) => item.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const reduceMotion = useReducedMotion();

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[90] transition-all duration-500 ease-premium',
        solid
          ? 'border-b border-mist/80 bg-white/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group inline-flex items-center gap-1 font-mono text-[13px] font-medium tracking-[-0.01em] text-ink"
          aria-label={`${identity.name} — back to top`}
        >
          <span aria-hidden="true" className="text-brand-600 transition-transform duration-300 group-hover:-translate-x-0.5">
            &lt;
          </span>
          <span className="px-1">MFH</span>
          <span aria-hidden="true" className="text-brand-600 transition-transform duration-300 group-hover:translate-x-0.5">
            /&gt;
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative inline-flex items-center rounded-full px-4 py-2 text-[13.5px] transition-colors duration-300',
                      isActive ? 'text-ink' : 'text-ink/55 hover:text-ink'
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-ink/[0.055]"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 34 }
                        }
                      />
                    ) : null}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={identity.socials.github.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="hidden h-10 w-10 place-items-center rounded-full border border-mist/80 text-ink/55 transition duration-300 hover:border-brand-300 hover:text-brand-700 sm:grid"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>

          <Button
            as="a"
            href={assets.cv}
            download
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download CV
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-mist bg-white/70 text-ink/70 transition duration-300 hover:border-brand-300 hover:text-brand-700 lg:hidden"
          >
            {open ? (
              <X className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-mist/70 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="container-page max-h-[calc(100dvh-4.5rem)] overflow-y-auto py-5"
            >
              <ul className="flex flex-col">
                {navigation.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id} className="border-b border-mist/60 last:border-0">
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? 'true' : undefined}
                        className="flex items-center justify-between py-3.5 text-[15px] text-ink/70 transition-colors hover:text-brand-700"
                      >
                        <span className={cn('font-display', isActive && 'text-ink')}>{item.label}</span>
                        <ArrowUpRight
                          className={cn(
                            'h-4 w-4 transition-opacity',
                            isActive ? 'text-brand-600 opacity-100' : 'opacity-30'
                          )}
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 flex flex-col gap-3">
                <Button as="a" href={assets.cv} download variant="primary" size="md" className="w-full">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </Button>

                <div className="flex items-center gap-2">
                  <a
                    href={identity.socials.github.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-mist py-2.5 text-[13px] text-ink/65 transition hover:border-brand-300 hover:text-brand-700"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={identity.socials.linkedin.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-mist py-2.5 text-[13px] text-ink/65 transition hover:border-brand-300 hover:text-brand-700"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
