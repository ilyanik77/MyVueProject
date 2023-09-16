<template>
    <div>
        <SiteHeader />
        <ProjectBanner />
        <div :class="[$style.project__box, $style.container]">
            <ProjectItem 
                        v-for="project in projects"
                        :key="project.id"
                        :src="project.imgSrc"
                        :title="project.title"
                        :section="project.section"/>
        </div>

        <SitePagination />
        <SiteFooter />

    </div>
</template>

<script>
import { mapState } from "vuex";
import SiteHeader from '../blocks/SiteHeader.vue';
import SiteFooter from '../blocks/SiteFooter.vue';
import ProjectBanner from '../ProjectBanner.vue';
import ProjectItem from '../ProjectItem.vue'
import SitePagination from '../SitePagination.vue';

    export default {
        name : 'ProjectPage',
        components: {
            SiteHeader,
            SiteFooter,
            ProjectBanner,
            ProjectItem,
            SitePagination
        },
        computed: {
            ...mapState(["projects", "buttons"]),
            
        },
    }
</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.project__box {

    display: grid;
    grid-template-columns: repeat(2, 1fr);

}

</style>