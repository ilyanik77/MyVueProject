<template>
    <div>
        
        <div :class="[$style.box__button, $style.container]">
            <div
                v-for="button in buttons"
                :key="button.id"
                :class="$style.box__button__link"
                
                :tag="button.tag"
            >
                {{ button.tag }}
            </div>

        </div>


        <div :class="[$style.project__box, $style.container]">
        
            <ProjectBoxItem 
                v-for="project in projects"
                :key="project.id"
                :title="project.title"
                :src="project.imgSrc"
                :section="project.section"
                :tag="project.tag"
                :id="project.id"
            />

        </div>
    </div>
    
    
    
</template>

<script>
import { mapState } from 'vuex' 
import ProjectBoxItem from '../ProjectBoxItem.vue';


    export default {
        name: 'ProjectPageBox',
        props: {
            
        },
        components: {

            ProjectBoxItem,

        },
        computed: {
            ...mapState(["projects", "buttons"]),
            
        },
        methods: {
            sortByTag: function() {
                if(this.button.tag === this.state.project.tag) {
                    console.log("aaa");
                }
                

            // }
            //sortByTag() {
            // if (this.button.tag === "aaa") {
            //     return state.projects
            // } else {
                // return state.projects.filter(
                //     (project) =>
                //         project.tag === state.currentButtonTag)
                console.log("aaa");
                //}
            }
        }
    }
</script>

<style lang="scss" module>

.container {
    max-width: 1200px;
    margin: 0 auto
}

.project__box {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;

    

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