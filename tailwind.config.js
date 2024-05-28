/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1170px",
    },
    fontFamily: {
      Grottesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      colors: {
        Blue: "#1E50FF",
        Yellow: "#FFC935",
        Purple: "#AA00FF",
        btnHover: "#0035EE",
        Grey: "#B1B5C1",
        dark: "#020005",
      },
    },
  },
  plugins: [],
};
