<template>
  <div class="demo-header">
    ProTable
    <n-space align="center">
      <router-link to="/started" custom v-slot="{ navigate }">
        <n-button @click="navigate" quaternary> 开始 </n-button>
      </router-link>
      <router-link to="/api" custom v-slot="{ navigate }">
        <n-button @click="navigate" quaternary> Api </n-button>
      </router-link>
      <router-link to="/example" custom v-slot="{ navigate }">
        <n-button @click="navigate" quaternary> 示例 </n-button>
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
</script>

<style scoped lang="scss">
.demo-header {
  display: flex;
  justify-content: space-between;
}
</style>
