// import { ProColumn } from '../../interface'
// import { computed, onMounted, ref, Ref, watch } from 'vue'
// import { Config, ConfigurableInitColumn, ConfigurableColumn } from './types'

// function deepClone(obj: any): any {
//   if (typeof obj !== 'object' || obj === null || obj === undefined) {
//     return obj
//   }
//   if (obj instanceof Array) {
//     return obj.map((item: any) => deepClone(item))
//   }
//   if (obj instanceof Object) {
//     const res: any = {}
//     Object.entries(obj).forEach(([key, value]) => {
//       res[key] = deepClone(value)
//     })
//     return res
//   }
// }

// function objectArrayToMap<T extends any[]>(
//   arr: T,
//   key: string,
//   targetKey: string
// ) {
//   const map: Map<string | undefined, any> = new Map()
//   arr.forEach((item) => {
//     map.set(item[key], item[targetKey])
//   })
//   return map
// }

// function sortByConfigurableCols<T extends ProColumn>(
//   sourceCols: T[],
//   configurableCols: ConfigurableColumn[]
// ): T[] {
//   const set = new Set(configurableCols.map((col) => col.key).reverse())
//   const res = [...sourceCols]
//   set.forEach((colKey) => {
//     const findColIndex = res.findIndex((col) => col.key === colKey)
//     if (findColIndex !== -1) {
//       const findCol = res.splice(findColIndex, 1)
//       res.unshift(...findCol)
//     }
//   })
//   return res
// }

// function getFromStorage(key: string, mode: 'sessionStorage' | 'localStorage') {
//   try {
//     const data = window[mode].getItem(key)
//     return data ? JSON.parse(data) : undefined
//   } catch (error) {
//     return undefined
//   }
// }

// function setToStorage(
//   key: string,
//   data: any,
//   mode: 'sessionStorage' | 'localStorage'
// ) {
//   try {
//     window[mode].setItem(key, JSON.stringify(data))
//   } catch (error) {
//     // do nothing
//   }
// }

// function initConfigurableColsWithCache(
//   cols: ConfigurableInitColumn[],
//   cacheCols: ConfigurableColumn[]
// ): ConfigurableColumn[] {
//   const cacheMap = objectArrayToMap(cacheCols, 'key', 'visible')
//   const sortCols = sortByConfigurableCols(cols, cacheCols)
//   return sortCols.map((col) => {
//     const visible = cacheMap.has(col.key) ? cacheMap.get(col.key) : true
//     return {
//       key: col.key ?? '',
//       label: typeof col.title === 'string' ? col.title : '',
//       visible: visible
//     }
//   })
// }

// function updateProTableColsByConfigurableMap(
//   columnsMap: Map<string, ProColumn>,
//   configurableColumnsMap: Map<string, ConfigurableColumn>
// ): ProColumn[] {
//   const res: ProColumn[] = []
//   configurableColumnsMap.forEach((value, key) => {
//     if (value.visible) {
//       if (columnsMap.get(key) !== undefined) res.push(columnsMap.get(key))
//     }
//   })
//   return res
// }

// function configurableColsToProTableCols(
//   configurableCols: ConfigurableInitColumn[]
// ): ProColumn[] {
//   const configurableColsTemp = deepClone(configurableCols)
//   return configurableColsTemp.map((col: any) => {
//     Reflect.deleteProperty(col, 'configurable')
//     return col
//   })
// }

// function removeStorageItem(config: Config): void {
//   window[config.storage.mode].removeItem(config.storage.storageKey)
// }

// export function useConfigurableColumns(
//   columns: ConfigurableInitColumn[],
//   config: Config
// ): {
//   proTableColumnsRef: Ref<ProColumn<any>[]>
//   configurableColumnsRef: Ref<ConfigurableColumn[]>
//   clearCache: () => void
// } {
//   const proTableColumnsRef: Ref<ProColumn<any>[]> = ref([])
//   const configurableColumnsRef: Ref<ConfigurableColumn[]> = ref([])
//   const columnsMap: Map<string, ProColumn> = new Map(
//     columns.map((col) => {
//       const colClone = deepClone(col)
//       Reflect.deleteProperty(colClone, 'configurable')
//       return [
//         colClone.key,
//         {
//           ...colClone
//         }
//       ]
//     })
//   )
//   const configurableColumnsMap = computed(() => {
//     return new Map(
//       configurableColumnsRef.value.map((col) => {
//         return [
//           col.key,
//           {
//             ...col
//           }
//         ]
//       })
//     )
//   })

//   watch(
//     configurableColumnsRef,
//     (configurableColumns) => {
//       proTableColumnsRef.value = updateProTableColsByConfigurableMap(
//         backupColumnsRef.value
//       )
//     },
//     { deep: true, immediate: true }
//   )

//   watch(
//     configurableColumnsRef,
//     (simpleCols) => {
//       // 更新Storage
//       setToStorage(config.storage.storageKey, simpleCols, config.storage.mode)
//     },
//     {
//       deep: true
//     }
//   )

//   onMounted(() => {
//     proTableColumnsRef.value = configurableColsToProTableCols(columnRef.value)
//     const cacheSimpleCols =
//       getFromStorage(config.storage.storageKey, config.storage.mode) ?? []
//     configurableColumnsRef.value = initConfigurableColsWithCache(
//       columnRef.value,
//       cacheSimpleCols
//     )
//   })

//   function clearCache() {
//     removeStorageItem(config)
//     backupColumnsRef.value = columnRef.value
//     proTableColumnsRef.value = configurableColsToProTableCols(columnRef.value)
//     const cacheSimpleCols =
//       getFromStorage(config.storage.storageKey, config.storage.mode) ?? []
//     configurableColumnsRef.value = initConfigurableColsWithCache(
//       columnRef.value,
//       cacheSimpleCols
//     )
//   }

//   return {
//     proTableColumnsRef,
//     configurableColumnsRef,
//     clearCache
//   }
// }
