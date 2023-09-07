<template>
    
    <div :class="$style.pagination">
        <div class="news__pagination__list">
            <a href="#"><img src="@/assets/Ellipse 4.svg" alt=""></a>
            <a href="#"><img src="@/assets/Ellipse 4.svg" alt=""></a>
            <a href="#"><img src="@/assets/Ellipse 4.svg" alt=""></a>
            <a href="#"><img src="@/assets/_.svg" alt=""></a>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'SitePagination'
        
    }
</script>

<style lang="scss" module>

.pagination {

    margin-top: 51px;
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
}

</style>