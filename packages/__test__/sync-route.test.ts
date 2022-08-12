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
  syncRoute: false,
  pagination: {
    defaultPageSize: 15,
    defaultPage: 1,
    itemCount: 0,
    showSizePicker: true,
    pageSizes: [15, 20, 50]
  }
}
const createPageTest = createTest

test('syncRoute = false', async () => {
  const { wrapper, router, result } = await createPageTest({
    ...renderProps,
    syncRoutePageSize: false
  })
  await router.push('/')
  await flushPromises()

  const pagination = wrapper.getComponent(NPagination)
  if (!Array.isArray(pagination.vm?.['onUpdate:pageSize'])) {
    pagination.vm?.['onUpdate:pageSize'](2)
  }
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query).toEqual({})
  expect(result.pageSize).toEqual(2)
})
