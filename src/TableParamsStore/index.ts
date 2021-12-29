import { ref, Ref } from 'vue'
import { Router } from 'vue-router'
import { ParamsType, KeyMapColumnAndRule, QueryOptions } from './types'

function _getParamsKey(key: string, type: ParamsType): string {
  return key + '.' + type
}

export class TableParamsStore {
  getParamsKey: typeof _getParamsKey = _getParamsKey
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
    getParamsKey,
    keyMapColumnAndRule,
    onUpdateQuery
  }: {
    getParamsKey?: typeof _getParamsKey
    keyMapColumnAndRule: KeyMapColumnAndRule
    onUpdateQuery: (query: QueryOptions) => void
  }) {
    this.getParamsKey = getParamsKey || _getParamsKey
    this.keyMapColumnAndRule = keyMapColumnAndRule
    this.onUpdateQuery = onUpdateQuery
  }
  initQuery(query: qs.ParsedQs) {
    Object.entries(this.keyMapColumnAndRule).forEach(([key, columnAndRule]) => {
      const { column } = columnAndRule
      if (column.syncRouteFilter) {
        const filterKey = column.key
        query[filterKey] &&
          this._updateFilterValue(column.key, query[filterKey])
      }
      if (column.syncRouteSorter) {
        const sorterKey = column.key
        query[sorterKey] &&
          this._updateSorterValue(column.key, query[sorterKey])
      }
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
