import type { LocationQueryValue, Router } from 'vue-router'
import { ColumnKeyMapColAndRules } from '../utils'

export interface Options {
  defaultQuery: string
  rules: Rules
  // TODO: impl adapter
  adapter?: any
  router: Router
}

export interface Rules {
  [name: string]: Rule
}

export type ValueType = 'string' | 'number' | 'array' | 'object'

// export interface Adapter {}
export interface Rule {
  type: ValueType
  // 从router传入过来的
  validator?: (value: string | number | any) => boolean
}

export type KeyMapColumnAndRule = ColumnKeyMapColAndRules

export type ParamsType = 'filter'
export interface QueryOptions<T = false> {
  params?: T extends false ? Record<string, any> : T
  sort?: any
  filter?: any
  page?: number
  pageSize?: number
}

export type RouteQueryParsed = Record<
  string,
  {
    key: string
    value: LocationQueryValue | LocationQueryValue[]
    type: string
  }[]
>
