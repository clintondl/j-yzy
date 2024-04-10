/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        dms: ["DM Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "faint-60": "#FFFFFF99",
        "faint-50": "#ECF1F080",
        "faint-5": "#FFFFFF0D",
        "faint-25": "#FFFFFF40",
        faint: "#8D8D99",
        primary: "#007C29",
      },
    },
  },
  plugins: [],
};
