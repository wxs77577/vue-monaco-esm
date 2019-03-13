module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        maxSize: 10 * 1024 * 1024
      }
    }
  }
};
