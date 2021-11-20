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
        'primary' : '#6D28D9',
        'purple' :  '#FD3D57'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  