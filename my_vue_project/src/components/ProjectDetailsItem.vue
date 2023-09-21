<template>
    <div>
        <div :class="[$style.content, $style.container]">

            

            <div 
                v-for="project in selectProject"
                :key="project.id"
                :class="$style.content__box"
                :title="project.title"
                :text="project.text"
                
            >

                <h2 :class="$style.content__title">
                    {{project.title}}
                </h2>
                <p  :class="$style.content__text">
                    {{ project.text }}
                </p> 
                
                <div :class="$style.content__slider">
                    <div 
                        :class="$style.content__slider__box"
                        :style="{ 'margin-left': '-' + 100 * indexPhoto + '%' }"
                    >
                        <div 
                            v-for="(image, index) in project.slider"
                            :key="index"
                            
                        
                        >
                        <img :src="image.img"/>
                    
                    
                    </div>
                    </div>
                    
                    
                </div>
                <div>
                    <button 
                        :class="$style.content__slider__button" 
                        @click="prev">
                        prev
                    </button>
                    <button 
                        :class="$style.content__slider__button" 
                        @click="next">
                        next
                    </button>
                </div>
                
                

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

    export default {
        name : 'ProjectDetailsItem',
        components: {

        },
        data() {
            return {
                indexPhoto: 0
            }
        }, 
                    
        methods: {
            next(indexPhoto) {
                if(this.indexPhoto >= 0 && this.indexPhoto < 2) {
                    
                    this.indexPhoto ++
                } else {
                    this.indexPhoto = 0
                }
                
                console.log(this.indexPhoto);
                return indexPhoto
            },
            prev(indexPhoto) {
                if(this.indexPhoto <= 0) {
                    
                    this.indexPhoto = 2
                } else {
                    this.indexPhoto --
                }
                
                console.log(this.indexPhoto);
                return indexPhoto
            },
        },

        computed: {
            ...mapState(["projects"]),
            selectProject() {

                return this.projects.filter((project) => project.id === Number(this.$route.params.id));
            },
        }
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

    &__slider {

        
        max-width: 1200px;
        overflow: hidden;

        &__box {

            display: flex;
        }

        &__button {

            padding: 10px 15px;
            font-size: 25px;
            margin-right: 10px;
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