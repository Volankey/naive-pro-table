import { LocationQuery, Router, useRoute, useRouter } from 'vue-router'
import { QueryOptions } from './types'
function _getParamsKey(key: string, type: string): string {
  return key + '.' + type
}
function getSortQuery(
  sort: Record<string, string | false>,
  routeQuery: LocationQuery
) {
  const res: Record<string, string> = {}
  Object.entries(sort).forEach(([key, value]) => {
    console.log('routeQuery', routeQuery)
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
  const res: Record<string, string> = {}
  filter &&
    Object.entries(filter).forEach(([key, value]) => {
      console.log('routeQuery', routeQuery)
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
export function syncRouter() {
  const router = useRouter()
  const route = useRoute()
  return function updateRouter(tableQuery: QueryOptions) {
    const routeQuery = route.query
    route.query = {}
    const query = {
      ...routeQuery,
      ...getSortQuery(tableQuery.sort, routeQuery),
      ...getFilterQuery(tableQuery.filter, routeQuery),
      page: tableQuery.page
    }

    const path = router.resolve({
      ...router.currentRoute.value,
      query
    })
    router.replace(path)
  }
}
