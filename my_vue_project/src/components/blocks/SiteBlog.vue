<template>
    <section :class="[$style.blog, $style.container]">

        <LatestPost/>
        <h2 :class="$style.blog__title">
            Articles & News
        </h2>

        <div :class="$style.blog__articles">
            <BlogArticle 
                        v-for="article in articles"
                        :key="article.id"
                        :title="article.title1"
                        
                        :src="article.img1"
                        :date="article.date"
                        :id="article.id"
            />
        </div>

        <SitePagination/>
        
        
    </section>
</template>

<script>
import { mapState } from 'vuex'
import BlogArticle from '@/components/BlogArticle.vue'
import LatestPost from '@/components/LatestPost.vue'
import SitePagination from '@/components/SitePagination.vue'

export default {
    name: 'SiteBlog',
    props: ['article'],
    components: {
        LatestPost,
        BlogArticle,
        SitePagination
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(["articles", "buttons"]),
        
            
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
    }
}
</style>