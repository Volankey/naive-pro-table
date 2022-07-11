import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("NpmBadge", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/.vuepress/components/NpmBadge.vue")))
  },
}
