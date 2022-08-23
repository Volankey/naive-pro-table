<template>
  <ProTable
    ref="proTableRef"
    :sync-route="false"
    :columns="columns"
    :api-request="apiRequest"
    :paginate-no-data="paginateNoData"
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
    paginateNoData?: boolean
  }>(),
  {
    paginateNoData: true
  }
)

const proTableRef = ref<ProTableIns | null>(null)
type Column = {
  name: string
  gender: 'man' | 'woman' | 'none'
  address: string
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
    key: 'gender'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
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
  return Promise.resolve({ data: [], pageSize: 15, itemCount: 0 })
}
</script>
