<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <div>
    <n-form-item label="标题" path="title">
      <n-input v-model:value="model.title" placeholder="输入标题" />
    </n-form-item>
    <n-form-item label="省略" path="ellipsis">
      <n-switch v-model:value="model.ellipsis" />
    </n-form-item>
    <n-form-item label="列提示" path="columnTip">
      <n-input v-model:value="model.columnTip" />
    </n-form-item>
    <n-button circle>
      <template #icon>
        <n-icon @click="onDeleteItem">
          <TrashOutline />
        </n-icon>
      </template>
    </n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { NFormItem, NSwitch, NIcon } from 'naive-ui'
import { ColumnItemModel } from './types'
import { TrashOutline } from '@vicons/ionicons5'

export default defineComponent({
  components: {
    NFormItem,
    NSwitch,
    TrashOutline,
    NIcon
  },
  props: {
    model: {
      type: Object as PropType<ColumnItemModel>,
      default: () => ({})
    },
    index: Number
  },
  emits: ['delete'],
  setup(props, context) {
    const onDeleteItem = () => {
      context.emit('delete', props.index)
    }
    return {
      onDeleteItem
    }
  }
})
</script>
