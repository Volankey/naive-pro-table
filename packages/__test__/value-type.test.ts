import { DateFormatter } from './../src/value-type-render/interface'
import { flushPromises } from '@vue/test-utils'
import { ProColumn } from '../src'
import { expect, test } from 'vitest'
import { ref } from 'vue'
import { avatarSrc, createTable } from './common'

const createCommonColsRef = () =>
  ref<ProColumn<{ name: string }>[]>([
    {
      title: 'name',
      dataIndex: 'name'
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      valueType: 'date'
    }
  ])

test('test value type is img', async () => {
  const colsRef = createCommonColsRef()
  colsRef.value.push({
    title: 'avatar',
    dataIndex: 'avatarSrc',
    valueType: 'img'
  })
  const { wrapper } = await createTable(colsRef)
  await flushPromises()
  const img = wrapper.find(`img[src="${avatarSrc}"]`)
  expect(img).not.toEqual(null)
})

test('test value type date and change value type to datetime', async () => {
  const colsRef = createCommonColsRef()
  const { wrapper } = await createTable(colsRef)
  await flushPromises()
  expect(wrapper.html()).toContain('1997-04-18')

  colsRef.value[1].valueType = 'datetime'
  await flushPromises()
  expect(wrapper.html()).toContain('1997-04-18 00:00:00')
})

test('test value type date formatter is dd/mm/yyyy', async () => {
  const colsRef = createCommonColsRef()
  const { wrapper } = await createTable(colsRef, {
    dateFormatter: 'dd/MM/yyyy'
  })
  await flushPromises()
  expect(wrapper.html()).toContain('18/04/1997')
})

test('test value type date formatter is function', async () => {
  const colsRef = createCommonColsRef()
  const dateFormatter: DateFormatter = (value) => {
    return new Date(value).getFullYear() + ' welcome'
  }
  const { wrapper } = await createTable(colsRef, {
    dateFormatter
  })
  await flushPromises()
  expect(wrapper.html()).toContain('1997 welcome')
})

test('test value type date formatter fn with valueType', async () => {
  const colsRef = createCommonColsRef()
  const dateFormatter: DateFormatter = (value, valueType) => {
    if (valueType === 'date') {
      return new Date(value).getFullYear() + ' welcome'
    } else {
      return 'hack'
    }
  }
  const { wrapper } = await createTable(colsRef, {
    dateFormatter
  })
  await flushPromises()
  expect(wrapper.html()).toContain('1997 welcome')
  colsRef.value.push({
    title: 'latestLogin',
    dataIndex: 'lastedLogin',
    valueType: 'datetime'
  })
  await flushPromises()
  expect(wrapper.html()).toContain('hack')
})
