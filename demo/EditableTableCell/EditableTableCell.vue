<template>
  <EditabledText :value="textValue" :disabled="disabled">
    <template #default="{ setEditStatus }">
      <div ref="textRef" @click="handleEnterEditing(setEditStatus)">
        {{ textValue }}
      </div>
    </template>
    <template #input="inputProps">
      <input
        v-if="inputProps.editing"
        ref="inputRef"
        v-clickoutside="() => handleClickoutside(inputProps)"
        class="cell-input-wrapper"
        :value="inputProps.value"
        type="text"
        autofocus
        @change="(e) => handleInputChange(e, inputProps)"
      />
    </template>
  </EditabledText>
</template>

<script lang="ts" setup>
import { defineProps, nextTick, ref } from 'vue'
import { clickoutside as VClickoutside } from 'vdirs'

import EditabledText from './EditabledText.vue'

interface InputProps {
  setEditStatus: (editable: boolean) => void
  value: string
  updateValue: (v: any) => void
  editing: boolean
}

const props = defineProps<{
  textValue: string
  disabled?: boolean
  beforeUpdateValue?: (value: string) => any
  updateValue: (value: any) => void
}>()
const textRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

function handleInputChange(e: InputEvent, inputProps: InputProps) {
  const value = (e.target as HTMLInputElement).value
  inputProps.updateValue(value)
  if (props.beforeUpdateValue && value) {
    props.updateValue(props.beforeUpdateValue(value))
  } else {
    props.updateValue(value)
  }
}
function handleClickoutside(inputProps: InputProps) {
  console.log('clickoutside')
  inputProps.setEditStatus(false)
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
