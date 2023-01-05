import { ref } from 'vue'

export type AnchorItem = {
  label: string
  key: string
  path: string
  children?: AnchorItem[]
}

const anchorOptions = ref([
  {
    label: '首页',
    key: 'home',
    path: '/'
  } as AnchorItem
])

function setAnchorOptions(options: AnchorItem[]) {
  anchorOptions.value = options
}

export function useAnchors() {
  return {
    anchorOptions,
    setAnchorOptions
  }
}
