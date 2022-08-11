<DemoWrap>
  <template #header>

### 过滤器

  </template>
  <template #tip>

在配置列时设定`filter`以支持对列进行过滤。

  <n-alert title="注意" type="warning">

在 Protable 中，若 `sync-route` 不为 `false` 时，可配置 `syncRouteSorter` 让 sort 开启路由同步，如果不配置就不会同步路由。

  </n-alert>

  </template>
  <template #demo>
    <SorterDemo />
  </template>

@[code html](./SorterDemo.vue)

</DemoWrap>
