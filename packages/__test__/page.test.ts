import { expect, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { createTest } from './utils'
import { NPagination } from 'naive-ui'

// use mock lodash-es/debounce to make vitest and lodash/setTimeout in the same loop
vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))

const renderProps = {
  pagination: {
    defaultPageSize: 15,
    defaultPage: 1,
    itemCount: 0,
    showSizePicker: true,
    pageSizes: [15, 20, 50]
  }
}
const createPageTest = createTest

test('change page = 2 then the pageSize = 20', async () => {
  const { wrapper, result, router } = await createPageTest(renderProps)
  const pagination = wrapper.getComponent(NPagination)
  if (!Array.isArray(pagination.vm?.['onUpdate:page'])) {
    pagination.vm?.['onUpdate:page'](2)
  }
  await flushPromises() // 等待promise handler all done https://test-utils.vuejs.org/api/#flushpromises
  let route = router.currentRoute.value
  // 需要检验 路由是否正确
  expect(route.query['page.page']).equal('2')
  // apiRequest是否被调用 且参数是否正确
  expect(result.page).equal(2)

  // change page to 20
  if (!Array.isArray(pagination.vm?.['onUpdate:pageSize'])) {
    pagination.vm?.['onUpdate:pageSize'](20)
  }
  await flushPromises() // 等待promise handler all done https://test-utils.vuejs.org/api/#flushpromises
  route = router.currentRoute.value
  expect(result.pageSize).equal(20)
  expect(route.query['pageSize.pageSize']).equal('20')
  expect(route.query['page.page']).equal('1')
})
