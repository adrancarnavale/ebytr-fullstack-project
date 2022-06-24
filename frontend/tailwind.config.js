/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      'nord-dark-1': '#242933',
      'nord-dark-2': '#2E3440',
      'nord-dark-3': '#3B4252',
      'nord-dark-4': '#434C5E',
      'nord-dark-5': '#4C566A',

      'nord-light-1': '#D8DEE9',
      'nord-light-2': '#E5E9F0',
      'nord-light-3': '#ECEFF4',
    },
    fontFamily: {
      sans: ['Rubik', 'Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
