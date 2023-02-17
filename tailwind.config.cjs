const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color-1': '#18293c',
      },
    },
    screens: {
      xs: '100px',
      md: '720px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
