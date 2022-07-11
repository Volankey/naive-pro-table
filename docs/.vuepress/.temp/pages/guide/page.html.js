export const data = JSON.parse("{\"key\":\"v-4eaf9f84\",\"path\":\"/guide/page.html\",\"title\":\"Page\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Routing\",\"slug\":\"routing\",\"children\":[]},{\"level\":2,\"title\":\"Frontmatter\",\"slug\":\"frontmatter\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"children\":[]}],\"filePathRelative\":\"guide/page.md\"}")

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
