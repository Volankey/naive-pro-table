import { ProColumn } from '../../interface'
import { computed, onBeforeMount, ref, Ref, watch } from 'vue'
import {
  Config,
  ConfigurableInitColumn,
  ConfigurableColumn,
  ConfigurableHandledColumn
} from './types'

function deepClone(obj: any): any {
  if (
    typeof obj === 'function' ||
    typeof obj !== 'object' ||
    obj === null ||
    obj === undefined
  ) {
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

function getFromStorage(key: string, mode: 'sessionStorage' | 'localStorage') {
  try {
    const data = window[mode].getItem(key)
    return data ? JSON.parse(data) : undefined
  } catch (error) {
    console.error(error)
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
    console.error(error)
    // do nothing
  }
}

function initConfigurableColsWithCache(
  sourceMap: Map<string, ConfigurableHandledColumn>,
  columnsMap: Map<string, ProColumn>,
  cacheCols: ConfigurableColumn[]
): ConfigurableColumn[] {
  const res: ConfigurableColumn[] = []
  const cacheKeys = cacheCols.map((col) => col.key)
  cacheCols.forEach((col) => {
    if (columnsMap.has(col.key))
      res.push({
        ...col,
        title: sourceMap.get(col.key)?.title ?? ''
      })
  })
  Array(...columnsMap.keys()).forEach((key) => {
    if (!cacheKeys.includes(key)) {
      if (columnsMap.has(key))
        res.push({
          key: key,
          title: sourceMap.get(key)?.title ?? '',
          visible: sourceMap.get(key)?.configurable.visible ?? true
        })
    }
  })
  return res
}

function updateProTableColsByConfigurableMap(
  columnsMap: Map<string, ProColumn>,
  configurableColumnsMap: Map<string, ConfigurableColumn>
): ProColumn[] {
  const res: ProColumn[] = []
  configurableColumnsMap.forEach((value, key) => {
    if (value.visible) {
      if (columnsMap.has(key)) res.push(columnsMap.get(key) as ProColumn)
    }
  })
  return res
}

function removeStorageItem(config: Config): void {
  config.storage &&
    window[config.storage.mode].removeItem(config.storage.storageKey)
}

function handleInitConfigurableColumns(
  columns: ConfigurableInitColumn[]
): ConfigurableHandledColumn[] {
  return columns.map((col) => {
    return {
      ...col,
      key: col.key ?? col.dataIndex,
      configurable: {
        visible: col.configurable?.visible ?? true
      }
    }
  })
}

export function useConfigurableColumns(
  columns: ConfigurableInitColumn[],
  config?: Config
): {
  proTableColumnsRef: Ref<ProColumn<any>[]>
  configurableColumnsRef: Ref<ConfigurableColumn[]>
  reset: () => void
} {
  const handledColumns = handleInitConfigurableColumns(columns)
  const proTableColumnsRef: Ref<ProColumn<any>[]> = ref([])
  const configurableColumnsRef: Ref<ConfigurableColumn[]> = ref([])
  const sourceMap: Map<string, ConfigurableHandledColumn> = new Map( //初始化配置的columns key col映射
    handledColumns.map((col) => {
      return [col.key, col]
    })
  )
  const columnsMap: Map<string, ProColumn> = new Map( //标准全量proTableColumns的 key col映射
    handledColumns.map((col) => {
      const colClone = deepClone(col)
      Reflect.deleteProperty(colClone, 'configurable')
      return [colClone.key, colClone]
    })
  )
  const configurableColumnsMap = computed(() => {
    //可配置ref key col映射
    return new Map(
      configurableColumnsRef.value.map((col) => {
        return [col.key, col]
      })
    )
  })

  watch(
    configurableColumnsRef,
    () => {
      proTableColumnsRef.value = updateProTableColsByConfigurableMap(
        columnsMap,
        configurableColumnsMap.value
      )
    },
    { deep: true, immediate: true }
  )

  watch(
    configurableColumnsRef,
    (configurableCols) => {
      // 更新Storage
      config?.storage &&
        setToStorage(
          config.storage.storageKey,
          configurableCols,
          config.storage.mode
        )
    },
    {
      deep: true
    }
  )

  onBeforeMount(() => {
    const cacheCols =
      (config?.storage &&
        getFromStorage(config.storage.storageKey, config.storage.mode)) ??
      []
    configurableColumnsRef.value = initConfigurableColsWithCache(
      sourceMap,
      columnsMap,
      cacheCols
    )
  })

  function reset() {
    config?.storage && removeStorageItem(config)
    const cacheCols =
      (config?.storage &&
        getFromStorage(config.storage.storageKey, config.storage.mode)) ??
      []
    configurableColumnsRef.value = initConfigurableColsWithCache(
      sourceMap,
      columnsMap,
      cacheCols
    )
  }

  return {
    proTableColumnsRef,
    configurableColumnsRef,
    reset
  }
}
