import Vue from 'vue'
import router from 'vue-router'

import HomePage from '../components/pages/HomePage.vue'
import BlogPage from '../components/pages/BlogPage.vue'
import BlogDetailsPage from '../components/pages/BlogDetailsPage.vue'
import ProjectPage from '../components/pages/ProjectPage.vue'
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
        name: 'blogPage',
        component: BlogPage
        },
        {
        path: '/BlogDetailsPages',
        name: 'blogDetailsPages',
        component: BlogDetailsPage
        },
        {
        path: '/ProjectPage',
        name: 'projectPage',
        component: ProjectPage
        },
        {
        path: '/NotFound',
        name: 'notFound',
        component: NotFound
        },
        // {
        // path: "*",
        // component: NotFound
        // }


    ]
        
    
})

