/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto"],
      },
      colors: {
        '"blue- 900"': '#41e30'
      }

    },

  },
  plugins: [],
}