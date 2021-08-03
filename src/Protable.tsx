import { defineComponent, h, VNode, PropType, computed, ref, watchEffect } from 'vue'
import { NDataTable, PaginationProps } from 'naive-ui'
import { dataTableProps } from 'naive-ui/lib/data-table/src/DataTable.js'
import { headerPropsDefine } from './commonProps'
import { ApiRequest, Mutable, ProColumn } from './interface'
import ProHeader from './Header/ProHeader.vue'
import { handleColumn, useTableRequest } from './utils'

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

    const mergedColumnsRef = computed(() => {
      const { columns } = props
      return columns.map(handleColumn)
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
      pagination: paginationRef,
    } = useTableRequest()


    watchEffect(async () => {
      if (!props.apiRequest) {
        return
      }
      loadingRef.value = true
      try {
        const resp = await props.apiRequest(...tableApiRequestArgs.value)
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
    const { mergedColumns, loading, tableData, mergedPagination,
      handlePageChange, handlePageSizeChange, remote, handleFilterChange, handleSortChange } = this
    const changeProps = {
      'onUpdate:page': handlePageChange,
      'onUpdate:pageSize': handlePageSizeChange,
    }
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
          {...changeProps}
          onUpdateFilters={handleFilterChange}
          onUpdateSorter={handleSortChange}
        >
        </NDataTable>
      </div>
    )
  }
})
