<template>
<div>
  <ProTable
    ref="proTableRef"
    :columns="columns"
    :header-title="'高级表格'"
    :tool-bars="renderToolBars"
    :api-request="apiRequest"
    :pagination="{
      showSizePicker: true,
      showQuickJumper: true,
      pageSizes: [10, 20, 50],
    }"
    :data-table-props="{
      rowClassName: rowClassName,
    }"
  />
</div>

</template>

<script lang="ts">
import { NButton, NTag } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'
import ProTable from 'naive-ui-protable'
import type {  ApiRequest,  ProColumn } from 'naive-ui-protable'

const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number,
): { pageSize: number; pageCount: number; data: Column[] } => {
  const data: Column[] = new Array(10).fill(1).map((_, idx) => ({
    name: 'Jonny' + ((page - 1) * 10 + idx),
    age: 10 + idx,
    sex: 'man',
    favorates: ['pinao', 'gita'],
    otherInfo: {
      parents: ['Jan', 'Pony'],
    },
  }))
  return {
    pageSize: 10,
    pageCount: 5,
    data,
  }
}

type Column = {
  name: string
  age: number
  sex: 'man' | 'woman'
  favorates: string[]
  otherInfo: {
    parents: string[]
  }
}
export default defineComponent({
  components: {
    ProTable,
    NButton,
  },
  setup() {
    const isEditingModeRef = ref(false)
    const proTableRef = ref(null)
    const columnsRef = ref<ProColumn<Column>[]>([
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        copyable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        key: 'age',
        sorter: true,
        sortOrder: false,
        syncRouteSorter: {
          name: 'age',
          rule: {
            type: 'string',
          },
        },
      },
      {
        title: 'sex',
        dataIndex: 'sex',
        key: 'sex',
        filter: true,
        sorter: true,
        sortOrder: false,
        syncRouteSorter: {
          name: 'sex',
          rule: {
            type: 'string',
          },
        },
        syncRouteFilter: {
          name: 'sex',
          rule: {
            type: 'array',
          },
        },
        valueEnum: {
          all: { label: '全部', hah: true },
          man: {
            label: '男',
          },
          woman: {
            label: '女',
            disabled: true,
          },
        },
      },
      {
        title: 'favoraties',
        dataIndex: 'favorates',
        key: 'favorates',
        render(favorates) {
          return favorates.map((favorate: string) =>
            h(
              NTag,
              { style: { marginRight: '10px' } },
              { default: () => favorate },
            ),
          )
        },
      },
      {
        title: 'parents',
        key: 'parents',
        dataIndex: 'otherInfo.parents',
      },
    ])
    const renderToolBars = ref([
      () =>
        h(
          NButton,
          {
            type: 'primary',
            onClick: () => {
              proTableRef.value?.refresh()
            },
          },
          {
            default: () => '刷新',
          },
        ),
    ])
    const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
      console.log('fetch query: ', {
        params,
        sort,
        filter,
        page,
        pageSize,
      })
      return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
    }
    return {
      renderToolBars,
      columns: columnsRef,
      apiRequest,
      isEditingMode: isEditingModeRef,
      proTableRef,
      rowClassName() {
        return 'td-relative'
      },
    }
  },
})
</script>

<style>
.td-relative .n-data-table-td {
  position: relative;
}
</style>
