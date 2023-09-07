<template>
    <section :class="$style.blog">

        <LatestPost/>
        <h2 :class="$style.blog__title">
            Articles & News
        </h2>

        <div :class="$style.blog__articles">
            <BlogArticle 
                        v-for="item in articles"
                        :key="item.id"
                        :title="item.title"
                        :src="item.src"
                        :date="item.date"
            />
        </div>

        <SitePagination/>
        
        
    </section>
</template>

<script>
import BlogArticle from '@/components/BlogArticle.vue'
import LatestPost from '@/components/LatestPost.vue'
import SitePagination from '@/components/SitePagination.vue'

export default {
    name: 'SiteBlog',
    components: {
        LatestPost,
        BlogArticle,
        SitePagination
    },
    data() {
        return {
            articles:[
                {
                    id: 1,
                    title: 'Let’s Get Solution For Building Construction Work',
                    src: require('@/assets/photo1.jpg'),
                    date: '26 December,2022'
                },
                {
                    id: 2,
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    src: require('@/assets/photo2.jpg'),
                    date: '22 December,2022'
                },
                {
                    id: 3,
                    title: 'Best For Any Office & Business Interior Solution',
                    src: require('@/assets/photo3.jpg'),
                    date: '25 December,2022'
                },
                {
                    id: 4,
                    title: 'Let’s Get Solution For Building Construction Work',
                    src: require('@/assets/photo4.jpg'),
                    date: '26 December,2022'
                },
                {
                    id: 5,
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    src: require('@/assets/photo5.jpg'),
                    date: '22 December,2022'
                },
                {
                    id: 6,
                    title: 'Best For Any Office & Business Interior Solution',
                    src: require('@/assets/photo6.jpg'),
                    date: '25 December,2022'
                },

            ] 
        }
    }
        
};

</script>

<style  module lang="scss">

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