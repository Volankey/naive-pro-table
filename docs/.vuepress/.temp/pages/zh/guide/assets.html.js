export const data = JSON.parse("{\"key\":\"v-029ba47b\",\"path\":\"/zh/guide/assets.html\",\"title\":\"静态资源\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"相对路径\",\"slug\":\"相对路径\",\"children\":[]},{\"level\":2,\"title\":\"Public 文件\",\"slug\":\"public-文件\",\"children\":[{\"level\":3,\"title\":\"Base Helper\",\"slug\":\"base-helper\",\"children\":[]}]},{\"level\":2,\"title\":\"依赖包和路径别名\",\"slug\":\"依赖包和路径别名\",\"children\":[]}],\"filePathRelative\":\"zh/guide/assets.md\"}")

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
