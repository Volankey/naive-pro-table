import { computed, createTextVNode, ref, VNode, VNodeChild, h } from 'vue'
import type { ApiRequestArgs, Mutable, ProColumn } from './interface'
import { DataTableColumn, PaginationProps } from 'naive-ui'
import { get } from 'lodash-es'
import { FilterState, SortState } from 'naive-ui/lib/data-table/src/interface'
import { Copy } from './Components/Copy'
import ParamsStore from './ParamsStore'
import { Rules } from './ParamsStore/interface'

interface RenderOptions {
  result: VNodeChild
  text: string | number
  index: number
  rowData: any
  column: ProColumn<any>
}

export const RenderHelper = (context: { render: string | (() => VNode) }) => {
  const { render } = context
  if (typeof render === 'string') {
    return createTextVNode(render)
  } else {
    return render()
  }
}
const columnRenderHandler = {
  copyable(renderOptions: RenderOptions) {
    const { result, text, column } = renderOptions
    if (column.copyable) {
      renderOptions.result = [
        result,
        h(Copy, {
          text: text
        })
      ]
    }
  }
}
const columnConfigHandlers = {
  valueEnum(column: ProColumn<any>) {
    if (column.valueEnum) {
      const valueEnum = column.valueEnum
      const filterOptions = Object.entries(valueEnum).map(([key, data]) => ({
        value: key,
        ...data
      }))
      column.filterOptions = filterOptions
    }
  }
}

const setColumnRenderConfig = (renderOptions: RenderOptions) => {
  Object.keys(columnRenderHandler).forEach((key) => {
    columnRenderHandler[key as keyof typeof columnRenderHandler](renderOptions)
  })
}

const setColumnConfig = (column: ProColumn<any>) => {
  Object.keys(columnConfigHandlers).forEach((key) => {
    if (column[key as keyof ProColumn<any>] !== undefined) {
      columnConfigHandlers[key as keyof typeof columnConfigHandlers](column)
    }
  })
}

const getMergedColumnRender = (column: ProColumn<any>) => {
  return (rowData: unknown, rowIndex: any) => {
    let render:
      | null
      | ((
          text: any,
          rowData: any,
          rowIndex: number,
          actions?: any
        ) => VNodeChild) = null
    const dataIndex = column.dataIndex
    let text = get(rowData, dataIndex)
    if (!column.render) {
      text = get(rowData, column.dataIndex)
      render = () => text
    } else {
      render = column.render
    }
    const result = render(text, rowData, rowIndex)
    const renderOptions = {
      result,
      text,
      index: rowIndex,
      rowData,
      column
    }

    // add some vnode change render result
    setColumnRenderConfig(renderOptions)

    return renderOptions.result
  }
}

export const handleColumn = (column: ProColumn<any>): DataTableColumn<any> => {
  const tmpColumn = {
    ...column,
    title: column.title ?? '',
    key: column.dataIndex,
    ellipsis: column.ellipsis,
    render: getMergedColumnRender(column)
  } as ProColumn<any>

  setColumnConfig(tmpColumn)
  console.log('🚀 ~ file: utils.ts ~ line 111 ~ tmpColumn', tmpColumn)

  return tmpColumn as DataTableColumn<any>
}

export const useTableRequest = (paramsStoreRef: Ref<ParamsStore>) => {
  const paramsRef = ref(null)
  const sortRef = ref<SortState | null>(null)
  const filterRef = ref<FilterState | null>(null)
  const paginationRef = ref<Mutable<PaginationProps>>({
    page: 1
  })
  const tableApiRequestArgsRef = computed(() => {
    return [
      paramsRef.value,
      sortRef.value,
      filterRef.value,
      paginationRef.value.page,
      paginationRef.value.pageSize
    ] as ApiRequestArgs
  })

  const handleSortChange = (sort: SortState | null) => {
    sortRef.value = sort
  }
  const handleFilterChange = (filter: FilterState | null) => {
    let tmpFilter = {}
    if (filter) {
      // 处理 filterValues 无选项的时候返回 null
      tmpFilter = Object.entries(filter).reduce(
        (result, [key, filterValues]) => {
          if (
            !(
              filterValues &&
              Array.isArray(filterValues) &&
              filterValues?.length === 0
            )
          ) {
            result[key] = filterValues
          }
          return result
        },
        {} as any
      )
    }
    filterRef.value = Object.keys(tmpFilter).length === 0 ? null : filter
  }
  const handleParamsChange = (params: any) => {
    paramsRef.value = params
  }
  const handlePageChange = (page: number) => {
    paginationRef.value.page = page
  }
  const handlePageSizeChange = (size: number) => {
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
// FIXME: why not have filter type?
export const getRouteRuleFilter = (
  column: ProColumn<any>,
  rules: Rules
): Rules => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignorets-ignore
  if (column.filter && column.syncRouteFilter) {
    const { name, rule } = column.syncRouteFilter
    if (rules[name]) {
      console.warn('pro/table:', `${name} has already existed.`)
    }
    return {
      [name]: rule
    }
  }
  return {}
}
// FIXME: why not have filter type?
export const getRouteRuleSorter = (
  column: ProColumn<any>,
  rules: Rules
): Rules => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignorets-ignore
  if (column.sorter && column.syncRouteSorter) {
    const { name, rule } = column.syncRouteSorter
    if (rules[name]) {
      console.warn('pro/table:', `${name} has already existed.`)
    }
    return {
      [name]: rule
    }
  }
  return {}
}
export const getColumnsRouteRules = (columns: ProColumn<any>[]): Rules => {
  return columns.reduce((result, column) => {
    const filter = getRouteRuleFilter(column, result)
    const sorter = getRouteRuleSorter(column, result)
    Object.assign(result, filter, sorter)
    return result
  }, {})
}
