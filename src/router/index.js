import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/PageHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
