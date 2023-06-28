import { reactive, computed, nextTick, customRef } from 'vue'
import { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import {
  booleanPreset,
  datePreset,
  dateRangePreset,
  numberPreset,
  stringArrayPreset
} from './preset'

const presetMap = {
  dateRange: dateRangePreset,
  date: datePreset,
  number: numberPreset,
  boolean: booleanPreset,
  stringArray: stringArrayPreset
} as const

type PresetType = keyof typeof presetMap

type Param<T> = {
  [K in keyof T]: {
    defaultValue?: T[K]
    transformToQuery?: (
      value: undefined | null | T[K]
    ) => string | undefined | null
    transformFromQuery?: (routerValue: string | undefined) => T[K]
    preset?: PresetType
  }
}
const _cache = new WeakMap()
export function useCustomRouterQuery<T extends Record<string, any>>(
  items: Param<T>,
  reactiveRouteOptions: {
    route: RouteLocationNormalizedLoaded
    router: Router
  },
  options?: {
    immediate?: boolean
  }
) {
  if (!_cache.has(reactiveRouteOptions.route))
    _cache.set(reactiveRouteOptions.route, new Map())

  const _query: Map<string, any> = _cache.get(reactiveRouteOptions.route)
  Object.entries(reactiveRouteOptions.route.query).forEach(([name, value]) => {
    _query.set(name, value)
  })
  const reactiveData = reactive<T>({} as any)
  const defaultTransformToQuery = (value: any) => {
    return value
  }
  const defaultTransformFromQuery = (routerValue: string) => {
    return routerValue
  }
  let isInit = false
  for (const key in items) {
    const item = items[key]
    const transformToQuery =
      presetMap[item.preset as PresetType]?.transformToQuery ??
      item.transformToQuery ??
      defaultTransformToQuery
    const transformFromQuery =
      presetMap[item.preset as PresetType]?.transformFromQuery ??
      item.transformFromQuery ??
      defaultTransformFromQuery

    // 取自于vueuse/router https://github.com/vueuse/vueuse/blob/main/packages/router/useRouteQuery/index.ts
    const routeQueryRef = customRef<any>((track, trigger) => ({
      get() {
        track()
        const data = _query.get(key)
        return data
      },
      set(v) {
        let nextVal = v === null ? undefined : v
        if (options?.immediate && !isInit) {
          nextVal = v
        }
        _query.set(key, nextVal)
        trigger()
        nextTick(() => {
          reactiveRouteOptions.router.replace({
            ...reactiveRouteOptions.route,
            query: {
              ...reactiveRouteOptions.route.query,
              ...Object.fromEntries(_query.entries())
            }
          })
        })
      }
    }))

    reactiveData[key as keyof typeof reactiveData] = computed({
      get: () => {
        if (routeQueryRef.value == null) return item.defaultValue
        return transformFromQuery(routeQueryRef.value)
      }, //如果存给routeQueryRef是undefined的话直接取的时候会取得默认值
      set: (setValue) => {
        routeQueryRef.value = transformToQuery(setValue)
      }
    }) as any
    if (options?.immediate) {
      routeQueryRef.value = transformToQuery(
        reactiveData[key as keyof typeof reactiveData]
      )
    }
  }
  isInit = true

  return reactiveData
}
