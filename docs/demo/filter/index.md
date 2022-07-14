# 过滤

在配置列时设定`filter`以支持对列进行过滤。

::: tip

- 在 Protable 中，若`sync-route`不为`false`，则在表格内进行的过滤操作将同步路由。在进行过滤的路由同步时，可配置`syncRouteFilter`进行校验。详见[同步路由](../sync-route)。

:::

对于过滤项，可通过`filterOptions`或`valueEnum`来配置。若同时配置，`valueEnum`的优先级高于`filterOptions`。 <FilterDemo />

#### Demo Code

@[code](../demo-components/FilterDemo.vue)
