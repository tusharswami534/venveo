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
         'light-red': '#FF4242',
       },
       fontFamily: {
         sohne: ["Sohne Schmal", "sans-serif"],
         maisonLight: ["maisonLight", "sans-serif"],
         maisonRegular: ["maisonRegular", "sans-serif"],
         maisonMedium: ["maisonMedium", "sans-serif"],
         maisonBold: ["maisonBold", "sans-serif"],
       },
       lineHeight: {
         86: '86%',
         125: '125%'
       },
       backgroundSize: {
         'set': '120% 870px',
         'set-md': '120% 640px'
       },
       backgroundImage: {
         'amber-book': "url('/public/assets/images/webp/satisfied-sky-bg-image.webp')",
         'farnsworth': "url('/public/assets/images/webp/satisfied-green-bg-image.webp')",
         'us-lbm': "url('/public/assets/images/webp/satisfied-yellow-bg-image.webp')"

       }
     },
     plugins: [],
   }
 }