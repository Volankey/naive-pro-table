import { computed, Ref, ref } from 'vue'
import { Rule } from './../table-params-store/types'

export function useCustomParamsStore<T extends Record<string, any> = any>(
  initValue?: T,
  syncCustomParams?: Partial<
    Record<keyof T, Rule & { transform?: (v: any) => any }>
  >
) {
  const customParamsRef = ref(initValue || {}) as Ref<T>
  const customParamsReadonly = computed(() => customParamsRef.value)

  function validateField(key: string, value: any) {
    const rule = syncCustomParams?.[key]
    if (rule && rule.validator) {
      return rule.validator(value)
    }
    return true
  }
  function transformField(key: string, v: any) {
    const rule = syncCustomParams?.[key]
    if (rule && rule.transform) {
      return rule.transform(v)
    }
    return v
  }
  function transform(params: Record<string, any>) {
    const keys = Object.keys(params)
    const filteredParams: Record<string, any> = {}
    keys.forEach((key) => {
      const transformedValue = transformField(key, params[key])
      params[key] = transformedValue
    })
    return filteredParams
  }
  function validate(params: Record<string, any>) {
    const keys = Object.keys(params)
    const filteredParams: Record<string, any> = {}
    keys.forEach((key) => {
      const isValid = validateField(key, params[key])
      if (isValid) {
        filteredParams[key] = params[key]
      }
    })
    return filteredParams
  }

  function setCustomParams(params: T) {
    transform(params)
    const filteredParams = validate(params)
    customParamsRef.value = filteredParams as T
    ;(customParamsStore as any)?._afterSet?.(filteredParams)
  }
  function updateCustomParams(key: string, v: any) {
    const nextParams = { ...customParamsRef.value, [key]: v }
    transform(nextParams)
    const filteredParams = validate(nextParams)
    customParamsRef.value = filteredParams as T
    ;(customParamsStore as any)?._afterSet?.(filteredParams)
  }
  const customParamsStore = {
    customParamsValue: customParamsReadonly,
    setCustomParams,
    updateCustomParams,
    setCallback: (callback: (params: Record<string, any>) => void) => {
      ;(customParamsStore as any)._afterSet = callback
    },
    syncCustomParams
  }

  return customParamsStore
}

export type CustomParams = ReturnType<typeof useCustomParamsStore<any>>
