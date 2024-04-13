/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        footerBG:"#27262E",
        white:"#FFFFFF",
        black:"#000000"
      }
    },
  },
  plugins: [],
}

