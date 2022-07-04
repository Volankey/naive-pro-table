import { computed, ref } from 'vue'
import { Rule } from './../table-params-store/types'

export function useCustomParamsStore(
  initValue?: Record<string, any>,
  syncCustomParams?: Record<string, Rule>
) {
  const customParamsRef = ref<Record<string, any>>(initValue || {})
  const customParamsReadonly = computed(() => customParamsRef.value)

  function validateField(key: string, value: any) {
    const rule = syncCustomParams?.[key]
    if (rule && rule.validator) {
      return rule.validator(value)
    }
    return true
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

  function setCustomParams(params: Record<string, any>) {
    const filteredParams = validate(params)
    customParamsRef.value = filteredParams
    ;(customParamsStore as any)?._afterSet?.(filteredParams)
  }
  function updateCustomParams(key: string, v: any) {
    const filteredParams = validate({ [key]: v })
    customParamsRef.value = filteredParams
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

export type CustomParams = ReturnType<typeof useCustomParamsStore>
