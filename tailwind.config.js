/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fffffa',
      'purple': '#3f3cbb',
      'midnight': '#07004D',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'light-coral': '#ff7477',
    },},
  },
  plugins: [],
}
