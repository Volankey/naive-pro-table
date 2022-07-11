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
      address: 'New York No. 1 Lake Park',
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      chinese: 88,
      math: 99,
      english: 89
    }
  ]
  return {
    pageSize: 15,
    itemCount: 4,
    data
  }
}

type Column = {
  name: string
  age: number
  chinese: number
  math: number
  english: number
  address: string
}

const proTableRef = ref<ProTableIns | null>(null)
const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: true,
    syncRouteSorter: {
      name: 'age',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    key: 'chinese',
    sorter: {
      compare: (row1, row2) => row1.chinese - row2.chinese,
      multiple: 3
    }
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    key: 'math',
    sorter: {
      compare: (row1, row2) => row1.math - row2.math,
      multiple: 2
    }
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    key: 'english',
    sorter: {
      compare: (row1, row2) => row1.english - row2.english,
      multiple: 1
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filter: true,
    syncRouteFilter: {
      name: 'addrFilter',
      rule: {
        type: 'string'
      }
    },
    valueEnum: {
      newYork: {
        label: 'New York'
      },
      london: {
        label: 'London'
      }
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
