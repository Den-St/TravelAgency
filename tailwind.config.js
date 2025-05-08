/** @type {import('tailwindcss').Config} */
import {black,transparent,white} from "tailwindcss/colors";

export default {
  darkMode:"selector",
  content: ["./src/**/*.{tsx,jsx}"],
  theme: {
    colors:{
      black,
      transparent,
      white,
      "primary-dark":"#0B1D26",
      "primary-orange":"#EFB42D",
      "primary-gray":"#D0D0D0",
      "secondary-blue":"#102936",
      // "white":"#FFFFFF",
      // "black":"#000000"
    },
    extend: {},
  },
  plugins: [],
}

