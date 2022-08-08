import { RouterView } from 'vue-router'
import { vi } from 'vitest'
import { h, VNodeChild } from 'vue'
import NProTable from '../src'
import { flushPromises, mount } from '@vue/test-utils'
import { createCommonColsRef, createMyRouter, createSourceData } from './common'

export async function createTest(
  tableProps?,
  otherRender?: () => VNodeChild,
  initUrl?
) {
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
    Object.entries({ params, sort, filter, page, pageSize }).forEach(
      ([k, v]) => {
        result[k] = v
      }
    )
    return Promise.resolve(
      createSourceData(params, sort, filter, page, pageSize)
    )
  })
  const router = createMyRouter(() => [
    otherRender?.(),
    h(NProTable, {
      ...tableProps,
      columns: createCommonColsRef().value,
      apiRequest: getData
    })
  ])
  if (initUrl) {
    router.push(initUrl)
    await flushPromises()
  }
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
      resolve(true)
    }, time)
  })
}
