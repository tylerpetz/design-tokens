module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // design tokens has 000 and 050, as well as 800 that is just black, let's remove those and start at 100
      white: '#ffffff',
      black: '#000000',
      slate: {
        100: '#f6f7fb',
        200: '#dee0e8',
        300: '#b5c3ce',
        400: '#aaacb6',
        500: '#6e717e',
        600: '#556470',
        700: '#474b5b',
        800: '#282b39',
      },
      blue: {
        100: '#f2f6ff',
        200: '#bdd1f8',
        300: '#81a9f5',
        400: '#5489ee',
        500: '#2a69e5',
        600: '#1a55c7',
        700: '#143d8d',
        800: '#0a2559'
      },
      red: {
        100: '#fceded',
        200: '#fcd5d9',
        300: '#fdb0b8',
        400: '#f66978',
        500: '#e24b5b',
        600: '#cf2d3e',
        700: '#900b19',
        800: '#4a0209'
      },
    },
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      global: ['Poppins', 'serif'],
    },
    spacing: {
      0: '0',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      64: '4rem',
      80: '5rem',
      // widths ? 
      // 576: '',
      // 768: '',
      // 960: '',
      // 1152: ''
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
