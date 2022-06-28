import { PaginationProps } from 'naive-ui'
import { ruleHandlers } from '../rule/rule-handler'
import { ref, type Ref } from 'vue'
import { LocationQueryValue } from 'vue-router'
import type {
  KeyMapColumnAndRule,
  QueryOptions,
  RoueQueryParsed,
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
    onUpdateQuery,
  }: {
    keyMapColumnAndRule: KeyMapColumnAndRule
    onUpdateQuery: (query: QueryOptions) => void
  }) {
    this.keyMapColumnAndRule = keyMapColumnAndRule
    this.onUpdateQuery = onUpdateQuery
  }
  initQuery(
    routeQueryParsed: RoueQueryParsed,
    paginationRef: Ref<PaginationProps>,
  ) {
    const keyMapColumnAndRule = this.keyMapColumnAndRule
    const params: any = {}
    if (paginationRef.value.defaultPage !== undefined) {
      this._updatePageValue(paginationRef.value.defaultPage)
    }
    if (paginationRef.value.defaultPageSize !== undefined) {
      this._updatePageSizeValue(paginationRef.value.defaultPageSize)
    }
    Object.values(routeQueryParsed).forEach((queryItems) => {
      queryItems.forEach((queryItem) => {
        const { key, value, type } = queryItem
        if (keyMapColumnAndRule[key]) {
          const columnAndRule = keyMapColumnAndRule[key]
          const { column } = columnAndRule
          if (column.syncRouteFilter && type === 'filter') {
            value && this._updateFilterValue(column.key!, value)
          }
          if (column.syncRouteSorter && type === 'sort') {
            value && this._updateSorterValue(column.key!, value)
          }
        } else if (type === 'page' && value) {
          this._updatePageValue(+value)
        } else if (type === 'pageSize' && value) {
          this._updatePageSizeValue(+value)
        } else if (type === 'params') {
          params[key] = value
        }
      })
    })
    this._updateParamsValue(params)
  }
  _updateFilterValue(columnKey: string, value: any) {
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    const { column } = columnAndRule

    const storeQuery = this.queryRef.value

    const filterKey = column.key
    if (column.syncRouteFilter?.rule.type === 'array') {
      if (value === undefined || Array.isArray(value)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        column.filterOptionValues = value
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        column.filterOptionValues = [value]
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      column.filterOptionValue = value
    }
    if (!storeQuery['filter']) {
      storeQuery['filter'] = {}
    }
    Object.assign(storeQuery['filter'], { [filterKey!]: value })
  }
  _updateSorterValue(columnKey: string, value: any) {
    const storeQuery = this.queryRef.value
    storeQuery['sort'] &&
      Object.keys(storeQuery['sort']).forEach((columnKey) => {
        const { column } = this.keyMapColumnAndRule[columnKey]
        column.sortOrder = undefined
        storeQuery['sort'][columnKey] = false
      })
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    // const { column, rule } = columnAndRule
    const { column } = columnAndRule
    const sorterKey = column.key
    column.sortOrder = value
    if (!storeQuery['sort']) {
      storeQuery['sort'] = {}
    }

    Object.assign(storeQuery['sort'], { [sorterKey!]: value })
  }
  handleQueryUpdate() {
    this.onUpdateQuery(this.queryRef.value as any)
  }
  updateSort(columnKey: string, value: any) {
    this._updateSorterValue(columnKey, value)
    this.handleQueryUpdate()
  }
  updateFilter(columnKey: string, value: any) {
    this._updateFilterValue(columnKey, value)
    this.handleQueryUpdate()
  }
  _updateParamsValue(params: any) {
    const storeQuery = this.queryRef.value
    if (!storeQuery['params']) {
      storeQuery['params'] = params
    }
  }
  updateParams(params: any) {
    const storeQuery = this.queryRef.value
    if (!storeQuery['params']) {
      storeQuery['params'] = params
    }
    this.handleQueryUpdate()
  }
  _updatePageValue(page: number) {
    const query = this.queryRef.value
    query.page = page
  }
  updatePage(page: number) {
    this._updatePageValue(page)
    this.handleQueryUpdate()
  }
  _updatePageSizeValue(pageSize: number) {
    const query = this.queryRef.value
    query.pageSize = pageSize
  }
  updatePageSize(pageSize: number) {
    this._updatePageSizeValue(pageSize)
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
