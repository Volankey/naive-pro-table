import type { VNodeChild } from 'vue'

import type {
  DataTableColumn,
  DataTableBaseColumn,
  DataTableFilterState
} from 'naive-ui'

import type { Rule } from './table-params-store/types'

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
  key?: string
  title?: TableColumnTitle
  editable?: boolean | RenderCell<T>
  children?: Array<ProTableBasicColumn<T>>
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
  render?: RenderCell<T>
  filters?: boolean | Array<{ label: string; value: string | number }>
  sorter?: DataTableBaseColumn<T>['sorter']
  sortOrder?: boolean
  filter?: DataTableBaseColumn<T>['filter']
}

export type ProColumn<T = InternalRowData> = Omit<
  Partial<DataTableColumn<T>>,
  keyof ProTableBasicColumn
> &
  ProTableBasicColumn<T>

export type ApiRequestArgs = [
  params: any | null,
  sort: Record<string, string> | null,
  filter: DataTableFilterState | null,
  page: number,
  pageSize: number
]

export type ApiRequest<T = any> = (...args: ApiRequestArgs) => Promise<{
  itemCount?: number
  pageCount?: number
  data: T[]
}>

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }
export interface ProTableIns {
  triggerParamsChange: (params: any) => void
  refresh: () => void
}

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
