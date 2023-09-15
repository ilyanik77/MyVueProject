<template>
    <div :class="[$style.content, $style.container]">
        <h2 :class="$style.content__title">
            Let’s Get Solution for Building
            Construction Work
        </h2>
        <img :class="$style.content__img" src='../assets/156.jpg' alt="photo">

        <div :class="$style.content__date">
            <p>
                26 December,2022 
            </p>
            <p>
                Interior / Home / Decore
            </p>
        </div>
        <div :class="$style.content__text">
            <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.

                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>
            <QuotesBlog />
            <h2 :class="$style.content__title">
                Design sprints are great
            </h2>
            <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <ol :class="$style.content__list">
                <li>
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </li>
                <li>
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </li>
                <li>
                    Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </li>
            </ol>

            <img :class="$style.content__img" src="../assets/photo7.jpg" alt="">
            <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>

        </div>
        



    </div>
</template>

<script>
import QuotesBlog from '../components/QuotesBlog.vue'

    export default {
        name: 'BlogItem',
        components: {
            QuotesBlog,
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