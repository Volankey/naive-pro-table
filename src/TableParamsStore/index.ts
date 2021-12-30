import { ref, Ref } from 'vue'
import { Router } from 'vue-router'
import {
  ParamsType,
  KeyMapColumnAndRule,
  QueryOptions,
  RoueQueryParsed
} from './types'

export class TableParamsStore {
  keyMapColumnAndRule: KeyMapColumnAndRule
  queryRef: Ref<{
    params?: unknown | null
    sort?: any
    filter?: any
    page?: number
    pageSize?: number
  }> = ref({})
  onUpdateQuery: (query: QueryOptions) => void

  constructor({
    keyMapColumnAndRule,
    onUpdateQuery
  }: {
    keyMapColumnAndRule: KeyMapColumnAndRule
    onUpdateQuery: (query: QueryOptions) => void
  }) {
    this.keyMapColumnAndRule = keyMapColumnAndRule
    this.onUpdateQuery = onUpdateQuery
  }
  initQuery(routeQueryParsed: RoueQueryParsed) {
    const keyMapColumnAndRule = this.keyMapColumnAndRule
    Object.values(routeQueryParsed).forEach((queryItems) => {
      queryItems.forEach((queryItem) => {
        const { key, value, type } = queryItem
        if (keyMapColumnAndRule[key]) {
          const columnAndRule = keyMapColumnAndRule[key]
          const { column } = columnAndRule
          if (column.syncRouteFilter && type === 'filter') {
            value && this._updateFilterValue(column.key, value)
          }
          if (column.syncRouteSorter && type === 'sort') {
            value && this._updateSorterValue(column.key, value)
          }
        } else if (type === 'page' && value) {
          this.updatePage(+value)
        }
      })
    })
  }
  _updateFilterValue(columnKey: string, value: any) {
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    const { column, rule } = columnAndRule
    const storeQuery = this.queryRef.value

    const filterKey = column.key
    if (rule.type === 'array') {
      column.filterOptionValues = value
    } else {
      column.filterOptionValue = value
    }
    if (!storeQuery['filter']) {
      storeQuery['filter'] = {}
    }
    Object.assign(storeQuery['filter'], { [filterKey]: value })
  }
  _updateSorterValue(columnKey: string, value: any) {
    const storeQuery = this.queryRef.value
    storeQuery['sort'] &&
      Object.keys(storeQuery['sort']).forEach((columnKey) => {
        const { column } = this.keyMapColumnAndRule[columnKey]
        column.sortOrder = null
        storeQuery['sort'][columnKey] = false
      })
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    const { column, rule } = columnAndRule
    const sorterKey = column.key
    column.sortOrder = value
    if (!storeQuery['sort']) {
      storeQuery['sort'] = {}
    }

    Object.assign(storeQuery['sort'], { [sorterKey]: value })
  }
  handleQueryUpdate() {
    this.onUpdateQuery(this.queryRef.value)
  }
  updateSort(columnKey: string, value: any) {
    this._updateSorterValue(columnKey, value)
    this.handleQueryUpdate()
  }
  updateFilter(columnKey: string, value: any) {
    this._updateFilterValue(columnKey, value)
    this.handleQueryUpdate()
  }
  updateParams(params: any) {
    const storeQuery = this.queryRef.value
    if (!storeQuery['params']) {
      storeQuery['params'] = params
    }
    this.handleQueryUpdate()
  }
  updatePage(page: number) {
    const query = this.queryRef.value
    query.page = page
    this.handleQueryUpdate()
  }
  clearQuery(type: 'filter' | 'sort') {
    const query = this.queryRef.value
    if (type === 'filter') {
      query.filter = undefined
    } else if (type === 'sort') {
      query.sort = undefined
    } else {
      query.params = undefined
    }
    this.handleQueryUpdate()
  }
}
