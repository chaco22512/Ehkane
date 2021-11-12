module.exports = {
    mode: 'jit',
    theme: {
      extend: {
        fontFamily: {
         Lato: ["Lato", "sans-serif"],
        }
      },
      extend: {
        backgroundImage: {
         'hero-section': "url('src/assets/main_image.jpg')",
        }
      },
    },
    purge: {
      enabled: true,
      content: ['./src/**/*.{html,ts}']
}
}
