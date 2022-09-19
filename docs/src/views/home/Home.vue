<template>
  <div style="height: fit-content; text-align: center">
    <n-button type="primary" @click="handleClick">开始使用</n-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClick() {
  router.push('/example')
}
</script>
