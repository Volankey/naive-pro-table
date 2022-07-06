import { NImage, NTime } from 'naive-ui'
import { h } from 'vue'
import { DateFormatter } from './interface'

const date = (text: any, format?: DateFormatter) => {
  if (typeof format === 'function') {
    return format(text, 'date')
  }
  return h(NTime, {
    time: text,
    type: 'date',
    format
  })
}
const datetime = (text: any, format?: DateFormatter) => {
  if (typeof format === 'function') {
    return format(text, 'datetime')
  }
  return h(NTime, {
    time: text,
    type: 'datetime',
    format
  })
}
const fromNow = (text: any) => {
  return h(NTime, {
    time: text,
    type: 'relative'
  })
}
const img = (src: any) => {
  return h(NImage, {
    src,
    height: 32
  })
}
export default {
  date,
  datetime,
  fromNow,
  img
} as const
