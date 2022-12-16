const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gmustard: '#F8E9A1',
        gorange: '#F76C6C',
        gskyblue: '#A8D0E6',
        gblue: '#374785',
        gdarkblue: '#24305E',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
