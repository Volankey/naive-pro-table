import { DateFormatter } from './value-type-render/interface'
import { CustomParams } from './hooks/use-params'
import {
  computed,
  createTextVNode,
  type VNode,
  type VNodeChild,
  h,
  type Ref
} from 'vue'
import type {
  ApiRequestArgs,
  ProColumn,
  ProColumnBaseColumn
} from './interface'
import type { DataTableColumn, PaginationProps } from 'naive-ui'
import { get } from 'lodash-es'
import type {
  DataTableFilterState as FilterState,
  DataTableSortState as SortState
} from 'naive-ui'
import CommonCopy from './components/CommonCopy'
import type { Rule, Rules } from './table-params-store/types'
import type { TableParamsStore } from './table-params-store/index'
import valueTypeMapRender from './value-type-render'

interface RenderOptions {
  result: VNodeChild
  text: string | number
  index: number
  rowData: any
  column: ProColumnBaseColumn<any>
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
  valueEnum(column: ProColumnBaseColumn<any>) {
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

const setColumnConfig = (column: ProColumnBaseColumn<any>) => {
  Object.keys(columnConfigHandlers).forEach((key) => {
    if (column[key as keyof ProColumn<any>] !== undefined) {
      columnConfigHandlers[key as keyof typeof columnConfigHandlers](column)
    }
  })
}

const getMergedColumnRender = (
  column: ProColumnBaseColumn<any>,
  handleColumnOps: HandleColumnOps
) => {
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
    const valueType = column.valueType
    let text = get(rowData, dataIndex)
    if (!column.render) {
      text = get(rowData, column.dataIndex)
      if (valueType) {
        render = (value) =>
          valueTypeMapRender[valueType](value, handleColumnOps?.dateFormatter)
      } else {
        render = () => text
      }
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
export type HandleColumnOps = {
  dateFormatter?: DateFormatter
}

export const handleColumn = (
  column: ProColumnBaseColumn<any>,
  handleColumnOps: HandleColumnOps
): DataTableColumn<any> => {
  const tmpColumn = {
    ...column,
    title: column.title ?? '',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    key: column.key || column.dataIndex,
    ellipsis: column.ellipsis,
    render: getMergedColumnRender(column, handleColumnOps)
  } as ProColumnBaseColumn<any>

  setColumnConfig(tmpColumn)

  return tmpColumn as DataTableColumn<any>
}

export const useTableRequest = (
  paramsStoreRef: Ref<TableParamsStore>,
  customParams?: CustomParams
) => {
  const tableApiRequestArgsRef = computed(() => {
    const paramsStore = paramsStoreRef.value
    const query = paramsStore.queryRef.value
    const { sort, filter, page, pageSize } = query
    return [
      customParams?.customParamsValue.value,
      sort,
      filter,
      page,
      pageSize
    ] as ApiRequestArgs
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
          (Array.isArray(filterValues) && filterValues?.length !== 0) ||
          (!Array.isArray(filterValues) && filterValues)
        ) {
          result[key] = filterValues
          paramsStore.updateFilter(key, filterValues)
        } else {
          paramsStore.updateFilter(key, undefined)
        }
        return result
      }, {} as any)
    paramsStore.updatePage(1)
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

  const handleInitQuery = (paramsStore: TableParamsStore) => {
    const keyMapColumn = paramsStore.keyMapColumnAndRule
    const sorts: SortState[] = []
    // 是否为多列排序设置默认状态
    let initMultipleSort = false

    Object.keys(keyMapColumn).forEach((columnKey: string) => {
      const column = keyMapColumn[columnKey].column
      const sorter = column.sorter
      const sortOrder = column.sortOrder
      const filter = column.filter
      const filterItems = column.filterItems
      if (sorter && sortOrder) {
        // 判断设置了默认值中的首列是否为多列排序中一列
        if (!sorts.length) {
          initMultipleSort = typeof sorter === 'object' && 'multiple' in sorter
        }
        // 以下两种情况为当前列设置默认排序状态
        // 1. 设置了默认值的首列
        // 2. 首列为多列排序中的一列的前提下，当前列也在多列排序中
        if (
          (initMultipleSort &&
            typeof sorter === 'object' &&
            'multiple' in sorter) ||
          !sorts.length
        ) {
          sorts.push({
            columnKey,
            sorter,
            order: sortOrder
          } as SortState)
        }
      }

      if (filter && filterItems) {
        handleFilterChange({ [columnKey]: filterItems } as FilterState)
      }
    })
    handleSortChange(sorts)
  }

  return {
    tableApiRequestArgsRef,
    handleInitQuery,
    handleSortChange,
    handleFilterChange,
    handlePageChange,
    handlePageSizeChange,
    paginationRef
  }
}

export type ColumnRule = {
  [name: string]: { rule: Rule; column: ProColumnBaseColumn<any> }
}

export const getRouteRuleFilter = (
  column: ProColumnBaseColumn<any>,
  rules: Rules
): ColumnRule => {
  if ('filter' in column && column.syncRouteFilter) {
    const { name, rule } = column.syncRouteFilter
    if (rules[name]) {
      console.warn('pro/table:', `${name} has already existed.`)
    }
    return {
      [name]: { rule: rule ?? {}, column }
    }
  }
  return {}
}

export const getRouteRuleSorter = (
  column: ProColumnBaseColumn,
  rules: Rules
): ColumnRule => {
  if ('sorter' in column && column.syncRouteSorter) {
    const { name, rule } = column.syncRouteSorter
    if (rules[name]) {
      console.warn('pro/table:', `${name} has already existed.`)
    }
    return {
      [name]: { rule: rule || {}, column }
    }
  }
  return {}
}
export type ColumnKeyMapColAndRules = Record<
  string,
  { rules: ColumnRule; column: ProColumnBaseColumn<any> }
>
export const getColumnsRouteRules = (columns: ProColumnBaseColumn<any>[]) => {
  const columnKeyMapRules: ColumnKeyMapColAndRules = {}
  const columnSyncRouteSorterKeyMapRules: ColumnKeyMapColAndRules = {}
  const columnSyncRouteFilterKeyMapRules: ColumnKeyMapColAndRules = {}

  function _handleColumn(column: ProColumnBaseColumn<any>) {
    if ('children' in column) {
      column.children?.forEach((item) => _handleColumn(item))
    } else {
      const filter = getRouteRuleFilter(column, {})
      const sorter = getRouteRuleSorter(column, {})
      const colKey = column.key || column.dataIndex
      if (!columnKeyMapRules[colKey]) {
        columnKeyMapRules[colKey] = {
          rules: {},
          column
        }
      }
      if (
        column.syncRouteFilter &&
        !columnSyncRouteSorterKeyMapRules[column.syncRouteFilter.name]
      ) {
        columnSyncRouteFilterKeyMapRules[column.syncRouteFilter.name] = {
          rules: {},
          column
        }
      }
      if (
        column.syncRouteSorter &&
        !columnSyncRouteSorterKeyMapRules[column.syncRouteSorter.name]
      ) {
        columnSyncRouteSorterKeyMapRules[column.syncRouteSorter.name] = {
          rules: {},
          column
        }
      }
      Object.assign(columnKeyMapRules[colKey].rules, filter, sorter)
    }
  }

  columns.forEach((column) => {
    _handleColumn(column)
  })
  return {
    columnKeyMapRules,
    columnSyncRouteSorterKeyMapRules,
    columnSyncRouteFilterKeyMapRules
  }
}
