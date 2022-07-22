# 同步路由

在 Protable 中，使用`sync-route`属性配置表格操作是否同步路由，默认为`true`。

## 表格前缀

当页面中存在多个表格且同步路由配置为`true`时，推荐使用表格前缀（`query-prefix`）在路由中对表格进行区分。 <SyncRoutePrefixDemo />

#### Demo Code

@[code](../demo-components/SyncRoutePrefixDemo.vue)

## 同步校验

Protable 在 Column 配置中提供了`syncRouteSorter`和`syncRouteFilter`属性，用于表格在同步路由中的排序和过滤操作时进行校验，包括类型校验和可选的自定义校验。示例如下：

```typescript
syncRouteSorter: {
  name: 'homework',
  rule: {
    type: 'string'
  }
}
```

配置自定义校验的示例如下：

```typescript
syncRouteFilter: {
  name: 'sex',
  rule: {
    type: 'array',
    validator: (valArr) => {
      const options = ['man', 'woman', 'none']
      return valArr.reduce((prev, cur) => {
        return prev && options.includes(cur)
      }, true)
    }
  }
}
```

Protable 将清除掉路由中校验失败的部分，表格中的排序和过滤表现为初始状态。
