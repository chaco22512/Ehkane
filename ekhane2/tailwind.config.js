const { JsxEmit } = require('typescript');

module.exports = {
  prefix:'',
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
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
        'cream': '#DFDEC5',
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
