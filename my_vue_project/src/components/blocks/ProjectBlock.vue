<template>
    
    <section :class="$style.project">
        <div :class="[$style.project__content, $style.container]">
            <h2 :class="$style.project__content__title">
                Follow Our Projects
            </h2>
            <p :class="$style.project__content__text">
                It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.
            </p>

            <div :class="$style.project__content__items">
                <ProjectItem 
                            v-for="(item, index) in items"
                            :key="index"
                            :src="item.src"
                            :title="item.title"
                            :text="item.text"
                />

            </div>

        </div>
        

        
    </section>

</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
import { mapState } from "vuex";
    export default {
        name: 'ProjectBlock',
        props: {
            src: String,
            title: String,
            text: String


        },
        components: {
            ProjectItem,
        },


        computed: {
            ...mapState(["items"]),
            
        },
    }

</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.project {

&__content {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 97px;

    &__title {

        color: #292F36;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%;
        letter-spacing: 1px;
    }

    &__text {

        margin-bottom: 93px;
        width: 737px;
        color: #4D5053;
        text-align: center;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__items {

        display: grid;
        box-sizing: border-box;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr );
        row-gap: 56px;
        column-gap: 104px;

        

    }
}
}

</style>