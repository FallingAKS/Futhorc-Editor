import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/baga',
        component: () => import('@/views/Baga.vue'),
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
