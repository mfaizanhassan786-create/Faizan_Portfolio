import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered reveal. Falls back to a plain element when the user
 * prefers reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  duration = 0.7,
  once = true,
  amount = 0.25,
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
