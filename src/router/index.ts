import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'scroll-animations',
      component: () => import('../views/AnimationView.vue'),
    },
    {
      path: '/basic',
      name: 'basic-animations',
      component: () => import('../views/BasicAnimations.vue'),
    },
  ],
})

export default router
