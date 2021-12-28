import { ref, Ref } from 'vue'
import { ParamsType, KeyMapColumnAndRule } from './types'

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

  constructor({
    getParamsKey,
    keyMapColumnAndRule
  }: {
    getParamsKey?: typeof _getParamsKey
    keyMapColumnAndRule: KeyMapColumnAndRule
  }) {
    this.getParamsKey = getParamsKey || _getParamsKey
    this.keyMapColumnAndRule = keyMapColumnAndRule
  }
  initQuery(query: qs.ParsedQs) {
    Object.entries(this.keyMapColumnAndRule).forEach(([key, columnAndRule]) => {
      const { column } = columnAndRule
      if (column.syncRouteFilter) {
        const filterKey = this.getParamsKey(column.key, 'filter')
        query[filterKey] &&
          this._updateFilterValue(column.key, query[filterKey])
      }
      if (column.syncRouteSorter) {
        const sorterKey = this.getParamsKey(column.key, 'filter')
        query[sorterKey] &&
          this._updateSorterValue(column.key, query[sorterKey])
      }
    })
  }
  _updateFilterValue(columnKey: string, value: any) {
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    const { column, rule } = columnAndRule
    const storeQuery = this.queryRef.value

    const filterKey = this.getParamsKey(column.key, 'filter')
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
    debugger
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    const { column, rule } = columnAndRule
    const storeQuery = this.queryRef.value

    const sorterKey = this.getParamsKey(column.key, 'sort')
    column.sortOrder = value
    if (!storeQuery['sort']) {
      storeQuery['sort'] = {}
    }
    Object.assign(storeQuery['sort'], { [sorterKey]: value })
  }
  _updateOtherValue(key: string, value: any) {
    const storeQuery = this.queryRef.value
    if (!storeQuery['params']) {
      storeQuery['params'] = {}
    }
    Object.assign(storeQuery['params'], { [key]: value })
  }
  updateQuery(columnKey: string, value: any, type: ParamsType) {
    if (type === 'filter') {
      this._updateFilterValue(columnKey, value)
    } else if (type === 'sort') {
      this._updateSorterValue(columnKey, value)
    } else if (type === 'page') {
      const query = this.queryRef.value
      query.page = value
    } else {
      this._updateOtherValue(columnKey, value)
    }
  }
  updatePage(page: number) {
    const query = this.queryRef.value
    query.page = page
  }
  clearQuery(type: ParamsType) {
    const query = this.queryRef.value

    if (type === 'filter') {
      query.filter = undefined
    } else if (type === 'sort') {
      query.sort = undefined
    } else {
      query.params = undefined
    }
  }
}
