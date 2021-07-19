import { defineComponent, h, VNode, PropType } from 'vue'
import { DataTableProps, NDataTable } from 'naive-ui'
import { renderDataTable } from './utils'
import { headerProps } from './commonProps'
import { ProColumn } from './interface'

export default defineComponent({
  name: 'NProTable',
  props: {
    ...headerProps,
    columns: Array as PropType<ProColumn<any>[]>
  },
  setup(props, context) {},
  render() {
    return <NDataTable columns={columns}></NDataTable>
  }
})
