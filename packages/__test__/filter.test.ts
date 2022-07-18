import { expect, test, vi } from 'vitest'
import { flushPromises, type VueWrapper } from '@vue/test-utils'
import { createTest } from './utils'
import { NCheckboxGroup, NCheckbox, NButton } from 'naive-ui'

// use mock lodash-es/debounce to make vitest and lodash/setTimeout in the same loop
vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))
const renderProps = {
  syncRoute: true
}
const createFilterTest = createTest

function getCheckboxAndButton(wrapper: VueWrapper) {
  const checkboxGroup = wrapper.getComponent(NCheckboxGroup)
  const checkbox = checkboxGroup.findAllComponents(NCheckbox)
  const operateButton = wrapper.findAllComponents(NButton)
  const cancelButton = operateButton[0]
  const confirmButton = operateButton[1]
  return {
    checkbox,
    cancelButton,
    confirmButton
  }
}

test('test set single filter', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.getComponent('.n-data-table-filter')
  await filterIcon.trigger('click')

  const { checkbox, confirmButton } = getCheckboxAndButton(wrapper)
  await checkbox[0].trigger('click')
  await confirmButton.trigger('click')
  // check 1.url 2.apiRequest 3.icon
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['sex.filter']).toEqual(['all'])
  expect(result.filter['sex']).toEqual(['all'])
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(true)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(true)
})

test('test set multiple filters', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.find('.n-data-table-filter')
  await filterIcon.trigger('click')

  const { checkbox, confirmButton } = getCheckboxAndButton(wrapper)
  await checkbox[1].trigger('click')
  await confirmButton.trigger('click')

  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['sex.filter']).toEqual(['all', 'man'])
  expect(result.filter['sex']).toEqual(['all', 'man'])
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(true)
  expect(checkbox[1].find('.n-checkbox--checked').exists()).toBe(true)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(true)
})

test('test filter after refresh', async () => {
  location.reload()
  const { wrapper, router, result } = await createFilterTest(renderProps)
  await flushPromises()
  const route = router.currentRoute.value

  const filterIcon = wrapper.find('.n-data-table-filter')
  await filterIcon.trigger('click')

  const { checkbox } = getCheckboxAndButton(wrapper)
  expect(route.query['sex.filter']).toEqual(['all', 'man'])
  expect(result.filter['sex']).toEqual(['all', 'man'])
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(true)
  expect(checkbox[1].find('.n-checkbox--checked').exists()).toBe(true)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(true)
})

test('clear filter', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.find('.n-data-table-filter')
  await filterIcon.trigger('click')

  const { cancelButton } = getCheckboxAndButton(wrapper)
  cancelButton.trigger('click')

  // check 1.url 2.apiRequest
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query).toEqual({ sex: undefined })
  expect(result.filter).toEqual({ sex: undefined })

  await filterIcon.trigger('click')
  const { checkbox } = getCheckboxAndButton(wrapper)
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(false)
  expect(checkbox[1].find('.n-checkbox--checked').exists()).toBe(false)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(false)
})
