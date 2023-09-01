import { createRouter, createWebHistory } from 'vue-router'
import ButtonsView from '../views/ButtonsView.vue'
import InputsView from '../views/InputsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/buttons',
      name: 'buttons',
      component: ButtonsView,
      alias: '/'
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: InputsView
    }
  ]
})

export default router
