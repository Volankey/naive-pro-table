export const data = JSON.parse("{\"key\":\"v-acb10be2\",\"path\":\"/guide/i18n.html\",\"title\":\"I18n\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Site I18n Config\",\"slug\":\"site-i18n-config\",\"children\":[]},{\"level\":2,\"title\":\"Theme I18n Config\",\"slug\":\"theme-i18n-config\",\"children\":[]}],\"filePathRelative\":\"guide/i18n.md\"}")

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
