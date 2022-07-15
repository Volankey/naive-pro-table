# 自定义参数

使用`useCustomParamsStore`方法创建自定义参数，通过`customParams`属性传入 Protable。

::: tip

- 在 Protable 中，若`sync-route`不为 false，自定义参数的变化将与路由同步。
- 自定义参数的更新使用`useCustomParamsStore`中提供的更新方法`updateCustomParams`。

:::

<CustomParamsDemo />

#### Demo Code

@[code](../demo-components/CustomParamsDemo.vue)
