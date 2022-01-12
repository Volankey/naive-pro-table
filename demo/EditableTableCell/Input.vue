<template>
  <input
    ref="inputRef"
    :value="value"
    type="text"
    autofocus
    @change="handleInputChange"
    @blur=""
  />
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref, defineExpose } from 'vue'
import type { FieldRule } from './types'

const props = defineProps<{
  value: string | number
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

  updateValue = props.beforeUpdateValue
    ? props.beforeUpdateValue(updateValue)
    : updateValue
  emit('update:value', updateValue)
}
</script>
