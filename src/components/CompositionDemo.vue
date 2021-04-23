<template>
  <div class="main">
    x ({{x}} - {{maxX}}):      <input v-model.number="x"      :max="maxX"      min="0"  type="range">
    y ({{y}} - {{maxY}}):      <input v-model.number="y"      :max="maxY"      min="0"  type="range">
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
import {ref, toRefs, } from 'vue'
import useSquare from '@/composables/Square'
export default {
  setup() {

    let svgWidth = ref(300)
    let svgHeight = ref(300)

    let square = useSquare(svgWidth, svgHeight)

    const keypressed = (evt) => {
      let direction = {
        up: false,
        down: false,
        left: false,
        right: false
      }
      const KEY_LEFT_ARROW = 37;
      const KEY_UP_ARROW = 38;
      const KEY_RIGHT_ARROW = 39;
      const KEY_DOWN_ARROW = 40;
      if(evt.keyCode == KEY_UP_ARROW) {
          direction.up = true;
      }
      if(evt.keyCode == KEY_DOWN_ARROW) {
          direction.down = true;
      }
      if(evt.keyCode == KEY_LEFT_ARROW) {
          direction.left = true;
      }
      if(evt.keyCode == KEY_RIGHT_ARROW) {
          direction.right = true;
      }
      square.move(direction)

    }
    document.addEventListener('keydown', keypressed);

    return {
      ...toRefs(square),
      svgWidth, svgHeight,
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
