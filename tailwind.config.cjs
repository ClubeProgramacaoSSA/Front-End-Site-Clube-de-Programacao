/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    screens: {
      "xsm" : {"max" : "575.98px"},
      "sm": {"min": "576px", "max": "767.98px"},
      "md": {"min": "768px", "max": "991.98px"},
      "lg": {"min": "992px", "max": "1199.98px"},
      "xl": {"min": "1200px"}
    },
    extend: {
      colors: {
        "orange": "#FB9304",
        "purple": "#AD00FF"
      }
    },

  },
  plugins: [],
}
