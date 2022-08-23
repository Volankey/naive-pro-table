<template>
  <ProTable
    ref="proTableRef"
    :sync-route="false"
    :columns="columns"
    :api-request="apiRequest"
    :pagination-no-data="paginationNoData"
  >
    <template #empty>
      <slot name="empty" />
    </template>
  </ProTable>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProTable from 'naive-ui-protable-alpha'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

withDefaults(
  defineProps<{
    paginationNoData?: boolean
  }>(),
  {
    paginationNoData: true
  }
)

const proTableRef = ref<ProTableIns | null>(null)
type Column = {
  name: string
  gender: 'man' | 'woman' | 'none'
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
  const data: Column[] = []
  return {
    pageSize: 15,
    itemCount: 0,
    data
  }
}

const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
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
    filterOptions: [
      {
        label: '男',
        value: 'man'
      },
      {
        label: '女',
        value: 'woman'
      },
      {
        label: '无',
        value: 'none'
      }
    ]
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filter: true,
    sorter: true,
    syncRouteFilter: {
      name: 'addr',
      rule: {
        type: 'array'
      }
    },
    syncRouteSorter: {
      name: 'addr',
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
      },
      paris: {
        label: 'Paris'
      }
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
