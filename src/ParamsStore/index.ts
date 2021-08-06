import { Options, Rules } from './interface'

export default class ParamsStore {
  rules: Rules
  defaultQuery: string
  // page=1&size=5&search=i7-9900
  constructor(ops: Options) {
    this.rules = ops.rules
    this.defaultQuery = ops.defaultQuery
  }
  querySerialization() {}
  routerQueryDeserialization() {}
}
