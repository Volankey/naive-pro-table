import { expect, test, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { createTest } from './utils'

// use mock lodash-es/debounce to make vitest and lodash/setTimeout in the same loop
vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))

const renderProps = {
  syncRoute: true
}
const createSorterTest = createTest

async function sorterRouteAndRequestTest(
  sortType: string | boolean,
  iconType?: string
) {
  const { wrapper, router, result } = await createSorterTest(renderProps)
  const sorter = wrapper.find('.n-data-table-sorter')
  // sort trigger
  await sorter.trigger('click')
  await flushPromises()
  const route = router.currentRoute.value
  // check apiRequest
  expect(result.sort['age']).equal(sortType)
  // check url & icon
  if (sortType) {
    expect(route.query['age.sort']).equal(sortType)
    const sorterIcon = wrapper.find('.n-data-table-sorter--' + iconType)
    expect(sorterIcon.exists()).toBe(true)
  } else {
    expect(route.query['age.sort']).equal(undefined)
    expect(wrapper.find('.n-data-table-sorter--desc').exists()).toBe(false)
    expect(wrapper.find('.n-data-table-sorter--asc').exists()).toBe(false)
  }
}

test('change sorter to descend', async () => {
  await sorterRouteAndRequestTest('descend', 'desc')
})

test('change sorter to ascend', async () => {
  await sorterRouteAndRequestTest('ascend', 'asc')
})

test('test sorter after fresh', async () => {
  location.reload()
  const { wrapper, router, result } = await createSorterTest(renderProps)
  await flushPromises()
  const route = router.currentRoute.value
  const sorterIcon = wrapper.find('.n-data-table-sorter--asc')
  expect(sorterIcon.exists()).toBe(true)
  expect(result.sort['age']).equal('ascend')
  expect(route.query['age.sort']).equal('ascend')
})

test('change sorter to false', async () => {
  await sorterRouteAndRequestTest(false)
})
