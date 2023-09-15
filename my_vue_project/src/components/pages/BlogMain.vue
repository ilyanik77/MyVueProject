<template>
    <div>
        <SiteHeader />
        <BlogDetailsBanner />
        <BlogDetails />

        <SiteFooter/>

    </div>
</template>

<script>
import SiteHeader from '../blocks/SiteHeader.vue';
import SiteFooter from '../blocks/SiteFooter.vue';
import BlogDetailsBanner from '../BlogDetailsBanner.vue';
import BlogDetails from '../blocks/BlogDetails.vue'

    export default {
        name: 'BlogMain',
        components: {
            SiteHeader,
            SiteFooter,
            BlogDetailsBanner,
            BlogDetails,
            
        }
    }
</script>

<style lang="scss" scoped>

</style>