import { useEffect, useState } from 'react';
import { BadgeCheck, ExternalLink, FileText } from 'lucide-react';
import Button from './ui/Button';
import Modal from './ui/Modal';

export default function CertificateModal({ certificate, open, onClose }) {
  const [snapshot, setSnapshot] = useState(certificate);

  useEffect(() => {
    if (certificate) setSnapshot(certificate);
  }, [certificate]);

  const data = certificate ?? snapshot;
  const document = data?.image || data?.file || null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy="certificate-modal-title"
      panelClassName="max-w-2xl"
      closeLabel="Close certificate preview"
    >
      {data ? (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto rounded-3xl">
          <header className="relative overflow-hidden rounded-t-3xl border-b border-mist bg-haze px-6 pb-6 pt-8 sm:px-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-grid opacity-40" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-[10px] tracking-[0.24em] text-ink/35">{data.number}</span>
                <span className="h-px w-6 bg-mist" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-600">
                  Certificate
                </span>
                {data.verified ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200/70 bg-white px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-brand-700">
                    <BadgeCheck className="h-3 w-3" aria-hidden="true" />
                    Verified
                  </span>
                ) : null}
              </div>

              <h2
                id="certificate-modal-title"
                className="mt-4 font-display text-[clamp(1.35rem,3.6vw,1.85rem)] font-semibold leading-tight tracking-[-0.03em] text-ink"
              >
                {data.title}
              </h2>
              <p className="mt-2 text-[13.5px] text-ink/55">{data.issuer}</p>
              <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink/35">
                Issued: {data.issued ?? 'not listed'}
              </p>
            </div>
          </header>

          <div className="px-6 pb-7 pt-6 sm:px-8">
            {data.note ? (
              <p className="text-[13.5px] leading-relaxed text-ink/60">{data.note}</p>
            ) : null}

            <div className="mt-5">
              {data.image ? (
                <img
                  src={data.image}
                  alt={`${data.title} certificate issued by ${data.issuer}`}
                  loading="lazy"
                  className="w-full rounded-2xl border border-mist bg-white object-contain"
                />
              ) : data.file ? (
                <iframe
                  src={data.file}
                  title={`${data.title} certificate document`}
                  className="h-[60vh] w-full rounded-2xl border border-mist bg-white"
                />
              ) : (
                <div className="rounded-2xl border border-dashed border-mist bg-haze/60 px-5 py-10 text-center">
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-mist bg-white text-ink/35">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 text-[13px] font-medium text-ink/60">No file attached yet</p>
                  <p className="mx-auto mt-1.5 max-w-sm text-[12.5px] leading-relaxed text-ink/40">
                    Add the certificate image or PDF to attach a preview to this entry.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-mist/80 pt-5">
              {document ? (
                <Button as="a" href={document} target="_blank" rel="noreferrer noopener" variant="dark" size="sm">
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  Open document
                </Button>
              ) : null}

              {data.url ? (
                <Button as="a" href={data.url} target="_blank" rel="noreferrer noopener" variant="outline" size="sm">
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Verify with issuer
                </Button>
              ) : null}

              <button
                type="button"
                onClick={onClose}
                className="ml-auto text-[13px] font-medium text-ink/45 transition-colors hover:text-ink"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
