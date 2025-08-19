import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow:{
      },
      colors: {
        color1:"#FF8300",
        color2:"#EBF1F7",
        color3:"#BFD7ED",
        color4:"#878383",
        mywhite:"#FAFAFA",
        myblack:"#1D1D1D"
      },
    },
  },
  plugins: [],
};
