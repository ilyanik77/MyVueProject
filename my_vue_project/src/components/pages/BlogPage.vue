<template>
    <div>
        <SiteHeader/>
        <SiteBanner/>
        <SiteBlog/>
        <SiteFooter/>


    </div>
</template>

<script>
import { mapState } from "vuex"
import SiteHeader from '../blocks/SiteHeader.vue';
import SiteBanner from '../SiteBanner.vue';
import SiteBlog from '../blocks/SiteBlog.vue';
import SiteFooter from '../blocks/SiteFooter.vue';

    export default {
        name: 'BlogPage',
        components: {

            SiteHeader,
            SiteBanner,
            SiteBlog,
            SiteFooter
        },
        computed: {
            ...mapState(["articles"]),
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>