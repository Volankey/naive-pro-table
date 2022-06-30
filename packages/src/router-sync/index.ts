import { type LocationQuery, useRoute, useRouter } from 'vue-router'
import type { QueryOptions, RoueQueryParsed } from '../table-params-store/types'

function parseRouteQueryKey(queryKey: string) {
  const [key, type] = queryKey.split('.')
  return {
    type,
    key
  }
}
function getQuery(
  tableQuery: QueryOptions,
  routeQuery: LocationQuery,
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
    const res: Record<string, string | undefined> = {}
    sort &&
      Object.entries(sort).forEach(([key, value]) => {
        const k = _getQueryKey(key, 'sort')
        delete routeQuery[k]
        if (value !== false) {
          res[k] = value
        } else {
          res[k] = undefined
        }
      })
    return res
  }

  function getFilterQuery(
    filter: Record<string, string | false>,
    routeQuery: LocationQuery
  ) {
    const res: Record<string, string | undefined> = {}
    filter &&
      Object.entries(filter).forEach(([key, value]) => {
        const k = _getQueryKey(key, 'filter')
        delete routeQuery[k]
        if (value !== false) {
          res[k] = value
        } else {
          res[k] = undefined
        }
      })
    return res
  }

  function getPageQuery(pageNumber: number | undefined) {
    const k = _getQueryKey('page', 'page')
    return {
      [k]: pageNumber || undefined
    }
  }

  function getPageSizeQuery(pageSize: number | undefined) {
    const k = _getQueryKey('pageSize', 'pageSize')
    return {
      [k]: pageSize || undefined
    }
  }

  function getParamsQuery(
    params: Record<string, any> | undefined,
    routeQuery: LocationQuery
  ) {
    const res: Record<string, string | undefined> = {}
    params &&
      Object.entries(params).forEach(([key, value]) => {
        const k = _getQueryKey(key, 'params')
        delete routeQuery[k]
        res[k] = value
      })
    return res
  }

  return {
    ...getSortQuery(tableQuery.sort, routeQuery),
    ...getFilterQuery(tableQuery.filter, routeQuery),
    ...getPageQuery(tableQuery.page),
    ...getPageSizeQuery(tableQuery.pageSize),
    ...getParamsQuery(tableQuery.params, routeQuery)
  }
}

export function syncRouterQuery() {
  const router = useRouter()
  const route = useRoute()
  return function updateRouter(tableQuery: QueryOptions, tablePrefix?: string) {
    const routeQuery = { ...route.query }
    const query = {
      ...getQuery(tableQuery, routeQuery, tablePrefix)
    }
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined && (routeQuery as any)[key]) {
        // eslint-disable-next-line prettier/prettier
        (routeQuery as any)[key] = undefined
      }
    })
    const next = router.resolve({
      ...router.currentRoute.value,
      query: {
        ...routeQuery,
        ...query
      }
    })
    router.replace(next)
  }
}

export function syncFromRouter() {
  const route = useRoute()
  const query = route.query
  return Object.entries(query).reduce((result, curr) => {
    const [queryKey, value] = curr
    const { key, type } = parseRouteQueryKey(queryKey)
    if (!result[key]) {
      result[key] = []
    }
    result[key].push({ key, type, value })
    return result
  }, {} as RoueQueryParsed)
}
