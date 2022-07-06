import type { LocationQueryValue } from 'vue-router'

export const ruleHandlers = {
  string: (value: LocationQueryValue) => {
    return '' + value
  },
  number: (value: LocationQueryValue) => {
    return value ? +value : 0
  },
  array: (value: LocationQueryValue[] | LocationQueryValue) => {
    if (Array.isArray(value)) {
      return value
    } else {
      return [value]
    }
  },
  object: (value: LocationQueryValue) => {
    return value
  }
} as const
