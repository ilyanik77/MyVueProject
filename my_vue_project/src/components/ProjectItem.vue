<template>
    
    <div :class="$style.item">
        <img :class="$style.item__img" :src="src" alt="photo">
        <div :class="$style.item__description">
            <div :class="$style.item__description-text">
                <h3 :class="$style.item__title">
                    {{ title }}
                </h3>
                <p :class="$style.item__text">
                    {{ text }}
                </p>
            </div>
            <!-- <router-link :to="`/ProjectPage/ProjectDetailsPage/${this.id}`">
                <img src="@/assets/_.svg" alt="">
            </router-link> -->

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
        width: 525px;
    }

    &__title {
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
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

        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
}

</style>