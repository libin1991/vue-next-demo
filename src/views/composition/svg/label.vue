<template>
  <text :x="point.x" :y="point.y">{{stat.label}}</text>
</template>
<script>
import { defineComponent, computed } from 'vue'

export function valueToPoint (value, index, total) {
  const x = 0
  const y = -value * 0.8
  const angle = Math.PI * 2 / total * index
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  const tx = x * cos - y * sin + 100
  const ty = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}

export default defineComponent({
  props: {
    stat: Object,
    index: Number,
    total: Number
  },
  setup (props) {
    return {
      point: computed(() => valueToPoint(
        +props.stat.value + 10,
        props.index,
        props.total
      ))
    }
  }
})
</script>
