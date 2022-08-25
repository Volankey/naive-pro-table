import { expect, test, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { createTest } from './utils'
import { ref } from 'vue'
import { ProColumn } from '../src'
import { createTable } from './common'

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
  const { wrapper, router, result } = await createSorterTest(
    renderProps,
    undefined,
    '/?age.sort=ascend'
  )
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

// test default sort order
const createCommonColsRef = () =>
  ref<ProColumn<{ name: string }>[]>([
    {
      title: 'score',
      dataIndex: 'score',
      sorter: true,
      sortOrder: 'descend',
      syncRouteSorter: {
        name: 'score',
        rule: {
          type: 'string'
        }
      }
    }
  ])

test('test default sort order', async () => {
  const colsRef = createCommonColsRef()
  const { wrapper, router, result } = await createTable(colsRef)
  let route = router.currentRoute.value
  // check icon
  let sorterIcon = wrapper.find('.n-data-table-sorter--desc')
  expect(sorterIcon.exists()).toBe(true)
  // check apiRequest
  expect(result.sort['score']).equal('descend')
  // check url
  expect(route.query['score.sort']).equal('descend')

  const sorter = wrapper.find('.n-data-table-sorter')
  console.log(sorter.html())
  // sort trigger
  await sorter.trigger('click')
  await flushPromises()
  route = router.currentRoute.value
  // check icon
  sorterIcon = wrapper.find('.n-data-table-sorter--asc')
  expect(sorterIcon.exists()).toBe(true)
  // check apiRequest
  expect(result.sort['score']).equal('ascend')
  // check url
  expect(route.query['score.sort']).equal('ascend')
})
