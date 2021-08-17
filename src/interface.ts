import type { VNodeChild } from 'vue'

import type { DataTableColumn } from 'naive-ui'
import { FilterState, SortState } from 'naive-ui/lib/data-table/src/interface'
import { Rule, Rules } from './ParamsStore/interface'

interface InternalRowData {
  [key: string]: unknown
}
type ValueEnumItem = {
  label: string
  disabled?: boolean
} & {
  [key: string]: unknown
}
interface ValueEnum {
  [key: string]: ValueEnumItem
}
type RenderColumnCell = (column: ProTableBasicColumn) => VNodeChild
type TableColumnTitle = string | RenderColumnCell
type RenderCell<T> = (
  text: any,
  rowData: T,
  rowIndex: number,
  actions: any
) => VNodeChild

export type ProTableBasicColumn<T = InternalRowData> = {
  title?: TableColumnTitle
  editable?: boolean | RenderCell<T>
  valueEnum?: ValueEnum
  copyable?: boolean | RenderCell<T>
  dataIndex: string
  syncRouteSorter?: {
    name: string
    rule: Rule
  }
  syncRouteFilter?: {
    name: string
    rule: Rule
  }
  // valueType: string // TODO:
  render?: (
    text: any,
    rowData: T,
    rowIndex: number,
    actions?: any
  ) => VNodeChild //TODO: actions
  filters?: true | Array<{ label: string; value: string | number }>
}

export type ProColumn<T = InternalRowData> = Partial<DataTableColumn<T>> &
  ProTableBasicColumn<T>

export type ApiRequestArgs = [
  params: unknown | null,
  sort: SortState | null,
  filter: FilterState | null,
  page: number,
  pageSize: number
]

export type ApiRequest = (...args: ApiRequestArgs) => any

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

// {
//     title //,
//     tooltip,
//     ellipsis,
//     copyable,
//     valueEnum,
//     valueType,
//     order //
//     fieldProps，
//     renderFormItem//
//     search,
//     search.transform
//     formItemProps
//     renderText //??
//     render,
//     editable
//     colSize
//     hideInSearch
//     hideInTable
//     hideInForm
//     hideInDescriptions
//     filters
//     onFilter
//     request
//     initialValue
// }
