import { ColumnKeyMapColAndRules } from '../utils'
import { type LocationQuery, useRoute, useRouter } from 'vue-router'
import type { QueryOptions, RoueQueryParsed } from '../table-params-store/types'

function parseRouteQueryKey(queryKey: string) {
  const keyItems = queryKey.split('.')
  // 保证在设置了query-prefix的情况下能够正确获取key & type
  const type = keyItems.pop() as string
  const key = keyItems.pop() as string
  // 处理带有'.'符号的prefix
  const prefix = keyItems.join('.')
  return {
    type,
    key,
    prefix
  }
}
function getQuery(
  tableQuery: QueryOptions,
  routeQuery: LocationQuery,
  columnKeyMapColAndRules: ColumnKeyMapColAndRules,
  customParams?: Record<string, any>,
  tablePrefix?: string
) {
  function _getQueryKey(key: string, type: string): string {
    if (tablePrefix) return `${tablePrefix}.${key}.${type}`
    else return `${key}.${type}`
  }

  function getSortQuery(
    sort: Record<string, string | false>,
    routeQuery: LocationQuery
  ) {
    const res: Record<string, string | null> = {}
    sort &&
      Object.entries(sort).forEach(([key, value]) => {
        const column = columnKeyMapColAndRules[key].column
        if (column.syncRouteSorter) {
          const routeKey = column.syncRouteSorter.name
          const k = _getQueryKey(routeKey, 'sort')
          delete routeQuery[k]
          if (value !== false) {
            res[k] = value
          } else {
            res[k] = null
          }
        }
      })
    return res
  }

  function getFilterQuery(
    filter: Record<string, string | false>,
    routeQuery: LocationQuery
  ) {
    const res: Record<string, string | null> = {}
    filter &&
      Object.entries(filter).forEach(([key, value]) => {
        const column = columnKeyMapColAndRules[key].column
        if (column.syncRouteFilter) {
          const routeKey = column.syncRouteFilter.name
          const k = _getQueryKey(routeKey, 'filter')
          delete routeQuery[k]
          if (value) {
            res[k] = value
          } else {
            res[k] = null
          }
        }
      })
    return res
  }

  function getPageQuery(pageNumber: number | undefined) {
    const k = _getQueryKey('page', 'page')
    return {
      [k]: pageNumber || null
    }
  }

  function getPageSizeQuery(pageSize: number | undefined) {
    const k = _getQueryKey('pageSize', 'pageSize')
    return {
      [k]: pageSize || null
    }
  }

  function getParamsQuery(
    params: Record<string, any> | undefined,
    routeQuery: LocationQuery
  ) {
    const res: Record<string, string | null> = {}
    params &&
      Object.entries(params).forEach(([key, value]) => {
        const k = _getQueryKey(key, 'params')
        delete routeQuery[k]
        if (value !== '') {
          res[k] = value
        } else {
          res[k] = null
        }
      })
    return res
  }

  return {
    ...getSortQuery(tableQuery.sort, routeQuery),
    ...getFilterQuery(tableQuery.filter, routeQuery),
    ...getPageQuery(tableQuery.page),
    ...getPageSizeQuery(tableQuery.pageSize),
    ...getParamsQuery(customParams, routeQuery)
  }
}

export function syncRouterQuery() {
  const router = useRouter()
  const route = useRoute()
  return function updateRouter(
    tableQuery: QueryOptions,
    columnKeyMapColAndRules: ColumnKeyMapColAndRules,
    customParams?: Record<string, any>,
    tablePrefix?: string
  ) {
    const routeQuery = { ...route.query }
    const query = getQuery(
      tableQuery,
      routeQuery,
      columnKeyMapColAndRules,
      customParams,
      tablePrefix
    )
    const nextQuery = {
      ...routeQuery,
      ...query
    }
    Object.entries(nextQuery).forEach(([k, v]) => {
      if (v === null) {
        ;(nextQuery as any)[k] = undefined
      }
    })

    const next = router.resolve({
      ...router.currentRoute.value,
      query: nextQuery
    })
    router.replace(next)
  }
}

export function syncFromRouter(queryPrefix = '') {
  const route = useRoute()
  const query = route.query

  return Object.entries(query).reduce((result, curr) => {
    const [queryKey, value] = curr
    const { type, key, prefix } = parseRouteQueryKey(queryKey)
    if (!result[key]) {
      result[key] = []
    }

    if (queryPrefix === prefix) {
      result[key].push({ key, type, value })
    }
    return result
  }, {} as RoueQueryParsed)
}
