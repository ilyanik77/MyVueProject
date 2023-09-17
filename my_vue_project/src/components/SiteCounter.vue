<template>
    
    <section :class="$style.counter">
        <div :class="[$style.counter__content, $style.container]">
            <div :class="$style.counter__content__items">
                <div :class="$style.counter__content__item">
                    <p>
                        12
                    </p>
                    <h3>
                        Years Of Experiance
                    </h3>
                </div>
                <img src="../assets/Line.png" alt="">

                <div :class="$style.counter__content__item">
                    <p>
                        85
                    </p>
                    <h3>
                        Success Project
                    </h3>
                </div>
                <img src="../assets/Line.png" alt="">

                <div :class="$style.counter__content__item">
                    <p>
                        15
                    </p>
                    <h3>
                        Active Project
                    </h3>
                </div>
                <img src="../assets/Line.png" alt="">

                <div :class="$style.counter__content__item">
                    <p>
                        95
                    </p>
                    <h3>
                        Happy CUstomers
                    </h3>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: 'SiteCounter',
        
    }
</script>

<style lang="scss" module>

.counter {

    background-color: #F4F0EC;
    margin-bottom: 96px;
    
    
    
    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 457px;

        
        &__items {
            margin: 151px 0;
            gap: 76px;
            display: flex;
            
        }

        
        &__item {
            flex-direction: column;
            align-items: center;
            display: flex;

            
            & p {
                font-family: DM Serif Display;
                font-size: 85px;
                font-style: normal;
                font-weight: 400;
                line-height: 125%; 
                letter-spacing: 1.7px;
                color: #CDA274;
                
            }
            
            & h3 {
                font-family: Jost;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                letter-spacing: 0.22px;             
                color: #4D5053;
            }
        }
        
    }
}

</style>