<template>
  <div>
    <n-space vertical>
      <n-text>Current Route Query: {{ route.query }} </n-text>
      <div>
        <n-text>不同步路由</n-text>
        <ProTable
          ref="proTableRef"
          :sync-route="false"
          :columns="columns"
          :api-request="apiRequest"
        />
      </div>
      <div>
        <n-text>同步路由，且前缀为reportA</n-text>
        <ProTable
          ref="proTableRefCopy"
          query-prefix="reportA"
          :columns="columnsCopy"
          :api-request="apiRequest"
        />
      </div>
      <div>
        <n-text>同步路由，且前缀为reportB</n-text>
        <ProTable
          ref="proTableRefCopyCopy"
          query-prefix="reportB"
          :columns="columnsCopyCopy"
          :api-request="apiRequest"
        />
      </div>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ProTable from 'naive-ui-protable-alpha'
import { useRoute } from 'vue-router'
import type {
  ApiRequest,
  ProColumn,
  ProTableIns
} from 'naive-ui-protable-alpha'

const route = useRoute()
const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: Column[] } => {
  const data: Column[] = new Array(5).fill(1).map((_, idx) => ({
    name: 'name_' + idx,
    homework: Math.round(Math.random() * 100),
    exam: Math.round(Math.random() * 100),
    bonus: Math.round(Math.random() * 100)
  }))
  return {
    pageSize,
    itemCount: data.length,
    data
  }
}

type Column = {
  name: string
  homework: number
  exam: number
  bonus: number
}

const proTableRef = ref<ProTableIns | null>(null)
const columns = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true
  },
  {
    title: 'Homework',
    dataIndex: 'homework',
    key: 'homework',
    sorter: true,
    syncRouteSorter: {
      name: 'homework',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Exam',
    dataIndex: 'exam',
    key: 'exam',
    sorter: true,
    syncRouteSorter: {
      name: 'exam',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Bonus',
    dataIndex: 'bonus',
    key: 'bonus',
    sorter: true,
    syncRouteSorter: {
      name: 'bonus',
      rule: {
        type: 'string'
      }
    }
  }
])

const columnsCopy = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true
  },
  {
    title: 'Homework',
    dataIndex: 'homework',
    key: 'homework',
    sorter: true,
    syncRouteSorter: {
      name: 'homework',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Exam',
    dataIndex: 'exam',
    key: 'exam',
    sorter: true,
    syncRouteSorter: {
      name: 'exam',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Bonus',
    dataIndex: 'bonus',
    key: 'bonus',
    sorter: true,
    syncRouteSorter: {
      name: 'bonus',
      rule: {
        type: 'string'
      }
    }
  }
])

const columnsCopyCopy = ref<ProColumn<Column>[]>([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true
  },
  {
    title: 'Homework',
    dataIndex: 'homework',
    key: 'homework',
    sorter: true,
    syncRouteSorter: {
      name: 'homework',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Exam',
    dataIndex: 'exam',
    key: 'exam',
    sorter: true,
    syncRouteSorter: {
      name: 'exam',
      rule: {
        type: 'string'
      }
    }
  },
  {
    title: 'Bonus',
    dataIndex: 'bonus',
    key: 'bonus',
    sorter: true,
    syncRouteSorter: {
      name: 'bonus',
      rule: {
        type: 'string'
      }
    }
  }
])

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
