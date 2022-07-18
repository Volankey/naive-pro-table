import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/': [
    {
      text: '指引',
      children: ['/guide/index.md']
    },
    {
      text: '示例',
      children: [
        {
          text: '复杂示例',
          link: '/demo/complex/'
        },
        {
          text: '可复制列',
          link: '/demo/copyable/'
        },
        {
          text: '表头分组',
          link: '/demo/header-grouped/'
        },
        {
          text: '排序',
          link: '/demo/sort/'
        },
        {
          text: '过滤',
          link: '/demo/filter/'
        },
        {
          text: '自定义参数',
          link: '/demo/custom-params/'
        },
        {
          text: '分页',
          link: '/demo/pagination/'
        },
        {
          text: '同步路由',
          link: '/demo/sync-route/'
        }
      ]
    }
  ]
}
