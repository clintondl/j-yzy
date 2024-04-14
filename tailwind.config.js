/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
