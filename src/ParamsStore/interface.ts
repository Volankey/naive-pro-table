import { Router } from 'vue-router'

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

// export interface Adapter {}
export interface Rule {
  type: 'string' | 'number' | 'array' | 'object'
  // 从router传入过来的
  validator?: (value: string | number | T) => boolean
}
