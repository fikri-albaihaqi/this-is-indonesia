/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
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
      animation: {
        bounceslow: 'bounceslow 3s ease-in-out infinite'
      },
      keyframes: {
        bounceslow: {
          '0%, 100%': {transform: 'translateY(-5px)'},
          '50%': {transform: 'none'}
        }
      }
    },
  },
  plugins: [],
}