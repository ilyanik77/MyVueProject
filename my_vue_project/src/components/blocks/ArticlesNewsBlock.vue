<template>
    
    <section :class="$style.blog">
        <div :class="[$style.blog__content, $style.container]">
            <h2 :class="$style.blog__content__title">
                Articles & News
            </h2>
            <p :class="$style.blog__content__text">
                It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
            </p>

            <div :class="$style.blog__content__items">

                
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

            
        </div>
    </section>

</template>

<script>
import { mapState } from 'vuex'


    export default {
        name: 'ArticlesNewsBlock',
        
        data() {
            return {
                articlesPerPage: 3,
                currentPage: 1,
            }
        },
        components: {
            
        },
        computed: {
            ...mapState(["articles"]),
            currentArticlesList() {
            const {currentPage, articlesPerPage} = this;
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;

            return this.articles.slice(startIndex, endIndex)
        },
        }
        
    }
</script>

<style lang="scss" module>

.blog {

    
    &__content {
        flex-direction: column;
        align-items: center;
        margin-bottom: 97px;
        display: flex;

        
        &__title {
            color: #292F36;
            text-align: center;
            font-family: DM Serif Display;
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            line-height: 125%;
            letter-spacing: 1px;
            margin-top: 96px;
            
        }
        
        &__text {
            margin-bottom: 52px;
            color: #4D5053;
            text-align: center;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
            width: 811px;
            
        }
        &__items {
            grid-template-columns: repeat(3, 1fr);
            column-gap: 27px;
            display: grid;

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