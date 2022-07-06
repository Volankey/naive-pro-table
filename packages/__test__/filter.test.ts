import { expect, test } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { createTest } from './utils'
import { NPopover, NCheckboxGroup, NCheckbox, NButton } from 'naive-ui'

// use mock lodash-es/debounce to make vitest and lodash/setTimeout in the same loop
vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))

const renderProps = {
  syncRoute: true
}
const createFilterTest = createTest

test('set filter', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.find('.n-data-table-filter')
  await filterIcon.trigger('click')

  const popover = wrapper.getComponent(NPopover)
  const checkboxGroup = popover.getComponent(NCheckboxGroup)
  const checkbox = checkboxGroup.findAllComponents(NCheckbox)
  const confirmButton = popover.findAllComponents(NButton)[1]

  // single filter
  await checkbox[0].trigger('click')
  await confirmButton.trigger('click')
  // check 1.url 2.apiRequest
  await flushPromises()
  let route = router.currentRoute.value
  expect(route.query['sex.filter']).toEqual(['all'])
  expect(result.filter['sex']).toEqual(['all'])

  // multiple filters
  await filterIcon.trigger('click')
  await checkbox[1].trigger('click')
  await confirmButton.trigger('click')
  // check 1.url 2.apiRequest
  await flushPromises()
  route = router.currentRoute.value
  expect(route.query['sex.filter']).toEqual(['all', 'man'])
  expect(result.filter['sex']).toEqual(['all', 'man'])
})

test('clear filter', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.find('.n-data-table-filter')
  await filterIcon.trigger('click')

  const popover = wrapper.getComponent(NPopover)
  await popover.getComponent(NButton).trigger('click')

  // check 1.url 2.apiRequest
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query).toEqual({ sex: undefined })
  expect(result.filter).toEqual({ sex: null })
})
