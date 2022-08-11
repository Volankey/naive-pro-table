<template>
  <ProTable
    :pagination="{
      defaultPageSize: 2,
      defaultPage: 1,
      pageSizes: [2, 4],
      showSizePicker: true
    }"
    :sync-route-page="syncRoutePage"
    :sync-route-page-size="false"
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
  age: number
}
// 自定义 page 同步路由参数名称
const syncRoutePage = {
  name: 'p'
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
      address: 'New York No. 1 Lake Park',
      age: 1
    },
    {
      name: 'Jim Green',
      gender: 'none',
      address: 'London No. 1 Lake Park',
      age: 2
    },
    {
      name: 'Megumi Noda',
      gender: 'woman',
      address: 'Paris No.7 Mozart',
      age: 3
    },
    {
      name: 'Shinichi Chiaki',
      gender: 'man',
      address: 'Paris No.7 Mozart',
      age: 4
    },
    {
      name: 'Jolyne Cujoh',
      gender: 'woman',
      address: 'New York No.1 Lake Park',
      age: 5
    },
    {
      name: 'Jolyne Li',
      gender: 'woman',
      address: 'New York No.1 Lake Park',
      age: 5
    },
    {
      name: 'Volankey Cujoh',
      gender: 'man',
      address: 'Mars',
      age: 18
    }
  ]
  let itemCount = data.length
  data = data
    .filter((item) => {
      return filter
        ? (filter.gender ? filter.gender.includes(item.gender) : true) &&
            (filter.address
              ? filter.address.some((addr: string) =>
                  item.address.includes(addr)
                )
              : true)
        : true
    })
    .slice(pageSize * (page - 1), pageSize * (page - 1) + pageSize)

  const hasFilter = filter?.gender || filter?.address
  return {
    pageSize: 2,
    itemCount: hasFilter ? data.length : itemCount,
    data
  }
}

const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filter: true,
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
      }
    }
  },
  {
    title: 'Age(排序不同步路由)',
    dataIndex: 'age',
    sorter: true,
    render(text) {
      return text + '(不配置syncRouteSorter就不同步)'
    }
  },
  {
    title: 'Filter(排序不同步路由)',
    filter: true,
    dataIndex: 'filter',
    valueEnum: {
      'New York': {
        label: 'New York'
      },
      London: {
        label: 'London'
      },
      Paris: {
        label: 'Paris'
      }
    },
    render() {
      return '不配置syncRouteFilter就不同步'
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
