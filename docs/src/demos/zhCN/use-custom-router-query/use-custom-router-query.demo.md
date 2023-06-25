<DemoWrap>
  <template #header>

### 同步路由变量

  </template>
  <template #tip>

有时候我们想要通过网页链接保存一些查询信息，我们提供了 `useCustomRouterQuery` 来供开发者快速创建与路由信息同步的响应式变量

可以像 `vue3` 创建 `ref` 那样创建一些同步路由的响应式变量

当`options`中`immediate`字段设置为`true`时，会在首次进入时将默认值同步路由

  </template>
  <template #demo>
    <UseCustomRouterQueryDemo />
  </template>

@[code html](./UseCustomRouterQueryDemo.vue)</DemoWrap>
