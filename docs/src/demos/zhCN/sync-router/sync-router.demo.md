<DemoWrap>
  <template #header>

### 过滤器

  </template>
  <template #tip>

在配置列时设定`filter`以支持对列进行过滤。

  <n-alert title="注意" type="warning">

在 Protable 中，若 `sync-route` 不为 `false` 时，可配置 `syncRouteFilter` 进行同步路由。 对于过滤项，可通过 `filterOptions` 或 `valueEnum` 来配置。若同时配置，`valueEnum` 的优先级高于`filterOptions`。

当 `filter` 更新的时候，`page` 会被重置为 1 。

  </n-alert>

  </template>
  <template #demo>
    <SyncRouterDemo />
  </template>

@[code html](./SyncRouterDemo.vue)

</DemoWrap>
