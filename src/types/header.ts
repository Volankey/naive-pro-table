import { VNode } from 'vue'

export interface HeaderProps {
  headerTitle?: string | (() => VNode)
  headerTitleToolTip?: string
}
