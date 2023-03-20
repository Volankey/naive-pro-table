import { reactive, computed, nextTick } from 'vue'
import { RouteLocationNormalizedLoaded, Router } from 'vue-router'
import {
  booleanPreset,
  datePreset,
  dateRangePreset,
  numberPreset,
  stringArrayPreset
} from './preset'

type PresetType = 'number' | 'date' | 'dateRange' | 'boolean' | 'stringArray'

type Param<T> = {
  [K in keyof T]: {
    defaultValue?: T[K] | null
    render?: (value: undefined | null | T[K]) => string
    getFromQuery?: (routerValue: string | undefined) => T[K]
    preset?: PresetType
  }
}

const presetMap: Record<
  PresetType,
  {
    render(value: any): string | undefined
    getFromQuery(routerQuery: string): any
  }
> = {
  dateRange: dateRangePreset,
  date: datePreset,
  number: numberPreset,
  boolean: booleanPreset,
  stringArray: stringArrayPreset
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
  for (const key in items) {
    const item = items[key]
    const defaultRender = (value: undefined | null | any) => {
      return value?.toString?.() ?? ''
    }
    const defaultGetFromQuery = (routerValue: string) => {
      return routerValue
    }
    const render =
      presetMap[item.preset as PresetType]?.render ??
      item.render ??
      defaultRender
    const getFromQuery =
      presetMap[item.preset as PresetType]?.getFromQuery ??
      item.getFromQuery ??
      defaultGetFromQuery

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
        return getFromQuery(routeQueryRef.value)
      }, //如果存给routeQueryRef是undefined的话直接取的时候会取得默认值
      set: (setValue) => {
        routeQueryRef.value = render(setValue) ?? ''
      }
    }) as any
  }
  return reactiveData
}
