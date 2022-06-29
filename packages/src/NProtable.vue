<script lang="ts" setup>
import {
  computed,
  ref,
  watch,
  onMounted,
  withDefaults,
  defineExpose
} from 'vue'
import type {
  PaginationProps,
  DataTableProps,
  DataTableColumns
} from 'naive-ui'
import { NDataTable } from 'naive-ui'
import type { ApiRequest, ProColumn } from './interface'
import { getColumnsRouteRules, handleColumn, useTableRequest } from './utils'
import { TableParamsStore } from './table-params-store'
import { syncFromRouter, syncRouterQuery } from './router-sync'
import type { QueryOptions } from './table-params-store/types'
import { debounce } from 'lodash-es'

const props = withDefaults(
  defineProps<{
    dataTableProps?: Partial<DataTableProps>
    apiRequest: ApiRequest
    columns: ProColumn<any>[]
    pagination?: Partial<PaginationProps>
    remote: boolean
    queryPrefix?: string
    syncRoute: boolean
  }>(),
  {
    remote: true,
    syncRoute: true,
  },
)

const syncRouteRuleColumnRef = ref(getColumnsRouteRules(props.columns))
watch(
  () => props.columns,
  () => {
    syncRouteRuleColumnRef.value = getColumnsRouteRules(props.columns)
  }
)

const handleSyncRouterQuery = syncRouterQuery()
const handleUpdateQuery = debounce((query: QueryOptions<false>) => {
  handleSyncRouterQuery(query, props.queryPrefix)
  handleFetchTableData()
})
const paramsStoreRef = computed(
  () =>
    new TableParamsStore({
      keyMapColumnAndRule: syncRouteRuleColumnRef.value,
      onUpdateQuery: props.syncRoute ? handleUpdateQuery : () => {},
    }),
)

const loadingRef = ref(false)
const pageCountRef = ref(0)
const itemCountRef = ref(0)

const mergedPaginationRef = computed(() => {
  const res = {
    ...(props.pagination && typeof props.pagination === 'object'
      ? props.pagination
      : {}),
    ...paginationRef.value
  }
  if (itemCountRef.value) {
    res.itemCount = itemCountRef.value
  } else {
    res.pageCount = pageCountRef.value
  }
  return res
})
const tableDataRef = ref<any[]>([])
const mergedColumnsRef = ref<DataTableColumns>(props.columns.map(handleColumn))
watch(props.columns, () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mergedColumnsRef.value = props.columns.map(handleColumn)
})

const {
  handleSortChange,
  handleFilterChange,
  handleParamsChange,
  handlePageChange,
  handlePageSizeChange,
  tableApiRequestArgsRef,
  paginationRef
} = useTableRequest(paramsStoreRef)

defineExpose({
  changeParams: handleParamsChange
})
paramsStoreRef.value.initQuery(syncFromRouter(), mergedPaginationRef)

async function handleFetchTableData() {
  if (!props.apiRequest) {
    return
  }
  loadingRef.value = true

  try {
    const resp = await props.apiRequest(...tableApiRequestArgsRef.value)
    tableDataRef.value = resp.data
    if (resp.pageCount) {
      pageCountRef.value = resp.pageCount
    } else if (resp.itemCount) {
      itemCountRef.value = resp.itemCount
    }
  } catch (error) {
    console.error(error)
  }
  loadingRef.value = false
}
onMounted(() => {
  handleFetchTableData()
})
</script>

<template>
  <div class="n-data-protable">
    <NDataTable
      v-bind="dataTableProps"
      :remote="remote"
      :pagination="mergedPaginationRef"
      :data="tableDataRef"
      :loading="loadingRef"
      :columns="mergedColumnsRef"
      :onUpdateFilters="handleFilterChange"
      :onUpdateSorter="handleSortChange"
      :onUpdatePageSize="handlePageSizeChange"
      :onUpdatePage="handlePageChange"
    />
  </div>
</template>
