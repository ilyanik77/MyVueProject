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

                <ArticlesNewsBlockItem
                                        v-for="(item, index) in items"
                                        :key="index"
                                        :title="item.title"
                                        :data="item.data"
                                        :src="item.src"
                />

                

                

            </div>

            
        </div>
    </section>

</template>

<script>
import ArticlesNewsBlockItem from '../ArticlesNewsBlockItem.vue';
    export default {
        name: 'ArticlesNewsBlock',
        data() {
            return {
                items: [
                    {title: 'Let’s Get Solution For Building Construction Work', src: require('@/assets/photo1.jpg'), data: '26 December,2022'},
                    {title: 'Low Cost Latest Invented Interior Designing Ideas', src: require('@/assets/photo2.jpg'), data: '22 December,2022'},
                    {title: 'Best For Any Office & Business Interior Solution', src: require('@/assets/photo3.jpg'), data: '25 December,2022'}
                ]
            }
        },
        components: {
            ArticlesNewsBlockItem,
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


</style>