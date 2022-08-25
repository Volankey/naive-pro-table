import type { VNodeChild } from 'vue'
import type { ValueType } from './value-type-render/interface'
import type {
  DataTableColumn,
  DataTableBaseColumn,
  DataTableFilterState
} from 'naive-ui'

import type { Rule } from './table-params-store/types'
import {
  TableBaseColumn,
  TableExpandColumn,
  TableSelectionColumn
} from 'naive-ui/es/data-table/src/interface'

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
export type RenderColumnCell = (column: ProTableBasicColumn) => VNodeChild
type TableColumnTitle = string | RenderColumnCell
export type RenderCell<T = any> = (
  text: any,
  rowData: T,
  rowIndex: number,
  actions: any
) => VNodeChild

export type SyncRouteNameRule =
  | {
      name: string
      rule?: Rule
    }
  | false

export type ProTableBasicColumn<T = InternalRowData> = {
  key?: string
  title?: TableColumnTitle
  editable?: boolean | RenderCell<T>
  children?: Array<ProTableBasicColumn<T>>
  valueEnum?: ValueEnum
  copyable?: boolean | RenderCell<T>
  dataIndex: string
  sortOrder?: 'ascend' | 'descend' | false
  syncRouteSorter?: SyncRouteNameRule
  syncRouteFilter?: SyncRouteNameRule
  valueType?: ValueType
  render?: RenderCell<T>
  sorter?: DataTableBaseColumn<T>['sorter']
  filter?: DataTableBaseColumn<T>['filter']
}

export type ProColumn<T = InternalRowData> =
  | (Omit<Partial<DataTableColumn<T>>, keyof ProTableBasicColumn> &
      ProTableBasicColumn<T>)
  | TableBaseColumn<T>
  | TableSelectionColumn<T>
  | TableExpandColumn<T>

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
  refresh: (opt?: { showLoading?: boolean }) => void
}

export type SyncRoutePage =
  | {
      name: string
    }
  | false

export type SyncRoutePageSize = SyncRoutePage

export * from './value-type-render/interface'

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
