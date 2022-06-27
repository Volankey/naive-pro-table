import type { VNode, PropType } from 'vue'

export const headerPropsDefine = {
  headerTitle: [String, Function] as PropType<
    string | (() => VNode) | undefined
  >,
  headerTitleToolTip: String,
  toolBars: {
    type: Array as PropType<(() => VNode)[]>,
    default: () => [],
  },
}
