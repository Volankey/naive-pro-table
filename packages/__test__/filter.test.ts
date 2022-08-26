import { expect, test, vi } from 'vitest'
import { flushPromises, type VueWrapper } from '@vue/test-utils'
import { createTest } from './utils'
import { NCheckboxGroup, NCheckbox, NButton } from 'naive-ui'
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
const createFilterTest = createTest

function getCheckboxAndButton(wrapper: VueWrapper) {
  const checkboxGroup = wrapper.getComponent(NCheckboxGroup)
  const checkbox = checkboxGroup.findAllComponents(NCheckbox)
  const operateButton = wrapper.findAllComponents(NButton)
  const cancelButton = operateButton[0]
  const confirmButton = operateButton[1]
  return {
    checkbox,
    cancelButton,
    confirmButton
  }
}

test('test set single filter', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.getComponent('.n-data-table-filter')
  expect(filterIcon.html()).not.toContain('n-data-table-filter--active')
  await filterIcon.trigger('click')

  const { checkbox, confirmButton } = getCheckboxAndButton(wrapper)
  await checkbox[0].trigger('click')
  await confirmButton.trigger('click')
  // check 1.url 2.apiRequest 3.icon
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['sex.filter']).toEqual(['all'])
  expect(result.filter['sex']).toEqual(['all'])
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(true)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(true)
})

test('test set multiple filters', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.find('.n-data-table-filter')
  expect(filterIcon.html()).toContain('n-data-table-filter--active')
  await filterIcon.trigger('click')

  const { checkbox, confirmButton } = getCheckboxAndButton(wrapper)
  await checkbox[1].trigger('click')
  await confirmButton.trigger('click')

  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['sex.filter']).toEqual(['all', 'man'])
  expect(result.filter['sex']).toEqual(['all', 'man'])
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(true)
  expect(checkbox[1].find('.n-checkbox--checked').exists()).toBe(true)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(true)
})

test('test filter after refresh', async () => {
  const { wrapper, router, result } = await createFilterTest(
    renderProps,
    undefined,
    '/?sex.filter=all&sex.filter=man'
  )
  await flushPromises()
  const route = router.currentRoute.value

  const filterIcon = wrapper.find('.n-data-table-filter')
  expect(filterIcon.html()).toContain('n-data-table-filter--active')
  await filterIcon.trigger('click')

  const { checkbox } = getCheckboxAndButton(wrapper)
  expect(route.query['sex.filter']).toEqual(['all', 'man'])
  expect(result.filter['sex']).toEqual(['all', 'man'])
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(true)
  expect(checkbox[1].find('.n-checkbox--checked').exists()).toBe(true)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(true)
})

test('clear filter', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.find('.n-data-table-filter')
  expect(filterIcon.html()).toContain('n-data-table-filter--active')
  await filterIcon.trigger('click')
  await flushPromises()
  const { cancelButton } = getCheckboxAndButton(wrapper)
  await cancelButton.trigger('click')

  // check 1.url 2.apiRequest
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query).toEqual({ 'page.page': '1' })
  expect(result.filter).toEqual({ sex: undefined })

  await filterIcon.trigger('click')
  await flushPromises()
  const { checkbox: checkbox1 } = getCheckboxAndButton(wrapper)
  expect(result.filter).toEqual({})
  expect(checkbox1[0].find('.n-checkbox--checked').exists()).toBe(false)
  expect(checkbox1[1].find('.n-checkbox--checked').exists()).toBe(false)
  expect(wrapper.find('.n-data-table-filter--active').exists()).toBe(false)
})

test('test filter without syncRouteFilter', async () => {
  const { wrapper, router, result } = await createFilterTest(renderProps)
  const filterIcon = wrapper.findAll('.n-data-table-filter')[1]
  await filterIcon.trigger('click')
  await flushPromises()
  expect(filterIcon.html()).not.toContain('n-data-table-filter--active')
  const { checkbox, confirmButton } = getCheckboxAndButton(wrapper)
  await checkbox[1].trigger('click')
  await confirmButton.trigger('click')
  expect(filterIcon.html()).toContain('n-data-table-filter--active')
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['filterSex.filter']).toEqual(undefined)
  expect(result.filter.filterSex).toEqual(['man'])
})

// test default filter
const createCommonColsRef = () =>
  ref<ProColumn<{ name: string }>[]>([
    {
      title: 'gender',
      dataIndex: 'gender',
      filter: true,
      filterOptionValues: ['man'],
      syncRouteFilter: {
        name: 'gender',
        rule: {
          type: 'array'
        }
      },
      valueEnum: {
        man: {
          label: '男'
        },
        woman: {
          label: '女'
        }
      }
    },
    {
      title: 'city',
      dataIndex: 'city',
      filter: true,
      filterOptionValues: ['London'],
      valueEnum: {
        London: {
          label: 'London'
        },
        Beijing: {
          label: 'Beijing'
        }
      }
    }
  ])

test('test default filter', async () => {
  const colsRef = createCommonColsRef()
  const { wrapper, router, result } = await createTable(colsRef)
  const filterIcons = wrapper.findAllComponents('.n-data-table-filter')
  const genderFilter = filterIcons[0]
  const cityFilter = filterIcons[1]
  // filtered style
  expect(genderFilter.html()).toContain('n-data-table-filter--active')
  expect(cityFilter.html()).toContain('n-data-table-filter--active')
  // gender filter
  await genderFilter.trigger('click')
  const { checkbox, confirmButton } = getCheckboxAndButton(wrapper)
  expect(checkbox[0].find('.n-checkbox--checked').exists()).toBe(true)
  await confirmButton.trigger('click')
  // city filter
  await cityFilter.trigger('click')
  const checkboxCopy = getCheckboxAndButton(wrapper).checkbox
  expect(checkboxCopy[0].find('.n-checkbox--checked').exists()).toBe(true)
  // url & apiRequest
  await flushPromises()
  const route = router.currentRoute.value
  expect(route.query['gender.filter']).toEqual(['man'])
  expect(route.query['city.filter']).toEqual(undefined)
  expect(result.filter).toEqual({ gender: ['man'], city: ['London'] })
})
