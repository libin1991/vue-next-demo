module.exports = {
  outputDir: 'docs',
  publicPath: '/vue-next-demo/',
  transpileDependencies: [/@vue\/.*/, 'vue-router', 'vue'],
  chainWebpack: config => {
    config.resolve.alias.set('@vue/reactivity', 'vue-reactivity-with-polyfill')
  }
}
