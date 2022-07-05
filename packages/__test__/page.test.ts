import { expect, vi } from 'vitest'
import { h } from 'vue'
import NProTable from '../src/index'
import { flushPromises, mount } from '@vue/test-utils'
import { createCommonColsRef, createMyRouter, createSourceData } from './common'
import { RouterView } from 'vue-router'
import { NPagination } from 'naive-ui'

async function createPageTest(columnsRef?: any) {
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
      apiRequest: getData
    })
  )
  const wrapper = mount(
    {
      setup() {
        return () => h(RouterView)
      }
    },
    {
      attachTo: document.body,
      global: {
        plugins: [router]
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

test('default pageSize = 15', async () => {
  const { result } = await createPageTest()
  expect(result.pageSize).equal(15)
})

test('change page = 2 then the pageSize = 20', async () => {
  const { wrapper, result, router } = await createPageTest()
  const pagination = wrapper.getComponent(NPagination)
  if (!Array.isArray(pagination.vm?.['onUpdate:page'])) {
    pagination.vm?.['onUpdate:page'](2)
  }
  await flushPromises() // 等待promise handler all done https://test-utils.vuejs.org/api/#flushpromises
  let route = router.currentRoute.value
  // 需要检验 路由是否正确
  expect(route.query['page.page']).equal('2')
  // apiRequest是否被调用 且参数是否正确
  expect(result.page).equal(2)

  // change page to 20
  if (!Array.isArray(pagination.vm?.['onUpdate:pageSize'])) {
    pagination.vm?.['onUpdate:pageSize'](20)
  }
  await flushPromises() // 等待promise handler all done https://test-utils.vuejs.org/api/#flushpromises
  route = router.currentRoute.value
  expect(result.pageSize).equal(20)
  expect(route.query['pageSize.pageSize']).equal('20')
  expect(route.query['page.page']).equal('1')
})
