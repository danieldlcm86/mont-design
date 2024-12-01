/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Agregas Montserrat
      },
      colors: {
        goldMont: '#bcac69', // GoldBase
        goldDark : '#2d291e',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

