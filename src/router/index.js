import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/help.vue";
import NewTest from "../views/NewTest.vue";
import ContactPage from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/Help",
        name: "Help",
        component: Help
    },
    {
        path: "/NewTest",
        name: "NewTest",
        component: NewTest
    },
    {
        path: "/Contact",
        name: "Contact",
        component: ContactPage
    }
];

const router = new VueRouter({
    routes
});

export default router;
