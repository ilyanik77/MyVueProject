<template>
    <section :class="$style.banner">
        
    </section>
</template>

<script>
    export default {
        name: 'BlogDetailsBanner'
    }
</script>

<style lang="scss" module>

.banner {

background-image: url(@/assets/BlogDetailsBanner.jpg);
height: 356px;
margin-top: 45px;
margin-bottom: 200px;
display: flex;
align-items: flex-end;


}

</style>