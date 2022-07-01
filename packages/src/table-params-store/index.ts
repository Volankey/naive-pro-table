import { PaginationProps } from 'naive-ui'
import { ref, type Ref } from 'vue'
import type {
  KeyMapColumnAndRule,
  QueryOptions,
  RouteQueryParsed,
} from './types'
import type { SortState } from 'naive-ui/lib/data-table/src/interface'
import { useValidateQuery } from '../validate/index';

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
  initQuery(
    routeQueryParsed: RouteQueryParsed,
    paginationRef: Ref<PaginationProps>
  ) {
    const keyMapColumnAndRule = this.keyMapColumnAndRule
    const params: any = {}
    const {
      validateSorter,
      validateFilter,
      validatePageOrPageSize,
    } = useValidateQuery()

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
          const { rules, column } = columnAndRule

          if (column.syncRouteFilter && type === 'filter') {
            if (validateFilter(value, rules['filter'])) {
              value && this._updateFilterValue(column.key!, value) 
              this.handleQueryUpdate()
            } else {
              this.clearQuery('filter')
            } 
          } 
          if (column.syncRouteSorter && type === 'sort') {
            if (validateSorter(value, rules['sorter'])) {
              value && this._updateSorterValue(column.key!, value)
              this.handleQueryUpdate()
            } else {
              this.clearQuery('sort')
            }
          }
        } else if (type === 'page' && value) {
          validatePageOrPageSize(value) ?
            this._updatePageValue(+value) : this.clearQuery('page')
        } else if (type === 'pageSize' && value) {
          validatePageOrPageSize(value) ?
            this._updatePageValue(+value) : this.clearQuery('pageSize')
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
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
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
  updateSort(sort: SortState | SortState[]) {
    const storeQuery = this.queryRef.value
    storeQuery['sort'] &&
      Object.keys(storeQuery['sort']).forEach((columnKey) => {
        const { column } = this.keyMapColumnAndRule[columnKey]
        column.sortOrder = undefined
        storeQuery['sort'][columnKey] = false
      })

    // handle multiple column sort
    if (Array.isArray(sort)) {
      sort.forEach((item) => {
        this._updateSorterValue(item.columnKey as string, item.order)
      })
    } else {
      this._updateSorterValue(sort.columnKey as string, sort.order)
    }
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
  clearQuery(type: 'filter' | 'sort' | 'page' | 'pageSize') {
    const query = this.queryRef.value
    if (type === 'filter') {
      query.filter = undefined
    } else if (type === 'sort') {
      query.sort = undefined
    } else if (type === 'page') {
      query.page = undefined
    } else if (type === 'pageSize') {
      query.pageSize = undefined
    } else {
      query.params = undefined
    }
    this.handleQueryUpdate()
  }
}
