<template>
  <ProTable
    ref="proTableRef"
    style="margin-top: 20px"
    :columns="columns"
    :api-request="apiRequest"
    :pagination="{
      showSizePicker: true,
      showQuickJumper: true,
      defaultPageSize: 14,
      defaultPage: 1,
      pageSizes: [14, 20, 50]
    }"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProTable from 'naive-ui-protable-alpha'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

type Column = {
  name: string
  age: number
  gender: string
  address: string
}

const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: Column[] } => {
  console.log('fetch query: ', {
    params,
    sort,
    filter,
    page,
    pageSize
  })
  const gender = ['男', '女', '无']
  const data: Column[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name: 'John Brown' + ((page - 1) * pageSize + idx),
    age: 20 + idx,
    gender: gender[Math.round(Math.random() * 2)],
    address: `New York No. ${(page - 1) * pageSize + idx} Lake Park`
  }))
  return {
    pageSize,
    itemCount: 100,
    data
  }
}

const proTableRef = ref<ProTableIns | null>(null)

const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    copyable: true
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: true,
    syncRouteSorter: {
      name: 'age',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    filter: true,
    syncRouteFilter: {
      name: 'gender',
      rule: {
        type: 'array'
      }
    },
    valueEnum: {
      man: {
        label: '男'
      },
      woman: {
        label: '女'
      },
      none: {
        label: '无'
      }
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filter: true,
    sorter: true,
    copyable: true,
    syncRouteFilter: {
      name: 'addrFilter',
      rule: {
        type: 'string'
      }
    },
    syncRouteSorter: {
      name: 'addrSorter',
      rule: {
        type: 'string'
      }
    },
    valueEnum: {
      newYork: {
        label: 'New York'
      },
      london: {
        label: 'London'
      },
      paris: {
        label: 'Paris'
      }
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
