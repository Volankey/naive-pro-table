import { flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createMultipleTable } from './common'

test('test status in one of tables', async () => {
  const { wrapper, router } = await createMultipleTable()

  const sorters = wrapper.findAllComponents('.n-data-table-sorter')
  const sorter = sorters[0]
  await sorter.trigger('click')
  await flushPromises()

  const route = router.currentRoute.value
  expect(route.query['table.age.sort']).equal('descend')
  expect(sorter.html()).toContain('n-data-table-sorter--desc')
})

test('test status in another table', async () => {
  const { wrapper, router } = await createMultipleTable()

  const sorters = wrapper.findAllComponents('.n-data-table-sorter')
  const sorter = sorters[1]
  await sorter.trigger('click')
  await sorter.trigger('click')
  await flushPromises()

  const route = router.currentRoute.value
  expect(route.query).toEqual({
    'table.age.sort': 'descend',
    'tableCopy.age.sort': 'ascend'
  })
  expect(sorter.html()).toContain('n-data-table-sorter--asc')
})

test('test status after refresh', async () => {
  location.reload()
  const { wrapper, router } = await createMultipleTable()
  await flushPromises()

  const sorters = wrapper.findAllComponents('.n-data-table-sorter')
  const sorter = sorters[0]
  const sorterCopy = sorters[1]

  const route = router.currentRoute.value
  expect(route.query).toEqual({
    'table.age.sort': 'descend',
    'tableCopy.age.sort': 'ascend'
  })
  expect(sorter.html()).toContain('n-data-table-sorter--desc')
  expect(sorterCopy.html()).toContain('n-data-table-sorter--asc')
})

test('change one status to false', async () => {
  const { wrapper, router } = await createMultipleTable()
  const sorters = wrapper.findAllComponents('.n-data-table-sorter')
  const sorter = sorters[0]
  const sorterCopy = sorters[1]
  await sorterCopy.trigger('click')
  await flushPromises()

  const route = router.currentRoute.value
  expect(route.query).toEqual({
    'table.age.sort': 'descend'
  })
  expect(sorter.html()).toContain('n-data-table-sorter--desc')
  expect(sorterCopy.html()).not.toContain('n-data-table-sorter--asc')
})
