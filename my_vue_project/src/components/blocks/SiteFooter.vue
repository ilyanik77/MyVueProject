<template>
    
    <footer :class="$style.footer">
        <div :class="[$style.content, $style.container]">
            <div :class="$style.content__interno">
                <div :class="$style.logo">
                    <router-link to="/HomePage">

                        <img src="@/assets/Logo.svg" alt="logo">
                        <img src="@/assets/Interno.svg" alt="logo">

                    </router-link>
                </div>
                <p :class="$style.content__interno__text">
                    It is a long established fact that a reader will be distracted lookings.
                </p>
                <div :class="$style.content__interno__link">
                    <a href="#"><img src="@/assets/twitter.svg" alt=""></a>
                    <a href="#"><img src="@/assets/in.svg" alt=""></a>
                </div>
            </div>

            <div :class="$style.pages">
                <h3 :class="$style.pages__title">Pages</h3>
                
                <router-link :class="$style.pages__link" to="/HomePage">Home</router-link>
                <router-link :class="$style.pages__link" to="/ProjectPage">Project</router-link>
                <router-link :class="$style.pages__link" to="/BlogPage">Blog</router-link>
                
            </div>

            <div :class="$style.contacts">
                <h3 :class="$style.contacts__title">Contact</h3>
                <p :class="$style.contacts__text">
                    55 East Birchwood Ave.<br>
                    Brooklyn, New York 11201<br> 
                    <span>contact@interno.com</span><br>
                    (123) 456 - 7890
                </p>
            </div>
        </div>
    </footer>
    
</template>

<script>
    export default {
        name: 'SiteFooter'
        
    }
</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.footer {

    
    .content {
        grid-template-columns: repeat(3, 1fr);
        height: 272px;
        gap: 27px;
        margin-bottom: 134px;
        display: grid;

        
        &__interno {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            &__text {
                margin-bottom: 31px;
                color: #4D5053;
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;
                margin-top: 18px;
                text-align: left;
                
            }
            
            &__link a:first-child {
                margin-right: 54px;
            }
            
        }
        
        .pages {
            
            display: flex;
            flex-direction: column;

            
            &__title {
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 600;
                line-height: 125%; 
                color: #292F36;
                
            }
            
            &__link {
                color: #4D5053;
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 300%;
                letter-spacing: 0.22px;
                text-decoration: none;
            }
        }

        
        .contacts {
            
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            &__title {
                font-family: DM Serif Display;
                font-size: 25px;
                font-style: normal;
                font-weight: 600;
                line-height: 125%;
                margin-bottom: 26px;
                color: #292F36;
                
            }
            
            &__text {
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;
                color: #4D5053;
                text-align: left;

                
                & span {
                    font-family: Jost;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 300%;
                    letter-spacing: 0.22px;
                    color: #4D5053;
                }
            }
        }
    }
}



</style>