<template>
  <div>
    <ProTable
      ref="proTableRef"
      :columns="columns"
      :api-request="apiRequest"
      :pagination="{
        showSizePicker: true,
        showQuickJumper: true,
        defaultPageSize: 14,
        defaultPage: 1,
        pageSizes: [14, 20, 50]
      }"
      :data-table-props="{
        rowClassName: rowClassName
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { NTag } from 'naive-ui'
import { h, ref } from 'vue'
import ProTable from 'naive-ui-protable'
import type { ApiRequest, ProColumn, ProTableIns } from 'naive-ui-protable'

const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: Column[] } => {
  const data: Column[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name: 'Jonny' + ((page - 1) * pageSize + idx),
    age: 10 + idx,
    sex: 'man',
    favorates: ['pinao', 'gita'],
    otherInfo: {
      parents: ['Jan', 'Pony']
    }
  }))
  return {
    pageSize: 14,
    itemCount: 50,
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
const proTableRef = ref<ProTableIns | null>(null)
const columns = ref<ProColumn<Column>[]>([
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
      name: 'sexsort',
      rule: {
        type: 'string'
      }
    },
    syncRouteFilter: {
      name: 'sexfilter',
      rule: {
        type: 'array'
      }
    },
    valueEnum: {
      all: { label: '全部' },
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
        h(NTag, { style: { marginRight: '10px' } }, { default: () => favorate })
      )
    }
  },
  {
    title: 'parents',
    key: 'parents',
    dataIndex: 'otherInfo.parents'
  }
])
function rowClassName() {
  return 'td-relative'
}
const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  console.log('fetch query: ', {
    params,
    sort,
    filter,
    page,
    pageSize
  })
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>

<style>
.td-relative .n-data-table-td {
  position: relative;
}
</style>
