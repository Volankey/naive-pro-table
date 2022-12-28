import { expect, vi, describe, it } from 'vitest'
import { nextTick, ref } from 'vue'
import {
  ConfigurableInitColumn,
  ProColumn,
  useConfigurableColumns
} from '../src'

vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))

describe('test hook use-configurable-columns', () => {
  const ProTableColumns: ProColumn[] = [
    {
      key: 'name',
      title: 'name',
      dataIndex: 'name'
    },
    {
      key: 'birthday',
      title: 'birthday',
      dataIndex: 'birthday'
    }
  ]
  const columns: ConfigurableInitColumn[] = [
    {
      key: 'name',
      title: 'name',
      dataIndex: 'name',
      configurable: {
        visible: true
      }
    },
    {
      key: 'birthday',
      title: 'birthday',
      dataIndex: 'birthday',
      configurable: {
        visible: true
      }
    }
  ]
  const columnsRef = ref(columns)
  const { finalColumnsRef, simpleColumnsRef, clearCache } =
    useConfigurableColumns(columnsRef, {
      storage: {
        mode: 'localStorage',
        storageKey: 'testTable'
      }
    })

  it('test columnsRef', () => {
    expect(columnsRef.value).toStrictEqual(columns)
  })

  it('test set SimpleCols birthday visible false', async () => {
    simpleColumnsRef.value[1].visible = false
    await nextTick()
    expect(finalColumnsRef.value).toStrictEqual([ProTableColumns[0]])
  })

  it('test cache is available', async () => {
    columnsRef.value[0].configurable.visible = false
    await nextTick()
    expect(finalColumnsRef.value).toStrictEqual([ProTableColumns[0]])
  })

  it('test clear cache is available', async () => {
    clearCache()
    await nextTick()
    expect(finalColumnsRef.value).toStrictEqual(ProTableColumns)
  })

  it('test reverse simpleCols, finalCols reversed too', async () => {
    simpleColumnsRef.value.reverse()
    await nextTick()
    expect(finalColumnsRef.value).toStrictEqual([...ProTableColumns].reverse())
  })
})
