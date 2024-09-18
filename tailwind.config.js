import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#0ea5e9',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#004493',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: '#15803d',
              foreground: '#ffffff',
            },
            warning: {
              DEFAULT: '#eab308',
              foreground: '#ffffff',
            },
            danger: {
              DEFAULT: '#dc2626',
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#0ea5e9',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#004493',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: '#15803d',
              foreground: '#ffffff',
            },
            warning: {
              DEFAULT: '#eab308',
              foreground: '#ffffff',
            },
            danger: {
              DEFAULT: '#dc2626',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
};
