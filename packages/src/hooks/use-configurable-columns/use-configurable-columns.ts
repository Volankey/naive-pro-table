import { ProColumn } from '../../interface'
import { ref, Ref, watch } from 'vue'
import {
  Config,
  ConfigurableColumn,
  ConfigurableInitColumn,
  SimpleColumn
} from './types'

function objectArrayToMap<T extends any[]>(
  arr: T,
  key: string,
  targetKey: string
) {
  const map: Map<string | undefined, any> = new Map()
  arr.forEach((item) => {
    map.set(item[key], item[targetKey])
  })
  return map
}

function sortBySimpleCols<T extends ProColumn>(
  sourceCols: T[],
  simpleCols: SimpleColumn[]
): T[] {
  const set = new Set(simpleCols.map((col) => col.key).reverse())
  const res = [...sourceCols]
  set.forEach((colKey) => {
    const findColIndex = res.findIndex((col) => col.key === colKey)
    if (findColIndex !== -1) {
      const findCol = res.splice(findColIndex, 1)
      res.unshift(...findCol)
    }
  })
  return res
}

function getFromStorage(key: string, mode: 'sessionStorage' | 'localStorage') {
  try {
    const data = window[mode].getItem(key)
    return data ? JSON.parse(data) : undefined
  } catch (error) {
    return undefined
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

function initSimpleColsWithCache(
  cols: ConfigurableInitColumn[],
  cacheSimpleCols: SimpleColumn[]
): SimpleColumn[] {
  const cacheMap = objectArrayToMap(cacheSimpleCols, 'key', 'visible')
  const sortCols = sortBySimpleCols(cols, cacheSimpleCols)
  return sortCols.map((col) => {
    const visible = cacheMap.has(col.key) ? cacheMap.get(col.key) : true
    return {
      key: col.key ?? '',
      label: typeof col.title === 'string' ? col.title : '',
      visible: visible
    }
  })
}

function updateBackupColsBySimpleCols(
  simpleCols: SimpleColumn[],
  backupCols: ConfigurableColumn[]
): ConfigurableColumn[] {
  const simpleMap = objectArrayToMap(simpleCols, 'key', 'visible')
  const sortCols = sortBySimpleCols(backupCols, simpleCols)
  return sortCols.map((col) => {
    const visible = simpleMap.has(col.key) ? simpleMap.get(col.key) : true
    return {
      ...col,
      configurable: {
        visible: visible
      }
    }
  })
}

function updateFinalColsByBackupCols(
  backupCols: ConfigurableColumn[]
): ProColumn[] {
  const filterBackupCols = backupCols.filter((col) => {
    return col.configurable.visible
  })
  return configurableColsToProTableCols(filterBackupCols)
}
function deepClone(obj: any): any {
  if (typeof obj !== 'object' || obj === null || obj === undefined) {
    return obj
  }
  if (obj instanceof Array) {
    return obj.map((item: any) => deepClone(item))
  }
  if (obj instanceof Object) {
    const res: any = {}
    Object.entries(obj).forEach(([key, value]) => {
      res[key] = deepClone(value)
    })
    return res
  }
}
function configurableColsToProTableCols(
  configurableCols: ConfigurableColumn[]
): ProColumn[] {
  const configurableColsTemp = deepClone(configurableCols)
  return configurableColsTemp.map((col: any) => {
    Reflect.deleteProperty(col, 'configurable')
    return col
  })
}

function removeStorageItem(config: Config): void {
  window[config.storage.mode].removeItem(config.storage.storageKey)
}

export function useConfigurableColumns(
  columnRef: Ref<ConfigurableInitColumn[]>,
  config: Config
): {
  finalColumnsRef: Ref<ProColumn<any>[]>
  simpleColumnsRef: Ref<SimpleColumn[]>
  clearCache: () => void
} {
  const backupColumnsRef: Ref<ConfigurableColumn[]> = ref([]) //备份cols和simpleCols是一一对应的
  const finalColumnsRef: Ref<ProColumn<any>[]> = ref([])
  const simpleColumnsRef: Ref<SimpleColumn[]> = ref([])

  watch(
    simpleColumnsRef,
    (simpleCols) => {
      backupColumnsRef.value = updateBackupColsBySimpleCols(
        simpleCols,
        backupColumnsRef.value
      )
      //更新finalCol
      finalColumnsRef.value = updateFinalColsByBackupCols(
        backupColumnsRef.value
      )
    },
    { deep: true, immediate: true }
  )

  watch(
    simpleColumnsRef,
    (simpleCols) => {
      // 更新Storage
      setToStorage(config.storage.storageKey, simpleCols, config.storage.mode)
    },
    {
      deep: true
    }
  )
  //每次外部更新columnRef，备份一份cols，并且根据cache和备份生成finalCol，同时生成simpleCol
  watch(
    columnRef,
    () => {
      backupColumnsRef.value = columnRef.value
      finalColumnsRef.value = configurableColsToProTableCols(columnRef.value)
      const cacheSimpleCols =
        getFromStorage(config.storage.storageKey, config.storage.mode) ?? []
      simpleColumnsRef.value = initSimpleColsWithCache(
        columnRef.value,
        cacheSimpleCols
      )
    },
    {
      immediate: true
    }
  )

  function clearCache() {
    removeStorageItem(config)
    backupColumnsRef.value = columnRef.value
    finalColumnsRef.value = configurableColsToProTableCols(columnRef.value)
    const cacheSimpleCols =
      getFromStorage(config.storage.storageKey, config.storage.mode) ?? []
    simpleColumnsRef.value = initSimpleColsWithCache(
      columnRef.value,
      cacheSimpleCols
    )
  }

  return {
    finalColumnsRef,
    simpleColumnsRef,
    clearCache
  }
}
