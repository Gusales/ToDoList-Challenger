import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        blue: '#4EA8DE',
        'blue-dark': '#1E6F9F',
        purple: '#8284FA',
        'purple-dark': '#5E60CE',
        gray: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        danger: '#E25858',
      },
      boxShadow: {
        purple: '0 0 0 2px #5E60CE',
        none: '0 0 0 0',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
}

export default config
