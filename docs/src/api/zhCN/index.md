此文档正写着呢....

### ProTable Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| api-request | <n-a href="#ApiRequest">ApiRequest</n-a> | - - | 接口请求数据(必填) |
| columns | <n-a href="#ProColumn-Properties">ProColumn</n-a>[] | [] | 列配置(必填) |
| customParamsStore | <n-a href="#CustomParams">CustomParams</n-a> | `undefined` | 自定义参数 |
| date-formatter | <n-a href="#DateFormatter">DateFormatter</n-a> | `undefined` | 日期格式化 |
| data-table-props | `object` | `{}` | 属性参考 [NaiveUI DataTable props](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Props) |
| pagination | `false \| object` | `undefined` | 属性参考 [NaiveUI Pagination props](https://www.naiveui.com/zh-CN/os-theme/components/pagination#Pagination-Props) |
| paginate-no-data | `boolean` | `true` | 当数据表为空时，是否展示分页器 |
| query-prefix | `string` | `undefined` | 同步路由时所携带的表格前缀 |
| remote | `boolean` | `true` | 表格是否对数据进行自动分页，默认开启 |
| sync-route | `boolean` | `true` | 是否同步路由，此项设置优先级最高，默认开启 |
| sync-route-page | `{ name: string } \| false` | `() => ({ name: 'page' })` | page 是否同步路由，同步时路由中如何命名 |
| sync-route-page-size | `{ name: string } \| false` | `() => ({ name: 'pageSize' })` | page size 是否同步路由，同步时路由中如何命名 |

#### ApiRequest

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

#### CustomParams

<n-card>

```typescript
type CustomParams = ReturnType<typeof useCustomParamsStore<any>>

function useCustomParamsStore<T extends Record<string, any> = any>(
  initValue?: T,
  syncCustomParams?: Partial<
    Record<keyof T, Rule & { transform?: (v:any) => any}
  >
) : ({
  customParamsValue: customParamsReadonly,
  setCustomParams,
  updateCustomParams,
  _initCustomParams,
  _setCallback: (
    callback: (params: Record<string, any>, syncRoute: boolean) => void
  ) => {
    ;(customParamsStore as any)._afterSet = callback
  },
  syncCustomParams
})

```

</n-card>

#### DateFormatter

<n-card>

```typescript
type DateFormatter =
  | string
  | ((
      value: any,
      valueType: 'date' | 'datetime'
    ) => VNodeChild | string | number)
```

</n-card>

### ProColumn Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | <n-a href='#ProTableBasicColumn'>ProTableBasicColumn</n-a>[] | `undefined` | 列中的子列 |
| copyable | `boolean \| RenderCell<T>` | `undefined` | 该列中每行是否可复制，自定义渲染可参考[RenderCell](#RenderCell) |
| dataIndex | `string` | - - | 列的数据索引，不可重复（必填） |
| editable | `boolean \| RenderCell<T>` | `undefined` | 该列中每行是否可编辑，自定义渲染可参考[RenderCell](#RenderCell) |
| filter | `boolean \| (optionValue: string \| number, rowData: object) => boolean \| 'default'` | `undefined` | 该列是否允许过滤，属性同[NaiveUI DataTable props](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Props)中 filter |
| filterMultiple | `boolean` | `true` | 过滤时是否可多选 |
| filterOptionValue | `string \| number` | `undefined` | 列的默认过滤状态(过滤器单选时生效) |
| filterOptionValues | `Array<string \| number>` | `undefined` | 列的默认过滤状态(过滤器多选时生效) |
| key | `string` | `undefined` | 当列的 key |
| render | `RenderCell<T>` | `undefined` | 渲染函数，渲染列中每一行的单元格，参考[RenderCell](#RenderCell) |
| sorter | `boolean \| function \| 'default'` | `undefined` | 该列是否允许排序，属性同[NaiveUI DataTable props](https://www.naiveui.com/zh-CN/os-theme/components/data-table#DataTable-Props)中 sorter |
| sortOrder | `boolean \| 'ascend' \| 'descend'` | `undefined` | 列的默认排序 |
| syncRouteFilter | <n-a href="#SyncRouteNameRule">SyncRouteNameRule</n-a> | `undefined` | 可过滤列的路由同步规则 |
| syncRouteSorter | <n-a href="#SyncRouteNameRule">SyncRouteNameRule</n-a> | `undefined` | 可排序列的路由同步规则 |
| title | `string \| (column: ProTableBasicColumn) => VNodeChild` | `undefined` | 列的标题信息，可为渲染函数 |
| valueEnum | <n-a href='#ValueEnum'>ValueEnum</n-a> | `undefined` | 过滤项的枚举值 |
| valueType | `'date' \| 'datetime' \| 'fromNow' \| 'img'` | `undefined` | 列中的特殊数据类型 |

#### ProTableBasicColumn

> DataTableColumn 可参考[NaiveUI DataTable Props](https://www.naiveui.com/zh-CN/os-theme/components/data-table#API)。

<n-card>

```typescript
type ProColumn<T = InternalRowData> = Omit<
  Partial<DataTableColumn<T>>,
  keyof ProTableBasicColumn
> &
  ProTableBasicColumn<T>

type ProTableBasicColumn<T = InternalRowData> = {
  key?: string
  title?: TableColumnTitle
  editable?: boolean | RenderCell<T>
  children?: Array<ProTableBasicColumn<T>>
  valueEnum?: ValueEnum
  copyable?: boolean | RenderCell<T>
  dataIndex: string
  syncRouteSorter?: SyncRouteNameRule
  syncRouteFilter?: SyncRouteNameRule
  valueType?: ValueType
  render?: RenderCell<T>
  sorter?: DataTableBaseColumn<T>['sorter']
  filter?: DataTableBaseColumn<T>['filter']
}
```

</n-card>

#### RenderCell

> `RenderCell` 中的 `text` 根据数据列所配置的 `dataIndex` 由 `rowData` 中获得。

<n-card>

```typescript
type RenderCell<T = any> = (
  text: any,
  rowData: T,
  rowIndex: number,
  actions: any
) => VNodeChild
```

</n-card>

#### SyncRouteNameRule

<n-card>

```typescript
interface Rule {
  type?: 'string' | 'number' | 'array' | 'object'
  validator?: (value: string | number | any) => boolean
  transform?: (value: any) => any
}

type SyncRouteNameRule =
  | {
      name: string
      rule?: Rule
    }
  | false
```

</n-card>

#### ValueEnum

<n-card>

```typescript
type ValueEnumItem = {
  label: string
  disabled?: boolean
} & {
  [key: string]: unknown
}

interface ValueEnum {
  [key: string]: ValueEnumItem
}
```

</n-card>

### Slots

| 名称  | 参数 | 说明                 |
| ----- | ---- | -------------------- |
| empty | `()` | 表格数据为空时的展示 |

### Hooks

#### useConfigurableColumns

> 该 hook 返回的 `proTableColumnsRef` ， `configurableColumnsRef` ， `clearCache`

`proTableColumnsRef` 作为 Protable 的 props columns 的值

`configurableColumnsRef` 是我们可以配置表格列的响应式数据，例如 `configurableColumnsRef.value[0].visible=false` 表示隐藏第一列表格

`clearCache` 当我们修改多次 `configurableColumnsRef` 后，可以通过该函数重置我们的可配置列配置

##### Usage

最佳实践请看<n-a href="/example/use-configurable-columns">可配置 Demo</n-a>

<n-card>

```typescript

// Comp.vue
<template>
	<ProTable ref="proTableRef" :columns="proTableColumnsRef" :api-request="apiRequest"></ProTable>
</template>

<script setup lang="ts">
import ProTable, { useConfigurableColumns, ConfigurableInitColumn, Config, } from "naive-ui-protable-alpha"

// 按照类型补充
const columns: ConfigurableInitColumn[] = xxx
// 按照类型补充
const config: Config = xxx

const { clearCache, configurableColumnsRef, proTableColumnsRef } = useConfigurableColumns(columns, config)

// 隐藏表格的第一列
configurableColumnsRef.value[0].visible=false

// 反转表格的列顺序
configurableColumnsRef.value.reverse()

// 重置表格的列配置
clearCache()

</script>

```

</n-card>

##### Type Declarations

<n-card>

```typescript
interface ConfigurableInitColumn extends ProColumnBaseColumn {
  configurable?: ConfigItemState
}

interface Config {
  storage: {
    storageKey: string
    mode: 'sessionStorage' | 'localStorage'
  }
}

function useConfigurableColumns(
  columns: ConfigurableInitColumn[],
  config?: Config
): {
  proTableColumnsRef: Ref<ProColumn<any>[]>
  configurableColumnsRef: Ref<ConfigurableColumn[]>
  clearCache: () => void
}
```

</n-card>
