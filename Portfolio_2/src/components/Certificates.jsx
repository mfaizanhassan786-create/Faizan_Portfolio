import { useCallback, useState } from 'react';
import { ArrowUpRight, BadgeCheck, Maximize2 } from 'lucide-react';
import { certificates, hasPreview } from '../data/certificates';
import { cn } from '../lib/cn';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import CertificateModal from './CertificateModal';

function initialsOf(value) {
  return value
    .replace(/[()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [preview, setPreview] = useState(null);
  const closeModal = useCallback(() => setPreview(null), []);

  const open = (certificate) => {
    setSelected(certificate);
    setPreview(certificate);
  };

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="relative scroll-mt-24 border-t border-mist/70 bg-haze py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(52,120,246,0.09),transparent_70%)]" />
      </div>

      <div className="container-page relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="certificates-title"
            index="04"
            eyebrow="Certificates"
            title="Certificates & Achievements"
            subtitle="Continuous learning. Practical knowledge. Professional growth."
          />
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
              <BadgeCheck className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
              Verified credentials only
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {certificates.map((certificate, index) => {
            const previewable = hasPreview(certificate);
            const placeholder = Boolean(certificate.placeholder);

            return (
              <Reveal key={certificate.id} delay={(index % 4) * 0.05} y={18}>
                <article
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-500 ease-premium',
                    placeholder
                      ? 'border-dashed border-mist bg-white/50'
                      : 'border-mist bg-white hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft'
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(108,59,219,0.14),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start justify-between">
                    <span
                      className={cn(
                        'grid h-10 w-10 place-items-center rounded-xl border font-mono text-[11px] font-medium',
                        placeholder
                          ? 'border-mist bg-white text-ink/30'
                          : 'border-brand-100 bg-brand-50 text-brand-700'
                      )}
                      aria-hidden="true"
                    >
                      {placeholder ? '+' : initialsOf(certificate.issuer)}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-ink/25">
                      {certificate.number}
                    </span>
                  </div>

                  {previewable ? (
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      loading="lazy"
                      decoding="async"
                      className="mt-4 aspect-[1.55] w-full rounded-xl border border-mist/80 object-cover"
                    />
                  ) : null}

                  <h3
                    className={cn(
                      'mt-4 font-display text-[15px] font-medium leading-snug tracking-[-0.015em]',
                      placeholder ? 'text-ink/45' : 'text-ink'
                    )}
                  >
                    {certificate.title}
                  </h3>

                  <p
                    className={cn(
                      'mt-1.5 text-[12.5px] leading-relaxed',
                      placeholder ? 'text-ink/30' : 'text-ink/50'
                    )}
                  >
                    {certificate.issuer}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between gap-2 border-t border-mist/80 pt-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/30">
                        {certificate.issued ?? 'Date not listed'}
                      </span>

                      {previewable ? (
                        <button
                          type="button"
                          onClick={() => open(certificate)}
                          className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-700 transition hover:text-brand-900"
                        >
                          View
                          <Maximize2 className="h-3 w-3" aria-hidden="true" />
                          <span className="sr-only">{certificate.title}</span>
                        </button>
                      ) : (
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/25">
                          Preview pending
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="flex items-center gap-2 text-[12.5px] text-ink/40">
            <ArrowUpRight className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            Only verified certificate details are listed — previews are added as files become available.
          </p>
        </Reveal>
      </div>

      <CertificateModal certificate={selected} open={Boolean(preview)} onClose={closeModal} />
    </section>
  );
}
