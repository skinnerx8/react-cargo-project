/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    input: {
      p: "4",
      // rest of the breakpoints
    },
    extend: {
      backgroundImage: theme => ({
       'hero': "url('/src/assets/ship.jpg')",
      })
    },
  },
  plugins: [],
});
