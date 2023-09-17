<template>
    <div :class="[$style.box__button, $style.container]">
        <button :class="$style.box__button__link">Bathroom</button>
        <button :class="$style.box__button__link">Bed Room</button>
        <button :class="$style.box__button__link">Kitchan</button>
        <button :class="$style.box__button__link">Living Area</button>
    </div>
</template>

<script>
    export default {
        name: 'ProjectButtonBox',
    }
</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.box__button {

    display: flex;
    width: 880px;
    justify-content: center;
    margin-bottom: 61px;
    border-radius: 18px;
    border: 1px solid #CDA274;
    
    &__link {

        border-radius: 18px;
        padding: 26px 67px;
        background-color: #fff;
        border: 1px solid #FFF;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;

        &:active {

            background-color: #CDA274;
        }
        
    }

}

</style>