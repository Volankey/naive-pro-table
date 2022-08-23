import { SyncRoutePage, SyncRoutePageSize } from './../interface'
import { CustomParams } from './../hooks/use-params'
import { PaginationProps } from 'naive-ui'
import { ref, type Ref } from 'vue'
import type {
  KeyMapColumnAndRule,
  QueryOptions,
  RoueQueryParsed
} from './types'
import type { SortState } from 'naive-ui/lib/data-table/src/interface'
import { isFinite } from 'lodash-es'
import { getColumnsRouteRules } from '../utils'

export class TableParamsStore {
  keyMapColumnAndRule: KeyMapColumnAndRule
  syncRouteSorterKeyMapColumnAndRule: KeyMapColumnAndRule
  syncRouteFilterKeyMapColumnAndRule: KeyMapColumnAndRule
  queryRef: Ref<{
    params?: unknown | null
    sort?: any | null
    filter?: any | null
    page?: number | null
    pageSize?: number | null
  }> = ref({})
  onUpdateQuery: (query: QueryOptions) => void
  paginationRef: Ref<PaginationProps> | undefined
  customParams: CustomParams | undefined
  syncRoutePage: SyncRoutePage
  syncRoutePageSize: SyncRoutePageSize
  constructor({
    syncRouteKeyMapColumnAndRule,
    customParams,
    syncRoutePage,
    syncRoutePageSize,
    onUpdateQuery
  }: {
    syncRouteKeyMapColumnAndRule: ReturnType<typeof getColumnsRouteRules>
    syncRoutePage: SyncRoutePage
    syncRoutePageSize: SyncRoutePageSize
    customParams?: CustomParams
    onUpdateQuery: (query: QueryOptions) => void
  }) {
    this.keyMapColumnAndRule = syncRouteKeyMapColumnAndRule.columnKeyMapRules
    this.syncRouteSorterKeyMapColumnAndRule =
      syncRouteKeyMapColumnAndRule.columnSyncRouteSorterKeyMapRules
    this.syncRouteFilterKeyMapColumnAndRule =
      syncRouteKeyMapColumnAndRule.columnSyncRouteFilterKeyMapRules
    this.customParams = customParams
    this.syncRoutePage = syncRoutePage
    this.syncRoutePageSize = syncRoutePageSize
    this.onUpdateQuery = onUpdateQuery
  }
  _initSorter(routeKey: string, value: any) {
    if (!this.syncRouteSorterKeyMapColumnAndRule[routeKey]) {
      return
    }
    const { column } = this.syncRouteSorterKeyMapColumnAndRule[routeKey]
    this._updateSorterValue(column.key || column.dataIndex, value)
  }
  _initFilter(routeKey: string, value: any) {
    if (!this.syncRouteFilterKeyMapColumnAndRule[routeKey]) {
      return
    }
    const { column } = this.syncRouteFilterKeyMapColumnAndRule[routeKey]
    value && this._updateFilterValue(column.key || column.dataIndex, value)
  }
  initQuery(
    routeQueryParsed: RoueQueryParsed,
    paginationRef?: Ref<PaginationProps>
  ) {
    const params: any = this.customParams?.customParamsValue.value

    if (paginationRef) {
      this.paginationRef = paginationRef
      if (paginationRef.value.defaultPage !== undefined) {
        this._updatePageValue(paginationRef.value.defaultPage)
      }
      if (paginationRef.value.defaultPageSize !== undefined) {
        this._updatePageSizeValue(paginationRef.value.defaultPageSize)
      }
    }
    Object.values(routeQueryParsed).forEach((queryItems) => {
      queryItems.forEach((queryItem) => {
        const { key: routeKey, value, type } = queryItem
        if (type === 'sort') {
          this._initSorter(routeKey, value)
        } else if (type === 'filter') {
          this._initFilter(routeKey, value)
        } else if (type === 'page' && value) {
          this._updatePageValue(+value)
        } else if (type === 'pageSize' && value) {
          this._updatePageSizeValue(+value)
        } else if (type === 'params') {
          params[routeKey] = value
        }
      })
    })
    this._updateParamsValue(params)
  }
  _updateFilterValue(columnKey: string, value: any) {
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    const { column } = columnAndRule

    const storeQuery = this.queryRef.value

    const filterKey = column.key || column.dataIndex
    if (
      column.syncRouteFilter &&
      column.syncRouteFilter.rule &&
      column.syncRouteFilter.rule.type === 'array'
    ) {
      if (value === undefined || Array.isArray(value)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        column.filterOptionValues = value
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        column.filterOptionValues = [value]
        value = [value]
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      column.filterOptionValue = value
    }
    if (!storeQuery['filter']) {
      storeQuery['filter'] = {}
    }
    Object.assign(storeQuery['filter'], { [filterKey]: value })
  }
  _updateSorterValue(columnKey: string, value: any) {
    const storeQuery = this.queryRef.value
    const columnAndRule = this.keyMapColumnAndRule[columnKey]
    const { column } = columnAndRule
    const sorterKey = column.key || column.dataIndex
    // validate sort order is ascend or descend
    const isValid = ['ascend', 'descend', false].includes(value)
    if (!isValid) {
      console.warn(`[naive-protable] invalid sort order: ${value}`)
      value = false
    }
    if (!storeQuery['sort']) {
      storeQuery['sort'] = {}
    }

    Object.assign(storeQuery['sort'], { [sorterKey]: value })
    if (!isValid) {
      // clear invalid sort order
      this.handleQueryUpdate()
    }
  }
  handleQueryUpdate() {
    this.onUpdateQuery(this.queryRef.value as any)
  }
  updateSort(sort: SortState | SortState[]) {
    const storeQuery = this.queryRef.value
    storeQuery['sort'] &&
      Object.keys(storeQuery['sort']).forEach((columnKey) => {
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
    if (this.customParams) {
      this.customParams._initCustomParams(params)
    }
  }
  updateParams() {
    this.handleQueryUpdate()
  }
  _updatePageValue(page: number) {
    const query = this.queryRef.value
    if (isFinite(page)) {
      query.page = page
    } else {
      console.warn(`[naive-protable] invalid page value: ${page}`)
      query.pageSize = this.paginationRef?.value.defaultPage
      this.handleQueryUpdate()
    }
  }
  updatePage(page: number) {
    this._updatePageValue(page)
    this.handleQueryUpdate()
  }
  _updatePageSizeValue(pageSize: number) {
    const query = this.queryRef.value
    if (isFinite(pageSize)) {
      query.pageSize = pageSize
    } else {
      console.warn(`[naive-protable] invalid pageSize value: ${pageSize}`)
      query.pageSize = this.paginationRef?.value.defaultPageSize
      this.handleQueryUpdate()
    }
  }
  updatePageSize(pageSize: number) {
    this._updatePageSizeValue(pageSize)
    this.handleQueryUpdate()
  }
  clearQuery(type: 'filter' | 'sort') {
    const query = this.queryRef.value
    if (type === 'filter') {
      query.filter = null
    } else if (type === 'sort') {
      query.sort = null
    } else {
      query.params = null
    }
    this.handleQueryUpdate()
  }
}
