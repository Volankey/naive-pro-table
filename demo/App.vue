<template>
  <ProTable
    :columns="columns"
    :header-title="'高级表格'"
    :tool-bars="renderToolBars"
    :api-request="apiRequest"
  />
</template>

<script lang="ts">
import { NButton, NTag } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'
import ProTable, { ApiRequest } from '../src/index'
import type { ProColumn } from '../src/interface'

const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; pageCount: number; data: Column[] } => {
  const data: Column[] = new Array(10).fill(1).map((_, idx) => ({
    name: 'Jonny' + ((page - 1) * 10 + idx),
    age: 10 + idx,
    sex: 'man',
    favorates: ['pinao', 'gita'],
    otherInfo: {
      parents: ['Jan', 'Pony']
    }
  }))
  return {
    pageSize: 10,
    pageCount: 5,
    data
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
    ProTable
  },
  setup() {
    const columnsRef = ref<ProColumn<Column>[]>([
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: true,
        copyable: true
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
            type: 'string'
          }
        }
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
            type: 'string'
          }
        },

        syncRouteFilter: {
          name: 'sex',
          rule: {
            type: 'array'
          }
        },
        valueEnum: {
          all: { label: '全部', hah: true },
          man: {
            label: '男'
          },
          woman: {
            label: '女',
            disabled: true
          }
        }
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
              { default: () => favorate }
            )
          )
        }
      },
      {
        title: 'parents',
        key: 'parents',
        dataIndex: 'otherInfo.parents'
      }
    ])
    const renderToolBars = ref([
      () =>
        h(
          NButton,
          { type: 'primary' },
          {
            default: () => '刷新'
          }
        )
    ])
    const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
      return createSourceData(params, sort, filter, page, pageSize)
    }
    return {
      renderToolBars,
      columns: columnsRef,
      apiRequest
    }
  }
})
</script>

<style></style>
