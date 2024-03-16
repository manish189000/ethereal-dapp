/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rgba-11": "rgba(11, 255, 255, 1)",
        "rgba-254": "rgba(254, 27, 241, 1)",
        "rgba-009": "rgba(254, 27, 241,0.09)",
      },
      fontFamily: {
        bakbak: ["Bakbak One", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lw: ["Leelawadee UI Bold"],
      },
      screens: {
        "2xl": { max: "1400px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        lg2: { max: "1075px" },
        air: { max: "820px" },
        md: { max: "767px" },
        md1: { max: "766px" },
        sm: { max: "639px" },
        m480: { max: "480px" },
        s360: { max: "360px" },
      },
    },
  },
  plugins: [],
};
