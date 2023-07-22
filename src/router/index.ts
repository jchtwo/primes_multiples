import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/multiples',
      name: 'multiples',
      component: () => import('../views/MultiplesView.vue')
    },
    {
      path: '/primes',
      name: 'primes',
      component: () => import('../views/PrimesView.vue')
    }
  ]
})

export default router
