/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      "2lg": "1280px", //macbook
      xl: "1440px",
    },
    fontFamily: {
      Poppins: ["Poppins"],
      OpenSans: ["OpenSans"],
      Jost: ["Jost"],
    },
    extend: {
      colors: {
        merahtua: "#5D2510",
        merah: "#8A1616",
        krim: "#EDE1D2",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

