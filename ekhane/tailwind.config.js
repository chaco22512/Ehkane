module.exports = {
    mode: 'jit',
    theme: {
      extend: {
        fontFamily: {
         Lato: ["Lato", "sans-serif"],
        },
      },
    },
    purge: {
      enabled: true,
      content: ['./src/**/*.{html,ts}']
}
}
