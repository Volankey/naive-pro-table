import { ref } from 'vue'

const menuOptions = ref([
  {
    label: '首页',
    key: 'home',
    path: '/'
  }
])
function setMenuOptions(
  options: { label: string; key: string; path: string }[]
) {
  menuOptions.value = options
}

export function useMenus() {
  return {
    menuOptions,
    setMenuOptions
  }
}
