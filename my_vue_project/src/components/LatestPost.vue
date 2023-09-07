<template>
    <div :class="$style.LatestPost">
        <h2 :class="$style.LatestPost__title">
            Latest Post
        </h2>
                
        <div :class="$style.post">
            <img :class="$style.post__img" src="../assets/photo_blog.jpg" alt="">
            <div :class="$style.post__content">
                <h3 :class="$style.post__content__title">
                    Low Cost Latest Invented Interior<br> 
                    Designing Ideas
                </h3>
                <p :class="$style.post__content__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissimmaximus.posuere in.Contrary to popularbelief.<br><br>
                    Lorem Ipsum is not simply random text. It has
                    roots in a piece of classica.
                </p>
                <div :class="$style.post__content__data">
                    <p>
                        26 December,2022
                    </p>
                    <img src="../assets/_.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestPost'
}
</script>

<style module lang="scss">
.LatestPost {

    margin-bottom: 156px;

    &__title {

        text-align: left;
        margin-bottom: 27px;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%;
        letter-spacing: 1px;
        font-family: DM Serif Display;
        color: #292F36;
            
    }

    .post {

        display: flex;
        padding: 22px;

        &__img {

            border-radius: 25px;
        }

        &__content {

            margin-left: 65px;
            margin-top: 50px;
            width: 463px;

            &__title {

                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 600;
                line-height: 125%; /* 31.25px */
                letter-spacing: 0.5px;
                color: #292F36;
                margin-bottom: 22px;
            }

            &__text {

                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 33px */
                letter-spacing: 0.22px;
                color: #4D5053;
                margin-bottom: 41px;
            }

            &__data {

                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 41px;
            }
        }
    }
}

</style>