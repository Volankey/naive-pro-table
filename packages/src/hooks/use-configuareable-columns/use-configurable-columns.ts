// import { ProColumn } from 'src/index'
// import { computed, ref, Ref, watch } from 'vue'
// import {
//   Config,
//   ConfigItemState,
//   ConfigurableColumn,
//   ConfigurableInitColumn,
//   SimpleColumn
// } from './types'

// function toHash<T extends any[]>(
//   array: T,
//   keyName: string,
//   secondKey: string,
//   targetKey?: string
// ) {
//   return array.reduce(function(dictionary, next) {
//     dictionary[next[keyName] || next[secondKey]] = targetKey
//       ? next[targetKey]
//       : targetKey
//     return dictionary
//   }, {}) as Record<string, T[number]>
// }
// function getFromStorage(key: string, mode: 'sessionStorage' | 'localStorage') {
//   try {
//     const data = window[mode].getItem(key)
//     return data ? JSON.parse(data) : {}
//   } catch (error) {
//     return {}
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
// function megreColumnConfigurableWithCacheConfig(
//   column: ConfigurableColumn,
//   cachedColumnConfigState: { key: string; state: ConfigItemState }
// ) {
//   column.configurable = {
//     ...column.configurable,
//     state: {
//       ...column.configurable.state,
//       ...cachedColumnConfigState
//     }
//   }
// }
// function mergeColumnsWithCacheConfig(columns, cacheConfigs) {
//   const keysSet = new Set(
//     columns.map((item) => item['key'] || item['dataIndex'])
//   )
//   const filteredCacheConfigs = cacheConfigs.filter((item) =>
//     keysSet.has(item.key)
//   )
// }

// function backupToSimple(backupCols: ConfigurableColumn[]): SimpleColumn[] {
//   return backupCols.map((col) => {
//     return {
//       key: col.key ?? '',
//       label: typeof col.title === 'string' ? col.title : '',
//       visible: col.configurable.visible ?? false,
//       locked: col.configurable.locked ?? false
//     }
//   })
// }

// function updateBackupBySimple(
//   simpleCols: SimpleColumn[],
//   backupCols: ConfigurableColumn[]
// ): ConfigurableColumn[] {
//   return backupCols.map((col, index) => {
//     if (simpleCols[index].key !== col.key) {
//       throw Error('simpleCols，backupCols不同步')
//     }
//     return {
//       ...col,
//       configurable: {
//         locked: simpleCols[index].locked,
//         visible: simpleCols[index].visible
//       }
//     }
//   })
// }

// function updateFinalColsBySimpleCols(
//   simpleCols: SimpleColumn[],
//   backupCols: ConfigurableColumn[]
// ): SimpleColumn[] {}

// //提供
// export function useConfigurableColumns(
//   columnRef: Ref<ConfigurableInitColumn[]>,
//   config: Config
// ) {
//   const backupColumnsRef: Ref<ConfigurableColumn[]> = ref([]) //备份cols和simpleCols是一一对应的
//   const finalColumnsRef: Ref<ProColumn[]> = ref([])
//   const simpleColumnsRef = computed<SimpleColumn[]>({
//     get() {
//       //
//       return backupToSimple(backupColumnsRef.value)
//     },
//     set(simpleCols) {
//       //
//       backupColumnsRef.value = updateBackupBySimple(
//         simpleCols,
//         backupColumnsRef.value
//       )
//     }
//   })

//   //备份原本的一份cols，并且根据cache和备份生成finalCol，同时生成simpleCol
//   watch(columnRef, () => {
//     initConfigurableColumnsState()
//   })

//   function initConfigurableColumnsState() {
//     let cacheConfig = null

//     if (config.storage) {
//       const { storageKey, mode } = config.storage
//       cacheConfig = getFromStorage(storageKey, mode)
//     }
//     if (cacheConfig) {
//     } else {
//       backupColumnsRef.value = columnRef.value.map((item) => {
//         return {
//           ...item,
//           configurable: {
//             state: item.configurable.defaultState ?? {
//               visible: true
//             }
//           }
//         }
//       })
//     }
//   }

//   watch(simpleColumnsRef, () => {
//     //更新finalCol，更新Storage
//   })

//   return {
//     finalColumnsRef,
//     simpleColumnsRef
//   }
// }
