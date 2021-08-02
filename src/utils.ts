import { createTextVNode, h, VNode } from 'vue'
import { ProColumn, ProTableBasicColumn } from './interface'
import { DataTableColumn } from 'naive-ui'
import { get } from 'lodash-es'

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
    ellipsis:column.ellipsis,
    render,
  }
  return tmpColumn as DataTableColumn<any> 
}
