import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { head, navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'

const isProd = process.env.NODE_ENV === 'production'
console.log(path.resolve(__dirname, '../demo/demo-components'))

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'NaiveUI Protable',
      description: 'NaiveUI Protable'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'NaiveUI Protable',
      description: '基于NaiveUI的高级表格组件'
    }
  },

  // specify bundler via environment variable
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          'naive-ui-protable-alpha': path.resolve(
            __dirname,
            '../../packages/src/index.ts'
          )
        }
      },
      // @ts-expect-error Invalid types can be ignored
      ssr: {
        noExternal: ['naive-ui-protable-alpha', 'naive-ui', 'lodash-es']
      }
    }
  }),

  // configure default theme
  theme: defaultTheme({
    logo: '/images/hero.svg',
    repo: 'Volankey/naive-pro-table',
    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // // page meta
        editLinkText: '去 GitHub 上编辑此页'
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd
    }
  }),

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^naive-ui-protable-alpha/,
          path.resolve(__dirname, '../../packages/src/index.ts')
        )
    }
  },

  // use plugins
  plugins: [
    // docsearchPlugin({
    //   appId: '34YFD9IUQ2',
    //   apiKey: '9a9058b8655746634e01071411c366b8',
    //   indexName: 'vuepress',
    //   searchParameters: {
    //     facetFilters: ['tags:v2']
    //   },
    //   locales: {
    //     '/zh/': {
    //       placeholder: '搜索文档',
    //       translations: {
    //         button: {
    //           buttonText: '搜索文档',
    //           buttonAriaLabel: '搜索文档'
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: '清除查询条件',
    //             resetButtonAriaLabel: '清除查询条件',
    //             cancelButtonText: '取消',
    //             cancelButtonAriaLabel: '取消'
    //           },
    //           startScreen: {
    //             recentSearchesTitle: '搜索历史',
    //             noRecentSearchesText: '没有搜索历史',
    //             saveRecentSearchButtonTitle: '保存至搜索历史',
    //             removeRecentSearchButtonTitle: '从搜索历史中移除',
    //             favoriteSearchesTitle: '收藏',
    //             removeFavoriteSearchButtonTitle: '从收藏中移除'
    //           },
    //           errorScreen: {
    //             titleText: '无法获取结果',
    //             helpText: '你可能需要检查你的网络连接'
    //           },
    //           footer: {
    //             selectText: '选择',
    //             navigateText: '切换',
    //             closeText: '关闭',
    //             searchByText: '搜索提供者'
    //           },
    //           noResultsScreen: {
    //             noResultsText: '无法找到相关结果',
    //             suggestedQueryText: '你可以尝试查询',
    //             reportMissingResultsText: '你认为该查询应该有结果？',
    //             reportMissingResultsLinkText: '点击反馈'
    //           }
    //         }
    //       }
    //     }
    //   }
    // }),
    googleAnalyticsPlugin({
      // we have multiple deployments, which would use different id
      id: process.env.DOCS_GA_ID ?? ''
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../demo/demo-components')
    }),

    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : []
  ]
})
