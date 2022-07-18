<template>
  <n-space vertical>
    <n-space justify="space-between">
      <div>
        name:
        <n-input
          :value="customParamsStore.customParamsValue.value.suffix"
          style="width: 300px"
          @update:value="customParamsStore.updateCustomParams('suffix', $event)"
        />
      </div>
      <div>
        age:
        <n-input
          :value="customParamsStore.customParamsValue.value.age"
          style="width: 300px"
          @update:value="customParamsStore.updateCustomParams('age', $event)"
        />
      </div>
    </n-space>
    <ProTable
      ref="proTableRef"
      :columns="columns"
      :api-request="apiRequest"
      :customParamsStore="customParamsStore"
      :pagination="{
        defaultPage: 1
      }"
    />
  </n-space>
</template>

<script lang="ts" setup>
import { NInput, NSpace } from 'naive-ui'
import { ref } from 'vue'
import ProTable, { useCustomParamsStore } from 'naive-ui-protable-alpha'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

const proTableRef = ref<ProTableIns | null>(null)
const customParamsStore = useCustomParamsStore({
  suffix: null,
  age: null
})

type Column = {
  name: string
  age: number
  birthday: number
  lastLogin: number
}

const createSourceData = (
  params: { age: number; suffix: string },
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
  const data: Column[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name:
      params && params.suffix
        ? 'Jonny ' + params.suffix
        : 'Jonny' + ((page - 1) * pageSize + idx),
    age: params.age ? params.age : 10 + idx,
    birthday: +new Date() - (10 + idx) * 3600 * 1000 * 24 * 365,
    lastLogin: +new Date() - (10 + idx) * Math.random() * 3600 * 24
  }))
  return {
    pageSize,
    itemCount: 20,
    data
  }
}

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

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize = 5) => {
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
