/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Poppins", 
    },
    extend: {
      colors:{
        primary: '#ff7a00',
        grey: '#e2e2e2',

        accent: '#f2f2f2'
      }
    },
  },
  plugins: [
  ],
}

