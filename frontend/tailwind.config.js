/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9843",
        secondary: "#86A7FC",
        "light-primary": "#FFDD95",
        "light-secondary": "#3468C0",
      },
      fontFamily: {
        number: ["var(--number)"],
      },
    },
  },
  plugins: [],
};
