export const themeData = JSON.parse("{\"logo\":\"/images/hero.svg\",\"repo\":\"Volankey/naive-pro-table\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"指引\",\"link\":\"/guide/\"},{\"text\":\"示例\",\"link\":\"/demo/complex\"},{\"text\":\"Api\",\"link\":\"/api/\"}],\"sidebar\":{\"/\":[{\"text\":\"指引\",\"children\":[\"/guide/index.md\"]},{\"text\":\"示例\",\"children\":[{\"text\":\"复杂示例\",\"link\":\"/demo/complex/\"},{\"text\":\"可复制列\",\"link\":\"/demo/copyable/\"},{\"text\":\"表头分组\",\"link\":\"/demo/header-grouped/\"},{\"text\":\"排序\",\"link\":\"/demo/sort/\"},{\"text\":\"过滤\",\"link\":\"/demo/filter/\"},{\"text\":\"自定义参数\",\"link\":\"/demo/custom-params/\"},{\"text\":\"分页\",\"link\":\"/demo/pagination/\"},{\"text\":\"同步路由\",\"link\":\"/demo/sync-route/\"}]}]},\"editLinkText\":\"去 GitHub 上编辑此页\",\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
