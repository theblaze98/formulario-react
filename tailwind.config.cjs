/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fondo': 'url(./src/assets/fondo.jpg)'
      })
    },
  },
  plugins: [],
}
