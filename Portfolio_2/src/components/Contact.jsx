import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { contact, identity } from '../data/site';
import { cn } from '../lib/cn';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const CHANNELS = [
  {
    id: 'email',
    label: 'Email',
    value: identity.email,
    href: `mailto:${identity.email}`,
    icon: Mail,
    copy: identity.email,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: identity.phone.display,
    href: identity.phone.href,
    icon: Phone,
    copy: identity.phone.display,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: identity.whatsapp.display,
    href: identity.whatsapp.href,
    icon: MessageCircle,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: identity.socials.linkedin.handle,
    href: identity.socials.linkedin.url,
    icon: Linkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: identity.socials.github.handle,
    href: identity.socials.github.url,
    icon: Github,
    external: true,
  },
];

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim()) errors.subject = 'Please add a subject.';

  if (!values.message.trim()) {
    errors.message = 'Please write a short message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).';
  }

  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12px] text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border bg-white px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink/30 transition duration-200 focus:outline-none focus:ring-4 focus:ring-brand-500/10';

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(null);

  const update = (key) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus('idle');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    const subject = encodeURIComponent(values.subject.trim());
    const body = encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    );

    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const copyValue = async (id, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      window.setTimeout(() => setCopied((current) => (current === id ? null : current)), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-24 border-t border-mist/70 bg-paper py-24 sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(108,59,219,0.10),transparent_68%)]" />
      </div>

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              id="contact-title"
              index={contact.index}
              eyebrow={contact.eyebrow}
              title={contact.title}
            />

            <Reveal delay={0.08}>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-ink/60 sm:text-base">
                {contact.copy}
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {CHANNELS.map((channel, index) => {
                const Icon = channel.icon;
                const isWide = channel.id === 'github';

                return (
                  <Reveal
                    key={channel.id}
                    delay={index * 0.05}
                    className={cn(isWide && 'sm:col-span-2')}
                  >
                    <div className="group relative flex h-full items-center gap-3 rounded-2xl border border-mist bg-white/70 p-3.5 transition duration-300 ease-premium hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-soft">
                      <a
                        href={channel.href}
                        {...(channel.external
                          ? { target: '_blank', rel: 'noreferrer noopener' }
                          : {})}
                        className="flex min-w-0 flex-1 items-center gap-3"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-mist bg-haze text-ink/55 transition duration-300 group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-700">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/35">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block truncate text-[13px] text-ink/70 transition-colors group-hover:text-ink">
                            {channel.value}
                          </span>
                        </span>
                      </a>

                      {channel.copy ? (
                        <button
                          type="button"
                          onClick={() => copyValue(channel.id, channel.copy)}
                          aria-label={`Copy ${channel.label.toLowerCase()}`}
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink/30 transition hover:bg-haze hover:text-brand-700"
                        >
                          {copied === channel.id ? (
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          )}
                        </button>
                      ) : (
                        <ExternalLink
                          className="h-3.5 w-3.5 shrink-0 text-ink/25 transition group-hover:text-brand-600"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal className="lg:col-span-6" delay={0.1} y={24}>
            <div className="relative overflow-hidden rounded-3xl border border-mist bg-white p-6 shadow-soft sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

              <div className="relative">
                <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-ink">
                  Send a message
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/50">
                  Messages open in your email client, pre-filled and ready to send.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="contact-name" label="Name" error={errors.name}>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={update('name')}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="Your name"
                        className={cn(inputClass, errors.name ? 'border-red-300' : 'border-mist focus:border-brand-400')}
                      />
                    </Field>

                    <Field id="contact-email" label="Email" error={errors.email}>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={update('email')}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        placeholder="you@example.com"
                        className={cn(inputClass, errors.email ? 'border-red-300' : 'border-mist focus:border-brand-400')}
                      />
                    </Field>
                  </div>

                  <Field id="contact-subject" label="Subject" error={errors.subject}>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={update('subject')}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      placeholder="What would you like to discuss?"
                      className={cn(inputClass, errors.subject ? 'border-red-300' : 'border-mist focus:border-brand-400')}
                    />
                  </Field>

                  <Field id="contact-message" label="Message" error={errors.message}>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={update('message')}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="A short note about your idea, project or opportunity."
                      className={cn(
                        inputClass,
                        'resize-none',
                        errors.message ? 'border-red-300' : 'border-mist focus:border-brand-400'
                      )}
                    />
                  </Field>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Button type="submit" variant="primary" size="md">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Send Message
                    </Button>

                    <span role="status" aria-live="polite" className="text-[12px] text-ink/45">
                      {status === 'sent' ? 'Your email client should open with the message ready.' : ''}
                    </span>
                  </div>
                </form>

                <div className="mt-6 flex items-center gap-2 border-t border-mist/80 pt-4">
                  <ArrowRight className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                  <p className="text-[12px] text-ink/40">
                    Prefer email directly? Write to{' '}
                    <a
                      href={`mailto:${identity.email}`}
                      className="font-medium text-brand-700 underline-offset-2 hover:underline"
                    >
                      {identity.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
