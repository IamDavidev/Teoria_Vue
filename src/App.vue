<template>
<div class="app">
  <NewComponont msg="composition api en vue3"/> 
</div>
</template>

<script>
import NewComponont from './components/NewCompont.vue'
export default {
  name: 'App',
  components: {
    NewComponont,
  }
}
</script>

<style>
body{
  background:#000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  margin-top: 60px;
}
</style>
