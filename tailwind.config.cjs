const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "background-color": "var(--background-color)",
        "secondary-color": "var(--secondary-color)",
        "highlight-color": "var(--highlight-color)"
      }
    }, screens: {
      xs: '320px',
      md: '720px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
