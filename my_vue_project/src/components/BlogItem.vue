<template>

    <div :class="[$style.content, $style.container]">

        <div
            v-for="article in selectArticle"
            :key="article.id"
        >
            <h2 :class="$style.content__title">
                {{ article.title1 }}
            </h2>
            <img :class="$style.content__img" :src="article.img1" alt="photo">

            <div :class="$style.content__date">
                <p>
                    {{ article.date }}
                </p>
                <p>
                    Interior / Home / Decore
                </p>
            </div>

            <div :class="$style.content__text">
                <p>
                    {{ article.text1 }}
                </p>
                <QuotesBlog />
                <h2 :class="$style.content__title">
                    {{ article.title2 }}
                </h2>
                <p>
                    {{ article.text2 }}
                </p>
                <ol :class="$style.content__list">
                    <li>
                        {{ article.text4 }}
                    </li>
                    <li>
                        {{ article.text5 }}
                    </li>
                    <li>
                        {{ article.text6 }}
                    </li>
                </ol>

                <img :class="$style.content__img" :src="article.img2" alt="">
                <p>
                    {{ article.text7 }}
                </p>

            </div>
        </div>

    </div>
    

    
</template>

<script>
import { mapState } from 'vuex'
import QuotesBlog from '../components/QuotesBlog.vue'

    export default {
        name: 'BlogItem',
        props:{
            
        },
        components: {
            QuotesBlog,
        },
        computed: {
            ...mapState(["articles", "buttons"]),
            selectArticle() {

                return this.articles.filter((article) => article.id === Number(this.$route.params.id));
            },
        }

    }
</script>

<style lang="scss" module>



.content {
    
    text-align: left;
    margin-bottom: 96px;

    &__title {

        color: #292F36;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
        font-family: DM Serif Display;
        margin-bottom: 21px;
    }

    &__img {

        margin-bottom: 46px;
        border-radius: 50px;
        width: 800px;
    }

    &__date {

        display: flex;
        justify-content: space-between;
        margin-bottom: 48px;
    }

    &__text {

        color: #4D5053;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        font-family: Jost;
        margin-bottom: 35px;
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