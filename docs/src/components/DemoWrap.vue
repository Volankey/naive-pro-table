<template>
  <n-card class="demo-wrap">
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #header-extra>
      <n-button text @click="handleCodeShow">
        <template #icon>
          <n-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M160 368L32 256l128-112"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M352 368l128-112l-128-112"
              ></path>
            </svg>
          </n-icon>
        </template>
      </n-button>
    </template>
    <div></div>
    <slot name="tip"></slot>
    <div style="margin-top: 20px">
      <slot name="demo"></slot>
    </div>
    <n-divider v-if="showCode"></n-divider>
    <slot v-if="showCode"></slot>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCode = ref(false)
function handleCodeShow() {
  showCode.value = !showCode.value
}
</script>

<style lang="scss">
.demo-wrap {
  h3 {
    margin: 0;
  }
}
</style>
