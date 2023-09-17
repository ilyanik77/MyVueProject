<template>
    
    <section :class="$style.banner">
        <div :class="[$style.banner__content, $style.container]">

            <div :class="$style.intro">
                <h1 :class="$style.intro__title">Let Your Home 
                    Be Unique
                </h1>
                <p :class="$style.intro__text">
                    There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.
                </p>
                <button :class="$style.intro__link">

                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M2 8.43529L15.7232 8.29844M10.6182 1.91125L17.1412 8.43424L10.4868 15.0886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </button>
                


            </div>

        </div>
    </section>

</template>

<script>
    export default {
        name: 'HomePageBanner'
        
    }
</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.banner {

&__content {

    margin-top: 57px;
    margin-bottom: 96px;
    background-image: url("@/assets/banner1.jpg");
    height: 758px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50px;
    display: flex;
    align-items: center;
    
    .intro {

        max-width: 434px;
        margin-left: 52px;
        text-align: left;

        &__title {

            color: #292F36;
            font-family: DM Serif Display;
            font-size: 65px;
            font-style: normal;
            font-weight: 700;
            line-height: 125%;
            margin-bottom: 18px;
        }

        &__text {

            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
            margin-bottom: 47px;
        }

        &__link {

            display: flex;
            max-width: 223px;
            padding: 26px 49px;
            background-color: #292F36;
            color: #FFF;
            text-align: center;
            font-family: Jost;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 125%;
            letter-spacing: 0.36px;
            border-radius: 20px;
            align-items: baseline;

            & svg {
                width: 15px;
                margin-left: 10px;
            }
        }
    }
}
}

</style>