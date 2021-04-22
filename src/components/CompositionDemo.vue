<template>
  <div class="main">
    x:      <input v-model.number="x"      :max="maxX"      min="0"  type="range">
    y:      <input v-model.number="y"      :max="maxY"      min="0"  type="range">
    width:  <input v-model.number="width"  :max="maxWidth"  min="10" type="range">
    height: <input v-model.number="height" :max="maxHeight" min="10" type="range">

    <svg :width="svgWidth" :height="svgHeight">
      <rect
        :x="x"
        :y="y"
        :width="width"
        :height="height"
      />
    </svg>
  </div>
</template>

<script>
import {ref, computed} from 'vue'
export default {
  setup() {
    let x = ref(10)
    let y = ref(10)
    let width = ref(150)
    let height = ref(100)
    let svgWidth = ref(300)
    let svgHeight = ref(300)

    const maxX = computed(() => {
      return svgWidth.value - width.value
    })
    const maxY = computed(() => {
      return svgHeight.value - height.value
    })
    const maxWidth = computed(() => {
      return svgWidth.value - x.value
    })
    const maxHeight = computed(() => {
      return svgHeight.value - y.value
    })

    return {
      x, y, width, height, svgWidth, svgHeight,
      maxX, maxY, maxWidth, maxHeight
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 50px;
}
svg {
  display: block;
  margin-top: 20px;
  background: #35495E;
}
rect {
  fill: #7DC798;
}
</style>
