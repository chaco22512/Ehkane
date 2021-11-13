module.exports = {
    mode: 'jit',
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
    purge: {
      enabled: true,
      content: ['./src/**/*.{html,ts}']
}
}
