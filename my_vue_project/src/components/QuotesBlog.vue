<template>
    <div :class="$style.quotes">
        <div :class="$style.quotes__content">
            <img width="106px" src="../assets/quote.jpg" alt="">
            <img src="../assets/quotes1.jpg" alt="">
        </div>

    </div>
</template>

<script>
    export default {
        name: 'QuotesBlog'
    }
</script>

<style lang="scss" module>

.quotes {

    background-color: #F4F0EC;
    height: 267px;
    margin-top: 35px;
    margin-bottom: 27px;
    border-radius: 50px;
    display: flex;
    justify-content: center;

    &__content {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
}

</style>