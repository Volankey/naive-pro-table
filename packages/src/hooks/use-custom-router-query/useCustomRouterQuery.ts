import { reactive, computed, nextTick } from 'vue'
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
    transformToQuery?: (value: undefined | T[K]) => string | undefined
    transformFromQuery?: (routerValue: string | undefined) => T[K]
    preset?: PresetType
  }
}

let queue: Record<string, any> = {}

export function useCustomRouterQuery<T extends Record<string, any>>(
  items: Param<T>,
  reactiveRouteOptions: {
    route: RouteLocationNormalizedLoaded
    router: Router
  }
) {
  const reactiveData = reactive<T>({} as any)
  const defaultTransformToQuery = (value: undefined | any) => {
    return value?.toString?.() ?? ''
  }
  const defaultTransformFromQuery = (routerValue: string) => {
    return routerValue
  }
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
    const routeQueryRef = computed<any>({
      get() {
        const data = reactiveRouteOptions.route.query[key]
        if (Array.isArray(data)) return data.filter(Boolean)
        return data
      },
      set(v) {
        queue[key] = v === item.defaultValue || v === null ? undefined : v

        nextTick(() => {
          reactiveRouteOptions.router.replace({
            ...reactiveRouteOptions.route,
            query: { ...reactiveRouteOptions.route.query, ...queue }
          })
          nextTick(() => (queue = {}))
        })
      }
    })
    reactiveData[key as keyof typeof reactiveData] = computed({
      get: () => {
        if (routeQueryRef.value == null) return item.defaultValue
        return transformFromQuery(routeQueryRef.value)
      }, //如果存给routeQueryRef是undefined的话直接取的时候会取得默认值
      set: (setValue) => {
        routeQueryRef.value = transformToQuery(setValue) ?? ''
      }
    }) as any
  }
  return reactiveData
}
