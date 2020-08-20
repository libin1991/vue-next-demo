import { createApp, getCurrentInstance, defineComponent, toRaw } from 'vue'
import App from './App.vue'
import router from './router'

function def (obj: any, key: string, attrs: object) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    ...attrs
  })
}

function handlePolyfillProxy (instance = getCurrentInstance() as any, ...props: object[]) {
  const proxy = instance.proxy
  const getter = proxy['___@getter___']
  const setter = proxy['___@setter___']
  const target = toRaw(proxy)
  if (getter) {
    props.forEach((prop) => {
      Object.keys(prop).forEach((k) => {
        def(proxy, k, {
          get: getter.bind(target, k),
          set: setter.bind(target, k)
        })
      })
    })
    return true
  }
  return false
}

const myMixin = defineComponent({
  beforeCreate () {
    const instance = getCurrentInstance() as any
    // todo publicPropertiesMap
    handlePolyfillProxy(instance, instance.props, instance.setupState, instance.appContext.config.globalProperties)
  },
  created () {
    const instance = getCurrentInstance() as any
    handlePolyfillProxy(instance, instance.data, instance.ctx) && (
      // force call effects agagin // to collect deps
      instance.effects && instance.effects.forEach((effect: Function) => {
        effect()
      })
    )
  }
})

const app = createApp(App, {
  myroot: 1,
  xRoot: 2
})

app.mixin(myMixin).use(router).mount('#app')
