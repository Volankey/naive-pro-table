import { provide, reactive, inject } from 'vue'

const KEY = Symbol('VALID')

export function provideSingleInputValidStatus() {
  const reactiveData = reactive({
    isValid: true
  })
  provide(KEY, reactiveData)
}

export function injectSingleInputValidStatus() {
  return inject(KEY) as { isValid: boolean }
}
