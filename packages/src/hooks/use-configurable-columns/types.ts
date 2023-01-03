import { ProColumn, TableColumnTitle } from '../../interface'

export interface ConfigItemState {
  visible: boolean
}

export interface ConfigurableInitColumn extends ProColumn {
  configurable: Partial<ConfigItemState>
}

export interface Config {
  storage: {
    storageKey: string
    mode: 'sessionStorage' | 'localStorage'
  }
}
export interface ConfigurableColumn {
  readonly key: string
  readonly label: TableColumnTitle
  visible: boolean
}
