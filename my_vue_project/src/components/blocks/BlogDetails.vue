<template>
    <div :class="[$style.content, $style.container]">
        <div :class="$style.content__items">
            <BlogItem />
        </div>
        <div :class="$style.content__tags">
            <SideBar />
        </div>

    </div>
</template>

<script>
import BlogItem from '../BlogItem.vue';
import SideBar from '../SideBar.vue';

    export default {
        name: 'BlogDetails',
        components: {
            BlogItem,
            SideBar
        }
        
    }
</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.content {

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 52px;

    &__items {

        grid-column: span 2;
    }

    &__tags {

        grid-column: span 1;
    }

}

</style>