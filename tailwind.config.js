/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'instagram-gray': '#EFEFEF',
    },
   
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
