import { ProColumn, TableColumnTitle } from '../../interface'

export interface ConfigItemState {
  visible: boolean
}

export interface ConfigurableInitColumn extends ProColumn {
  configurable?: ConfigItemState
}

export type ConfigurableHandledColumn = {
  key: string
  configurable: ConfigItemState
} & ProColumn

export interface Config {
  storage: {
    storageKey: string
    mode: 'sessionStorage' | 'localStorage'
  }
}
export interface ConfigurableColumn {
  readonly key: string
  readonly title: TableColumnTitle
  visible: boolean
}
