import { h } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { useMenus } from '../hooks/menus/use-menus'
import { useAnchors } from '../hooks/anchors/use-anchors'
import { demoMenus } from './demo-menus'
import { apiAnchors } from './api-anchor'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/started',
      meta: {
        useMenu: false,
        useAnchor: false
      }
    },
    {
      path: '/started',
      meta: {
        useMenu: false,
        useAnchor: false
      },
      component: () => import('../started/zhCN/index.md')
    },
    {
      path: '/api',
      meta: {
        useMenu: false
      },
      beforeEnter() {
        const { setAnchorOptions } = useAnchors()
        setAnchorOptions(apiAnchors)
      },
      component: () => import('../api/zhCN/index.md')
    },
    {
      path: '/example',
      component: h(RouterView),
      redirect: '/example/basic',
      meta: {
        useAnchor: false
      },
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
