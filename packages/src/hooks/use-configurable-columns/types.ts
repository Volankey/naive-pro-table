import { ProColumnBaseColumn, TableColumnTitle } from '../../interface'

export interface ConfigItemState {
  visible: boolean
}

export interface ConfigurableInitColumn extends ProColumnBaseColumn {
  configurable?: ConfigItemState
}

export type ConfigurableHandledColumn = {
  key: string
  configurable: ConfigItemState
} & ProColumnBaseColumn

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
