<template>
  <n-menu
    :render-label="renderLabel"
    :options="menuOptions"
    :value="currentKey"
  />
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed, h } from 'vue'
import { useMenus } from '../hooks/menus/use-menus'

function renderLabel(option: { label: string; key: string; path: string }) {
  return h(
    RouterLink,
    {
      to: {
        path: option.path
      }
    },
    {
      default: () => option.label
    }
  )
}
const { menuOptions } = useMenus()
const route = useRoute()
const currentKey = computed(() => {
  return (
    menuOptions.value.find((item) => item.path === route.path)?.key ??
    menuOptions.value[0].key
  )
})
</script>
