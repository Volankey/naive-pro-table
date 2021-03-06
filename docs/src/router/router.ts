import { h } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { useMenus } from '../hooks/menus/use-menus'
import Home from '../views/home/Home.vue'

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
        setMenuOptions([
          {
            key: 'basic',
            path: '/example/basic',
            label: '基础用法'
          },
          {
            key: 'filter',
            path: '/example/filter',
            label: '过滤'
          },
          {
            key: 'pagination',
            path: '/example/pagination',
            label: '分页'
          },
          {
            key: 'custom-params',
            path: '/example/custom-params',
            label: '自定义参数'
          },
          {
            key: 'complex',
            path: '/example/complex',
            label: '复杂示例'
          }
        ])
      },
      children: [
        {
          path: '/example/basic',
          component: () => import('../demos/zhCN/basic/basic.demo.md')
        },
        {
          path: '/example/custom-params',
          component: () =>
            import('../demos/zhCN/custom-params/custom-params.demo.md')
        },
        {
          path: '/example/filter',
          component: () => import('../demos/zhCN/filter/filter.demo.md')
        },
        {
          path: '/example/pagination',
          component: () => import('../demos/zhCN/pagination/pagination.demo.md')
        },
        {
          path: '/example/complex',
          component: () => import('../demos/zhCN/complex/complex.demo.md')
        }
      ]
    }
  ]
})

export { router }
