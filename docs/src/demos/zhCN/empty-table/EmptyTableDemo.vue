<template>
  <div>
    <n-h4>无数据隐藏分页器</n-h4>
    <EmptyTable :paginate-no-data="false" />
  </div>
  <n-divider />
  <div>
    <n-h4>自定义空表</n-h4>
    <EmptyTable>
      <template #empty>
        <span style="color: #c2c2c2">休息，休息一下</span>
      </template>
    </EmptyTable>
  </div>
</template>

<script setup lang="ts">
import EmptyTable from './EmptyTable.vue'
</script>
