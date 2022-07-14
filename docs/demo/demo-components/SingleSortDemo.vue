<template>
  <ProTable ref="proTableRef" :columns="columns" :api-request="apiRequest" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProTable from 'naive-ui-protable-alpha'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

const proTableRef = ref<ProTableIns | null>(null)
type Column = {
  name: string
  age: number
  address: string
}

const createSourceData = (
  params: unknown,
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
  const data: Column[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ]
  return {
    pageSize: 15,
    itemCount: 4,
    data
  }
}

const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    syncRouteSorter: {
      name: 'age',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (row1, row2) => row1.age - row2.age,
    syncRouteSorter: {
      name: 'age',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter: 'default',
    syncRouteSorter: {
      name: 'address',
      rule: {
        type: 'string'
      }
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
