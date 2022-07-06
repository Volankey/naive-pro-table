import { vi } from 'vitest'
import { ref, h } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import NProTable, { ProColumn } from '../src'
import { flushPromises, mount } from '@vue/test-utils'

export const createCommonColsRef = () =>
  ref<ProColumn<{ name: string }>[]>([
    {
      title: 'name',
      dataIndex: 'name'
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      valueType: 'date'
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
    }
  ])
export type ColumnData = {
  name: string
  age: number
  sex: 'man' | 'woman'
  favorates: string[]
  birthday: number
  latestLogin: number
  otherInfo: {
    parents: string[]
  }
}
export const avatarSrc =
  'https://camo.githubusercontent.com/b8ebecade711b9ae1fa306e7a1c9dd680fb56b0e2b9f015fec9cbad343570353/68747470733a2f2f6e6169766575692e6f73732d636e2d686f6e676b6f6e672e616c6979756e63732e636f6d2f6e616976656c6f676f2e737667'
export const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: ColumnData[] } => {
  const data: ColumnData[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name: 'Jonny' + ((page - 1) * pageSize + idx),
    age: 10 + idx,
    sex: 'man',
    favorates: ['pinao', 'gita'],
    birthday: +new Date(1997, 3, 18),
    latestLogin: +new Date(1997, 3, 18),
    avatarSrc,
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
export function createMyRouter(render) {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: {
          name: 'test',
          setup() {
            return render
          }
        }
      }
    ]
  })
}

export async function createTable(columnsRef?: any, tableProps?: any = {}) {
  const result: {
    params: any
    sort: any
    filter: any
    page: number
    pageSize: number
  } = {
    params: undefined,
    sort: undefined,
    filter: undefined,
    page: 0,
    pageSize: 0
  }
  const getData = vi.fn((params, sort, filter, page, pageSize) => {
    Object.assign(result, {
      params,
      sort,
      filter,
      page,
      pageSize
    })
    return Promise.resolve(
      createSourceData(params, sort, filter, page, pageSize)
    )
  })
  const router = createMyRouter(() =>
    h(NProTable, {
      pagination: {
        defaultPageSize: 15,
        defaultPage: 1,
        itemCount: 0,
        showSizePicker: true,
        pageSizes: [15, 20, 50]
      },
      columns: columnsRef ? columnsRef.value : createCommonColsRef().value,
      apiRequest: getData,
      ...tableProps
    })
  )
  const wrapper = mount(
    {
      template: `<router-view></router-view>`,
      components: {
        RouterView
      }
    },
    {
      attachTo: document.body,
      global: {
        plugins: [router],
        stubs: {
          teleport: true
        }
      }
    }
  )
  await flushPromises() // 等待promise handler all done https://test-utils.vuejs.org/api/#flushpromises
  return {
    wrapper,
    router,
    result
  }
}
