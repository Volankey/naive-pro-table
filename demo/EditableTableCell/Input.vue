<template>
  <input
    ref="inputRef"
    :value="value"
    type="text"
    autofocus
    @change="handleInputChange"
  />
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref, defineExpose } from 'vue'
import type { FieldRule } from './types'

const props = defineProps<{
  value: string | number
  rule?: FieldRule
  beforeUpdateValue?: (value: string | number) => any
}>()
const emit = defineEmits(['update:value', 'error'])
const inputRef = ref<HTMLInputElement | null>(null)

function focus() {
  inputRef.value?.focus()
}

defineExpose({
  focus
})
function handleInputChange(e: Event) {
  const value = (e.target as HTMLInputElement).value
  let updateValue: string | number = value

  if (props.rule) {
    const isValid = props.rule.validator(value)
    if (isValid === false) {
      emit('error', props.rule.message)
      return
    }
    updateValue = props.rule.type(updateValue)
  }
  updateValue = props.beforeUpdateValue
    ? props.beforeUpdateValue(updateValue)
    : updateValue
  emit('update:value', updateValue)
}
</script>
