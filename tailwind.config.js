/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: {
          DEFAULT: '#4A2F27',
          deep: '#36211B',
          dark: '#2A211E',
        },
        warmbrown: {
          DEFAULT: '#765548',
          light: '#947061',
        },
        honey: {
          DEFAULT: '#C98B4B',
          light: '#DDA66B',
          dark: '#AD7134',
        },
        cream: {
          DEFAULT: '#F7F0E6',
          soft: '#FCFAF7',
        },
        beige: {
          DEFAULT: '#E8D8C5',
          dark: '#D5C0A7',
        },
        espresso: '#2A211E',
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 24px 60px -15px rgba(42, 33, 30, 0.11)',
        'tactile': '0 10px 30px -8px rgba(74, 47, 39, 0.14)',
        'paper': '2px 4px 16px rgba(42, 33, 30, 0.07)',
      }
    },
  },
  plugins: [],
}
