import { defineComponent, h, VNode, PropType, computed } from 'vue'
import { NDataTable } from 'naive-ui'
import { dataTableProps } from 'naive-ui/lib/data-table/src/DataTable.js'
import { headerPropsDefine } from './commonProps'
import { ProColumn } from './interface'
import ProHeader from './Header/ProHeader.vue'
import { handleColumn } from './utils'

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

    const mergedColumnsRef = computed(() => {
      const { columns } = props
      return columns.map(handleColumn)
    })

    return {
      hasHeader: hasHeaderRef,
      headerProps: headerPropsRef,
      mergedColumns: mergedColumnsRef
    }
  },
  render() {
    const { headerTitle, headerToolbars } = this.$slots
    const {mergedColumns} = this
    return (
      <div>
        <ProHeader
          {...this.headerProps}
          v-slots={{ headerTitle, headerToolbars }}
        />
        <NDataTable columns={mergedColumns}></NDataTable>
      </div>
    )
  }
})
