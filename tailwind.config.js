/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#e0ecff',
          200: '#c6dcff',
          300: '#a3c4ff',
          400: '#7ba2ff',
          500: '#4d7bff',
          600: '#2b52ff', // User's requested color #0066ff matches closely with 600 or custom
          700: '#1a3eff',
          800: '#1736d7',
          900: '#1833aa',
          950: '#112267',
        }
      }
    },
  },
  plugins: [],
}
