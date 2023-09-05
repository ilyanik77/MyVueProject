<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <siteHeader/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import siteHeader from './components/siteHeader.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    siteHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
