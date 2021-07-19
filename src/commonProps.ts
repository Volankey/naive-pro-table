import { VNode, PropType } from 'vue'
import {} from 'naive-ui'
export const headerProps = {
  headerTitle: [String, Function] as PropType<string | (() => VNode)>,
  headerTitleToolTip: String,
  toolBars: Array as PropType<(() => VNode)[]>
}
