import { useEffect, useState } from 'react';

/**
 * Rotating typewriter effect.
 * Pass `enabled = false` (e.g. for reduced motion) to render a static label instead.
 */
export default function useTypewriter(
  words,
  { typeSpeed = 62, deleteSpeed = 28, holdTime = 1500, enabled = true } = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(enabled ? '' : words[0] ?? '');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    if (!enabled) {
      setText(words[0] ?? '');
      return undefined;
    }

    const word = words[wordIndex % words.length] ?? '';
    let timer;

    if (phase === 'typing') {
      if (text.length < word.length) {
        timer = window.setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
      } else {
        timer = window.setTimeout(() => setPhase('deleting'), holdTime);
      }
    } else if (text.length > 0) {
      timer = window.setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed);
    } else {
      timer = window.setTimeout(() => {
        setWordIndex((index) => (index + 1) % words.length);
        setPhase('typing');
      }, 260);
    }

    return () => window.clearTimeout(timer);
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, holdTime, enabled]);

  return text;
}
