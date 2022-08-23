<DemoWrap>
  <template #header>

### 表头分组

  </template>
  <template #tip>
  <n-alert title="注意" type="warning">

当不同分组中存在相同的列名，且列状态（筛选状态/排序状态）均需同步路由时，需在 sync 规则（ `syncRouteFilter` / `syncRouteSorter` ）的配置中通过 `name` 进行区分。

对于同一类 sync 规则，若多列均以相同的 `name` 进行配置，路由同步只会对进行了该命名配置的最后一列生效。同一列中不同类 sync 规则的路由同步不受此影响。

  </n-alert>
  </template>
  <template #demo>
    <HeaderGroupDemo/>
  </template>

@[code html](./HeaderGroupDemo.vue)

</DemoWrap>
