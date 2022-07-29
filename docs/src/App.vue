<template>
  <n-layout style="min-height: 100vh">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      <DemoHeader />
    </n-layout-header>
    <n-layout
      position="absolute"
      style="top: 64px; bottom: 64px"
      :has-sider="useHeader"
    >
      <n-layout-sider
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
        v-if="useHeader"
      >
        <SiderMenus />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <router-view></router-view>
      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
    >
      <DocsFooter />
    </n-layout-footer>
  </n-layout>
</template>
<script lang="ts" setup>
import SiderMenus from './components/SiderMenus.vue'
import DemoHeader from './components/DocsHeader.vue'
import DocsFooter from './components/DocsFooter.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const useHeader = computed(() => {
  return route.meta.useHeader === false ? false : true
})
</script>
