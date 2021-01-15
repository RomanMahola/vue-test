<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo-binary.png">
    <Cookbook msg="This is cookbook for binary studio"/>
  </div>
</template>

<script>
import Cookbook from './components/Cookbook.vue'


export default {
  name: 'App',
  components: {
    Cookbook
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
