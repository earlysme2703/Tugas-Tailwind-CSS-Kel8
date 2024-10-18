/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./halaman/**/*.{html,js}",
    "./bar/**/*.{html,js}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}