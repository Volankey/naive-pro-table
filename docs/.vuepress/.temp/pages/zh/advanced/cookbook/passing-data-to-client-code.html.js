export const data = JSON.parse("{\"key\":\"v-10b13bae\",\"path\":\"/zh/advanced/cookbook/passing-data-to-client-code.html\",\"title\":\"向客户端代码传递数据\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"使用 define Hook\",\"slug\":\"使用-define-hook\",\"children\":[]},{\"level\":2,\"title\":\"写入并加载临时文件\",\"slug\":\"写入并加载临时文件\",\"children\":[]}],\"filePathRelative\":\"zh/advanced/cookbook/passing-data-to-client-code.md\"}")

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
