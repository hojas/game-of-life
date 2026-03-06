import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/Gallery.vue'
import GameDetail from '../views/GameDetail.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

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
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
})

export default router
