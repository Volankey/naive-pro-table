<template>
  <div>
    name
    <n-input
      :value="customParamsStore.customParamsValue.value.search"
      style="width: 300px"
      @update:value="customParamsStore.updateCustomParams('search', $event)"
    ></n-input>
    age
    <n-input
      :value="customParamsStore.customParamsValue.value.age"
      style="width: 300px"
      @update:value="customParamsStore.updateCustomParams('age', $event)"
    ></n-input>
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
      :customParamsStore="customParamsStore"
      :data-table-props="{
        rowClassName: rowClassName
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { NTag, NInput } from 'naive-ui'
import { h, ref } from 'vue'
import ProTable, { useCustomParamsStore } from 'naive-ui-protable-alpha'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

const createSourceData = (
  params: { age: number; search: string },
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: Column[] } => {
  const data: Column[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name: 'Jonny' + ((page - 1) * pageSize + idx) + params.search,
    age: params.age ? params.age : 10 + idx,
    sex: 'man',
    favorates: ['pinao', 'gita'],
    avatar:
      'https://camo.githubusercontent.com/b8ebecade711b9ae1fa306e7a1c9dd680fb56b0e2b9f015fec9cbad343570353/68747470733a2f2f6e6169766575692e6f73732d636e2d686f6e676b6f6e672e616c6979756e63732e636f6d2f6e616976656c6f676f2e737667',
    birthday: +new Date() - (10 + idx) * 3600 * 1000 * 24 * 365,
    lastLogin: +new Date() - (10 + idx) * Math.random() * 3600 * 24,
    otherInfo: {
      parents: ['Jan', 'Pony']
    }
  }))
  return {
    pageSize: 14,
    itemCount: Math.ceil(Math.random() * 50),
    data
  }
}
const customParamsStore = useCustomParamsStore({
  search: null,
  age: null
})

type Column = {
  name: string
  age: number
  birthday: number
  lastLogin: number
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
    title: 'birthday',
    dataIndex: 'birthday',
    valueType: 'date'
  },
  {
    title: 'last login',
    dataIndex: 'lastLogin',
    valueType: 'fromNow'
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
    title: 'avatar',
    dataIndex: 'avatar',
    valueType: 'img'
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
