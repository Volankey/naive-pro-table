<template>
  <EditabledText :value="textValue" :disabled="disabled">
    <template #default="{ setEditStatus }">
      <div
        ref="textRef"
        class="td-content"
        @click="handleEnterEditing(setEditStatus)"
      >
        {{ textValue }}
      </div>
    </template>
    <template #input="inputProps">
      <Input
        v-if="inputProps.editing"
        ref="inputRef"
        v-clickoutside="(e) => handleClickoutside(inputProps, e)"
        :value="inputProps.value"
        :rule="rule"
        class="cell-input-wrapper"
        @update:value="(v) => (inputProps.value = v)"
        @error="handleInputInValid"
      />
    </template>
  </EditabledText>
</template>

<script lang="ts" setup>
import { defineProps, nextTick, ref } from 'vue'
import { clickoutside as VClickoutside } from 'vdirs'
import type { FieldRule, InputProps } from './types'
import EditabledText from './EditabledText.vue'
import Input from './Input.vue'
import { useMessage } from 'naive-ui'

const props = defineProps<{
  textValue: string
  disabled?: boolean
  beforeUpdateValue?: (value: string) => any
  updateValue: (value: any) => void
  rule?: FieldRule
}>()
const textRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

function handleInputChange(e: Event, inputProps: InputProps) {
  const value = (e.target as HTMLInputElement).value
  inputProps.updateValue(value)
  if (props.beforeUpdateValue && value) {
    props.updateValue(props.beforeUpdateValue(value))
  } else {
    props.updateValue(value)
  }
}
function handleClickoutside(inputProps: InputProps, e: MouseEvent) {
  console.log('clickoutside', e.target)
  if ((e.target as HTMLDivElement).className.includes('td-content'))
    inputProps.setEditStatus(false)
}
function handleInputInValid(message: string) {
  alert(message)
}
function handleEnterEditing(setEditStatus: InputProps['setEditStatus']) {
  props.disabled ? false : setEditStatus(true)
  nextTick(() => {
    // inputRef.value?.click()
    inputRef.value?.focus()
  })
}
</script>

<style scoped>
.cell-input-wrapper {
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0;
  bottom: 0;
  padding: 5px;
  box-sizing: border-box;
}
</style>
