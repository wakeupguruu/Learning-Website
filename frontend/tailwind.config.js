/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        lBackground: '#000000',
        lWhite: '#F1F2F6',
        DGray: {
          200: '#9ca3af',
          400: '#4b5563'
        },
        bBorder: '#1E1005',
        wBorder: '#F1F2F6',

        lGreen: {
          300: '#35775D',
          400: '#48C78E',
          500:'#5CAB8C',
          600:'#1c3e31',

        }
      },
    },
  },
  plugins: [],
}