import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts}', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#fffaf0',
          100: '#f8efdE',
          200: '#ecd9bd',
          900: '#191a17',
        },
        ink: {
          50: '#f4ead8',
          500: '#746657',
          800: '#2f261d',
          900: '#171511',
        },
        olive: {
          500: '#6f7a42',
          600: '#586333',
          700: '#414a28',
        },
        antique: {
          400: '#c58b4d',
          500: '#9d6834',
          600: '#7f431e',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'Noto Serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(72, 48, 25, 0.10)',
        'soft-dark': '0 18px 50px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  plugins: [],
} satisfies Config;
