import {
  defineComponent,
  h,
  VNode,
  PropType,
  computed,
  ref,
  watchEffect,
  watch
} from 'vue'
import { NDataTable, PaginationProps } from 'naive-ui'
import { dataTableProps } from 'naive-ui/lib/data-table/src/DataTable.js'
import { headerPropsDefine } from './commonProps'
import { ApiRequest, Mutable, ProColumn } from './interface'
import ProHeader from './Header/ProHeader.vue'
import { getColumnsRouteRules, handleColumn, useTableRequest } from './utils'
import ParamsStore from './ParamsStore'
import { SortState, TableColumns } from 'naive-ui/lib/data-table/src/interface'
import { Rule } from './ParamsStore/interface'

export default defineComponent({
  name: 'NProTable',
  props: {
    ...dataTableProps,
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
    const syncRouteRuleRef = computed(() => {
      return getColumnsRouteRules(props.columns)
    })
    const paramsStoreRef = computed(
      () =>
        new ParamsStore({
          defaultQuery: 'page=1&search=i79800&sex=man',
          rules: syncRouteRuleRef.value
        })
    )
    const routerQueryRef = paramsStoreRef.value.queryRef.value
    console.log('routerQueryRef', routerQueryRef)
    const loadingRef = ref(false)
    const hasHeaderRef = computed(() => {
      return props.headerTitle || props.toolBars?.length
    })

    const mergedPaginationRef = computed(() => {
      return {
        ...props.pagination,
        ...paginationRef.value
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

    const columnKeyMapColumnRef = computed(() => {
      return mergedColumnsRef.value.reduce((result, column) => {
        return Object.assign(result, {
          [column.key]: column
        })
      }, {}) as {
        [key: string]: ProColumn<any>
      }
    })

    const {
      handleSortChange,
      handleFilterChange,
      handleParamsChange,
      handlePageChange,
      handlePageSizeChange,
      params,
      sort,
      filter,
      tableApiRequestArgs,
      pagination: paginationRef
    } = useTableRequest(paramsStoreRef, syncRouteRuleRef, columnKeyMapColumnRef)

    const handleSyncRouteSorter = (sort: SortState | null) => {
      const columnKey = sort?.columnKey
      const columnKeyMapColumn = columnKeyMapColumnRef.value
      console.log('columnKeyMapColumnRef', mergedColumnsRef.value)
      if (columnKey) {
        const column = columnKeyMapColumn[columnKey]
        column.sortOrder = sort?.order
        const syncRouteSorter = column.syncRouteSorter
        if (syncRouteSorter) {
          // 单列排序，未来需要支持多列排序
          const { name, rule } = syncRouteSorter
          paramsStoreRef.value.updateQuery(name, sort?.order, rule)
        }
      }
    }

    watchEffect(async () => {
      if (!props.apiRequest) {
        return
      }
      loadingRef.value = true
      handleSyncRouteSorter(sort.value)
      try {
        const resp = await props.apiRequest(...tableApiRequestArgs.value)
        console.log(tableApiRequestArgs.value)
        tableDataRef.value = resp.data
        paginationRef.value.pageCount = resp.pageCount
      } catch (error) {
        console.error(error)
      }
      loadingRef.value = false
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
      handleSortChange
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
