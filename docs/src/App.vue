<template>
  <n-config-provider>
    <n-layout style="min-height: 100vh">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        <DemoHeader />
      </n-layout-header>
      <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
        <n-layout-sider
          content-style="padding: 24px;"
          :native-scrollbar="false"
          bordered
          v-if="useMenu"
        >
          <SiderMenus />
        </n-layout-sider>
        <n-layout
          content-style="padding: 24px;"
          :native-scrollbar="false"
          has-sider
        >
          <n-layout-content>
            <router-view></router-view>
          </n-layout-content>
          <n-layout-sider
            content-style="padding: 24px;"
            v-if="useAnchor"
            width="180px"
          >
            <SiderAnchor />
          </n-layout-sider>
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
  </n-config-provider>
</template>
<script lang="ts" setup>
import SiderMenus from './components/SiderMenus.vue'
import SiderAnchor from './components/SiderAnchor'
import DemoHeader from './components/DocsHeader.vue'
import DocsFooter from './components/DocsFooter.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const useMenu = computed(() => {
  return route.meta.useMenu === false ? false : true
})
const useAnchor = computed(() => {
  return route.meta.useAnchor === false ? false : true
})
</script>
