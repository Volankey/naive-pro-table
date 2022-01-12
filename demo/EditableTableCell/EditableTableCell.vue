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
        @update:value="handleUpdateValue($event, inputProps)"
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
import { injectSingleInputValidStatus } from './useSingleEdit'

const props = defineProps<{
  textValue: string
  disabled?: boolean
  beforeUpdateValue?: (value: string | number) => any
  updateValue: (value: any) => void
  rule?: FieldRule
}>()
const textRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const isValidRef = ref(true)
const validStatusData = injectSingleInputValidStatus()
function handleClickoutside(inputProps: InputProps, e: MouseEvent) {
  if (!isValidRef.value) {
    if (props.rule) {
      handleInputInValid(props.rule.message)
    }
    nextTick(() => {
      inputRef.value?.focus()
    })
    return
  }
  if ((e.target as HTMLDivElement).className.includes('td-content'))
    inputProps.setEditStatus(false)
}
function handleInputInValid(message: string) {
  alert(message)
}
function handleUpdateValue(value: string | number, inputProps: InputProps) {
  let updateValue = value
  inputProps.value = '' + value
  if (props.rule) {
    const isValid = props.rule.validator(value)
    isValidRef.value = isValid
    validStatusData.isValid = isValid
    if (isValid === false) {
      focus()
      handleInputInValid(props.rule.message)
      return
    }
    updateValue = props.rule.type(updateValue)
  } else {
    validStatusData.isValid = true
    isValidRef.value = true
  }
  if (props.beforeUpdateValue && value) {
    props.updateValue(props.beforeUpdateValue(value))
  } else {
    props.updateValue(value)
  }
}

function handleEnterEditing(setEditStatus: InputProps['setEditStatus']) {
  if (validStatusData.isValid === false) {
    return
  }
  console.log('enter editing')
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
