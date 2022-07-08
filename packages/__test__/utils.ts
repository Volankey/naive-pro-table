import { RouterView } from 'vue-router'
import { vi } from 'vitest'
import { h } from 'vue'
import NProTable from '../src'
import { flushPromises, mount } from '@vue/test-utils'
import { createCommonColsRef, createMyRouter, createSourceData } from './common'

export async function createTest(renderProps?) {
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
      ...renderProps,
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
  return {
    wrapper,
    router,
    result
  }
}

export function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
