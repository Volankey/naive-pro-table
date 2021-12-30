import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Main from './Main.vue'
import App from './App.vue'
import { parse, stringify } from 'qs'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App
    }
  ]
})
const app = createApp(Main)
app.use(router)
app.mount('#app')
