/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'instagram': {
          blue: '#0095F6',
          red: '#ED4956',
          gray: '#8E8E8E',
          border: '#DBDBDB',
        }
      }
    },
  },
  plugins: [],
}