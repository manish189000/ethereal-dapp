/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // borderColor: {
      //   gradient:
      //     "linear-gradient(to right, rgba(254, 27, 241, 1), rgba(11, 255, 255, 1))",
      // },
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
        arimo: ["Arimo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
