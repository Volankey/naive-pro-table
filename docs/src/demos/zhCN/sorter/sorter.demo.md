## 排序

<DemoWrap>
  <template #header>

### 基础用法

  </template>
  <template #tip>

在配置列时设定`sorter`以支持对列进行排序。

可通过配置`sortOrder`为可排序的列设置默认排序状态，若多列均设置了`sortOrder`，仅进行了设置的首列生效。

  <n-alert title="注意" type="warning">

在 Protable 中，若 `sync-route` 不为 `false` 时，可配置 `syncRouteSorter` 让 sort 开启路由同步，如果不配置就不会同步路由。

  </n-alert>

  </template>
  <template #demo>
    <SorterDemo />
  </template>

@[code html](./SorterDemo.vue)

</DemoWrap>

<n-divider />

<DemoWrap>
  <template #header>

### 多列排序

  </template>
  <template #tip>

通过在`sorter`中设定`multiple`开启多列排序。`multiple`为多列排序的优先级，其越高则排序优先级越高。

与 [Naive UI 多列排序](https://www.naiveui.com/zh-CN/os-theme/components/data-table#multiple-sorter) 相同，使用 ProTable 创建的表格中可同时存在单列排序和多列排序，但两种排序互斥。即开启多列排序时，单列排序会被取消，反之相同。

  <n-alert title="注意" type="warning">

多列排序的表格也可通过`sortOrder`设置列的默认排序。单列排序和多列排序同时存在时，不能同时为两种排序设置`sortOrder`。

  </n-alert>

  </template>
  <template #demo>
    <MultipleSorterDemo />
  </template>

@[code html](./MultipleSorterDemo.vue)

</DemoWrap>
