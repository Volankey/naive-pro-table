import type { VNodeChild } from 'vue'

import type { DataTableColumn, SelectOption } from 'naive-ui'
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
  ellipsis?: DataTableColumn['ellipsis']
  // valueType: string // TODO:
  render?: (
    text: any,
    rowData: T,
    rowIndex: number,
    actions?: any
  ) => VNodeChild //TODO: actions
  filters?: true | Array<{ label: string; value: string | number }>
}

export type ProColumn<T> = ProTableBasicColumn<T>

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
