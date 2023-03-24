import { expect, vi, test } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { createTest } from './utils'
import { NPagination } from 'naive-ui'
import { useConfigurableColumns } from '../src'
import { createCommonColsRef } from './common'

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
test('default pageSize = 15', async () => {
  const { result } = await createPageTest(renderProps)
  await flushPromises()
  expect(result.pageSize).equal(15)
})
test('init url page = 2', async () => {
  const { result } = await createPageTest(
    renderProps,
    undefined,
    '/?page.page=2'
  )
  await flushPromises()
  expect(result.pageSize).equal(15)
  expect(result.page).equal(2)
})
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

test('syncRoutePage name set to p', async () => {
  const { wrapper, router, result } = await createPageTest({
    ...renderProps,
    syncRoutePage: {
      name: 'p'
    }
  })
  await router.push('/')
  await flushPromises()
  const pagination = wrapper.getComponent(NPagination)
  if (!Array.isArray(pagination.vm?.['onUpdate:page'])) {
    pagination.vm?.['onUpdate:page'](2)
  }
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['p.page']).equal('2')
  expect(result.page).toEqual(2)
})

test('syncRoutePage name set to false', async () => {
  const { wrapper, router, result } = await createPageTest({
    ...renderProps,
    syncRoutePage: false
  })
  await router.push('/')
  await flushPromises()

  const pagination = wrapper.getComponent(NPagination)
  if (!Array.isArray(pagination.vm?.['onUpdate:page'])) {
    pagination.vm?.['onUpdate:page'](2)
  }
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query).toEqual({})
  expect(result.page).toEqual(2)
})

test('syncRoutePage name set to s', async () => {
  const { wrapper, router, result } = await createPageTest({
    ...renderProps,
    syncRoutePageSize: {
      name: 's'
    }
  })
  await router.push('/')
  await flushPromises()
  const pagination = wrapper.getComponent(NPagination)
  if (!Array.isArray(pagination.vm?.['onUpdate:pageSize'])) {
    pagination.vm?.['onUpdate:pageSize'](2)
  }
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['s.pageSize']).equal('2')
  expect(result.pageSize).toEqual(2)
})

test('syncRoutePageSize name set to false', async () => {
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
  expect(route.query).toEqual({
    'page.page': '1'
  })
  expect(result.pageSize).toEqual(2)
})

test('test page with dynamic columns', async () => {
  const { wrapper, router, result } = await createPageTest({
    ...renderProps,
    syncRoutePageSize: false
  })

  await router.push('/')
  const { proTableColumnsRef } = useConfigurableColumns(
    createCommonColsRef().value
  )
  wrapper.setProps({
    ...renderProps,
    syncRoutePageSize: false,
    columns: proTableColumnsRef
  })
  const pagination = wrapper.getComponent(NPagination)
  if (!Array.isArray(pagination.vm?.['onUpdate:pageSize'])) {
    pagination.vm?.['onUpdate:pageSize'](2)
  }
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query).toEqual({
    'page.page': '1'
  })
  expect(result.pageSize).toEqual(2)
})
