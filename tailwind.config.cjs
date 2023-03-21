/** @type {import('tailwindcss').Config} */

//@ts-ignore xd
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my: {
          black: "#030315",
          black2: "#070812",
          white: "#EFD1EF",
          blue: "#5C67F9",
        },
      },
      screens: {
        390: "390px",
        412: "412px",
        768: "768px",
        810: "810px",
        1280: "1280px",
        1366: "1366px",
        1440: "1440px",
        1536: "1536px",
        1600: "1600px",
        1920: "1920px",
        2560: "2560px",
        3840: "3840px",
      },
      fontFamily: {
        Goldman: ["Goldman", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        "3xl": "3px 3px 3px rgba(85, 98, 255, 1)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
