/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#e8eff5',
          200: '#c5d4e3',
          300: '#9bb5d1',
          400: '#6b8cb8',
          500: '#4a6fa5',
          600: '#3a5a8a',
          700: '#2d4a6e',
          800: '#253d56',
          900: '#1f3347',
          950: '#15202e',
        },
        gold: {
          50: '#fef9e7',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
