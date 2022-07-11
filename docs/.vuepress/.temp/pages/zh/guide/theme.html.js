export const data = JSON.parse("{\"key\":\"v-2efcb26a\",\"path\":\"/zh/guide/theme.html\",\"title\":\"主题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"默认主题\",\"slug\":\"默认主题\",\"children\":[]},{\"level\":2,\"title\":\"社区主题\",\"slug\":\"社区主题\",\"children\":[]},{\"level\":2,\"title\":\"本地主题\",\"slug\":\"本地主题\",\"children\":[]}],\"filePathRelative\":\"zh/guide/theme.md\"}")

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
