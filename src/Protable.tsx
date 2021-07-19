import { defineComponent, h, VNode, PropType, computed } from 'vue'
import { DataTableProps, NDataTable } from 'naive-ui'
import { dataTableProps } from 'naive-ui/lib/data-table/src/DataTable.js'
import { renderDataTable } from './utils'
import { headerPropsDefine } from './commonProps'
import { ProColumn } from './interface'
import ProHeader from './Header/ProHeader.vue'

export default defineComponent({
  name: 'NProTable',
  props: {
    ...dataTableProps,
    ...headerPropsDefine,
    columns: {
      type: Array as PropType<ProColumn<any>[]>,
      default: () => []
    }
  },
  setup(props, context) {
    const hasHeaderRef = computed(() => {
      return props.headerTitle || props.toolBars?.length
    })
    const headerPropsRef = computed(() => {
      const { headerTitle, headerTitleToolTip, toolBars } = props
      return {
        headerTitle,
        headerTitleToolTip,
        toolBars
      }
    })
    return {
      hasHeader: hasHeaderRef,
      headerProps: headerPropsRef
    }
  },
  render() {
    return (
      <div>
        <ProHeader {...this.headerProps} />
        <NDataTable columns={[]}></NDataTable>
      </div>
    )
  }
})
