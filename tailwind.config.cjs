/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'fondo': 'url(/assets/fondo.jpg)'
      })
    },
  },
  plugins: [],
}
