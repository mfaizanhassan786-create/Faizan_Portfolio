import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';
import useScrollLock from '../../hooks/useScrollLock';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible dialog: portal, scroll lock, focus trap, Escape to close,
 * click-outside to dismiss and graceful reduced-motion behaviour.
 */
export default function Modal({
  open,
  onClose,
  children,
  labelledBy,
  describedBy,
  panelClassName,
  closeLabel = 'Close dialog',
}) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const reduceMotion = useReducedMotion();

  useScrollLock(open);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current?.();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusables = Array.from(panelRef.current.querySelectorAll(FOCUSABLE)).filter(
        (element) => element.offsetParent !== null
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 80);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimer);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open]);

  if (typeof document === 'undefined') return null;

  const duration = reduceMotion ? 0 : 0.32;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-y-auto overscroll-contain"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <div
            className="fixed inset-0 bg-ink/65 backdrop-blur-[3px]"
            onClick={() => onCloseRef.current?.()}
            aria-hidden="true"
          />

          <div className="relative flex min-h-full items-start justify-center p-4 sm:p-8">
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={labelledBy}
              aria-describedby={describedBy}
              className={cn(
                'relative w-full rounded-3xl border border-white/60 bg-paper shadow-[0_40px_120px_-40px_rgba(17,17,24,0.5)]',
                panelClassName
              )}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 26, scale: reduceMotion ? 1 : 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : 14, scale: reduceMotion ? 1 : 0.99 }}
              transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => onCloseRef.current?.()}
                aria-label={closeLabel}
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-mist bg-white/95 text-ink/55 transition duration-300 hover:border-brand-300 hover:text-brand-700"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
              {children}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
