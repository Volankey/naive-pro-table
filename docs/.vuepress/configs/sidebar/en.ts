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
        }
      ]
    }
  ]
}
