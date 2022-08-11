import { h } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { useMenus } from '../hooks/menus/use-menus'
import { demoMenus } from './demo-menus'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/started',
      meta: {
        useSider: false
      }
    },
    {
      path: '/started',
      meta: {
        useSider: false
      },
      component: () => import('../started/zhCN/index.md')
    },
    {
      path: '/api',
      meta: {
        useSider: false
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
