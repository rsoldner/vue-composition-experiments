<template>
<div>
  <nav>
    <ul>
      <li @click="menu(0)"><div>Canvas</div></li>
      <li @click="menu(1)"><div>Vue3 Composition</div></li>
    </ul>

  </nav>
  <Game v-if="menuSelect==0"  />
  <compositionDemo v-else  />
</div>
</template>

<script>
import Game from './components/CanvasGame.vue'
import compositionDemo from './components/CompositionDemo.vue'

export default {
  name: 'App',
  components: {
    Game,
    compositionDemo
  },
  data: () => {
    return {
      menuSelect: 0

    }
  },
  methods: {
    menu: function (index) {
      this.menuSelect = index
    } 
  }

}
</script>

<style>
div nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

div nav li {
  float: left;
}

div nav li div {
  display: block;
  padding: 8px;
  background-color: #dddddd;
}
body {
  background-color: cadetblue;
}
</style>

