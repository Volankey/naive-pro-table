import { VNodeChild } from 'vue'
import valueType from './index'

export type ValueType = keyof typeof valueType

export type DateFormatter =
  | string
  | ((value: any, valueType: ValueType) => VNodeChild | string | number)
