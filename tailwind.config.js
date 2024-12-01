/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{html,js,jsx}', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'serif']
      },
      colors: {
        'blue-text': "#2B283A"
      }
    },
  },
  plugins: [],
}

