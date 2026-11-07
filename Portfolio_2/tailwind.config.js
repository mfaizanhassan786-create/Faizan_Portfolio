/**
 * Full 0–100 opacity scale so every `/xx` colour modifier used in the UI
 * resolves without arbitrary brackets.
 */
const opacityScale = Object.fromEntries(
  Array.from({ length: 101 }, (_, index) => [index, String(index / 100)])
);

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      opacity: opacityScale,
      colors: {
        ink: '#111118',
        paper: '#FFFFFF',
        haze: '#F8F8FC',
        mist: '#E8E8F0',
        brand: {
          DEFAULT: '#6C3BDB',
          50: '#F5F1FF',
          100: '#ECE3FF',
          200: '#DCCEFF',
          300: '#C2AAFB',
          400: '#A483F5',
          500: '#8659EC',
          600: '#6C3BDB',
          700: '#582CB6',
          800: '#452391',
          900: '#31186B',
        },
        accent: {
          DEFAULT: '#3478F6',
          50: '#EEF4FF',
          100: '#DCE9FF',
          200: '#BBD3FF',
          300: '#8FB5FF',
          400: '#5F95F9',
          500: '#3478F6',
          600: '#2361DA',
          700: '#1B4CAE',
          800: '#163C88',
          900: '#112E68',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17, 17, 24, 0.04), 0 14px 40px -24px rgba(17, 17, 24, 0.22)',
        lift: '0 2px 4px rgba(17, 17, 24, 0.04), 0 28px 60px -28px rgba(17, 17, 24, 0.28)',
        brand: '0 18px 44px -20px rgba(108, 59, 219, 0.55)',
        panel: '0 1px 0 rgba(255, 255, 255, 0.6) inset, 0 30px 70px -40px rgba(17, 17, 24, 0.35)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        caret: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        caret: 'caret 1.1s steps(1, end) infinite',
        drift: 'drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
