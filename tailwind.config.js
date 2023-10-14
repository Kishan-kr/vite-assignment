/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFBFC',
        primary: '#0076CE',
        secondaryText: '#616161',
        warning: '#F66'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

