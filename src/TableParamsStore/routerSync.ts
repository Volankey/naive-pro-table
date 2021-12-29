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
    delete routeQuery[key]
    if (value !== false) {
      res[key] = value
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
      ...getSortQuery(tableQuery.sort, routeQuery),
      ...tableQuery.filter,
      page: tableQuery.page,
      ...routeQuery
    }
    console.log('nextQuery', query)

    router.replace({
      name: route.name,
      params: route.params,
      query
    })
  }
}
