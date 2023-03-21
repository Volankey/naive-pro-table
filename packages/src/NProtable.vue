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
  SyncRoutePageSize,
  ProTableBasicColumn,
  ProColumnBaseColumn
} from './interface'
import { getColumnsRouteRules, handleColumn, useTableRequest } from './utils'
import { TableParamsStore } from './table-params-store'
import { syncFromRouter, syncRouterQuery } from './router-sync'
import type { QueryOptions } from './table-params-store/types'
import { debounce } from 'lodash-es'
import { CustomParams } from './hooks'
import type { DateFormatter } from './value-type-render/interface'

const props = withDefaults(
  defineProps<{
    dataTableProps?: Partial<DataTableProps>
    apiRequest: ApiRequest
    columns: ProColumn<any>[]
    pagination?: Partial<PaginationProps>
    paginateNoData?: boolean
    remote?: boolean
    queryPrefix?: string
    syncRoute?: boolean
    syncRoutePage?: SyncRoutePage
    syncRoutePageSize?: SyncRoutePageSize
    customParamsStore?: CustomParams
    dateFormatter?: DateFormatter
    configurable?: boolean
  }>(),
  {
    remote: true,
    syncRoute: true,
    paginateNoData: true,
    syncRoutePage: () => ({
      name: 'page'
    }),
    syncRoutePageSize: () => ({
      name: 'pageSize'
    }),
    configurable: false
  }
)
const mergedColumnsRef = ref<DataTableColumns<any>>(
  (props.columns as ProColumnBaseColumn[]).map(mergedHandleColumn)
)
const syncRouteRuleColumnRef = ref(
  getColumnsRouteRules(mergedColumnsRef.value as ProTableBasicColumn<any>[])
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

const mergedPaginationWithPropsRef = computed(() => {
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

const mergedPagination = computed(() => {
  const { itemCount, pageCount } = mergedPaginationWithPropsRef.value
  return props.paginateNoData || itemCount || pageCount
    ? mergedPaginationWithPropsRef.value
    : undefined
})

const tableDataRef = ref<any[]>([])
function mergedHandleColumn(col: ProColumnBaseColumn<any>) {
  return handleColumn(col, {
    dateFormatter: props.dateFormatter
  })
}

watch(
  () => props.columns,
  () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mergedColumnsRef.value = props.columns.map(mergedHandleColumn)
  },
  {
    deep: true
  }
)
watch(mergedColumnsRef, () => {
  syncRouteRuleColumnRef.value = getColumnsRouteRules(
    mergedColumnsRef.value as ProTableBasicColumn<any>[]
  )
})

const {
  initDefaultSortAndFilterQuery,
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

initDefaultSortAndFilterQuery(paramsStoreRef.value)

paramsStoreRef.value.initQuery(
  syncFromRouter(props.queryPrefix),
  mergedPaginationWithPropsRef
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
    :pagination="mergedPagination"
    :data="tableDataRef"
    :loading="loadingRef"
    :columns="mergedColumnsRef as any"
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
