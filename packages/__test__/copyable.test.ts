import { expect, test, vi } from 'vitest'
import { createTest } from './utils'

vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))

test('test copy icon change', async () => {
  const { wrapper } = await createTest()
  let copyIcon = wrapper.getComponent('.n-icon')
  let svg = copyIcon.find('svg')

  expect(svg.find('rect').exists()).toBe(true)
  await copyIcon.trigger('click')

  copyIcon = wrapper.getComponent('.n-icon')
  svg = copyIcon.find('svg')
  expect(svg.find('rect').exists()).toBe(false)

  setTimeout(() => {
    copyIcon = wrapper.getComponent('.n-icon')
    svg = copyIcon.find('svg')
    expect(svg.find('rect').exists()).toBe(true)
  }, 5000)
})
