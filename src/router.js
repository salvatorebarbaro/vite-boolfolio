import { createRouter, createWebHistory } from "vue-router";

// components

// da decommentare 
import HomePage from './pages/HomePage.vue';
import SingleProject from './pages/SingleProject.vue';
import ContactMe from "./pages/ContactMe.vue";

const router = createRouter({
    history: createWebHistory(),

    // routes
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            //route for call the page
            path:'/contact-me',
            //name of component
            name:'contattami',
            //import of the component
            component: ContactMe
        }
    ]
});

export { router };