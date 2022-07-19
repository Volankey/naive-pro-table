import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("ComplexDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/ComplexDemo.vue"))),
      app.component("CopyableDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/CopyableDemo.vue"))),
      app.component("CustomParamsDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/CustomParamsDemo.vue"))),
      app.component("FilterDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/FilterDemo.vue"))),
      app.component("HeaderGroupedDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/HeaderGroupedDemo.vue"))),
      app.component("MultipleSortDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/MultipleSortDemo.vue"))),
      app.component("PaginationDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/PaginationDemo.vue"))),
      app.component("SingleSortDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/SingleSortDemo.vue"))),
      app.component("SyncRoutePrefixDemo", defineAsyncComponent(() => import("/home/tusimple/Documents/naive-ui-protable/docs/demo/demo-components/SyncRoutePrefixDemo.vue")))
  },
}
