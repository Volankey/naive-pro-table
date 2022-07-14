<template>
  <n-space vertical size="large">
    <n-text v-show="showQuery"> Current Route Query: {{ route.query }} </n-text>
    <div>
      reportA
      <ProTable
        ref="proTableRef"
        query-prefix="reportA"
        :columns="columns"
        :api-request="apiRequest"
        :pagination="{
          showSizePicker: true,
          showQuickJumper: true,
          defaultPageSize: 5,
          defaultPage: 1,
          pageSizes: [10, 20, 50]
        }"
      />
    </div>
    <div>
      reportB
      <ProTable
        ref="proTableRefCopy"
        query-prefix="reportB"
        :columns="columnsCopy"
        :api-request="apiRequest"
        :pagination="{
          showSizePicker: true,
          showQuickJumper: true,
          defaultPageSize: 5,
          defaultPage: 1,
          pageSizes: [5, 10, 15]
        }"
      />
    </div>
  </n-space>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import ProTable from 'naive-ui-protable-alpha'
import { useRoute } from 'vue-router'
import type { ApiRequest, ProColumn } from 'naive-ui-protable-alpha'
import { NSpace, NText } from 'naive-ui'

const route = useRoute()
const showQuery = computed(() => {
  console.log(route.query)
  return JSON.stringify(route.query) !== '{}'
})
console.log(showQuery.value)
const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: Column[] } => {
  const data: Column[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name: 'name' + idx,
    homework: Math.round(Math.random() * 100),
    exam: Math.round(Math.random() * 100),
    bonus: Math.round(Math.random() * 100)
  }))
  return {
    pageSize,
    itemCount: 50,
    data
  }
}

type Column = {
  name: string
  homework: number
  exam: number
  bonus: number
}

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

const apiRequest: ApiRequest = (params, sort, filter, page, pageSize) => {
  return Promise.resolve(createSourceData(params, sort, filter, page, pageSize))
}
</script>
