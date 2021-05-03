module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {},
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  plugins: [],
}
