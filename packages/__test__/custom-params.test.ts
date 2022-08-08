import { flushPromises } from '@vue/test-utils'
import { NInput, NInputNumber, NPagination } from 'naive-ui'
import { expect, test, vi } from 'vitest'
import { h } from 'vue'
import { useCustomParamsStore } from '../src'
import { createTest } from './utils'
// use mock lodash-es/debounce to make vitest and lodash/setTimeout in the same loop
vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))
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
        class: 'search-input',
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
    '?page.page=2&search.params=123&age.params=10'
  )
  await flushPromises()

  const inputNumber = wrapper.findComponent(NInputNumber)
  const input = wrapper.findComponent(NInput)
  expect(inputNumber.vm.value).equal(10)
  expect(input.vm.value).equal('123')
  expect(result.params).toEqual({
    search: '123',
    age: 10
  })
  expect(result.page).toEqual(2)
})

test('test custom params change reset page to 1', async () => {
  const { wrapper, result, router } = await createCustomParamsTest('/')
  await flushPromises()

  const input = wrapper.findComponent(NInput)

  const pagination = wrapper.findComponent(NPagination)
  if (typeof pagination.vm['onUpdate:page'] === 'function') {
    pagination.vm['onUpdate:page'](2)
  }
  await flushPromises()
  expect(pagination.vm.page).equal(2)
  if (typeof input.vm.onUpdateValue === 'function') {
    input.vm.onUpdateValue('test' as any)
    await flushPromises()
  }
  expect(router.currentRoute.value.query['page.page']).equal('1')
  expect(result.page).equal(1)
  expect(input.vm.value).equal('test')
  expect(result.params).toEqual({
    search: 'test',
    age: null
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
    age: 10,
    search: 'hello'
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
