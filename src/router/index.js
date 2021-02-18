import { createRouter, createWebHistory } from 'vue-router';

import Content from '../components/Content';
import Main from '../components/Main';
import Home from '../components/Home';

const routeHistory = createWebHistory();
const router = createRouter({
    history: routeHistory,
    routes: [{
            path: '/main',
            component: Main,
        },
        {
            path: '/content',
            component: Content
        },
        {
            path: '/',
            component: Home
        }
    ]
});
export default router;