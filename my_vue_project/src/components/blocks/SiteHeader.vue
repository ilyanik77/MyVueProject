<template>
    <header :class="$style.header">

        <div :class="[$style.header__content ,$style.container]">
            <div class="logo">
                
                <router-link to="/HomePage">

                    <img src="@/assets/Logo.svg" alt="logo">
                    <img src="@/assets/Interno.svg" alt="logo">

                </router-link>
    
            </div>
            <nav :class="$style.menu">
                <router-link :class="$style.menu__link" to="/HomePage">Home</router-link>
                <router-link :class="$style.menu__link" to="/ProjectPage">Project</router-link>
                <router-link :class="$style.menu__link" to="/BlogPage">Blog</router-link>


                
            </nav>
            
        </div>

    </header>
</template>

<script>
export default {
    name: 'SiteHeader'
}
</script>

<style module lang="scss">
.container {
    max-width: 1200px;
    margin: 0 auto
}

.header {

&__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 53px;
}

.menu {
    &__link {
        text-decoration: none;
        color: #292F36;
        text-align: center;
        font-family: Jost;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;

        &:nth-child(2) {
            margin-left: 100px;
            margin-right: 100px;
        }
    }

    
}
}

</style>