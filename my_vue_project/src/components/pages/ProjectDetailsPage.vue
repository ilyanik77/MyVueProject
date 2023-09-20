<template>

    <div>
        <SiteHeader />
        <ProjectDetailsBanner />
        <div>
            <div :class="[$style.content, $style.container]">

                <div 
                    v-for="project in projects"
                    :key="project.id"
                    :class="$style.content__box"
                >

                    <h2 :class="$style.content__title">
                        {{project.title}}
                    </h2>
                    <p  :class="$style.content__text">
                        {{ project.text }}

                    </p> 
                    <img :src="project.imgSrc"  alt="">

                </div>
            </div>
        </div>
        
        
        <SiteFooter />
    </div>
    
    
</template>

<script>
import { mapState } from 'vuex'
import SiteHeader from '../blocks/SiteHeader.vue'
import ProjectDetailsBanner from '../ProjectDetailsBanner.vue'
import SiteFooter from '../blocks/SiteFooter.vue'

    export default {
        name: 'ProjectDetailsPage',
        

        components: {
            SiteHeader,
            ProjectDetailsBanner,
            SiteFooter
        },
        computed: {
            ...mapState(["projects"]),
            
        },
        
    }
</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.content {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 96px;

    &__box {

        display: flex;
        flex-direction: column;
        align-items: center;

        & img {

            width: 1201px;
            height: 799px;
            margin-bottom: 46px;
            border-radius: 50px;
        }
    }

    &__title {

        color: #292F36;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
        
    }

    &__text {

        width: 658px;
        
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        margin-bottom: 100px;
    }

    &__list {

        margin-top: 24px;
        margin-bottom: 44px;
        margin-left: 20px;
        
        & li::marker {

            color: #CDA274;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            letter-spacing: 0.4px;
            font-family: DM Serif Display;
        }
    }
}

</style>