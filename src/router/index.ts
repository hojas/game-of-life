import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/Gallery.vue'
import GameDetail from '../views/GameDetail.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '/game/:id',
      name: 'GameDetail',
      component: GameDetail,
      props: true,
    },
  ],
})

export default router
