import dayjs from 'dayjs'
import { expect, vi, describe, it, beforeEach, afterEach } from 'vitest'
import {
  booleanPreset,
  datePreset,
  dateRangePreset,
  numberPreset,
  stringArrayPreset
} from '../src/hooks/use-custom-router-query/preset'
import { useCustomRouterQuery } from '../src'
import { createTest } from './utils'
import { flushPromises } from '@vue/test-utils'

describe('test hook use-custom-router-query', async () => {
  it('test number preset render', () => {
    expect(numberPreset.render(123)).toBe('123')
    expect(numberPreset.render(-1)).toBe('-1')
    expect(numberPreset.render(0)).toBe('0')
  })
  it('test number preset getFromRouter', () => {
    expect(numberPreset.getFromQuery('123')).toBe(123)
    expect(numberPreset.getFromQuery('hello')).toBe(NaN)
    expect(numberPreset.getFromQuery('')).toBe(undefined)
    expect(numberPreset.getFromQuery(undefined)).toBe(undefined)
  })

  it('test date preset render', () => {
    expect(datePreset.render(Date.now())).toBe(
      dayjs(Date.now()).format('YYYY-MM-DD')
    )
    expect(datePreset.render(-1)).toBe(dayjs(-1).format('YYYY-MM-DD'))
    expect(datePreset.render(undefined)).toBe(undefined)
  })
  it('test date preset getFromRouter', () => {
    expect(datePreset.getFromQuery('2023-03-20')).toBe(
      dayjs('2023-03-20', 'YYYY-MM-DD').valueOf()
    )
    expect(datePreset.getFromQuery('')).toBe(undefined)
    expect(datePreset.getFromQuery(undefined)).toBe(undefined)
  })

  it('test dateRange preset render', () => {
    expect(dateRangePreset.render([1234567, 1298765])).toBe(
      JSON.stringify([
        dayjs(1234567).format('YYYY-MM-DD'),
        dayjs(1298765).format('YYYY-MM-DD')
      ])
    )
    expect(dateRangePreset.render(undefined)).toBe(undefined)
  })
  it('test dateRange preset getFromRouter', () => {
    expect(
      dateRangePreset.getFromQuery('["2023-03-19","2023-03-20"]')
    ).toStrictEqual([
      dayjs('2023-03-19', 'YYYY-MM-DD').valueOf(),
      dayjs('2023-03-20', 'YYYY-MM-DD').valueOf()
    ])
    expect(dateRangePreset.getFromQuery('')).toBe(undefined)
    expect(dateRangePreset.getFromQuery(undefined)).toBe(undefined)
  })

  it('test boolean preset render', () => {
    expect(booleanPreset.render(false)).toBe('false')
    expect(booleanPreset.render(true)).toBe('true')
    expect(booleanPreset.render(undefined)).toBe('false')
  })
  it('test boolean preset getFromRouter', () => {
    expect(booleanPreset.getFromQuery('true')).toBe(true)
    expect(booleanPreset.getFromQuery('false')).toBe(false)
    expect(booleanPreset.getFromQuery('')).toBe(false)
    expect(booleanPreset.getFromQuery(undefined)).toBe(false)
  })

  it('test string array preset render', () => {
    expect(stringArrayPreset.render(['1', '2', '3'])).toBe(
      JSON.stringify(['1', '2', '3'])
    )
    expect(stringArrayPreset.render([])).toBe(JSON.stringify([]))
    expect(stringArrayPreset.render(undefined)).toBe(undefined)
  })
  it('test string array preset getFromRouter', () => {
    expect(
      stringArrayPreset.getFromQuery(JSON.stringify(['a', 'h']))
    ).toStrictEqual(['a', 'h'])
    expect(stringArrayPreset.getFromQuery('')).toBe(undefined)
    expect(stringArrayPreset.getFromQuery(undefined)).toBe(undefined)
  })
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  const { router } = await createTest(undefined, undefined, '')
  it('test useCustomRouterQuery preset mode', async () => {
    router.push({
      query: {
        isTrue: 'false',
        multipleString: '["a","h"]',
        dateRange: '["2023-03-15","2023-04-11"]',
        numValue: '2',
        date: '2023-03-15'
      }
    })
    await flushPromises()
    const reactiveData = useCustomRouterQuery<{
      numValue?: number
      dateRange?: number[]
      date?: number
      isTrue?: boolean
      multipleString?: string[]
    }>(
      {
        numValue: {
          preset: 'number'
        },
        dateRange: {
          preset: 'dateRange'
        },
        date: {
          preset: 'date'
        },
        isTrue: {
          preset: 'boolean'
        },
        multipleString: {
          preset: 'stringArray'
        }
      },
      {
        route: router.currentRoute.value,
        router: router
      }
    )
    expect(reactiveData).toEqual({
      numValue: 2,
      dateRange: [
        dayjs('2023-03-15', 'YYYY-MM-DD').valueOf(),
        dayjs('2023-04-11', 'YYYY-MM-DD').valueOf()
      ],
      date: dayjs('2023-03-15', 'YYYY-MM-DD').valueOf(),
      isTrue: false,
      multipleString: ['a', 'h']
    })
  })

  it('test useCustomRouterQuery defaultValue', async () => {
    router.push('')
    await flushPromises()

    const reactiveData = useCustomRouterQuery<{
      numValue?: number
      dateRange?: [number, number]
      date?: number
      isTrue?: boolean
      multipleString?: string[]
    }>(
      {
        numValue: {
          defaultValue: 345,
          preset: 'number'
        },
        dateRange: {
          defaultValue: [123456, 654321],
          preset: 'dateRange'
        },
        date: {
          defaultValue: 123456,
          preset: 'date'
        },
        isTrue: {
          defaultValue: false,
          preset: 'boolean'
        },
        multipleString: {
          defaultValue: ['hello', 'world'],
          preset: 'stringArray'
        }
      },
      {
        route: router.currentRoute.value,
        router: router
      }
    )
    expect(reactiveData).toEqual({
      numValue: 345,
      dateRange: [123456, 654321],
      date: 123456,
      isTrue: false,
      multipleString: ['hello', 'world']
    })
  })

  it('test changing reactiveData to change router', async () => {
    router.push('')
    await flushPromises()

    const reactiveData = useCustomRouterQuery<{
      numValue?: number
    }>(
      {
        numValue: {
          preset: 'number'
        }
      },
      {
        route: router.currentRoute.value,
        router: router
      }
    )
    reactiveData.numValue = 123
    await flushPromises()
    expect(router.currentRoute.value.query.numValue).toBe('123')
  })
})
