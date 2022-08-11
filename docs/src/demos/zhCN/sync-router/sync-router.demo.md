<DemoWrap>
  <template #header>

### 同步路由

  </template>
  <template #tip>

  <n-alert title="注意" type="warning">

注意 `Protable` 上 `sync-route` 此项设置优先级最高，若设置为 `false` 将关闭所有同步路由功能。

  </n-alert>

若需要 `filter` 或者 `sorter` 同步路由，请配置 `syncRouteFilter` 或者 `syncRouteSorter` ，若不配置，默认**不同步**路由。

若需要 `page` 或者 `pageSize` 同步路由，请配置 `syncRoutePage` 或者 `syncRoutePageSize`，若不配置，默认是**同步**路由的。

  </template>
  <template #demo>
    <SyncRouterDemo />
  </template>

@[code html](./SyncRouterDemo.vue) </DemoWrap>
