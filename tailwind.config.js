/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Built around the logo navy (#1c3463 = navy-800).
        navy: {
          50: '#f0f4fa',
          100: '#dce4f1',
          200: '#bfcde5',
          300: '#93abd3',
          400: '#6283bd',
          500: '#4065a6',
          600: '#2f4f8b',
          700: '#274072',
          800: '#1c3463',
          900: '#142647',
          950: '#0b1730',
        },
        // Built around the logo green (#146131 = green-700).
        green: {
          50: '#effaf2',
          100: '#d8f3df',
          200: '#b4e6c3',
          300: '#82d29f',
          400: '#4cb776',
          500: '#279b57',
          600: '#1a7d44',
          700: '#146131',
          800: '#144f2b',
          900: '#124126',
          950: '#062413',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}
