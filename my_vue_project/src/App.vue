<template>
  <div id="app">
    
    

    <router-view />
    

  </div>
</template>

<script>




export default {
  name: 'App',
  components: {
    
   
  },
  created () {
    this.$router.push({ name: 'homePage' })
    //this.setPaymentsListData(this.fetchData())
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

.container {
    max-width: 1200px;
    margin: 0 auto
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>
