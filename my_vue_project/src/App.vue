<template>
  <div id="app">
    
    <SiteHeader/>
    <SiteBanner/>
    <SiteBlog/>
    <!-- <BlogArticle/> -->
    <!-- <LatestPost/> -->

  </div>
</template>

<script>

import SiteHeader from '@/components/SiteHeader.vue'
import SiteBanner from '@/components/SiteBanner.vue'
import SiteBlog from '@/components/SiteBlog.vue'
//import BlogArticle from './components/BlogArticle.vue'
//import LatestPost from './components/LatestPost.vue'

export default {
  name: 'App',
  components: {
    
    SiteHeader,
    SiteBanner,
    SiteBlog,
    //BlogArticle,
    //LatestPost
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
