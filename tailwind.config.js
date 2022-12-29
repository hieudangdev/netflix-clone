/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto"],
      },
      colors: {
        "title": "#ff7420",
        redcolor: '#eb3349',

      },


    },

  },
  plugins: [

  ],
}