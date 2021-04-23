<template>
  <div >
    <canvas ref="gameCanvas" width="800" height="600"></canvas>
  </div>
</template>

<script>
// import * as Input from '@/assets/js/Input'
import graphicsCommon from '@/assets/js/GraphicsCommon'

export default {
  name: 'CanvasGame',
  data: () => {
    return {
      canvasContext: null,
      graphics: null,
      x: 200,
      y: 200,
    }
  },
  mounted () {
    this.canvasContext = this.$refs.gameCanvas.getContext('2d');

    let framesPerSecond = 30;
    setInterval(this.draw, 1000/framesPerSecond)

    // Input.setupInput();

  },
  methods: {
    draw() {
      let obj = new graphicsCommon(this.canvasContext);

      obj.colorRect(0,0, 800,600, 'black')
      obj.colorCircle(this.x,this.y, 20, 'blue');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
