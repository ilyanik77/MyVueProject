<template>
    <div>
        
        <div :class="[$style.box__button, $style.container]">
            <div
                v-for="button in buttons"
                :key="button.id"
                :class="$style.box__button__link"
                
                :tag="button.tag"
            >
                {{ button.tag }}
            </div>

        </div>


        <div :class="[$style.project__box, $style.container]">

            

            <div 
                :class="$style.item"
                v-for="project in currentProductList"
                :key="project.id"
            >

                <img :class="$style.item__img" :src="project.imgSrc" alt="photo">
                <div :class="$style.item__description">
                    <div :class="$style.item__description-text">
                        <h3 :class="$style.item__title">
                            {{ project.title }}
                        </h3>
                        <p :class="$style.item__text">
                            {{ project.section }}
                        </p>
                    </div>
                    <router-link :to="`/ProjectPage/ProjectDetailsPage/${project.id}`">
                        <img src="@/assets/_.svg" alt="">
                    </router-link>
                
                

                </div>

                    
            </div>

        </div>

        <div :class="$style.project__box__link">
            <router-link
                v-for="page in getPageCount"
                :key="page"
                :to="`/ProjectPage/${page}`"
                
            >
                {{ page }}
            
                

            </router-link>

        </div>
           

    </div>
    
    
    
</template>

<script>
import { mapState } from 'vuex' 



    export default {
        name: 'ProjectPageBox',
        props: {
            
        },
        data() {
            return {
                currentPage: 1
                
            }
        },
        components: {

        

        },
        getters: {
            
        },
        computed: {
            ...mapState(["projects", "buttons", "itemsPerPage", "pageCount", "projectCount"]),
            
            currentProductList() {
                const {currentPage, itemsPerPage} = this;
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                return this.projects.slice(startIndex, endIndex)
            },
            getPageCount() {

                let {pageCount, itemsPerPage} = this;
                
                pageCount = Math.ceil(this.getProjectsLength / itemsPerPage)
        
                return pageCount
            },
            
            
            getProjectsLength()  {
                let projectCount = this.$store.state.projectCount;
                projectCount = Object.keys( this.$store.state.projects ).length
                return projectCount
                
            },

            // getCurrentPage() {

            //     let {currentPage} = this;

            //     //pageCount = Math.ceil(this.getProjectsLength / itemsPerPage)
            //     currentPage = this.$route.params.page

            //     return currentPage
            // },
        
        },
        watch: {
            $route(to, from) {
                const { page } = this.$route.params;
                if (page) this.currentPage = page;
                    console.log(to, from);
                    // console.log(page);
                    // console.log(this.currentPage);
                
            }
            
        },
        mounted() {
            console.log(this.$route);

        },
        methods: {
            
        }
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
    grid-auto-flow: row;
    margin-bottom: 61px;

    &__link {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 200px;

        & a {

            color: #292F36;
            font-family: Jost;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 24px */
            text-transform: capitalize;

            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #cda274;
            background: white;
            width: 52px;
            height: 52px;
            border-radius: 50%;

            &:active {

                background-color: #F4F0EC;
            }

        
        }
    }

    

}

.box__button {

    display: flex;
    width: 880px;
    justify-content: center;
    margin-bottom: 61px;
    border-radius: 18px;
    border: 1px solid #CDA274;

    &__link {

        border-radius: 18px;
        padding: 26px 67px;
        background-color: #fff;
        border: 1px solid #FFF;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;

        &:active {

            background-color: #CDA274;
        }
    
    }

}

.item {

width: 600px;
padding: 10px;
box-sizing: border-box;

&__img {
    margin-bottom: 24px;
    width: 580px;
    
}

&__title {
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.5px;
    color: #292F36;
}

&__text {
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    color: #4D5053;
}

&__description {

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
}
}

</style>