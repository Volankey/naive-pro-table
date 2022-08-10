<DemoWrap>
  <template #header>

### 自定义参数

  </template>
  <template #tip>

<n-alert title="注意" type="warning">

使用 `useCustomParamsStore` 方法创建自定义参数，通过 `customParamsStore` 属性传入 Protable。 同时，你需要使用 `customParamsStore.updateCustomParams` 对参数进行更新。

当触发 `useCustomParamsStore` 时候，`page` 会被重置为 1。

</n-alert>

有时你需要转换一下 url 上解析后的数据格式，可以进行如下配置

```typescript
const customParamsStore = useCustomParamsStore(
  {
    suffix: null,
    age: null
  },
  {
    age: {
      type: 'number',
      // 利用 transform 函数转为int类型
      transform: (value: string) => {
        return value !== null ? parseInt(value) : null
      }
    }
  }
)
```

  </template>
  <template #demo>
    <CustomParamsDemo/>
  </template>

@[code html](./CustomParamsDemo.vue)

</DemoWrap>
