<template>
    
    <div :class="$style.item">
        <img :class="$style.item__img" :src="src" alt="">
            <div :class="$style.item__description">
                <div :class="$style.item__description-text">
                    <h3 :class="$style.item__title">
                        {{ title }}
                    </h3>
                    <p :class="$style.item__text">
                        {{ text }}
                    </p>
                </div>
                <img src="../assets/_.svg" alt="">

            </div>

                    
    </div>

</template>

<script>
    export default {
        name: 'ProjectItem',
        props: {
            src: String,
            title: String,
            text: String


        },
    }
</script>

<style lang="scss" module>

.item {

    &__img {
        margin-bottom: 24px;
    }

    &__title {
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
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

        justify-content: space-between;
        align-items: center;
        display: flex;
    }
}

</style>