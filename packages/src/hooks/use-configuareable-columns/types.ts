import { ProColumn } from './../../interface'

export interface ConfigItemState {
  visible: boolean
  locked: boolean
  // draggable: boolean
}

export interface ConfigurableInitColumn extends ProColumn {
  configurable: Partial<ConfigItemState>
}
export interface ConfigurableColumn extends ProColumn {
  configurable: Partial<ConfigItemState>
}
export interface Config {
  storage?: {
    // 是否存 存在哪
    storageKey: string
    mode: 'sessionStorage' | 'localStorage'
  }
}

export interface SimpleColumn {
  readonly key: string
  readonly label: string
  readonly locked: boolean
  visible: boolean
}
