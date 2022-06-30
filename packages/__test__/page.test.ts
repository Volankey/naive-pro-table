import { expect, vi } from 'vitest'
import { h } from 'vue'
import NProTable from '../src/index'
import { flushPromises, mount } from '@vue/test-utils'
import { createCommonColsRef, createMyRouter, createSourceData } from './common'
import { RouterView } from 'vue-router'

test('default page size = 15', async () => {
  let _pageSize = 0
  const getData = vi.fn((params, sort, filter, page, pageSize) => {
    console.log(
      '🚀 ~ file: page.test.ts ~ line 11 ~ getData ~ params, sort, filter, page, pageSize',
      params,
      sort,
      filter,
      page,
      pageSize
    )
    _pageSize = pageSize
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
      columns: createCommonColsRef().value,
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
  const pageSelect = wrapper.find('.n-base-selection-input[title="15 / page"]')
  expect(pageSelect)
  expect(_pageSize).equal(15)

  await pageSelect.trigger('click')
  await flushPromises()
  console.log(document.body.innerHTML)
  const option = document.querySelectorAll('.n-base-select-option')
  console.log('🚀 ~ file: page.test.ts ~ line 57 ~ test ~ option', option)
  // await document.querySelector('.n-base-select-option')
})
