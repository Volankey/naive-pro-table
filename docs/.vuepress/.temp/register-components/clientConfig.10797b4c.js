import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("ComplexDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/ComplexDemo.vue")))
  },
}
