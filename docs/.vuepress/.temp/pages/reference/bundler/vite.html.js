export const data = JSON.parse("{\"key\":\"v-cf5a290e\",\"path\":\"/reference/bundler/vite.html\",\"title\":\"Vite\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Options\",\"slug\":\"options\",\"children\":[{\"level\":3,\"title\":\"viteOptions\",\"slug\":\"viteoptions\",\"children\":[]},{\"level\":3,\"title\":\"vuePluginOptions\",\"slug\":\"vuepluginoptions\",\"children\":[]}]},{\"level\":2,\"title\":\"FAQ\",\"slug\":\"faq\",\"children\":[{\"level\":3,\"title\":\"SSR Externals Issue\",\"slug\":\"ssr-externals-issue\",\"children\":[]}]}],\"filePathRelative\":\"reference/bundler/vite.md\"}")

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
