import { computed, createTextVNode, h, ref, VNode, watchEffect } from 'vue'
import { ApiRequest, ApiRequestArgs, Mutable, ProColumn, ProTableBasicColumn } from './interface'
import { DataTableColumn, PaginationProps } from 'naive-ui'
import { get } from 'lodash-es'
import { FilterState, SortState } from 'naive-ui/lib/data-table/src/interface'

export const RenderHelper = (context: { render: string | (() => VNode) }) => {
  const { render } = context
  if (typeof render === 'string') {
    return createTextVNode(render)
  } else {
    return render()
  }
}

const getMergedColumnRender = (column: ProColumn<any>) => {
  return (rowData: unknown, rowIndex: any) => {
    let render = null
    const dataIndex = column.dataIndex
    if (!column.render) {
      render = () => [get(rowData, column.dataIndex)]
    } else {
      render = column.render
    }
    return render(get(rowData, dataIndex), rowData, rowIndex)
  }
}

export const handleColumn = (
  column: ProTableBasicColumn<any>
): DataTableColumn<any> => {
  const render = getMergedColumnRender(column)

  const tmpColumn = {
    ...column,
    title: column.title ?? '',
    key: column.dataIndex,
    ellipsis: column.ellipsis,
    render,
  }
  return tmpColumn as DataTableColumn<any>
}

export const useTableRequest = () => {
  const paramsRef = ref(null)
  const sortRef = ref<SortState | null>(null)
  const filterRef = ref<FilterState | null>(null)
  const paginationRef = ref<Mutable<PaginationProps>>({
    page: 1,
  })
  const tableApiRequestArgsRef = computed(() => [
    paramsRef.value,
    sortRef.value,
    filterRef.value,
    paginationRef.value.page,
    paginationRef.value.pageSize
  ] as ApiRequestArgs)


  const handleSortChange = (sort:SortState | null) => {
    sortRef.value = sort
  }
  const handleFilterChange = (filter:FilterState | null) => {
    filterRef.value = filter
  }
  const handleParamsChange = (params:any) => {
    paramsRef.value = params
  }
  const handlePageChange = (page:number) => {
    paginationRef.value.page = page
  }
  const handlePageSizeChange = (size:number) => {
    paginationRef.value.pageSize = size
  }

  return {
    params: paramsRef,
    sort: sortRef,
    filter: filterRef,
    tableApiRequestArgs: tableApiRequestArgsRef,
    pagination: paginationRef,
    handleSortChange,
    handleFilterChange,
    handleParamsChange,
    handlePageChange,
    handlePageSizeChange
  }
}