<DemoWrap>
  <template #header>

### 过滤器

  </template>
  <template #tip>

在配置列时设定`filter`以支持对列进行过滤。

通过配置`filterMultiple`可实现过滤时过滤选项为单选或多选，`filterOptionValue`及`filterOptionValues`分别用于实现为可过滤列在单选和多选状态下设置默认过滤状态。

  <n-alert title="注意" type="warning">

在 Protable 中，若 `sync-route` 不为 `false` 时，可配置 `syncRouteFilter` 进行同步路由。当过滤项为单选，配置`syncRouteFilter`时需将类型设置为`string`，多选时类型为`array`。

对于过滤项，可通过 `filterOptions` 或 `valueEnum` 来配置。若同时配置，`valueEnum` 的优先级高于`filterOptions`。

当 `filter` 更新的时候，`page` 会被重置为 1 。

  </n-alert>

  </template>
  <template #demo>
    <FilterDemo />
  </template>

@[code html](./FilterDemo.vue)

</DemoWrap>
