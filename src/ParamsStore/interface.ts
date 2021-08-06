export interface Options {
  defaultQuery: string
  rules: Rules
  // TODO: impl adapter
  adapter: any
}
export interface Rules {
  [name: string]: Rule
}

// export interface Adapter {}
export interface Rule<T = any> {
  type: 'string' | 'number' | 'array' | T
  // 从router传入过来的
  validator?: (value: string | number | T) => boolean
}
