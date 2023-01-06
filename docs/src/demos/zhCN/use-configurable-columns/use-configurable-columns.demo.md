<DemoWrap>
  <template #header>

### 可配置列

  </template>
  <template #tip>

ProTable 提供 `useConfigurableColumns` ，可以传入一个 `columns` 和 `config` 来返回一个 ProTable 的 `columnsRef` 和 `configurableColumnsRef` 。我们再去通过响应式更新 `configurableColumnsRef` 来控制列的隐藏/显示以及列的顺序

该 hook 提供了缓存功能，如不需要缓存功能，`config` 中可不传 `storage`，同样提供了 `reset` 来重置我们的修改。

  </template>
  <template #demo>
    <UseConfigurableColumnsDemo />
  </template>

@[code html](./UseConfigurableColumnsDemo.vue) </DemoWrap>
