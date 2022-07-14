# 排序

## 单列排序

在配置列时设定`sorter`以支持对列进行排序。

::: tip

- 在 Protable 中，若`sync-route`不为`false`，则在表格内进行的排序操作将同步路由。在进行排序的路由同步时，可配置`syncRouteSorter`进行校验。详见[同步路由](../sync-route）。 :::

<SingleSortDemo />

#### Demo Code

@[code](../demo-components/SingleSortDemo.vue)

## 多列排序

为`sorter`设定`multiple`和`compare`开启多列排序，其中`multiple`为多列排序的优先级，值越高优先级越高。  
数据表中可同时存在单列排序与多列排序，但两种排序的结果互斥，即在进行单列排序时多列排序会被取消，反之同理。如下示例中，Age 列仅能够进行单列排序，Score 相关列支持多列排序。 <MultipleSortDemo />

#### Demo Code

@[code](../demo-components/MultipleSortDemo.vue)
