/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
      OpenSans: ["OpenSans"],
      Jost: ["Jost"],
    },
    extend: {
      colors: {
        merah: "#5D2510",
        krim: "#EDE1D2",
      },
    },
  },
  plugins: [],
}

