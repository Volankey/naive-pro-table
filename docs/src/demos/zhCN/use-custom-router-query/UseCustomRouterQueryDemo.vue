<template>
  <n-space vertical>
    <div>
      进入时同步：<n-switch
        v-model:value="immediate"
        @update:value="handleImmediateUpdate"
      />
      <span style="font-size: 12px; color: #ccc; padding-left: 16px"
        >设置修改后点击“重置路由并刷新”按钮查看结果</span
      >
    </div>
    <n-space :align="'center'">
      使用数字预设的变量:
      <n-input-number
        v-model:value="reactiveData.numValue"
        clearable
      ></n-input-number>
    </n-space>

    <n-space :align="'center'">
      使用日期范围预设的变量:
      <n-date-picker
        v-model:value="reactiveData.dateRange"
        type="daterange"
        clearable
      />
    </n-space>

    <n-space :align="'center'">
      使用日期预设的变量:
      <n-date-picker
        v-model:value="reactiveData.date"
        clearable
      ></n-date-picker>
    </n-space>

    <n-space :align="'center'">
      使用默认模式（字符串）的变量:
      <n-input
        type="textarea"
        v-model:value="reactiveData.searchValue"
        clearable
      ></n-input>
    </n-space>

    <n-space :align="'center'">
      使用布尔预设的变量:
      <n-switch v-model:value="reactiveData.isTrue"></n-switch>
    </n-space>
    <n-space :align="'center'">
      使用字符串数组预设的变量:
      <n-select
        multiple
        v-model:value="reactiveData.multipleString"
        :options="opt"
        clearable
        style="width: 200px"
      ></n-select>
    </n-space>

    <n-space :align="'center'">
      自定义渲染的变量:
      <n-input-number
        v-model:value="reactiveData.customNum"
        clearable
      ></n-input-number>
    </n-space>
    <n-space :align="'center'">
      <n-button @click="handleClearQuery">重置路由并刷新</n-button>
      <n-button @click="handleChange"> change</n-button>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCustomRouterQuery } from 'naive-ui-protable-alpha'

const immediate = ref(localStorage.syncRouteImmediate === 'true')

const opt = [
  {
    label: 'naive',
    value: 'naive'
  },
  {
    label: 'ui',
    value: 'ui'
  }
]

const routerData = {
  router: useRouter(),
  route: useRoute()
}

const reactiveData = useCustomRouterQuery<{
  numValue?: number
  dateRange?: number[]
  date?: number
  searchValue?: string
  isTrue?: boolean
  multipleString?: string[]
  customNum?: number
}>(
  {
    numValue: {
      preset: 'number',
      defaultValue: 1
    },
    dateRange: {
      preset: 'dateRange'
    },
    date: {
      preset: 'date'
    },
    searchValue: {
      defaultValue: 'search'
    },
    isTrue: {
      defaultValue: false,
      preset: 'boolean'
    },
    multipleString: {
      defaultValue: ['naive', 'ui'],
      preset: 'stringArray'
    },
    customNum: {
      defaultValue: 2,
      transformToQuery(value) {
        //该函数会将真实的值value以字符串的形式渲染到路由query上面
        if (value) {
          return `你可以通过修改数字或者修改右侧羊的数量看看变化${Array(value)
            .fill('🐑')
            .join('')}`
        }
      },
      transformFromQuery(routerQuery) {
        //该函数会将路由query上面的字符串转换成自己需要的值
        if (routerQuery?.length) {
          return (routerQuery.match(/🐑/g) || []).length
        }
      }
    }
  },
  routerData,
  {
    immediate: immediate.value
  }
)

function handleChange() {
  reactiveData.numValue = 3
  reactiveData.searchValue = '111'
}

async function handleClearQuery() {
  location.href = location.pathname
}

function handleImmediateUpdate() {
  localStorage.syncRouteImmediate = immediate.value
}
</script>
