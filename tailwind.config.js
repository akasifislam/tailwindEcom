module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
      container: {
        center: true,
        padding: '1rem'
      },
    extend: {
      colors:{
        'primary' : '#FD3D57',
        'purple' :  '#6D28D9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  