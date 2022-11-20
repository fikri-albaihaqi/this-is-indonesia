/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1E1E1E',
        'light': '#FFFAF0',
        'primary': '#DC3535'
      },
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
        'signika': ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}