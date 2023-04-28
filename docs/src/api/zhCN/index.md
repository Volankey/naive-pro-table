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

> 该 hook 返回 `proTableColumnsRef` ， `configurableColumnsRef` ， `reset`

`proTableColumnsRef` 作为 ProTable 的 props columns 的值

`configurableColumnsRef` 是我们可以配置表格列的响应式数据，例如 `configurableColumnsRef.value[0].visible=false` 表示隐藏表格的第一列，[类型参考](#useConfigurableColumns-type-declarations)

`reset` 当我们修改多次 `configurableColumnsRef` 后，该函数可清除 localStorage/sessionStorage 中的缓存，并重置我们的可配置列配置,具体需要参考 storage 属性配置的缓存 mode

<span id='useConfigurableColumns-usage'></span>

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

const { reset, configurableColumnsRef, proTableColumnsRef } = useConfigurableColumns(columns, config)

// 隐藏表格的第一列
configurableColumnsRef.value[0].visible=false

// 反转表格的列顺序
configurableColumnsRef.value.reverse()

// 重置表格的列配置
reset()

</script>

```

</n-card>
<span id='useConfigurableColumns-type-declarations'></span>

##### Type Declarations

<n-card>

```typescript
interface ConfigurableColumn {
  readonly key: string
  readonly title: TableColumnTitle
  visible: boolean
}

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
  reset: () => void
}
```

</n-card>

#### useCustomRouterQuery

> 该 hook 返回 一个 `reactive` 变量

初始化的时候，我们需要传入类型声明来支持 ts。该类型声明代表你将要返回的 `reactive` 变量的类型，具体可看下面的示例。

为了提高开发效率，提供了多种常见的预设模式[预设类型参考](#useCustomRouterQuery-type-declarations)，具体表现可看<n-a href="/example/use-custom-router-query">最佳实践</n-a>

同样提供了默认值属性 `defaultValue` ，当我们进入网页链接中没有 query 信息的时候，初始化的响应式变量将会以默认值为初始值。默认为 `undefined`

如果预设模式满足不了你的需求，你可以通过 `render` 和 `getFromRouter` 来自定义自己的响应式数据，这里的 `render` 和 vue3 中 `computed` 中的 set 类似， `getFromRouter` 与 `get` 类似。

<span style="color:red;">注意：</span>存在 preset 的时候优先以 preset 为主 <span id='useConfigurableColumns-usage'></span>

##### Usage

最佳实践请看<n-a href="/example/use-custom-router-query">同步路由 Demo</n-a>

<n-card>

```typescript
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCustomRouterQuery } from 'naive-ui-protable'
const routerData = {
  router: useRouter(),
  route: useRoute()
}

const reactiveData = useCustomRouterQuery<{
  searchValue?: string
  numberValue?:number
  customNum?: number
}>(
  {
    searchValue: {
      defaultValue: undefined
    },
    numberValue: {
      preset: 'number'
    },
    customNum: {
      defaultValue: 2,
      render(value: number | undefined) {
        //该函数会将真实的值value以字符串的形式渲染到路由query上面
        if (value) {
          return `你可以通过修改数字或者修改右侧羊的数量看看变化${Array(value)
            .fill('🐑')
            .join('')}`
        }
      },
      transformFromQuery(routerQuery: string | undefined) {
        //该函数会路由query上面的字符串转换成自己需要的值
        if (routerQuery?.length) {
          return (routerQuery.match(/🐑/g) || []).length
        }
      }
    }
  },
  routerData
)
</script>

```

</n-card>
<span id='useCustomRouterQuery-type-declarations'></span>

##### Type Declarations

<n-card>

```typescript
type PresetType = 'number' | 'date' | 'dateRange' | 'boolean' | 'stringArray'
type Param<T> = {
  [K in keyof T]: {
    defaultValue?: T[K]
    render?: (value: undefined | T[K]) => string | undefined
    transformFromQuery?: (routerValue: string | undefined) => T[K]
    preset?: PresetType
  }
}
export declare function useCustomRouterQuery<T extends Record<string, any>>(
  items: Param<T>,
  reactiveRouteOptions: {
    route: RouteLocationNormalizedLoaded
    router: Router
  }
): import('vue').UnwrapNestedRefs<T>
```

</n-card>
