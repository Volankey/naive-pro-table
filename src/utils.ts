import {
  computed,
  createTextVNode,
  ref,
  VNode,
  VNodeChild,
  h,
  ComputedRef,
  Ref
} from 'vue'
import type { ApiRequestArgs, Mutable, ProColumn } from './interface'
import { DataTableColumn, PaginationProps } from 'naive-ui'
import { get } from 'lodash-es'
import {
  FilterOptionValue,
  FilterState,
  SortState
} from 'naive-ui/lib/data-table/src/interface'
import { Copy } from './Components/Copy'
import type ParamsStore from './ParamsStore'
import { Rule, Rules } from './ParamsStore/interface'
import { TableParamsStore } from './TableParamsStore'

interface RenderOptions {
  result: VNodeChild
  text: string | number
  index: number
  rowData: any
  column: ProColumn<any>
}
interface DataColumnBasic {
  key: string | number
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    key: column.key || column.dataIndex,
    ellipsis: column.ellipsis,
    render: getMergedColumnRender(column)
  } as ProColumn<any>

  setColumnConfig(tmpColumn)

  return tmpColumn as DataTableColumn<any>
}

export const useTableRequest = (paramsStoreRef: Ref<TableParamsStore>) => {
  const tableApiRequestArgsRef = computed(() => {
    const paramsStore = paramsStoreRef.value
    const query = paramsStore.queryRef.value
    const { sort, filter, params, page, pageSize } = query
    return [params, sort, filter, page, pageSize] as ApiRequestArgs
  })
  const paginationRef = computed(() => {
    const query = paramsStoreRef.value.queryRef.value
    return {
      pageSize: query.pageSize,
      page: query.page
    } as PaginationProps
  })

  const handleSortChange = (sort: SortState | null) => {
    const paramsStore = paramsStoreRef.value
    if (sort) {
      // TODO: 使用type ColumnKey
      paramsStore.updateSort(sort.columnKey as string, sort?.order)
    } else {
      paramsStore.clearQuery('sort')
    }
  }
  const handleFilterChange = (filter: FilterState | null) => {
    const paramsStore = paramsStoreRef.value

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
            paramsStore.updateFilter(key, filterValues)
          } else {
            paramsStore.updateFilter(key, undefined)
          }
          return result
        },
        {} as any
      )
    }
  }
  const handleParamsChange = (params: any) => {
    const paramsStore = paramsStoreRef.value
    paramsStore.updateParams(params)
  }
  const handlePageChange = (page: number) => {
    const paramsStore = paramsStoreRef.value
    paramsStore.updatePage(page)
  }
  const handlePageSizeChange = (size: number) => {}

  return {
    tableApiRequestArgsRef,
    handleSortChange,
    handleFilterChange,
    handleParamsChange,
    handlePageChange,
    handlePageSizeChange,
    paginationRef
  }
}

type ColumnRule = { [name: string]: { rule: Rule; column: ProColumn<any> } }

export const getRouteRuleFilter = (
  column: ProColumn<any>,
  rules: Rules
): ColumnRule => {
  if ('filter' in column && column.syncRouteFilter) {
    const { name, rule } = column.syncRouteFilter
    if (rules[name]) {
      console.warn('pro/table:', `${name} has already existed.`)
    }
    return {
      [name]: { rule, column }
    }
  }
  return {}
}

export const getRouteRuleSorter = (
  column: ProColumn,
  rules: Rules
): ColumnRule => {
  if ('sorter' in column && column.syncRouteSorter) {
    const { name, rule } = column.syncRouteSorter
    if (rules[name]) {
      console.warn('pro/table:', `${name} has already existed.`)
    }
    return {
      [name]: { rule, column }
    }
  }
  return {}
}
export const getColumnsRouteRules = (columns: ProColumn<any>[]): ColumnRule => {
  return columns.reduce((result, column) => {
    const filter = getRouteRuleFilter(column, result)
    const sorter = getRouteRuleSorter(column, result)
    Object.assign(result, filter, sorter)
    return result
  }, {})
}
