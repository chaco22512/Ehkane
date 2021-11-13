const { JsxEmit } = require('typescript');

module.exports = {
  prefix:'',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content:[
      './src/**/*.{html,ts}',
    ]
  },
  theme: {
    extend: {
      fontFamily: {
       Lato: ["Lato", "sans-serif"],
      }
    },
    extend: {
      colors: {
        'cream': '#CECDAD ',
      }
    },
    extend: {
      backgroundImage: {
       'hero-image': "url('src/assets/main_image.jpg')",
      }
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
