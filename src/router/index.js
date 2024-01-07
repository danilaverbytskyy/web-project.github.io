import {createRouter, createWebHistory} from 'vue-router'
import AppHome from "@/views/AppHome.vue"
import AppPopup from "@/views/AppPopup.vue";
import store from "@/store.js";

const routes = [
    {

        path: '/',
        component: AppHome,
        children: [
            {
                path: '/form',
                component: AppPopup,
                name: 'form',
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_UR),

    routes,
})

router.beforeEach((to, from, next) => {
    if (from.path === '/form') {
        store.commit('hideForm');
    }
    next();
});

export default router
