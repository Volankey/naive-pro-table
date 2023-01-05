<DemoWrap>
  <template #header>

### 可配置列

  </template>
  <template #tip>

proTable 提供 `useConfigurableColumns` ，可以传入一个 `columns` 和 `config` 来返回一个 proTable 的 `columnsRef` 和 `configurableColumnsRef` 。我们再去动态更新 `configurableColumnsRef` 的 visible 和顺序从而来修改 proTable 的列显示和顺序。

该 hook 提供了缓存功能，如不需要缓存功能，可不传 config，同样提供了 `clearCache` 来重置我们的修改。

  </template>
  <template #demo>
    <UseConfigurableColumnsDemo />
  </template>

@[code html](./UseConfigurableColumnsDemo.vue) </DemoWrap>
