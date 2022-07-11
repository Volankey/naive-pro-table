export const data = JSON.parse("{\"key\":\"v-4f4ccb8f\",\"path\":\"/guide/configuration.html\",\"title\":\"Configuration\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Config File\",\"slug\":\"config-file\",\"children\":[]},{\"level\":2,\"title\":\"Client Config File\",\"slug\":\"client-config-file\",\"children\":[]}],\"filePathRelative\":\"guide/configuration.md\"}")

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
