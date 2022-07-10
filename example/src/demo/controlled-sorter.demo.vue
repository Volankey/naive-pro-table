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
      age: 38,
      gender: 'man'
    },
    {
      name: 'Jim Green',
      age: 42,
      gender: 'none'
    },
    {
      name: 'Megumi Noda',
      age: 20,
      gender: 'woman'
    },
    {
      name: 'Shinichi Chiaki',
      age: 21,
      gender: 'man'
    },
    {
      name: 'Jolyne Cujoh',
      age: 16,
      gender: 'woman'
    }
  ]
  return {
    pageSize: 15,
    itemCount: 5,
    data
  }
}

type Column = {
  name: string
  age: number
  gender: 'man' | 'woman' | 'none'
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
    sortOrder: false,
    syncRouteSorter: {
      name: 'age',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    filter: true,
    syncRouteFilter: {
      name: 'gender',
      rule: {
        type: 'array'
      }
    },
    valueEnum: {
      man: {
        label: '男'
      },
      woman: {
        label: '女'
      },
      none: {
        label: '无'
      }
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
