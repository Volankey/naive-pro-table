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
})
