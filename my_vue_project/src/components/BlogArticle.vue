<template>
    <article :class="$style.article">
        <img :class="$style.article__img" :src="src" alt="photo">
        <h3 :class="$style.article__title">
           {{ title }}
        </h3>
        <div :class="$style.article__data">
            <p >
                {{ date }}
            </p>
            <router-link
                        
                        :to="`/BlogPage/BlogDetailsPages`">
                            <img src="../assets/_.svg" alt="">
            </router-link>


            
    
        </div>
    
    
    </article>
</template>

<script>
export default {
    name: 'BlogArticle',
    props: {
        src: String,
        title: String,
        date: String,
        id: Number


    }
}
</script>

<style module lang="scss">

.article {

    display: flex;
    flex-direction: column;
    padding: 21px;
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    border: 1px solid #E7E7E7;
    background-color: #E7E7E7;
    width: 340px;
    height: 479px;
    position: relative;

    &__img {
        border-radius: 45px 45px 0 0;
    }

    &__title {
        width: 305px;
        text-align: left;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.5px;
        font-family: DM Serif Display;
        margin-top: 11px;
        color: #292F36;
    }

    &__data {
        width: 340px;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        display: flex;
        margin-bottom: 20px;
        position: absolute;
        bottom: 0;
    }


}

</style>