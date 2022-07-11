export const data = JSON.parse("{\"key\":\"v-6f1f3595\",\"path\":\"/guide/bundler.html\",\"title\":\"Bundler\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Choose a Bundler\",\"slug\":\"choose-a-bundler\",\"children\":[]},{\"level\":2,\"title\":\"Configure Bundler\",\"slug\":\"configure-bundler\",\"children\":[]}],\"filePathRelative\":\"guide/bundler.md\"}")

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
