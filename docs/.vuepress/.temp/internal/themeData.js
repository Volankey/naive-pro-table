export const themeData = JSON.parse("{\"logo\":\"/images/hero.png\",\"repo\":\"vuepress/vuepress-next\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"指引\",\"link\":\"/guide/\"},{\"text\":\"示例\",\"link\":\"/demo/\"},{\"text\":\"Api\",\"link\":\"/api/\"},{\"text\":\"v0.0.4\",\"children\":[{\"text\":\"Changelog\",\"link\":\"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md\"},{\"text\":\"v1.x\",\"link\":\"https://v1.vuepress.vuejs.org\"},{\"text\":\"v0.x\",\"link\":\"https://v0.vuepress.vuejs.org\"}]}],\"sidebar\":{\"/\":[{\"text\":\"指引\",\"children\":[\"/guide/index.md\"]},{\"text\":\"示例\",\"children\":[{\"text\":\"复杂示例\",\"link\":\"/demo/complex/\"}]}]},\"editLinkText\":\"Edit this page on GitHub\",\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
