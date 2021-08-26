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
    const paramsStoreRef = computed(
      () =>
        new ParamsStore({
          // defaultQuery: 'page=1&search=i79800&sex[]=man&sex[]=all]',
          defaultQuery: qsStringify(defaultQuery),
          rules: syncRouteRuleRef.value,
          router
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
      paramsRef,
      sortRef,
      filterRef,
      tableApiRequestArgsRef,
      paginationRef
    } = useTableRequest()

    const handleSyncRouteSorter = (sort: SortState | null) => {
      const columnKey = sort?.columnKey
      const columnKeyMapColumn = columnKeyMapColumnRef.value
      const paramsStore = paramsStoreRef.value

      if (columnKey) {
        const column = columnKeyMapColumn[columnKey]
        if ('sortOrder' in column) {
          column.sortOrder = sort?.order
          const syncRouteSorter = column.syncRouteSorter
          if (syncRouteSorter) {
            // 单列排序，未来需要支持多列排序
            const { name, rule } = syncRouteSorter
            if (sort?.order === false) {
              paramsStore.clearQuery(name)
            } else {
              paramsStore.updateQuery(name, sort?.order, rule)
            }
          }
        }
      }
    }

    const handleSyncRouteFilter = (filterValue: FilterState | null) => {
      const columnKeyMapColumn = columnKeyMapColumnRef.value
      const paramsStore = paramsStoreRef.value
      if (filterValue) {
        Object.entries(filterValue).forEach(
          ([filterColumnKey, filterValue]) => {
            const syncRouteFilter =
              columnKeyMapColumn[filterColumnKey].syncRouteFilter
            if (syncRouteFilter) {
              const { name, rule } = syncRouteFilter
              paramsStore.updateQuery(name, filterValue, rule)
            }
          }
        )
      } else {
        // clear all
        Object.values(columnKeyMapColumn).forEach((column) => {
          const syncRouteFilter = column.syncRouteFilter
          if (syncRouteFilter) {
            const { name } = syncRouteFilter
            paramsStore.clearQuery(name)
          }
        })
      }
    }

    watchEffect(async () => {
      if (!props.apiRequest) {
        return
      }
      loadingRef.value = true
      handleSyncRouteSorter(sortRef.value)
      handleSyncRouteFilter(filterRef.value)
      try {
        const resp = await props.apiRequest(...tableApiRequestArgsRef.value)
        console.log(tableApiRequestArgsRef.value)
        console.log(paramsStoreRef.value.queryRef.value)
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
