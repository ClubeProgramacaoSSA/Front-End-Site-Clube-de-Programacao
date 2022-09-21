/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundColor:{
        default:'#c6c6c6',
      } 
    },
  },
  plugins: [],
}
