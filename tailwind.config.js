 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mercury': '#E8E8E8',
        'green-yellow': '#D2F038',
        'ocean': '#097980',
        'cloudy-blue': '#9DC9CC',
      },
      fontFamily: {
        sohne: ["Sohne Schmal", "sans-serif"],
        maison: ["Maison Neue", "sans-serif"],
        maisonLight: ["MaisonNeueLight", "sans-serif"],
        maisonMedium: ["MaisonNeueMedium", "sans-serif"],
        maisonBook: ["MaisonNeueBook", "sans-serif"],
        maisonDemi: ["MaisonNeueDemi", "sans-serif"],
      },
      lineHeight: {
        86 : '86%',
        125 : '125%'
      },
    backgroundSize :{
      'set' : '120% 870px',
      'set-md' : '120% 640px'
    }
  },
  plugins: [],
  }
}