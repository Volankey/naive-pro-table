<template>
  <div class="demo-header">
    ProTable
    <n-space>
      <router-link to="/started" custom v-slot="{ navigate }">
        <n-button @click="navigate" quaternary> 开始 </n-button>
      </router-link>
      <router-link to="/api" custom v-slot="{ navigate }">
        <n-button @click="navigate" quaternary> Api </n-button>
      </router-link>
      <router-link to="/example" custom v-slot="{ navigate }">
        <n-button @click="navigate" quaternary> 示例 </n-button>
      </router-link>
    </n-space>
  </div>
</template>

<style scoped lang="scss">
.demo-header {
  display: flex;
  justify-content: space-between;
}
</style>
