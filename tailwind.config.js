/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: { 'orange': '#FF8A00', 'black': '#090909' },
      dropShadow: {
        'nav': '0 35px 35px #FB930426',
      },
    },
  },
  plugins: [],
};
