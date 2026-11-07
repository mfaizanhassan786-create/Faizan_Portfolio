import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { assets, availability, identity } from '../data/site';
import useTypewriter from '../hooks/useTypewriter';
import Button from './ui/Button';
import HeroPanel from './visuals/HeroPanel';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const typed = useTypewriter(identity.roles, { enabled: !reduceMotion });

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.075, delayChildren: reduceMotion ? 0 : 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-lines mask-fade-bottom opacity-80" />
        <div className="absolute -left-32 top-4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(108,59,219,0.13),transparent_66%)]" />
        <div className="absolute -right-28 top-32 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(52,120,246,0.12),transparent_66%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mist to-transparent" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-brand-600">
                Hello, I&apos;m
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-brand-300/70" />
            </motion.div>

            <motion.h1
              id="hero-title"
              variants={item}
              className="mt-5 font-display text-[clamp(2.45rem,7.2vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-ink"
            >
              M. Faizan Hassan
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl font-display text-[clamp(1.05rem,2.3vw,1.5rem)] font-normal leading-snug tracking-[-0.02em] text-ink/70"
            >
              Building <span className="text-brand-700">Intelligent</span> Solutions Through Code.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200/80 bg-brand-50/70 px-4 py-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span aria-hidden="true" className="font-mono text-[12px] text-brand-700">
                  {typed}
                  <span className="ml-0.5 inline-block h-[11px] w-[2px] translate-y-[1px] animate-caret bg-brand-600 align-middle" />
                </span>
                <span className="sr-only">{identity.roles.join(', ')}</span>
              </span>

              {availability.enabled ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-mist bg-white/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {availability.label}
                </span>
              ) : null}
            </motion.div>

            <motion.p variants={item} className="mt-7 max-w-xl text-[15px] leading-[1.75] text-ink/60 sm:text-base">
              {identity.intro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href="#projects" variant="primary" size="lg">
                Explore My Work
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
              <Button as="a" href="#contact" variant="outline" size="lg">
                Let&apos;s Connect
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={assets.cv}
                download
                className="group inline-flex items-center gap-2 text-[13px] text-ink/55 transition-colors hover:text-brand-700"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
              <span aria-hidden="true" className="hidden h-4 w-px bg-mist sm:block" />
              <a
                href={identity.socials.github.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 text-[13px] text-ink/55 transition-colors hover:text-brand-700"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={identity.socials.linkedin.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 text-[13px] text-ink/55 transition-colors hover:text-brand-700"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <HeroPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
