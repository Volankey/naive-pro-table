import { Options, Rule, Rules } from './interface'
import qs from 'qs'
import { ref, Ref, watch } from 'vue'
import { transformByRuleType, mergeQueryByRule } from './utils'
import { Router } from 'vue-router'

export default class ParamsStore {
  rules: Rules
  defaultQuery: string
  queryRef: Ref<qs.ParsedQs> = ref({})
  router: Router
  constructor(ops: Options) {
    this.rules = ops.rules
    this.defaultQuery = ops.defaultQuery
    this.router = ops.router
    this.parseQueryByRules(
      this.queryDeserialization(this.defaultQuery),
      this.rules
    )
    console.log('param init')
  }
  updateRouterQuery(query: any) {
    const currentRoute = this.router.currentRoute.value
    // router 同步
    this.router.replace({
      path: currentRoute.fullPath,
      query: mergeQueryByRule(query, currentRoute.query, this.rules)
    })
  }
  parseQueryByRules(
    query: ParamsStore['queryRef']['value'],
    rules: Rules
  ): void {
    if (query) {
      Object.entries(rules).forEach(([key, rule]) => {
        this.updateQuery(key, query[key], rule)
      })
    }
  }
  querySerialization(query: { [key: string]: any }): string {
    const queryStr = qs.stringify(query)
    return queryStr
  }
  queryDeserialization(queryStr: string): any {
    return qs.parse(queryStr, { ignoreQueryPrefix: true })
  }
  clearQuery(key: string): void {
    delete this.queryRef.value[key]
  }
  updateQuery(
    key: string,
    value: any,
    rule: Rule,
    type: 'filter' | 'sorter' | 'page'
  ): void {
    if (value === undefined || value === null) {
      delete this.queryRef.value[key]
      return
    }
    value = transformByRuleType(value, rule.type)
    if (rule.validator) {
      const isValid = rule.validator(value)
      if (isValid) {
        this.queryRef.value[key] = value
      } else {
        // clear invalid route query
        delete this.queryRef.value[key]
      }
    } else {
      this.queryRef.value[key] = value
    }
  }
}
