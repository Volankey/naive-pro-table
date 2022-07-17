import { flushPromises } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createMultipleTable } from './common'

test('test different status', async () => {
  const { wrapper } = await createMultipleTable()

  const sorters = wrapper.findAllComponents('.n-data-table-sorter')
  const sorter = sorters[0]
  const sorterCopy = sorters[1]

  // 使表格的同一列处于不同的状态
  await sorter.trigger('click')
  await sorterCopy.trigger('click')
  await sorterCopy.trigger('click')

  await flushPromises()

  expect(sorter.html()).toContain('n-data-table-sorter--desc')
  expect(sorterCopy.html()).toContain('n-data-table-sorter--asc')
})

// TODO: 多表格时路由变化测试
