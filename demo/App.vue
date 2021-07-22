<template>
  <ProTable :header-title="'高级表格'" :tool-bars="renderToolBars" />
</template>

<script lang="ts">
import { NButton } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'
import ProTable from '../src/index'

export default defineComponent({
  components: {
    ProTable
  },
  setup() {
    const renderToolBars = ref([
      () =>
        h(
          NButton,
          { type: 'primary' },
          {
            default: () => '刷新'
          }
        )
    ])
    return {
      renderToolBars
    }
  }
})
</script>

<style></style>
