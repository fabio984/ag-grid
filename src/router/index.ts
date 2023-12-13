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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ag-grid-table-1.vue'),
    },
    {
      path: '/second-table-fetch-data',
      name: 'second-table',
      component: () => import('../views/ag-grid-table-2-fetch-data.vue'),
    },
    {
      path: '/second-table-fetch-data-filter-all',
      name: 'second-table-with-filter-all',
      component: () => import('../views/ag-grid-table-2-fetch-data-filter-all.vue'),
    },
    {
      path: '/fetch-and-pagination',
      name: 'fetch-and-pagination',
      component: () => import('../views/ag-grid-table-2-fetch-data-pagination.vue'),
    },
    {
      path: '/fetch-and-format-cells',
      name: 'fech-and-format-cells',
      component: () => import('../views/ag-grid-table-2-fetch-data-format-cells.vue'),
    },
    {
      path: '/fetch-with-cellRenderer-company-logo',
      name: 'fetch-with-cellRenderer-company-logo',
      component: () => import('../views/ag-grid-table-cell-renderer.vue'),
    },
    {
      path: '/fetch-and-handle-grid-events',
      name: 'fetch-and-handle-grid-events',
      component: () => import('../views/ag-grid-table-handle-grid-events.vue'),
    },
    {
      path: '/fetch-and-handle-checkbox',
      name: 'fetch-and-handle-checkbox',
      component: () => import('../views/ag-grid-table-checkbox.vue'),
    },
    {
      path: '/fetch-and-format-date',
      name: '/fetch-and-format-date',
      component: () => import('../views/ag-grid-table-fetch-and-format-date.vue'),
    },
    {
      path: '/fetch-and-ticks-and-crosses-successfull',
      name: '/fetch-and-ticks-and-crosses-successfull',
      component: () => import('../views/ag-grid-table-fetch-and-crosses-ticks-successfull.vue'),
    },
  ],
});

export default router;
