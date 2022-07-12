import { flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createTest } from './utils'
import { useCustomParamsStore } from '../src/hooks/use-params'

const customParamsStore = {
  customParamsStore: useCustomParamsStore({
    name: null
  })
}

test('test default params', async () => {
  const { wrapper, router, result } = await createTest(customParamsStore)
  await flushPromises()
  const route = router.currentRoute.value

  expect(wrapper.html()).toContain('Jonny0')
  expect(result.params).toEqual({ name: null })
  expect(route.params).toEqual({})
})

test('test params change', async () => {
  customParamsStore.customParamsStore.updateCustomParams('name', 'Tony')
  const { wrapper, router, result } = await createTest(customParamsStore)
  await flushPromises()
  const route = router.currentRoute.value

  expect(wrapper.html()).toContain('CustomTony')
  expect(result.params).toEqual({ name: 'Tony' })
  expect(route.query['name.params']).toEqual('Tony')
})
