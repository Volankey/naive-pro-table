<DemoWrap>
  <template #header>

### 过滤器

  </template>
  <template #tip>

在配置列时设定`filter`以支持对列进行过滤。

  <n-alert title="注意" type="warning">

在 Protable 中，若`sync-route`不为`false`，则在表格内进行的过滤操作将同步路由。在进行过滤的路由同步时，可配置`syncRouteFilter`进行校验。详见[同步路由](../sync-route)。 对于过滤项，可通过`filterOptions`或`valueEnum`来配置。若同时配置，`valueEnum`的优先级高于`filterOptions`。

  </n-alert>

  </template>
  <template #demo>
    <FilterDemo />
  </template>

@[code html](./FilterDemo.vue)

</DemoWrap>
