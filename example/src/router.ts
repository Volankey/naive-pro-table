import { createRouter, createWebHistory } from 'vue-router'

const demoRoutes = [
  {
    path: '/demo/filter-and-sorter',
    name: 'filter-and-sorter',
    component: () => import('./demo/filter-and-sorter.demo.vue')
  },
  {
    path: '/demo/multiple-sorter',
    name: 'multiple-sorter',
    component: () => import('./demo/multiple-sorter.demo.vue')
  },
  {
    path: '/demo/header-grouped',
    name: 'header-grouped',
    component: () => import('./demo/header-grouped.demo.vue')
  },
  {
    path: '/demo/copyable',
    name: 'copyable',
    component: () => import('./demo/copyable.demo.vue')
  },
  {
    path: '/demo/sync-route',
    name: 'sync-route',
    component: () => import('./demo/sync-route.demo.vue')
  },
  {
    path: '/demo/custom-params',
    name: 'custom-params',
    component: () => import('./demo/custom-params.demo.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('./demo/complex-demo.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: demoRoutes
})
