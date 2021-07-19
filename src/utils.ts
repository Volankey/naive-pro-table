import { createTextVNode, h, VNode } from 'vue'
import { DataTableProps, NDataTable } from 'naive-ui'
import { HeaderProps } from 'naive-ui/lib/typography/src/create-header'

export const renderDataTable = (
  props: DataTableProps,
  emptyRender: () => VNode
) => {
  return h(NDataTable, props, {
    empty: emptyRender
  })
}

export const renderProTableHeader = (
  props: HeaderProps,
  headerSlot: () => VNode
) => {
  return h(NDataTable, props, {
    empty: emptyRender
  })
}

export const RenderHelper = (context: { render: string | (() => VNode) }) => {
  const { render } = context
  if (typeof render === 'string') {
    return () => createTextVNode(render)
  } else {
    return render
  }
}
