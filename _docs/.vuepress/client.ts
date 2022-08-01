import { defineClientConfig } from '@vuepress/client'
import isEqual from 'lodash-es/isEqual'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(router)
    router.isReady().then(() => {
      console.log(router)
      app.mount('#app')
    })
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
