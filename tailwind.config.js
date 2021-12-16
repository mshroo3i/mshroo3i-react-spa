const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

const scrollbarHide = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      /* Firefox */
      'scrollbar-width': 'none',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }
  })
})


module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.stone,
        teal: colors.teal,
        'customred': '#A53847',
        'customorange': '#DFA84B',
        'customcyan': '#73A7A0',
        'customgreen': '#A4C685',
        'customgray': '#616161'
      },
      fontFamily: {
        tajawal: ["Tajawal", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    scrollbarHide
  ],
}
