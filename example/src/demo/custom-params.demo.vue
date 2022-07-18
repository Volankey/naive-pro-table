<template>
  <div>
    name:
    <n-input
      :value="customParamsStore.customParamsValue.value.search"
      style="width: 300px"
      @update:value="customParamsStore.updateCustomParams('search', $event)"
    ></n-input>
    age:
    <n-input
      :value="customParamsStore.customParamsValue.value.age"
      style="width: 300px"
      @update:value="customParamsStore.updateCustomParams('age', $event)"
    ></n-input>
    <ProTable
      ref="proTableRef"
      :columns="columns"
      :api-request="apiRequest"
      :customParamsStore="customParamsStore"
    />
  </div>
</template>

<script lang="ts" setup>
import { NInput } from 'naive-ui'
import { ref } from 'vue'
import ProTable, { useCustomParamsStore } from 'naive-ui-protable-alpha'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

const createSourceData = (
  params: { age: number; search: string },
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: Column[] } => {
  console.log('fetch query: ', {
    params,
    sort,
    filter,
    page,
    pageSize
  })
  const data: Column[] = new Array(10).fill(1).map((_, idx) => ({
    name: 'Jonny' + idx + params.search,
    age: params.age ? params.age : 10 + idx,
    birthday: +new Date() - (10 + idx) * 3600 * 1000 * 24 * 365,
    lastLogin: +new Date() - (10 + idx) * Math.random() * 3600 * 24
  }))
  return {
    pageSize: 15,
    itemCount: 10,
    data
  }
}
const customParamsStore = useCustomParamsStore({
  search: null,
  age: null
})

type Column = {
  name: string
  age: number
  birthday: number
  lastLogin: number
}
const proTableRef = ref<ProTableIns | null>(null)
const columns = ref<ProColumn<Column>[]>([
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    ellipsis: true,
    copyable: true
  },
  {
    title: 'age',
    dataIndex: 'age',
    key: 'age',
    sorter: true,
    sortOrder: false,
    syncRouteSorter: {
      name: 'age',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'birthday',
    dataIndex: 'birthday',
    valueType: 'date'
  },
  {
    title: 'last login',
    dataIndex: 'lastLogin',
    valueType: 'fromNow'
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  console.log('fetch query: ', {
    params,
    sort,
    filter,
    page,
    pageSize
  })
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
