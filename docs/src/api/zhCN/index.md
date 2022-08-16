此文档正写着呢....

### Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| api-request | <n-a href="#ApiRequest">ApiRequest</n-a> | - - | 接口请求数据(必填) |
| columns | <n-a href="#ProColumn">ProColumn</n-a>[] | [] | 列配置 |
| sync-route | `boolean` | `true` | 是否同步路由，此项设置优先级最高，默认开启 |
| dataTableProps | `object` | `{}` | 属性参考 [NaiveUI DataTable props](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Props) |
| pagination | `false \| object` | `false` | 属性参考 [NaiveUI Pagination props](https://www.naiveui.com/zh-CN/os-theme/components/pagination#Pagination-Props) |

### ApiRequest

> 需要注意的是，`itemCount` / `pageCount` 至少要返回一个

<n-card>

```typescript
type ApiRequestArgs = [
  params: any | null,
  sort: Record<string, string> | null,
  filter: DataTableFilterState | null,
  page: number,
  pageSize: number
]

type ApiRequest<T = any> = (...args: ApiRequestArgs) => Promise<{
  itemCount?: number
  pageCount?: number
  data: T[]
}>
```

</n-card>

### Slots

| 名称  | 参数 | 说明                 |
| ----- | ---- | -------------------- |
| empty | `()` | 表格数据为空时的展示 |
