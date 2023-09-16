<template>
  <div id="app">
    
    <!-- <HomePage/> -->
    <!-- <BlogPage/> -->
    <!-- <BlogMain/> -->
    <!-- <BlogMain/> -->
    <!-- <NotFound /> -->
    <ProjectPage />
    

  </div>
</template>

<script>

//import BlogPage from './components/pages/BlogPage.vue';
//import HomePage from './components/pages/HomePage.vue';
//import BlogDetailsPage from './components/pages/BlogDetailsPage.vue';
//import NotFound from './components/pages/NotFound.vue';
import ProjectPage from './components/pages/ProjectPage.vue'
 


export default {
  name: 'App',
  components: {
    //HomePage,
    //BlogPage,
    //BlogMain,
    //NotFound,
    ProjectPage
   
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
