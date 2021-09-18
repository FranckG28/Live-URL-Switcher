const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './views/**/*.ejs',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray": colors.warmGray
      },
      fontFamily: {
        sahb: [
          'Urbanist',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
