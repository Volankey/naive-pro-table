import { flushPromises } from '@vue/test-utils'
import { NInput, NInputNumber } from 'naive-ui'
import { expect, test } from 'vitest'
import { h } from 'vue'
import { useCustomParamsStore } from '../src'
import { createTest } from './utils'

const tableProps = {
  pagination: {
    defaultPageSize: 15,
    defaultPage: 1,
    itemCount: 0,
    showSizePicker: true,
    pageSizes: [15, 20, 50]
  }
}
async function createCustomParamsTest(
  initUrl,
  initValue: any = { search: null, age: null }
) {
  const customParamsStore = useCustomParamsStore(initValue, {
    age: {
      type: 'number',
      transform(v) {
        return v !== null ? parseInt(v) : null
      }
    }
  })
  const renderAgeAndSearch = () => {
    return [
      h(NInput, {
        value: customParamsStore.customParamsValue.value.search,
        onUpdateValue: (v) => customParamsStore.updateCustomParams('search', v)
      }),
      h(NInputNumber, {
        value: customParamsStore.customParamsValue.value.age,
        onUpdateValue: (v) => customParamsStore.updateCustomParams('age', v)
      })
    ]
  }
  const { wrapper, result, router } = await createTest(
    {
      ...tableProps,
      customParamsStore: customParamsStore
    },
    renderAgeAndSearch,
    initUrl
  )
  return {
    wrapper,
    result,
    router
  }
}
test('test custom params with initUrl', async () => {
  const { wrapper, result } = await createCustomParamsTest(
    '/?page.page=1&pageSize.pageSize=14&search.params=asd&age.params=124'
  )
  await flushPromises()
  const inputNumber = wrapper.findComponent(NInputNumber)
  const input = wrapper.findComponent(NInput)
  expect(inputNumber.vm.value).equal(124)
  expect(input.vm.value).equal('asd')
  expect(result.params).toEqual({
    search: 'asd',
    age: 124
  })
})

test('test custom params with initValue', async () => {
  const { wrapper, result, router } = await createCustomParamsTest('/', {
    age: 10,
    search: 'hello'
  })
  await flushPromises()
  const inputNumber = wrapper.findComponent(NInputNumber)
  const input = wrapper.findComponent(NInput)
  expect(inputNumber.vm.value).equal(10)
  expect(input.vm.value).equal('hello')
  expect(result.params).toEqual({
    search: 'hello',
    age: 10
  })
  expect(router.currentRoute.value.query['search.params']).equal('hello')
  expect(router.currentRoute.value.query['age.params']).equal('10')
})

test('test custom params with operate', async () => {
  const { wrapper, result, router } = await createCustomParamsTest('/', {
    age: 10,
    search: 'hello'
  })
  await flushPromises()
  const inputNumber = wrapper.findComponent(NInputNumber)
  const input = wrapper.findComponent(NInput)
  if (typeof input.vm.onUpdateValue === 'function') {
    input.vm.onUpdateValue('world' as any)
  }
  if (typeof inputNumber.vm.onUpdateValue === 'function') {
    inputNumber.vm.onUpdateValue(20 as any)
  }
  await flushPromises()
  expect(inputNumber.vm.value).equal(20)
  expect(input.vm.value).equal('world')
  expect(result.params).toEqual({
    search: 'world',
    age: 20
  })
  expect(router.currentRoute.value.query['search.params']).equal('world')
  expect(router.currentRoute.value.query['age.params']).equal('20')
})
