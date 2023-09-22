module.exports = {
  purge: ["./src/*.js","./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.60rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    borderRadius:{
      'none' : '0',
      'sm': '0.125rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        pastel: {
          DEFAULT:'#0e1212',
          white: '#ffffff',
          dark: '#0e1212',
          darkest: '#1B161C',
          purple: '#7a4cd9',
          green: '#abd94c',
        },
      spacing: {
        md: '30px'
      },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
