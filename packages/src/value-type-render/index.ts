import { NImage, NTime } from 'naive-ui'
import { h } from 'vue'
import type { RenderCell } from '../index'

const date: RenderCell = (text: any) => {
  return h(NTime, {
    time: text,
    type: 'date'
  })
}
const datetime: RenderCell = (text: any) => {
  return h(NTime, {
    time: text,
    type: 'datetime'
  })
}
const fromNow: RenderCell = (text: any) => {
  return h(NTime, {
    time: text,
    type: 'relative'
  })
}
const img: RenderCell = (src: any) => {
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
}
