<DemoWrap>
  <template #header>

### 空表格

  </template>
  <template #tip>

  <n-alert title="说明" type="info">

Naive UI ProTable 默认展示分页，当数据为空时，可通过配置`pagination-no-data`属性在表格数据为空时隐藏分页器。同时，也可通过 empty 插槽自定义空表。

  </n-alert>
  
  </template>
  <template #demo>
    <EmptyTableDemo />
  </template>

<n-divider title-placement="left">
  EmptyTableDemo.vue
</n-divider>

@[code html](./EmptyTableDemo.vue)

<n-divider title-placement="left">
  EmptyTable.vue
</n-divider>

@[code html](./EmptyTable.vue)

</DemoWrap>
