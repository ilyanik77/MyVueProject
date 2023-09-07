<template>
    
    <article :class="$style.item">
        <img :class="$style.item__img" :src="src" alt="">
        <h3 :class="$style.item__title">
            {{ title }}
        </h3>
        <div :class="$style.item__data">
            <p>
                {{ data }}
            </p>
            <img src="../assets/_.svg" alt="">

        </div>


    </article>

</template>

<script>
    export default {
        name: 'ArticlesNewsBlockItem',
        props: {
            title: String,
            src: String,
            data: String
        }
        
    }
</script>

<style lang="scss" module>

.item {

    border: 0.5px solid #aaa;
    border-radius: 62px;
    padding: 21px;

    &:nth-child(2) {

        background: #F4F0EC;
    }

    &__img {

        margin-bottom: 21px;
        border-radius: 50px 50px 0 0;
    }

    &__title {

        height: 70px;
        margin-bottom: 32px;
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.5px;
        text-align: left;
        width: 305px;
    }

    &__data {

        justify-content: space-between;
        align-items: center;
        display: flex;

    }
}


















</style>