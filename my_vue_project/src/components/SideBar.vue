<template>
    
    <div :class="$style.tags">

        <h1 :class="$style.tags__title">Tags</h1>

        <div :class="$style.tags__box">
            <div
                v-for="(button, index) in buttons"
                :key="index"
                :class="$style.tags__box__button"
                @click="checkButtonTag(button)">
                {{ button.name }}
            </div>
        </div>

        <!-- проекты -->
        <!-- <div
            v-for="project in filterProject"
            :key="project.id"
            :class="$style.text">
            {{ project }}
        </div> -->
    </div> 
    
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            currentButtonTag: "",

            
            buttons: [
                { id: 1, name: "Kitchen" },
                { id: 2, name: "Bedroom" },
                { id: 3, name: "Building" },
                { id: 4, name: "Architecture" },
                { id: 5, name: "Kitchen Planning" },
                
            ],

            projects: [
                { id: 1, name: "кухня", tag: "Tag_1" },
                { id: 2, name: "спальня", tag: "Tag_2" },
                { id: 3, name: "ванна", tag: "Tag_3" },
                { id: 4, name: "кухня", tag: "Tag_1" },
                { id: 5, name: "спальня", tag: "Tag_2" },
                { id: 6, name: "ванна", tag: "Tag_3" },
            ],
        };
    },

    methods: {
        checkButtonTag(button) {
            this.currentButtonTag = button.name;
        },
    },

    computed: {
        filterProject() {
            if (this.currentButtonTag === "") {
                return this.projects;
            } else {
                return this.projects.filter(
                (project) => project.tag === this.currentButtonTag);
            }
        },
    },


}
</script>

<style lang="scss" module>

.tags {

    text-align: left;
    gap: 24px;

    &__title {

        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; /* 31.25px */
        letter-spacing: 0.5px;
    }

    &__box {

        display: flex;
        flex-wrap: wrap;
        gap: 11px;
        margin-bottom: 30px;
        margin-top: 30px;

        &__button {

            padding: 9px 30px;
            border-radius: 10px;
            background-color: #F4F0EC;
            box-sizing: border-box;

            color: #000;
            text-align: center;
            font-family: Jost;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%; /* 22.5px */
            letter-spacing: 0.36px;
        }
    }
}



</style>