<template>
    <section :class="[$style.blog, $style.container]">

        <LatestPost/>
        <h2 :class="$style.blog__title">
            Articles & News
        </h2>




        <div :class="$style.blog__articles">

            <div 
                v-for="article in currentArticlesList"
                :key="article.id"
                :class="$style.article"
            >

                <div>
                    <img :class="$style.article__img" :src="article.img1" alt="photo">
                    <p :class="$style.article__tag">
                        {{ article.tag }}
                    </p>

                </div>
                
                <h3 :class="$style.article__title">
                    {{ article.title1 }}
                </h3>
                <div :class="$style.article__data">
                    <p >
                        {{ article.date }}
                    </p>
                    <router-link
                        
                        :to="`/BlogPage/BlogDetailsPages/${article.id}`">
                            <img src="@/assets/_.svg" alt="">
                    </router-link>
                </div>

            </div>

        </div>

        <div :class="$style.blog__articles__links">
            <router-link
                v-for="page in getPageCount"
                :key="page"
                :to="`/BlogPage/${page}`"
                
            >
                {{ page }}
            
                

            </router-link>

        
        </div>

        
        
        
    </section>
</template>

<script>
import { mapState } from 'vuex'
import LatestPost from '@/components/LatestPost.vue'


export default {
    name: 'SiteBlog',
    
    components: {
        LatestPost,
    
    },
    data() {
        return {
            currentPage: 1,
        }
    },
    computed: {
        ...mapState(["articles", "articlesPerPage"]),
        currentArticlesList() {
            const {currentPage, articlesPerPage} = this;
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;

            return this.articles.slice(startIndex, endIndex)
        },
        getPageCount() {

            let {articlesCount, articlesPerPage} = this;
                
            articlesCount = Math.ceil(this.getArticlesLength / articlesPerPage)
        
            return articlesCount
        },
            
            
        getArticlesLength()  {
            let articlesCount = this.$store.state.articlesCount;
            articlesCount = Object.keys( this.$store.state.articles ).length
            return articlesCount
                
        },
        
            
    },

    watch: {
        $route(to, from) {
            const { page } = this.$route.params;
            if (page) this.currentPage = page;
                console.log(to, from);
                
        }
            
    },
        
};

</script>

<style  module lang="scss">

.container {
    max-width: 1200px;
    margin: 0 auto
}

.blog {

    margin-bottom: 51px;

    &__title {

        text-align: left;
        font-family: DM Serif Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; /* 62.5px */
        letter-spacing: 1px;
        color: #292F36;
        margin-bottom: 30px;
    }

    &__articles {

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 30px;
        column-gap: 28px;
        margin-bottom: 61px;

        &__links {

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



}

.article {

    display: flex;
    flex-direction: column;
    padding: 21px;
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    border: 1px solid #E7E7E7;
    background-color: #E7E7E7;
    width: 340px;
    height: 479px;
    position: relative;

    &__img {
        border-radius: 45px 45px 0 0;
    }

    &__tag {

        color: #4D5053;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        text-transform: capitalize;
        width: 124px;
        padding: 8px 10px;
        border-radius: 8px 8px 8px 0px;
        background-color: #fff;
        margin-left: 30px;
        
    }

    &__title {
        width: 305px;
        text-align: left;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.5px;
        font-family: DM Serif Display;
        margin-top: 11px;
        color: #292F36;
    }

    &__data {
        width: 340px;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        display: flex;
        margin-bottom: 20px;
        position: absolute;
        bottom: 0;
    }


}

</style>