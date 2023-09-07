<template>
    <div>
        <SiteHeader/>
        <HomePageBanner/>
        <ProjectBlock/>
        <SiteCounter/>
        <ArticlesNewsBlock/>
        <SiteFooter/>

    </div>
</template>

<script>
import SiteHeader from '../blocks/SiteHeader.vue'
import HomePageBanner from '../HomePageBanner.vue'
import ProjectBlock from '../blocks/ProjectBlock.vue'
import SiteCounter from '../SiteCounter.vue'
import ArticlesNewsBlock from '../blocks/ArticlesNewsBlock.vue'
import SiteFooter from '../blocks/SiteFooter.vue'

    export default {
        name: 'HomePage',
        components: {
            SiteHeader,
            HomePageBanner,
            ProjectBlock,
            SiteCounter,
            ArticlesNewsBlock,
            SiteFooter,
        }
        
    }
</script>

<style lang="scss" module>

</style>