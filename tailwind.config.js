/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {},
      colors: {
        primary: "#4383E5",
        dark: "#132743",
        secondary: "#FBB52D",
        "nav-bg": "#FFFFFFCC",
        gray: "#787E88",
        "gray-light": "#F8F8F8",
        "footer-bg": "#050E1B",
      },
    },
  },
  plugins: [],
};
