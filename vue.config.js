module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`,
      },
    },
  },
};
