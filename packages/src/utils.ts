import {
  computed,
  createTextVNode,
  type VNode,
  type VNodeChild,
  h,
  type Ref
} from 'vue'
import type { ApiRequestArgs, ProColumn } from './interface'
import type { DataTableColumn, PaginationProps } from 'naive-ui'
import { get } from 'lodash-es'
import type {
  FilterState,
  SortState
} from 'naive-ui/lib/data-table/src/interface'
import CommonCopy from './components/CommonCopy'
import type { Rule, Rules } from './table-params-store/types'
import type { TableParamsStore } from './table-params-store/index'

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
        h(CommonCopy, {
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

  const handleSortChange = (sort: SortState | SortState[] | null) => {
    const paramsStore = paramsStoreRef.value
    if (sort) {
      paramsStore.updateSort(sort)
    } else {
      paramsStore.clearQuery('sort')
    }
  }
  const handleFilterChange = (filter: FilterState | null) => {
    const paramsStore = paramsStoreRef.value

    // 处理 filterValues 无选项的时候返回 null
    filter &&
      Object.entries(filter).reduce((result, [key, filterValues]) => {
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
      }, {} as any)
  }
  const handleParamsChange = (params: any) => {
    const paramsStore = paramsStoreRef.value
    paramsStore.updateParams(params)
  }
  const handlePageChange = (page: number) => {
    const paramsStore = paramsStoreRef.value
    paramsStore.updatePage(page)
  }
  const handlePageSizeChange = (size: number) => {
    const paramsStore = paramsStoreRef.value
    paramsStore.updatePageSize(size)
    paramsStore.updatePage(1)
  }

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

export type ColumnRule = {
  [name: string]: { rule: Rule; column: ProColumn<any> }
}

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
export type ColumnKeyMapColAndRules = Record<
  string,
  { rules: ColumnRule; column: ProColumn<any> }
>
export const getColumnsRouteRules = (
  columns: ProColumn<any>[]
): ColumnKeyMapColAndRules => {
  const columnKeyMapRules: ColumnKeyMapColAndRules = {}

  function _handleColumn(column: ProColumn<any>) {
    if ('children' in column) {
      column.children?.forEach((item) => _handleColumn(item))
    }
    const filter = getRouteRuleFilter(column, {})
    const sorter = getRouteRuleSorter(column, {})

    if (!columnKeyMapRules[column.key!]) {
      columnKeyMapRules[column.key!] = {
        rules: {},
        column
      }
    }
    // TODO: 重复的 rule name
    Object.assign(columnKeyMapRules[column.key!].rules, filter, sorter)
  }

  columns.forEach((column) => {
    _handleColumn(column)
  })
  return columnKeyMapRules
}
