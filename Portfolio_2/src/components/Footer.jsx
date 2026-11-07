import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { footer, identity, navigation } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-lines-dark opacity-50" />
        <div className="absolute -bottom-40 left-1/2 h-[26rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(108,59,219,0.22),transparent_70%)]" />
      </div>

      <div className="container-page relative py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center font-mono text-[14px] font-medium tracking-[-0.01em] text-white"
              aria-label={`${identity.name} — back to top`}
            >
              <span aria-hidden="true" className="text-brand-400">
                &lt;
              </span>
              <span className="px-1">MFH</span>
              <span aria-hidden="true" className="text-brand-400">
                /&gt;
              </span>
            </a>

            <p className="mt-5 max-w-xs font-display text-[clamp(1.1rem,2.4vw,1.4rem)] font-normal leading-snug tracking-[-0.02em] text-white/70">
              {footer.signOff}
            </p>

            <div className="mt-7 flex items-center gap-2">
              <a
                href={identity.socials.github.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/55 transition duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:text-white"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={identity.socials.linkedin.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/55 transition duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:text-white"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${identity.email}`}
                aria-label="Send an email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white/55 transition duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4 lg:col-start-7">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/35">Navigate</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[13.5px] text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/35">Connect</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${identity.email}`}
                  className="break-all text-[13.5px] text-white/55 transition-colors hover:text-white"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={identity.whatsapp.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[13.5px] text-white/55 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={identity.socials.linkedin.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[13.5px] text-white/55 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={identity.socials.github.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[13.5px] text-white/55 transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/35">
            © {year} {identity.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/25">
              Designed &amp; built with care
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/55 transition duration-300 hover:border-brand-400/60 hover:text-white"
            >
              Back to top
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
