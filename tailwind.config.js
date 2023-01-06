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
        "Orange": "#ff7420",
        'Red': '#F90321',
        'primary': '#131313',
        'secondary': '#000000'


      },


    },

  },
  plugins: [

  ],
}