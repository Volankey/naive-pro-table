<script lang="ts" setup>
import { computed, ref, watch, onMounted, withDefaults } from 'vue'
import type {
  PaginationProps,
  DataTableProps,
  DataTableColumns
} from 'naive-ui'
import { NDataTable } from 'naive-ui'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns,
  SyncRoutePage,
  SyncRoutePageSize
} from './interface'
import { getColumnsRouteRules, handleColumn, useTableRequest } from './utils'
import { TableParamsStore } from './table-params-store'
import { syncFromRouter, syncRouterQuery } from './router-sync'
import type { QueryOptions } from './table-params-store/types'
import debounce from 'lodash-es/debounce'
import { CustomParams } from './hooks'
import type { DateFormatter } from './value-type-render/interface'

const props = withDefaults(
  defineProps<{
    dataTableProps?: Partial<DataTableProps>
    apiRequest: ApiRequest
    columns: ProColumn<any>[]
    pagination?: Partial<PaginationProps>
    remote?: boolean
    queryPrefix?: string
    syncRoute?: boolean
    syncRoutePage?: SyncRoutePage
    syncRoutePageSize?: SyncRoutePageSize
    customParamsStore?: CustomParams
    dateFormatter?: DateFormatter
  }>(),
  {
    remote: true,
    syncRoute: true,
    syncRoutePage: () => ({
      name: 'page'
    }),
    syncRoutePageSize: () => ({
      name: 'pageSize'
    })
  }
)

const syncRouteRuleColumnRef = ref(getColumnsRouteRules(props.columns))
watch(
  () => props.columns,
  () => {
    syncRouteRuleColumnRef.value = getColumnsRouteRules(props.columns)
  }
)

const handleSyncRouterQuery = syncRouterQuery()
const handleUpdateQuery = (query: QueryOptions<false>) => {
  if (props.syncRoute)
    handleSyncRouterQuery(
      query,
      syncRouteRuleColumnRef.value.columnKeyMapRules,
      props.syncRoutePage,
      props.syncRoutePageSize,
      props.customParamsStore?.customParamsValue.value,
      props.queryPrefix
    )
  handleFetchTableData()
}
const paramsStoreRef = computed(
  () =>
    new TableParamsStore({
      syncRouteKeyMapColumnAndRule: syncRouteRuleColumnRef.value,
      syncRoutePage: props.syncRoutePage,
      syncRoutePageSize: props.syncRoutePageSize,
      customParams: props.customParamsStore,
      onUpdateQuery: handleUpdateQuery
    })
)
const handleCustomParamsUpdate = (
  customParams: Record<string, any>,
  init = false
) => {
  // search should reset page
  if (!init) paramsStoreRef.value.updatePage(1)

  handleSyncRouterQuery(
    paramsStoreRef.value.queryRef.value as any,
    syncRouteRuleColumnRef.value.columnKeyMapRules,
    props.syncRoutePage,
    props.syncRoutePageSize,
    customParams,
    props.queryPrefix
  )
  handleFetchTableData()
}
if (props.customParamsStore) {
  props.customParamsStore._setCallback(handleCustomParamsUpdate)
}

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
function mergedHandleColumn(col: ProColumn<any>) {
  return handleColumn(col, {
    dateFormatter: props.dateFormatter
  })
}
const mergedColumnsRef = ref<DataTableColumns>(
  props.columns.map(mergedHandleColumn)
)
watch(props.columns, () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mergedColumnsRef.value = props.columns.map(mergedHandleColumn)
})

const {
  handleSortChange,
  handleFilterChange,
  handlePageChange,
  handlePageSizeChange,
  tableApiRequestArgsRef,
  paginationRef
} = useTableRequest(paramsStoreRef, props?.customParamsStore)
const handleFetchTableData = debounce(
  async ({ showLoading = true }: { showLoading?: boolean } = {}) => {
    if (!props.apiRequest) {
      return
    }
    if (showLoading) loadingRef.value = true

    try {
      const resp = await props.apiRequest(...tableApiRequestArgsRef.value)
      tableDataRef.value = resp.data
      if (resp.pageCount !== undefined) {
        pageCountRef.value = resp.pageCount
      } else if (resp.itemCount !== undefined) {
        itemCountRef.value = resp.itemCount
      } else {
        throw new Error('pageCount or itemCount must be defined')
      }
    } catch (error) {
      console.error('[naive-ui-protable]: ', error)
    }
    loadingRef.value = false
  }
)
defineExpose<ProTableIns>({
  refresh: handleFetchTableData
})
paramsStoreRef.value.initQuery(
  syncFromRouter(props.queryPrefix),
  mergedPaginationRef
)

onMounted(() => {
  handleFetchTableData()
})
</script>

<template>
  <NDataTable
    v-bind="dataTableProps"
    :remote="remote"
    class="n-data-protable"
    :pagination="mergedPaginationRef"
    :data="tableDataRef"
    :loading="loadingRef"
    :columns="mergedColumnsRef"
    :onUpdateFilters="handleFilterChange"
    :onUpdateSorter="handleSortChange"
    :onUpdatePageSize="handlePageSizeChange"
    :onUpdatePage="handlePageChange"
  >
    <template #empty>
      <slot name="empty" />
    </template>
  </NDataTable>
</template>
