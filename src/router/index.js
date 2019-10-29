import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Help from '../views/help.vue'
import Calculate from '../views/calculate-text.vue'
import Faq from '../views/Faq.vue'
import ShowHide from '../views/Shmessage.vue'
import Random from '../views/Random-views.vue'
import Tabs from '../views/Tabs.vue'
import Toggle from '../views/Toggle.vue'
import Gradient from '../views/Gradient.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/help',
        name: 'Help',
        component: Help
    },
    {
        path: '/calculate-text',
        name: 'Calculate',
        component: Calculate
    },
    {
        path: '/Faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/Shmessage',
        name: 'ShowHide',
        component: ShowHide
    },
    {
        path: '/Random-views',
        name: 'Random',
        component: Random
    },
    {
        path: '/Tabs',
        name: 'Tabs',
        component: Tabs
    },
    {
        path: '/Toggle',
        name: 'Ttoggle',
        component: Toggle
    },
    {
        path: '/Gradient',
        name: 'Gradient',
        component: Gradient
    }
]

const router = new VueRouter({
    routes
})

export default router
