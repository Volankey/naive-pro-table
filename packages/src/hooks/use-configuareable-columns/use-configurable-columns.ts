import { computed, ref, Ref } from 'vue'
import {
  Config,
  ConfigItemState,
  ConfigurableColumn,
  ConfigurableInitColumn
} from './types'

function toHash<T extends any[]>(
  array: T,
  keyName: string,
  secondKey: string,
  targetKey?: string
) {
  return array.reduce(function(dictionary, next) {
    dictionary[next[keyName] || next[secondKey]] = targetKey
      ? next[targetKey]
      : targetKey
    return dictionary
  }, {}) as Record<string, T[number]>
}
function getFromStorage(key: string, mode: 'sessionStorage' | 'localStorage') {
  try {
    const data = window[mode].getItem(key)
    return data ? JSON.parse(data) : {}
  } catch (error) {
    return {}
  }
}
function setToStorage(
  key: string,
  data: any,
  mode: 'sessionStorage' | 'localStorage'
) {
  try {
    window[mode].setItem(key, JSON.stringify(data))
  } catch (error) {
    // do nothing
  }
}
function megreColumnConfigurableWithCacheConfig(
  column: ConfigurableColumn,
  cachedColumnConfigState: { key: string; state: ConfigItemState }
) {
  column.configurable = {
    ...column.configurable,
    state: {
      ...column.configurable.state,
      ...cachedColumnConfigState
    }
  }
}
function mergeColumnsWithCacheConfig(columns, cacheConfigs) {
  const keysSet = new Set(
    columns.map((item) => item['key'] || item['dataIndex'])
  )
  const filteredCacheConfigs = cacheConfigs.filter((item) =>
    keysSet.has(item.key)
  )
}
export function useConfigurableColumns(
  columnRef: Ref<ConfigurableInitColumn[]>,
  config: Config
) {
  const sortableColumnsRef = ref<ConfigurableColumn[]>([])
  initConfigurableColumnsState()
  const colKeyMapColConfigurable = computed(() => {
    return toHash(sortableColumnsRef.value, 'key', 'dataIndex', 'configurable')
  })

  function initConfigurableColumnsState() {
    let cacheConfig = null

    if (config.storage) {
      const { storageKey, mode } = config.storage
      cacheConfig = getFromStorage(storageKey, mode)
    }
    if (cacheConfig) {
    } else {
      sortableColumnsRef.value = columnRef.value.map((item) => {
        return {
          ...item,
          configurable: {
            state: item.configurable.defaultState ?? {
              visible: true
            }
          }
        }
      })
    }
  }
  return {
    sortableColumnsRef,
    colKeyMapColConfigurable
  }
}
