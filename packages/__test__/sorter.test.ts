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
      sorter: {
        multiple: 2
      },
      sortOrder: 'descend',
      syncRouteSorter: {
        name: 'score',
        rule: {
          type: 'string'
        }
      }
    },
    {
      title: 'age',
      dataIndex: 'age',
      sorter: {
        multiple: 1
      },
      sortOrder: 'ascend'
    }
  ])

const checkDefaultSorter = async (initUrl?: string) => {
  const colsRef = createCommonColsRef()
  const { wrapper, router, result } = await createTable(colsRef)
  if (initUrl) {
    router.push(initUrl)
  }
  // check icon
  const scoreSorter = wrapper.find('.n-data-table-sorter--desc')
  const ageSorter = wrapper.find('.n-data-table-sorter--asc')
  expect(scoreSorter.exists()).toBe(true)
  expect(ageSorter.exists()).toBe(true)
  // check apiRequest
  expect(result.sort).toEqual({ score: 'descend', age: 'ascend' })
  // check url
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['score.sort']).equal('descend')
  expect(route.query['age.sort']).equal(undefined)
}

test('test default sort order', async () => {
  await checkDefaultSorter()

  // test default sorter with empty initUrl
  await checkDefaultSorter('')
})

test('initUrl with no-sync-route sorter', async () => {
  const { wrapper, router, result } = await createSorterTest(
    renderProps,
    undefined,
    '/?age.sort=ascend&filterSex.sort=descend'
  )
  await flushPromises()
  const sorter = wrapper.findAllComponents('.n-data-table-sorter')
  expect(sorter[0].html()).toContain('--asc')
  expect(sorter[1].html()).not.toContain('--asc')
  expect(sorter[1].html()).not.toContain('--desc')
  const route = router.currentRoute.value
  expect(result.sort).toEqual({ age: 'ascend' })
  expect(route.query['age.sort']).equal('ascend')
  expect(route.query['filterSex.sort']).equal('descend')
})

test('initUrl with invalid sort value', async () => {
  const { wrapper, router, result } = await createSorterTest(
    renderProps,
    undefined,
    '/?age.sort=error'
  )
  await flushPromises()
  const sorter = wrapper.find('.n-data-table-sorter')
  expect(sorter.html()).not.toContain('--asc')
  expect(sorter.html()).not.toContain('--desc')
  const route = router.currentRoute.value
  expect(result.sort['age']).toEqual(false)
  expect(route.query['age.sort']).equal(undefined)
})
