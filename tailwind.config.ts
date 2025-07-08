import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': 'var(--color-midnight-blue)',
        'royal-gold': 'var(--color-royal-gold)',
        'porcelain': 'var(--color-porcelain)',
        'carbon-black': 'var(--color-carbon-black)',
        'dove-grey': 'var(--color-dove-grey)',
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
        'background': 'var(--color-background)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
      },
      fontFamily: {
        'heading': 'var(--font-heading)',
        'body': 'var(--font-body)',
        'numeric': 'var(--font-numeric)',
      },
      maxWidth: {
        'container': 'var(--container-max-width)',
      },
      spacing: {
        'gutter': 'var(--grid-gutter)',
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
      },
      boxShadow: {
        'hover': 'var(--shadow-hover)',
        'card': 'var(--shadow-card)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'base': 'var(--transition-base)',
      },
      animation: {
        'fade-in': 'fadeIn var(--transition-base) ease-out',
        'slide-up': 'slideUp var(--transition-base) ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 