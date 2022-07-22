import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/example',
      redirect: '/example/basic'
    },
    {
      path: '/example/basic',
      component: () => import('../demos/zhCN/basic/basic.demo.md')
    }
  ]
})

export { router }
