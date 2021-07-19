<template>
  <div>
    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
      label-placement="left"
      :label-width="160"
      :size="size"
      :style="{
        maxWidth: '640px'
      }"
    >
      <ColumnConfigItem
        v-for="(item, index) in model"
        :model="item"
        index
        @delete="onDeleteItem(index)"
      />
    </n-form>
    <n-button type="primary" dashed @click="onAddColumnItem">新增列</n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ColumnConfigItem from './ColumnConfigItem.vue'
import { ColumnsModel } from './types'
import { NButton } from 'naive-ui'

export default defineComponent({
  components: {
    ColumnConfigItem,
    NButton
  },
  setup() {
    const modelRef = ref<ColumnsModel>([])
    const onAddColumnItem = () => {
      modelRef.value.push({
        title: null,
        ellipsis: false,
        columnTip: null
      })
    }
    const onDeleteItem = (index: number) => {
      modelRef.value.splice(index, 1)
    }
    return {
      model: modelRef,
      onAddColumnItem,
      onDeleteItem
    }
  }
})
</script>

<style></style>
