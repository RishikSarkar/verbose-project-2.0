/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  options: {
    safelist: ['dark'],
  },

  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
