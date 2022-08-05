<template>
  <div style="margin-bottom: 10px">
    table:{{ prefix }} | suffix:
    <n-input
      :value="customParamsStore.customParamsValue.value.suffix"
      style="width: 300px"
      @update:value="customParamsStore.updateCustomParams('suffix', $event)"
    />
  </div>
  <ProTable
    :query-prefix="prefix"
    ref="proTableRef"
    :customParamsStore="customParamsStore"
    :columns="columns"
    :api-request="apiRequest"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProTable, { useCustomParamsStore } from 'naive-ui-protable-alpha'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

defineProps<{
  prefix: string
}>()

const proTableRef = ref<ProTableIns | null>(null)
const customParamsStore = useCustomParamsStore({
  suffix: null
})

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
  const data: Column[] = [
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
  return {
    pageSize: 15,
    itemCount: 5,
    data
  }
}
function createColumns() {
  return [
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
  ] as ProColumn[]
}
const columns = ref<ProColumn<Column>[]>(createColumns())

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
