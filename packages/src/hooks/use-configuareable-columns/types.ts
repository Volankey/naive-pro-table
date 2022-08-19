import { ProColumn } from './../../interface'

export interface ConfigItemState {
  visible: boolean
}
export interface ConfigurableInitColumn extends ProColumn {
  configurable: {
    defaultState: Partial<ConfigItemState>
  }
}
export interface ConfigurableColumn extends ProColumn {
  configurable: {
    state: Partial<ConfigItemState>
  }
}
export interface Config {
  storage?: {
    // 是否存 存在哪
    storageKey: string
    mode: 'sessionStorage' | 'localStorage'
  }
}
