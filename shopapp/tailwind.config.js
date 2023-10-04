/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Swash: ["'Berkshire Swash'", "cursive"],
        Sacramento: ["'Sacramento'", "cursive"],
        Oxanium: ["'Oxanium'", "cursive"],
        Aldrich: ["'Aldrich'", "sans-serif"],
        Phily: ["'Philosopher'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
