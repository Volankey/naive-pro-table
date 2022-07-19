import { defineClientConfig } from '@vuepress/client'
import { isEqual } from 'lodash-es'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    let preFullPath = null
    router.beforeEach((to, from) => {
      if (to.path === from.path && to.fullPath !== from.fullPath) {
        if (!isEqual(from.query, to.query) && preFullPath !== to.fullPath) {
          const nextRouter = router.resolve({
            ...to,
            query: {
              ...from.query,
              ...to.query
            }
          })
          preFullPath = nextRouter.fullPath
          return nextRouter
        }
      }
    })
  },
  setup() {},
  rootComponents: []
})
