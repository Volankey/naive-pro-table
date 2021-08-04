import type { VNodeChild } from 'vue'

import type { DataTableColumn } from 'naive-ui'
import { FilterState, SortState } from 'naive-ui/lib/data-table/src/interface'
interface InternalRowData {
  [key: string]: unknown
}
interface ValueEnum {
  [key: string]: unknown
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
  // valueType: string // TODO:
  render?: (
    text: any,
    rowData: T,
    rowIndex: number,
    actions?: any
  ) => VNodeChild //TODO: actions
  filters?: true | Array<{ label: string; value: string | number }>
}

export type ProColumn<T> = Partial<DataTableColumn> & ProTableBasicColumn<T>

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
