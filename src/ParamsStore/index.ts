import { Options, Rule, Rules } from './interface'
import qs from 'qs'
import { ref, Ref } from 'vue'
import { transformByRuleType } from './utils'

export default class ParamsStore {
  rules: Rules
  defaultQuery: string
  queryRef: Ref<qs.ParsedQs> = ref({})
  constructor(ops: Options) {
    this.rules = ops.rules
    this.defaultQuery = ops.defaultQuery
    this.parseQueryByRules(
      this.queryDeserialization(this.defaultQuery),
      this.rules
    )
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
  updateQuery(key: string, value: any, rule: Rule): void {
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
      }
    } else {
      this.queryRef.value[key] = value
    }
  }
}
