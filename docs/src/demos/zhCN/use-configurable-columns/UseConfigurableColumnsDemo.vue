<template>
  <ProTable
    ref="proTableRef"
    :columns="proTableColumnsRef"
    :api-request="apiRequest"
  ></ProTable>
  <Draggable :list="configurableColumnsRef" :sort="true" item-key="key">
    <template #item="{ element }">
      <div>
        <n-checkbox v-model:checked="element.visible"></n-checkbox>
        <span>{{ element.key }}</span>
        <span>--</span>
        <component
          v-if="typeof element.title === 'function'"
          :is="element.title()"
        ></component>
        <span v-else>{{ element.title }}</span>
      </div>
    </template>
    <template #footer>
      <n-button size="small" @click="reset">重置</n-button>
    </template>
  </Draggable>
</template>
<script setup lang="ts">
import { h, ref } from 'vue'
import Draggable from 'vuedraggable' // "vuedraggable": "^4.1.0"
import ProTable, {
  useConfigurableColumns,
  ApiRequest,
  ProTableIns,
  ConfigurableInitColumn,
  Config
} from 'naive-ui-protable-alpha'

const proTableRef = ref<ProTableIns | null>(null)
type Column = {
  name: string
  gender: 'man' | 'woman' | 'none'
  address: string
  age: number
}
const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: Column[] } => {
  console.log(params, sort, filter, page, pageSize)

  const data: Column[] = [
    {
      name: 'John Brown',
      gender: 'man',
      address: 'New York No. 1 Lake Park',
      age: 24
    },
    {
      name: 'Jim Green',
      gender: 'none',
      address: 'London No. 1 Lake Park',
      age: 22
    },
    {
      name: 'Megumi Noda',
      gender: 'woman',
      address: 'Paris No.7 Mozart',
      age: 26
    },
    {
      name: 'Shinichi Chiaki',
      gender: 'man',
      address: 'Paris No.7 Mozart',
      age: 21
    },
    {
      name: 'Jolyne Cujoh',
      gender: 'woman',
      address: 'New York No.1 Lake Park',
      age: 34
    }
  ]
  return {
    pageSize: 15,
    itemCount: 5,
    data
  }
}

const columns: ConfigurableInitColumn[] = [
  {
    title: 'Gender',
    dataIndex: 'gender'
  },
  {
    title: () => h('span', { style: 'color:red;' }, 'Name') as any,
    dataIndex: 'name'
  },

  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    configurable: {
      visible: false
    }
  }
]
const config: Config = {
  storage: {
    mode: 'localStorage',
    storageKey: 'asTable'
  }
}
const { reset, configurableColumnsRef, proTableColumnsRef } =
  useConfigurableColumns(columns, config)

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
