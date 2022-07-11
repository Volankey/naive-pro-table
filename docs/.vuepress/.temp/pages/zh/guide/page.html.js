export const data = JSON.parse("{\"key\":\"v-7a8fca2f\",\"path\":\"/zh/guide/page.html\",\"title\":\"页面\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"路由\",\"slug\":\"路由\",\"children\":[]},{\"level\":2,\"title\":\"Frontmatter\",\"slug\":\"frontmatter\",\"children\":[]},{\"level\":2,\"title\":\"内容\",\"slug\":\"内容\",\"children\":[]}],\"filePathRelative\":\"zh/guide/page.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
