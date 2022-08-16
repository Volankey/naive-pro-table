<template>
  <div class="demo-header">
    ProTable
    <n-space align="center">
      <router-link to="/started" custom v-slot="{ navigate }">
        <n-button
          @click="navigate"
          quaternary
          :style="{ background: getBgActiveColor('/started') }"
        >
          开始
        </n-button>
      </router-link>
      <router-link to="/api" custom v-slot="{ navigate }">
        <n-button
          @click="navigate"
          quaternary
          :style="{ background: getBgActiveColor('/api') }"
        >
          Api
        </n-button>
      </router-link>
      <router-link to="/example" custom v-slot="{ navigate }">
        <n-button
          @click="navigate"
          quaternary
          :style="{ background: getBgActiveColor('/example') }"
        >
          示例
        </n-button>
      </router-link>
      <n-button
        target="_blank"
        quaternary
        href="https://github.com/Volankey/naive-pro-table"
        tag="a"
        >Github</n-button
      >
      <n-text>{{ version }}</n-text>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { version } from '../version'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useThemeVars } from 'naive-ui'

const route = useRoute()
const themeVars = useThemeVars()

const path = computed(() => route.path)
const getBgActiveColor = (activePath: string) => {
  return path.value.includes(activePath)
    ? themeVars.value.buttonColor2Pressed
    : 'transparent'
}
</script>

<style scoped lang="scss">
.demo-header {
  display: flex;
  justify-content: space-between;
}
</style>
