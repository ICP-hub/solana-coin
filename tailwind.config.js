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
        black:"#000000",
        purple:{
          line:"#9D6DFF"
        },
        brown:{
          light:"#7D7578",
          dark:"#494345"
        },
        blue:{
          darkCircle:"#150336",
          normalBG:"#24055A"
        }
      },
      fontFamily: {
        poppins: "Poppins",
        lato: "Lato",
        playfair: "Playfair Display",
      },
    },
  },
  plugins: [],
}

