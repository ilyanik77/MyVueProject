import Vue from 'vue'
import router from 'vue-router'

import HomePage from '../components/pages/HomePage.vue'
import BlogPage from '../components/pages/BlogPage.vue'
import BlogDetailsPage from '../components/pages/BlogDetailsPage.vue'
import ProjectPage from '../components/pages/ProjectPage.vue'
import ProjectDetailsPage from '../components/pages/ProjectDetailsPage.vue'
import NotFound from '../components/pages/NotFound.vue'

Vue.use(router)
export default new router({

    mode: 'history',
    routes: [
        {
        path: '/HomePage',
        name: 'homePage',
        component: HomePage
        },

        {
        path: '/BlogPage',
        component: BlogPage
        },

        {
        path: '/BlogPage/:page',
        component: BlogPage
        },

        {
        path: '/BlogPage/BlogDetailsPages/:id',
        component: BlogDetailsPage
        },

        {
        path: '/ProjectPage',
        component: ProjectPage,
        },

        {
        path: '/ProjectPage/:page',
        component: ProjectPage
        },

        {
        path: '/ProjectPage/ProjectDetailsPage/:id',
        component: ProjectDetailsPage
        },

        {
        path: '*',
        component: NotFound
        },



    ]
        
    
})

