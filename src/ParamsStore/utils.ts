import { Rule } from './interface'

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
