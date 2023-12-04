import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from '../views/the-welcome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheWelcome,
    },
    {
      path: '/first-table',
      name: 'first-table',
      component: () => import('../views/ag-grid-table-1.vue'),
    },
    {
      path: '/second-table-fetch-data',
      name: 'second-table',
      component: () => import('../views/ag-grid-table-2-fetch-data.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
