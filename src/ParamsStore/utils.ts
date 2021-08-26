import { Rule, Rules } from './interface'

export const transformByRuleType = (
  originValue: any,
  type: Rule['type']
): any => {
  switch (type) {
    case 'string':
      return String(originValue)
    case 'number':
      return Number(originValue)
    case 'array':
      return originValue
    case 'object':
      return originValue
    default:
      return originValue
  }
}

export const mergeQueryByRule = (
  query: any,
  targetQuery: any,
  rules: Rules
) => {
  const clonedQuery = {
    ...targetQuery,
    ...query
  }
  Object.keys(clonedQuery).forEach((key) => {
    if (rules[key]) {
      clonedQuery[key] = query[key]
    }
  })
  return clonedQuery
}