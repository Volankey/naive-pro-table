import { mount, flushPromises } from '@vue/test-utils'
import { expect, vi, describe, it } from 'vitest'
import { nextTick } from 'vue'
import {
  Config,
  ConfigurableInitColumn,
  ProColumn,
  useConfigurableColumns
} from '../src'

vi.mock('lodash-es/debounce', () => ({
  default: vi.fn((fn) => fn),
  __esModule: true
}))
describe('test hook use-configurable-columns', async () => {
  const proTableColumns: ProColumn[] = [
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
  const configurableCols: ConfigurableInitColumn[] = [
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
  const config: Config = {
    storage: {
      mode: 'localStorage',
      storageKey: 'testTable'
    }
  }
  let configurableColumnsRef, proTableColumnsRef, clearCache

  mount({
    setup() {
      const hookReturn = useConfigurableColumns(configurableCols, config)
      configurableColumnsRef = hookReturn.configurableColumnsRef
      proTableColumnsRef = hookReturn.proTableColumnsRef
      clearCache = hookReturn.clearCache
      return { configurableColumnsRef, proTableColumnsRef, clearCache }
    }
  })
  await flushPromises()
  it('test init return', async () => {
    expect(proTableColumnsRef.value).toStrictEqual(proTableColumns)
    expect(configurableColumnsRef.value).toStrictEqual(
      configurableCols.map((col) => {
        return {
          key: col.key,
          title: col.title,
          visible: col.configurable?.visible ?? false
        }
      })
    )
  })

  it('test set configurableCols first col visible false', async () => {
    configurableColumnsRef.value[0].visible = false
    await nextTick()
    expect(proTableColumnsRef.value).toStrictEqual(proTableColumns.slice(1))
  })

  it('test cache is available', async () => {
    configurableColumnsRef.value[0].visible = false
    configurableColumnsRef.value[1].visible = false
    await nextTick()
    let cache = window[config.storage.mode].getItem(config.storage.storageKey)
    expect(cache).toStrictEqual(JSON.stringify(configurableColumnsRef.value))

    configurableColumnsRef.value[0].visible = true
    configurableColumnsRef.value[1].visible = false
    await nextTick()
    cache = window[config.storage.mode].getItem(config.storage.storageKey)
    expect(cache).toStrictEqual(JSON.stringify(configurableColumnsRef.value))
  })

  it('test clear cache is available', async () => {
    clearCache()
    await nextTick()
    const cache = window[config.storage.mode].getItem(config.storage.storageKey)
    expect(cache).toStrictEqual(JSON.stringify(configurableColumnsRef.value))
  })

  it('test reverse configurableCols, proTableCols reversed too', async () => {
    configurableColumnsRef.value.reverse()
    await nextTick()
    expect(proTableColumnsRef.value).toStrictEqual(
      [...proTableColumns].reverse()
    )
  })

  it('test new cols override cache cols', async () => {
    clearCache()
    await nextTick()
    const cache = window[config.storage.mode].getItem(config.storage.storageKey)
    expect(cache).toStrictEqual(JSON.stringify(configurableColumnsRef.value))
    const newConfigurableCols: ConfigurableInitColumn[] = [
      { dataIndex: 'age', title: 'age' },
      ...configurableCols,
      {
        dataIndex: 'habit',
        title: 'habit'
      }
    ]
    mount({
      setup() {
        const hookReturn = useConfigurableColumns(newConfigurableCols, config)
        configurableColumnsRef = hookReturn.configurableColumnsRef
        proTableColumnsRef = hookReturn.proTableColumnsRef
        clearCache = hookReturn.clearCache
        return { configurableColumnsRef, proTableColumnsRef, clearCache }
      }
    })

    await nextTick()
    // 新增了2个col，老的col会根据cache进行排序和设置visible，新col会新增在后面
    expect(proTableColumnsRef.value).toStrictEqual([
      ...proTableColumns,
      { dataIndex: 'age', title: 'age', key: 'age' },
      {
        dataIndex: 'habit',
        title: 'habit',
        key: 'habit'
      }
    ])

    clearCache() // 此时会重置我们的cache为初始配置，顺序为age, name, birthday, habit,全显示
    await nextTick()
    mount({
      setup() {
        const hookReturn = useConfigurableColumns(
          newConfigurableCols.slice(2), //新的配置只剩下了birthday, habit
          config
        )
        configurableColumnsRef = hookReturn.configurableColumnsRef
        proTableColumnsRef = hookReturn.proTableColumnsRef
        clearCache = hookReturn.clearCache
        return { configurableColumnsRef, proTableColumnsRef, clearCache }
      }
    })

    await nextTick()
    // 如果col相比于cache少了的话，此时我们的返回的可配置列会根据cache对现存的col进行排序和设置visible
    expect(proTableColumnsRef.value).toStrictEqual([
      { dataIndex: 'birthday', title: 'birthday', key: 'birthday' },
      {
        dataIndex: 'habit',
        title: 'habit',
        key: 'habit'
      }
    ])
  })
})
