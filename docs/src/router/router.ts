import { h } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { useMenus } from '../hooks/menus/use-menus'
import Home from '../views/home/Home.vue'
import { demoMenus } from './demo-menus'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        useHeader: false
      }
    },
    {
      path: '/started',
      meta: {
        useHeader: false
      },
      component: () => import('../started/zhCN/index.md')
    },
    {
      path: '/api',
      meta: {
        useHeader: false
      },
      component: () => import('../api/zhCN/index.md')
    },
    {
      path: '/example',
      component: h(RouterView),
      redirect: '/example/basic',
      beforeEnter() {
        // ...
        const { setMenuOptions } = useMenus()
        setMenuOptions(demoMenus)
      },
      children: demoMenus.map((item) => {
        return {
          path: item.path,
          component: () =>
            import(`../demos/zhCN/${item.key}/${item.key}.demo.md`)
        }
      })
    }
  ]
})

export { router }
