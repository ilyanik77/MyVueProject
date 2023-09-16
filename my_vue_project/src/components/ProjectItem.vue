<template>
    
    <div :class="$style.item">
        <img :class="$style.item__img" :src="img" alt="">
            <div :class="$style.item__description">
                <div :class="$style.item__description-text">
                    <h3 :class="$style.item__title">
                        {{ title }}
                    </h3>
                    <p :class="$style.item__text">
                        {{ section }}
                    </p>
                </div>
                <img src="../assets/_.svg" alt="">

            </div>

                    
    </div>

</template>

<script>
import { mapState } from "vuex";
    export default {
        name: 'ProjectItem',
        props: {
            src: String,
            title: String,
            section: String


        },
        computed: {
            ...mapState(["projects", "buttons"]),
            
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

        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
}

</style>