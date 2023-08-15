import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ButtonsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'buttons',
      component: HomeView
    }
  ]
})

export default router
