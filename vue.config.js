module.exports = {
  transpileDependencies: [/@vue\/.*/],
  chainWebpack: config => {
    config
      .devtool(false)
    config.resolve.alias.set('@vue/reactivity', 'vue-reactivity-with-polyfill')
    config.optimization.minimizers.delete('terser')
  }
}
