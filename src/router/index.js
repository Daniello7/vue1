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
      component: () => import('../modules/count/components/Count.vue'),
    },
    {
      path: '/task-list',
      name: 'TaskList',
      component: () => import('../modules/taskList/components/TaskList.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../modules/record/views/RecordView.vue'),
    },
  ],
})

export default router
