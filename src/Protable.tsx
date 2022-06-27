import {
  defineComponent,
  type PropType,
  computed,
  ref,
  watch,
  onMounted,
} from 'vue'
import {
  NDataTable,
  type PaginationProps,
  type DataTableProps,
  type DataTableColumns,
} from 'naive-ui'
import { headerPropsDefine } from './commonProps'
import type { ApiRequest, ProColumn } from './interface'
import ProHeader from './Header/ProHeader.vue'
import { getColumnsRouteRules, handleColumn, useTableRequest } from './utils'
import { TableParamsStore } from './TableParamsStore'
import { syncFromRouter, syncRouterQuery } from './TableParamsStore/routerSync'
import type { QueryOptions } from './TableParamsStore/types'
import { debounce } from 'lodash-es'

export const NProTable = defineComponent({
  name: 'NProTable',
  props: {
    dataTableProps: {
      type: Object as PropType<Partial<DataTableProps>>,
    },
    ...headerPropsDefine,
    apiRequest: Function as PropType<ApiRequest>,
    columns: {
      type: Array as PropType<ProColumn<any>[]>,
      default: () => [],
    },
    pagination: {
      type: Object as PropType<Partial<PaginationProps>>,
    },
    remote: {
      type: Boolean,
      default: true,
    },
    showHeader: Boolean,
  },
  setup(props) {
    const syncRouteRuleColumnRef = ref(getColumnsRouteRules(props.columns))
    watch(
      () => props.columns,
      () => {
        syncRouteRuleColumnRef.value = getColumnsRouteRules(props.columns)
      },
    )

    const handleSyncRouterQuery = syncRouterQuery()
    const handleUpdateQuery = debounce((query: QueryOptions<false>) => {
      handleSyncRouterQuery(query)
      handleFetchTableData()
    })
    const paramsStoreRef = computed(
      () =>
        new TableParamsStore({
          keyMapColumnAndRule: syncRouteRuleColumnRef.value,
          onUpdateQuery: handleUpdateQuery,
        }),
    )

    const loadingRef = ref(false)
    const hasHeaderRef = computed(() => {
      return props.headerTitle || props.toolBars?.length
    })
    const pageCountRef = ref(0)
    const itemCountRef = ref(0)

    const mergedPaginationRef = computed(() => {
      return {
        ...props?.pagination,
        ...paginationRef.value,
        pageCount: pageCountRef.value,
        itemCount: itemCountRef.value,
      }
    })
    const tableDataRef = ref<any[]>([])
    const headerPropsRef = computed(() => {
      const { headerTitle, headerTitleToolTip, toolBars } = props
      return {
        headerTitle,
        headerTitleToolTip,
        toolBars,
      }
    })
    const mergedColumnsRef = ref<DataTableColumns>(
      props.columns.map(handleColumn),
    )
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
      paginationRef,
    } = useTableRequest(paramsStoreRef)

    paramsStoreRef.value.initQuery(syncFromRouter())

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
      triggerParamsChange: handleParamsChange,
      tableApiRequestArgsRef,
      paramsStoreRef,
      refresh: () => {
        handleFetchTableData()
      },
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
      handleSortChange,
      showHeader,
    } = this

    return (
      <div>
        {showHeader ? (
          <ProHeader
            {...this.headerProps}
            v-slots={{ headerTitle, headerToolbars }}
          />
        ) : null}
        <NDataTable
          {...this.dataTableProps}
          remote={remote}
          pagination={mergedPagination}
          data={tableData}
          loading={loading}
          columns={mergedColumns as DataTableColumns}
          onUpdateFilters={handleFilterChange}
          onUpdateSorter={handleSortChange}
          onUpdatePageSize={handlePageSizeChange}
          onUpdatePage={handlePageChange}
        ></NDataTable>
      </div>
    )
  },
})
