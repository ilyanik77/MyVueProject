<template>
    <section :class="$style.banner">
        <div :class="[$style.banner__content, $style.container]">
            <div :class="$style.banner__content__intro">
                <h2>
                    Articles & News
                </h2>
                <p>
                    <a href="#">Home</a>
                    
                    <a href="#">Blog</a>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SiteBanner'
}
</script>

<style module lang="scss">

.container {
    max-width: 1200px;
    margin: 0 auto
}


.banner {

background-image: url(../assets/Photo.jpg);
height: 356px;
margin-top: 45px;
margin-bottom: 200px;
display: flex;
align-items: flex-end;

&__content {
    

    &__intro {

        background-color: #fff;
        border-radius: 37px 37px 0px 0px;
        padding: 41px 78px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        

        & h2 {

            color: #292F36;
            font-size: 50px;
            font-family: DM Serif Display;
            font-weight: 700;
            line-height: 125%;
            font-style: normal;
        }

        & a {

            color: #4D5053;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.22px;
            font-family: Jost;
        }
    }

}
}
</style>
