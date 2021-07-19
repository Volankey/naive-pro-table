import type { BasicConfig } from './types'
import { h, Ref, ref } from 'vue'
import { NButton } from 'naive-ui'

const config: BasicConfig = {
  bordered: true,
  size: 'small',
  bottomBordered: false,
  singleLine: false,
  singleColumn: false,
  expanded: false,
  toolBars: {
    refresh: () => h(NButton, { type: 'primary' }, { default: () => '刷新' })
  }
}

export default (defaultConfig: BasicConfig = {}): Ref<BasicConfig> => {
  return ref<BasicConfig>(Object.assign({}, defaultConfig, config))
}
