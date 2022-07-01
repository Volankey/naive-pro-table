import type {
  Rules,
  ValueType,
} from '../table-params-store/types'

export function useValidateQuery() {
  function _validate(value:any, typeValidate: Function, rules: Rules) {
    return Object.entries(rules).every(([_, rule]) => {
      return rule.validator ?
        typeValidate(value, rule.type) && rule.validator(value)
        :
        typeValidate(value, rule.type)
    })
  }

  function validateSorterType(value: any, type: ValueType) {
    const sorterOptions = ['ascend', 'descend', false]
    return type === 'string' && sorterOptions.includes(value)
  }

  function validateSorter(value:any, rules: Rules) {
    return _validate(value, validateSorterType, rules)
  }

  // TODO: filter类型验证完善
  function validateFilterType(value: any, type: ValueType) {
    return type === 'string' || type === 'array'
  }

  function validateFilter(value:any, rules: Rules) {
    return _validate(value, validateFilterType, rules)
  }

  function validatePageOrPageSize(value: any) {
    return typeof(value) === 'number' || !isNaN(Number(value))
  }

  return {
    validateSorter,
    validateFilter,
    validatePageOrPageSize,
  }
}
