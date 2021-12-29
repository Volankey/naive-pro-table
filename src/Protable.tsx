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
import {
  FilterOptionValue,
  FilterState,
  SortState,
  TableColumns
} from 'naive-ui/lib/data-table/src/interface'
import { Rules } from './ParamsStore/interface'
import { useRoute, useRouter } from 'vue-router'
import { stringify as qsStringify } from 'qs'
import { TableParamsStore } from './TableParamsStore'
import { syncRouter } from './TableParamsStore/routerSync'

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
    const syncRouteRuleColumnRef = computed(() => {
      return getColumnsRouteRules(props.columns)
    })
    const syncRouteRuleRef = computed(() => {
      return Object.entries(syncRouteRuleColumnRef.value).reduce(
        (result, item) => {
          const [key, ruleColumn] = item
          result[key] = ruleColumn.rule
          return result
        },
        {} as Rules
      )
    })
    const router = useRouter()
    const route = useRoute()
    const defaultQuery = route.query
    const handleUpdateQuery = syncRouter()
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
      tableApiRequestArgsRef,
      paginationRef
    } = useTableRequest(paramsStoreRef)

    // console.log(
    //   'init',
    //   sortRef.value,
    //   filterRef.value,
    //   paramsStoreRef.value.queryRef.value
    // )

    // Object.entries(paramsStoreRef.value.queryRef.value).forEach(
    //   ([key, value]) => {
    //     const syncRouteRuleColumn = syncRouteRuleColumnRef.value
    //     const columnAndRule = syncRouteRuleColumn[key]
    //     console.log(
    //       '🚀 ~ file: Protable.tsx ~ line 126 ~ Object.entries ~ columnAndRule',
    //       columnAndRule
    //     )
    //   }
    // )

    const handleSyncRouteSorter = (sort: SortState | null) => {}

    const handleSyncRouteFilter = (filterValue: FilterState | null) => {}
    const handleFetchTableData = async () => {
      if (!props.apiRequest) {
        return
      }
      loadingRef.value = true

      try {
        const resp = await props.apiRequest(...tableApiRequestArgsRef.value)
        console.log(paramsStoreRef.value.queryRef.value)
        tableDataRef.value = resp.data
        // paginationRef.value.pageCount = resp.pageCount
        pageCountRef.value = resp.pageCount
      } catch (error) {
        console.error(error)
      }
      loadingRef.value = false
    }
    watch(
      () => [paramsStoreRef.value.queryRef.value, tableApiRequestArgsRef.value],
      handleFetchTableData,
      {
        immediate: true
      }
    )

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
