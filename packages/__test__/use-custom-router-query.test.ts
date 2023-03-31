import dayjs from 'dayjs'
import { expect, describe, it } from 'vitest'
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
  it('test number preset transformToQuery', () => {
    expect(numberPreset.transformToQuery(123)).toBe('123')
    expect(numberPreset.transformToQuery(-1)).toBe('-1')
    expect(numberPreset.transformToQuery(0)).toBe('0')
  })
  it('test number preset transformFromQuery', () => {
    expect(numberPreset.transformFromQuery('123')).toBe(123)
    expect(numberPreset.transformFromQuery('hello')).toBe(NaN)
    expect(numberPreset.transformFromQuery('')).toBe(undefined)
    expect(numberPreset.transformFromQuery(undefined)).toBe(undefined)
  })

  it('test date preset transformToQuery', () => {
    expect(datePreset.transformToQuery(Date.now())).toBe(
      dayjs(Date.now()).format('YYYY-MM-DD')
    )
    expect(datePreset.transformToQuery(-1)).toBe(dayjs(-1).format('YYYY-MM-DD'))
    expect(datePreset.transformToQuery(undefined)).toBe(undefined)
  })
  it('test date preset transformFromQuery', () => {
    expect(datePreset.transformFromQuery('2023-03-20')).toBe(
      dayjs('2023-03-20', 'YYYY-MM-DD').valueOf()
    )
    expect(() => {
      datePreset.transformFromQuery('dsacw22r1')
    }).toThrowError('dsacw22r1' + ',路由日期不合法')
    expect(datePreset.transformFromQuery('')).toBe(undefined)
    expect(datePreset.transformFromQuery(undefined)).toBe(undefined)
  })

  it('test dateRange preset transformToQuery', () => {
    expect(dateRangePreset.transformToQuery([1234567, 1298765])).toBe(
      JSON.stringify([
        dayjs(1234567).format('YYYY-MM-DD'),
        dayjs(1298765).format('YYYY-MM-DD')
      ])
    )
    expect(dateRangePreset.transformToQuery(undefined)).toBe(undefined)
  })
  it('test dateRange preset transformFromQuery', () => {
    expect(
      dateRangePreset.transformFromQuery('["2023-03-19","2023-03-20"]')
    ).toStrictEqual([
      dayjs('2023-03-19', 'YYYY-MM-DD').valueOf(),
      dayjs('2023-03-20', 'YYYY-MM-DD').valueOf()
    ])
    expect(dateRangePreset.transformFromQuery('')).toBe(undefined)
    expect(dateRangePreset.transformFromQuery(undefined)).toBe(undefined)
    expect(() => {
      dateRangePreset.transformFromQuery('[213213-sa23]')
    }).toThrowError('[213213-sa23]' + '路由时间解析失败')
  })

  it('test boolean preset transformToQuery', () => {
    expect(booleanPreset.transformToQuery(false)).toBe('false')
    expect(booleanPreset.transformToQuery(true)).toBe('true')
    expect(booleanPreset.transformToQuery(undefined)).toBe('false')
  })
  it('test boolean preset transformFromQuery', () => {
    expect(booleanPreset.transformFromQuery('true')).toBe(true)
    expect(booleanPreset.transformFromQuery('false')).toBe(false)
    expect(booleanPreset.transformFromQuery('')).toBe(false)
    expect(booleanPreset.transformFromQuery(undefined)).toBe(false)
  })

  it('test string array preset transformToQuery', () => {
    expect(stringArrayPreset.transformToQuery(['1', '2', '3'])).toBe(
      JSON.stringify(['1', '2', '3'])
    )
    expect(stringArrayPreset.transformToQuery([])).toBe(JSON.stringify([]))
    expect(stringArrayPreset.transformToQuery(undefined)).toBe(undefined)
  })
  it('test string array preset transformFromQuery', () => {
    expect(
      stringArrayPreset.transformFromQuery(JSON.stringify(['a', 'h']))
    ).toStrictEqual(['a', 'h'])

    expect(() => {
      stringArrayPreset.transformFromQuery('213213ds')
    }).toThrowError('213213ds' + '非数组')
    expect(stringArrayPreset.transformFromQuery('')).toBe(undefined)
    expect(stringArrayPreset.transformFromQuery(undefined)).toBe(undefined)
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
