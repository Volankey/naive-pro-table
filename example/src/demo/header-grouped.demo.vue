<template>
  <ProTable
    ref="proTableRef"
    :columns="columns"
    :api-request="apiRequest"
    :pagination="{
      showSizePicker: true,
      showQuickJumper: true,
      defaultPageSize: 14,
      defaultPage: 1,
      pageSizes: [14, 20, 50]
    }"
  />
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
  const data: Column[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name: 'name_' + ((page - 1) * pageSize + idx),
    homework1: Math.round(Math.random() * 100),
    exam1: Math.round(Math.random() * 100),
    homework2: Math.round(Math.random() * 100),
    exam2: Math.round(Math.random() * 100),
    bonus: Math.round(Math.random() * 100),
    total: Math.round(Math.random() * 100)
  }))
  return {
    pageSize,
    itemCount: data.length,
    data
  }
}

type Column = {
  name: string
  homework1: number
  exam1: number
  homework2: number
  exam2: number
  bonus: number
  total: number
}

const proTableRef = ref<ProTableIns | null>(null)
const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Course',
    dataIndex: 'course',
    key: 'course',
    children: [
      {
        title: 'Math',
        dataIndex: 'math',
        key: 'math',
        children: [
          {
            title: 'Homework',
            dataIndex: 'homework1',
            key: 'homework1',
            sorter: {
              multiple: 2
            },
            syncRouteSorter: {
              name: 'homework',
              rule: {
                type: 'string'
              }
            }
          },
          {
            title: 'Examination',
            dataIndex: 'exam1',
            key: 'exam1',
            sorter: {
              multiple: 1
            },
            syncRouteSorter: {
              name: 'exam',
              rule: {
                type: 'string'
              }
            }
          }
        ]
      },
      {
        title: 'Domain',
        dataIndex: 'domain',
        key: 'domain',
        children: [
          {
            title: 'Homework',
            dataIndex: 'homework2',
            key: 'homework2',
            sorter: {
              multiple: 2
            },
            syncRouteSorter: {
              name: 'homework',
              rule: {
                type: 'string'
              }
            }
          },
          {
            title: 'Examination',
            dataIndex: 'exam2',
            key: 'exam2',
            sorter: {
              multiple: 1
            },
            syncRouteSorter: {
              name: 'exam',
              rule: {
                type: 'string'
              }
            }
          }
        ]
      }
    ]
  },
  {
    title: 'Bonus',
    dataIndex: 'bonus',
    key: 'bonus'
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total'
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
