import { flushPromises } from '@vue/test-utils'
import { NDataTable } from 'naive-ui'
import { expect, test, vi } from 'vitest'
import { createMultipleTable } from './common'

vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))
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

  const tables = wrapper.findAllComponents(NDataTable)
  const table1 = tables[0]
  const table2 = tables[1]

  let sorters = table1.findAllComponents('.n-data-table-sorter')
  let sorter = sorters[0]
  await sorter.trigger('click')
  sorters = table2.findAllComponents('.n-data-table-sorter')
  sorter = sorters[0]
  await sorter.trigger('click')
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query).toEqual({
    'table.age.sort': 'ascend',
    'tableCopy.age.sort': 'descend'
  })
  expect(sorter.html()).toContain('n-data-table-sorter--desc')
})

test('test status after refresh', async () => {
  const { wrapper, router } = await createMultipleTable(
    '/?table.age.sort=descend&tableCopy.age.sort=ascend'
  )
  await flushPromises()

  const sorters = wrapper.findAllComponents('.n-data-table-sorter')
  const sorter = sorters[0]
  const sorterCopy = sorters[2]

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
  const sorterCopy = sorters[2]
  await sorterCopy.trigger('click')
  await flushPromises()

  const route = router.currentRoute.value
  expect(route.query).toEqual({
    'table.age.sort': 'descend'
  })
  expect(sorter.html()).toContain('n-data-table-sorter--desc')
  expect(sorterCopy.html()).not.toContain('n-data-table-sorter--asc')
})
