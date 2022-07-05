import { expect, test } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { createTest } from './utils'

const renderProps = {
  syncRoute: true
}
const createSorterTest = createTest

async function sorterRouteAndRequestTest(sortType: string | boolean) {
  const { wrapper, router, result } = await createSorterTest(renderProps)
  const sorter = wrapper.find('.n-data-table-sorter')
  // sort trigger
  sorter.trigger('click')
  await flushPromises()
  const route = router.currentRoute.value
  // check apiRequest
  expect(result.sort['age']).equal(sortType)
  // check url & icon
  sortType
    ? expect(route.query['age.sort']).equal(sortType)
    : expect(route.query['age.sort']).equal(undefined)
}

test('change sorter to descend', async () => {
  await sorterRouteAndRequestTest('descend')
})

test('change sorter to ascend', async () => {
  await sorterRouteAndRequestTest('ascend')
})

test('change sorter to false', async () => {
  await sorterRouteAndRequestTest(false)
})
