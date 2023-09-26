<template>
    <div>
        <SiteHeader />
        <ProjectBanner />
        <ProjectPageBox />

        <SiteFooter />

    </div>
</template>

<script>

import SiteHeader from '../blocks/SiteHeader.vue'
import SiteFooter from '../blocks/SiteFooter.vue'
import ProjectBanner from '../ProjectBanner.vue'
import ProjectPageBox from '../blocks/ProjectPageBox.vue'


    export default {
        name : 'ProjectPage',
        components: {
            SiteHeader,
            SiteFooter,
            ProjectBanner,
            ProjectPageBox,
            
        },
        computed: {
            
            
        },
    }
</script>

<style lang="scss" module>



</style>