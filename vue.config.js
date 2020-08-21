module.exports = {
  outputDir: 'docs',
  publicPath: '/vue-next-demo/',
  transpileDependencies: [/@vue\/.*/, 'vue-router'],
  chainWebpack: config => {
    config
      .devtool(false)
    config.resolve.alias.set('@vue/reactivity', 'vue-reactivity-with-polyfill')
    config.optimization.minimizers.delete('terser')
  }
}
