<template>
  <n-grid :cols="2">
    <n-gi>
      <slot name="left">{{ title }}</slot>
    </n-gi>
    <n-gi>
      <slot name="right"></slot>
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NGrid, NGi } from 'naive-ui';

export default defineComponent({
  name: 'ConfigLineWrapper',
  components: {
    NGrid,
    NGi,
  },
  props: {
    title: String,
  },
});
</script>

<style></style>
