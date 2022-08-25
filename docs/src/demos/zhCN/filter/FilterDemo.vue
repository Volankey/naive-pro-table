<template>
  <ProTable
    :pagination="{
      defaultPageSize: 2,
      defaultPage: 1
    }"
    ref="proTableRef"
    :columns="columns"
    :api-request="apiRequest"
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

const proTableRef = ref<ProTableIns | null>(null)
type Column = {
  name: string
  gender: 'man' | 'woman' | 'none'
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
  let data: Column[] = [
    {
      name: 'John Brown',
      gender: 'man',
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      gender: 'none',
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Megumi Noda',
      gender: 'woman',
      address: 'Paris No.7 Mozart'
    },
    {
      name: 'Shinichi Chiaki',
      gender: 'man',
      address: 'Paris No.7 Mozart'
    },
    {
      name: 'Jolyne Cujoh',
      gender: 'woman',
      address: 'New York No.1 Lake Park'
    }
  ]
  data = data.filter((item) => {
    return filter
      ? (filter.gender ? filter.gender.includes(item.gender) : true) &&
          (filter.address
            ? filter.address.some((addr: string) => item.address.includes(addr))
            : true)
      : true
  })
  const itemCount = data.length
  data = data.slice(pageSize * (page - 1), pageSize * (page - 1) + pageSize)
  return {
    pageSize: 2,
    itemCount,
    data
  }
}

const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    filter: true,
    filterItems: ['man', 'woman'],
    syncRouteFilter: {
      name: 'gender',
      rule: {
        type: 'array'
      }
    },
    filterOptions: [
      {
        label: '男',
        value: 'man'
      },
      {
        label: '女',
        value: 'woman'
      },
      {
        label: '无',
        value: 'none'
      }
    ]
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    filter: true,
    sorter: true,
    syncRouteFilter: {
      name: 'addr',
      rule: {
        type: 'array'
      }
    },
    syncRouteSorter: {
      name: 'addr',
      rule: {
        type: 'string'
      }
    },
    valueEnum: {
      'New York': {
        label: 'New York'
      },
      London: {
        label: 'London'
      },
      Paris: {
        label: 'Paris'
      },
      volankey: {
        label: 'volankey'
      }
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
