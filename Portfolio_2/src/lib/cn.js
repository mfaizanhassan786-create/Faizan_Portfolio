/**
 * Joins conditional class names. Falsy values are ignored.
 */
export function cn(...values) {
  return values.filter(Boolean).join(' ');
}
