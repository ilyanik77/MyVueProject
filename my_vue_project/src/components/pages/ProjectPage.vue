<template>
    <div>
        <SiteHeader />
        <ProjectBanner />
        <ProjectPageBox />

        <SitePagination />
        <SiteFooter />

    </div>
</template>

<script>
import { mapState } from "vuex"
import SiteHeader from '../blocks/SiteHeader.vue'
import SiteFooter from '../blocks/SiteFooter.vue'
import ProjectBanner from '../ProjectBanner.vue'
import ProjectPageBox from '../blocks/ProjectPageBox.vue'
import SitePagination from '../SitePagination.vue'

    export default {
        name : 'ProjectPage',
        components: {
            SiteHeader,
            SiteFooter,
            ProjectBanner,
            ProjectPageBox,
            SitePagination
        },
        computed: {
            ...mapState(["projects", "buttons"]),
            
        },
    }
</script>

<style lang="scss" module>



</style>