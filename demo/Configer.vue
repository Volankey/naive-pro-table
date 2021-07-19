<template>
  <n-drawer :show="show" @update:show="onUpdateShow">
    <n-tabs type="line">
      <n-tab-pane name="basic" tab="基本配置">基本配置</n-tab-pane>
      <n-tab-pane name="column config" tab="列配置">列配置</n-tab-pane>
    </n-tabs>
  </n-drawer>
</template>

<script>
import { defineComponent } from 'vue'
import { NTabs, NTabPane, NDrawer } from 'naive-ui'

export default defineComponent({
  props: {
    show: Boolean
  },
  components: {
    NTabs,
    NTabPane,
    NDrawer
  },
  methods: {
    onUpdateShow(showValue) {
      this.$emit('onUpdate:show', showValue)
    }
  }
})
</script>

<style></style>
