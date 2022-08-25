<DemoWrap>
  <template #header>

### 排序

  </template>
  <template #tip>

在配置列时设定`sorter`以支持对列进行排序。可通过配置`sortOrder`为可排序的列设置默认排序状态。

  <n-alert title="注意" type="warning">

在 Protable 中，若 `sync-route` 不为 `false` 时，可配置 `syncRouteSorter` 让 sort 开启路由同步，如果不配置就不会同步路由。

  </n-alert>

  </template>
  <template #demo>
    <SorterDemo />
  </template>

@[code html](./SorterDemo.vue)

</DemoWrap>
