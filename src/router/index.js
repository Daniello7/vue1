import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/count',
      name: 'count',
      component: () => import('../components/Count.vue'),
    },
    {
      path: '/task-list',
      name: 'TaskList',
      component: () => import('../components/TaskList.vue'),
    },
  ],
})

export default router
