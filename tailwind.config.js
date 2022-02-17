const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      xxxs: "280px",
      xxs: "320px",
      xs: "360px",
      large: "1200px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
