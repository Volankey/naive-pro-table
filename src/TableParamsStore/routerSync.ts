import {
  LocationQuery,
  LocationQueryValue,
  useRoute,
  useRouter
} from 'vue-router'
import { QueryOptions, RoueQueryParsed } from './types'
function _getParamsKey(key: string, type: string): string {
  return key + '.' + type
}
function parseRouteQueryKey(queryKey: string) {
  const [key, type] = queryKey.split('.')
  return {
    type,
    key
  }
}
function getSortQuery(
  sort: Record<string, string | false>,
  routeQuery: LocationQuery
) {
  const res: Record<string, string | null> = {}
  sort &&
    Object.entries(sort).forEach(([key, value]) => {
      const k = _getParamsKey(key, 'sort')
      delete routeQuery[k]
      if (value !== false) {
        res[k] = value
      } else {
        res[k] = null
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
      const k = _getParamsKey(key, 'filter')
      delete routeQuery[k]
      if (value !== false) {
        res[k] = value
      } else {
        res[k] = null
      }
    })
  return res
}
function getPageQuery(pageNumber: number | undefined) {
  const k = _getParamsKey('page', 'page')
  return {
    [k]: pageNumber || null
  }
}

function getParamsQuery(
  params: Record<string, any> | undefined,
  routeQuery: LocationQuery
) {
  const res: Record<string, string | null> = {}
  params &&
    Object.entries(params).forEach(([key, value]) => {
      const k = _getParamsKey(key, 'params')
      delete routeQuery[k]
      if (value !== false) {
        res[k] = value
      } else {
        res[k] = null
      }
    })
  return res
}
export function syncRouterQuery() {
  const router = useRouter()
  const route = useRoute()
  return function updateRouter(tableQuery: QueryOptions) {
    const routeQuery = route.query
    const query = {
      ...routeQuery,
      ...getSortQuery(tableQuery.sort, routeQuery),
      ...getFilterQuery(tableQuery.filter, routeQuery),
      ...getPageQuery(tableQuery.page),
      ...getParamsQuery(tableQuery.params, routeQuery)
    }

    const path = router.resolve({
      ...router.currentRoute.value,
      query
    })
    router.replace(path)
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
