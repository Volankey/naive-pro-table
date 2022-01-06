import {
  defineComponent,
  h,
  VNode,
  PropType,
  computed,
  ref,
  watchEffect,
  watch,
  onMounted
} from 'vue'
import { NDataTable } from 'naive-ui'
import { dataTableProps } from 'naive-ui/lib/data-table/src/DataTable.js'
import { headerPropsDefine } from './commonProps'
import { ApiRequest, ProColumn } from './interface'
import ProHeader from './Header/ProHeader.vue'
import { getColumnsRouteRules, handleColumn, useTableRequest } from './utils'
import { TableColumns } from 'naive-ui/lib/data-table/src/interface'
import { TableParamsStore } from './TableParamsStore'
import { syncFromRouter, syncRouterQuery } from './TableParamsStore/routerSync'
import { QueryOptions } from './TableParamsStore/types'

export default defineComponent({
  name: 'NProTable',
  props: {
    dataTableProps: {
      type: Object as PropType<typeof dataTableProps>
    },
    ...headerPropsDefine,
    apiRequest: Function as PropType<ApiRequest>,
    columns: {
      type: Array as PropType<ProColumn<any>[]>,
      default: () => []
    },
    remote: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const syncRouteRuleColumnRef = ref(getColumnsRouteRules(props.columns))
    watch(props.columns, () => {
      syncRouteRuleColumnRef.value = getColumnsRouteRules(props.columns)
    })
    const handleSyncRouterQuery = syncRouterQuery()
    const handleUpdateQuery = (query: QueryOptions<false>) => {
      handleSyncRouterQuery(query)
      handleFetchTableData()
    }
    const paramsStoreRef = computed(
      () =>
        new TableParamsStore({
          keyMapColumnAndRule: syncRouteRuleColumnRef.value,
          onUpdateQuery: handleUpdateQuery
        })
    )

    const loadingRef = ref(false)
    const hasHeaderRef = computed(() => {
      return props.headerTitle || props.toolBars?.length
    })
    const pageCountRef = ref(0)

    const mergedPaginationRef = computed(() => {
      return {
        ...props.pagination,
        ...paginationRef.value,
        pageCount: pageCountRef.value
      }
    })
    const tableDataRef = ref([])
    const headerPropsRef = computed(() => {
      const { headerTitle, headerTitleToolTip, toolBars } = props
      return {
        headerTitle,
        headerTitleToolTip,
        toolBars
      }
    })
    const mergedColumnsRef = ref(props.columns.map(handleColumn))
    watch(props.columns, () => {
      mergedColumnsRef.value = props.columns.map(handleColumn) as TableColumns
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

    paramsStoreRef.value.initQuery(syncFromRouter())

    async function handleFetchTableData() {
      if (!props.apiRequest) {
        return
      }
      loadingRef.value = true

      try {
        console.log('fetch params-> ', tableApiRequestArgsRef.value)
        const resp = await props.apiRequest(...tableApiRequestArgsRef.value)
        tableDataRef.value = resp.data
        // paginationRef.value.pageCount = resp.pageCount
        pageCountRef.value = resp.pageCount
      } catch (error) {
        console.error(error)
      }
      loadingRef.value = false
    }
    onMounted(() => {
      handleFetchTableData()
    })

    return {
      hasHeader: hasHeaderRef,
      headerProps: headerPropsRef,
      mergedColumns: mergedColumnsRef,
      mergedPagination: mergedPaginationRef,
      loading: loadingRef,
      tableData: tableDataRef,
      handlePageChange,
      handlePageSizeChange,
      handleFilterChange,
      handleSortChange,
      tableApiRequestArgsRef,
      paramsStoreRef
    }
  },
  render() {
    const { headerTitle, headerToolbars } = this.$slots
    const {
      mergedColumns,
      loading,
      tableData,
      mergedPagination,
      handlePageChange,
      handlePageSizeChange,
      remote,
      handleFilterChange,
      handleSortChange
    } = this

    return (
      <div>
        <ProHeader
          {...this.headerProps}
          v-slots={{ headerTitle, headerToolbars }}
        />
        <NDataTable
          {...this.dataTableProps}
          remote={remote}
          pagination={mergedPagination}
          data={tableData}
          loading={loading}
          columns={mergedColumns}
          onUpdateFilters={handleFilterChange}
          onUpdateSorter={handleSortChange}
          onUpdatePageSize={handlePageSizeChange}
          onUpdatePage={handlePageChange}
        ></NDataTable>
      </div>
    )
  }
})
