module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#3A3A3A",
        secondary: "#1A6EFC",
        accent: "#9A9A9A",
        white: {
          DEFAULT: "#FFF",
          200: "#F4F4F4",
          300: "#EAEAEA",
          400: "#D3D3D3",
          500: "#CBCBCB",
          800: "#9A9A9A",
        },
        black: {
          100: "#7C8288",
          200: "#76787A",
          300: "#616161",
          400: "#2F3133",
          700: "#313131",
        },
        blue: {
          200: "#CDF0FF",
          600: "#2C5DBD",
        },
        orange: {
          200: "#FFF7AD",
          600: "#DE8F31",
        },
      },
      fontFamily: {
        display: ["Spartan", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
