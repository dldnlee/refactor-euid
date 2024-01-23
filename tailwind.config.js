/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "#373f67",
        secondary: "#5a85ee",
        tertiary: "#719cf7",
        negative: "#e11900",
        background: "#ffffff",
      }
    },
  },
  plugins: [],
}

