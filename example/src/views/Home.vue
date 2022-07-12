<template>
  <n-space vertical>
    <router-link :to="{ name: 'filter-and-sorter' }">
      非受控过滤及排序
    </router-link>
    <router-link :to="{ name: 'multiple-sorter' }">多列排序</router-link>
    <router-link :to="{ name: 'header-grouped' }">表头分组</router-link>
    <router-link :to="{ name: 'copyable' }">可复制</router-link>
    <router-link :to="{ name: 'sync-route' }">同步路由</router-link>
    <router-link :to="{ name: 'custom-params' }">自定义参数</router-link>
  </n-space>
</template>

<script setup lang="ts">
import { NSpace } from 'naive-ui'
</script>
