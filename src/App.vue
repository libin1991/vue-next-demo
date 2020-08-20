<template>
  <div>
    <!-- <pre>{{$attrs}}</pre> -->
    <!-- <pre>{{$route}}</pre> -->
    <div id="nav">
      <router-link to="/" >/</router-link>
      <router-link v-for="conf in routes" :key="conf.path" :to="conf.path" >{{ conf.path }}</router-link>
    </div>
    <router-view/>
    <div id="modal-container"></div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import compositionConf from './router/composition'
import classicConf from './router/classic'
import transitionConf from './router/transition'

export default defineComponent({
  setup () {
    const routes = reactive(compositionConf.concat(classicConf, transitionConf))
    return {
      routes
    }
  }
})
</script>

<style lang="stylus">
#nav
  a
    display block
/* reset */
html body {
  font-size: 16px;
  line-height: unset;
  background: unset;
  color:unset;
  min-width: 0;
  max-width: none;
  margin: auto;
}
</style>
