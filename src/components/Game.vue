<template>
  <div >
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
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      x: 10,
      y: 20,
      width: 150,
      height: 100,
      svgWidth: 300,
      svgHeight: 300
    }
  },
  computed: {
    maxX() {
      return this.svgWidth - this.width
    },
    maxY() {
      return this.svgHeight - this.height
    },
    maxWidth() {
      return this.svgWidth - this.x
    },
    maxHeight() {
      return this.svgHeight - this.y
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
