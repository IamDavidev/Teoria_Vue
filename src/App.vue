<template>
<div class="app">
  <NewComponont msg="composition api en vue3" hks="Hooks del ciclo de vida "/> 
  <hr>
  <Use-store />
<hr>

</div>
</template>

<script>
import NewComponont from './components/NewCompont.vue'
import UseStore from './components/UseStore.vue'
export default {
  name: 'App',
  components: {
    NewComponont,
    UseStore,
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
hr{
  background:#00ffff;
  height:5px;
  margin:10px;

}
</style>
