<template>

    <div>
        <SiteHeader />
        <ProjectDetailsBanner />
        <ProjectDetailsItem />
        <SiteFooter />
    </div>
    
    
</template>

<script>
import SiteHeader from '../blocks/SiteHeader.vue'
import ProjectDetailsBanner from '../ProjectDetailsBanner.vue'
import ProjectDetailsItem from '../ProjectDetailsItem.vue'
import SiteFooter from '../blocks/SiteFooter.vue'

    export default {
        name: 'ProjectDetailsPage',
        

        components: {
            SiteHeader,
            ProjectDetailsBanner,
            ProjectDetailsItem,
            SiteFooter
        },
    
        
        
    }
        
    
</script>

<style lang="scss" module>



</style>