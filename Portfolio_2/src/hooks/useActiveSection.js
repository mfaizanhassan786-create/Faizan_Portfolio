import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view.
 * Uses real measured positions so it works with sticky headers and dynamic content.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '');
  const key = ids.join('|');

  useEffect(() => {
    const sectionIds = key.split('|').filter(Boolean);

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = sectionIds[0] ?? '';

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      });

      // Pin the last section when the page is scrolled to the very end.
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom && sectionIds.length) current = sectionIds[sectionIds.length - 1];

      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('hashchange', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('hashchange', update);
    };
  }, [key]);

  return active;
}
