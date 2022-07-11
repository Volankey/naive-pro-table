import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: '指引',
    link: '/guide/'
  },
  {
    text: '示例',
    link: '/demo/'
  },
  {
    text: 'Api',
    link: '/api/'
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md'
      },
      {
        text: 'v1.x',
        link: 'https://v1.vuepress.vuejs.org'
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org'
      }
    ]
  }
]
