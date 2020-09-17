import 'vue-reactivity-polyfill'
import 'whatwg-fetch'
import { createApp } from 'vue'
import { createPolyfillPlugin } from 'vue3-plugin-polyfill'
import App from './App.vue'
// import router from './router'

const polyfillPlugin = createPolyfillPlugin()

const app = createApp(App, {
  myroot: 1,
  xRoot: 2
})

app.use(polyfillPlugin).mount('#app')
