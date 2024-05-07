import { RouteRecordRaw } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/admin.vue'),
        children: [{ path: 'home', component: () => import('@/views/home.vue') }],
    },
] as RouteRecordRaw[];

export default routes;
