/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#050505',
      gray: '#1f1f1f',
      'light-gray': '#2d2d2d',
      'lighter-gray': '#3a3a3a',
      'even-lighter-gray': '#757575',
      'lightest-gray': '#e9e9e9',
      'off-white': '#f4f4f4',
      white: '#ffffff',
      purple: '#a445ed',
      red: '#ff5252',
    },
    extend: {
      dropShadow: {
        dropdown: '0px 0.13rem 1.875rem rgba(164, 69, 237,1)',
      },
    },
  },
  plugins: [],
};
