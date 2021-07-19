import type { VNode } from 'vue'
import type { TableProps } from 'naive-ui'

export type BasicConfig = {
  loading?: boolean
  headerTitleVisible?: boolean
  summaryVisible?: boolean
  expanded?: boolean
  rowSelection?: boolean
  headerTitle?: string | (() => VNode)
  headerTitleToolTip?: string
  toolBars?: {
    refresh: () => VNode
  }
} & TableProps
