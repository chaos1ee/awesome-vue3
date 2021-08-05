module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#ff5a00',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
    orange: {
      50: '#ffeae7',
      100: '#ffd5ce',
      200: '#ffc0b5',
      300: '#ffa999',
      400: '#ff927b',
      500: '#ff5a00',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      orange: {
        50: '#ffeae7',
        100: '#ffd5ce',
        200: '#ffc0b5',
        300: '#ffa999',
        400: '#ff927b',
        500: '#ff5a00',
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
