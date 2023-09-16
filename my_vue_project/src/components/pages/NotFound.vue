<template>
    <div>
        <SiteHeader/>
        <div :class="[$style.content, $style.container]">
            <div :class="$style.content__box">
                <p :class="$style.content__title">
                    404
                </p>
                <p :class="$style.content__text">
                    We are sorry, but the page
                    you requested was not found
                </p>
                <button :class="$style.content__button"
                        @click="message">

                    Back To Home
                    <img src="@/assets/vector.png" alt="">
                </button>
            </div>
            <img :class="$style.content__img" src="@/assets/404.jpg" alt="photo">

        </div>
    </div>
</template>

<script>
import SiteHeader from '../blocks/SiteHeader.vue';

    export default {
        name: 'NotFound',
        components: {
            SiteHeader,
        },
        methods: {
            message: function() {
                console.log('Back To Home');
            }
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
    align-items: center;
    margin-top: 45px;

    &__box {

        text-align: left;
    }

    &__text {

        color: #292F36;
        font-family: DM Serif Display;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 52.5px */
        letter-spacing: 0.35px;
        margin-bottom: 23px;
    }

    &__title {

        color: #CDA274;
        font-family: DM Serif Display;
        font-size: 250px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; /* 312.5px */
    }

    &__img {

        width: 1638px;
        height: 1088px;
        border-radius: 0 0 0 300px;
        margin-left: 81px;
    }

    &__button {

        display: flex;
        justify-content: center;
        border-radius: 18px;
        background: #292F36;
        color: #aaa;
        padding: 26px 54px;
        align-items: center;
        gap: 10px;
    }
}

</style>