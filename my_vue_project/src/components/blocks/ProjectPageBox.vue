<template>
    

    <div :class="[$style.project__box, $style.container]">
        
        <ProjectBoxItem 
                        v-for="project in projects"
                        :key="project.id"
                        :title="project.title"
                        :src="project.imgSrc"
                        :section="project.section"/>

    </div>
</template>

<script>
import { mapState } from 'vuex' 
import ProjectBoxItem from '../ProjectBoxItem.vue';

    export default {
        name: 'ProjectPageBox',
        components: {

            ProjectBoxItem,
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
    gap: 30px;

}

</style>