<template>
  <ProTable
    :columns="columns"
    :header-title="'高级表格'"
    :tool-bars="renderToolBars"
  />
</template>

<script lang="ts">
import { NButton } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'
import ProTable from '../src/index'
import type { ProColumn } from '../src/interface'

type Column = {
  name: string
  age: number
  sex: 'man' | 'woman'
  favorates: string[]
  otherInfo:{
    parents:string[]
  }
}

export default defineComponent({
  components: {
    ProTable
  },
  setup() {
    const columns = ref<ProColumn<Column>[]>([
      {
        title: 'name',
        dataIndex: 'name'
      },
      {
        title: 'age',
        dataIndex: 'age'
      },
      {
        title: 'sex',
        dataIndex: 'sex'
      },
      {
        title: 'favoraties',
        dataIndex: 'favorates'
      },
      {
        title: 'parents',
        dataIndex:'otherInfo.parents'
      }
    ])
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
      renderToolBars,
      columns
    }
  }
})
</script>

<style></style>
