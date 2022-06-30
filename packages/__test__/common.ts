import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { ProColumn } from '../src'

export const createCommonColsRef = () =>
  ref<ProColumn<{ name: string }>[]>([
    {
      title: 'name',
      dataIndex: 'name'
    }
  ])
export type ColumnData = {
  name: string
  age: number
  sex: 'man' | 'woman'
  favorates: string[]
  otherInfo: {
    parents: string[]
  }
}
export const createSourceData = (
  params: unknown,
  sort: any,
  filter: any,
  page: number,
  pageSize: number
): { pageSize: number; itemCount: number; data: ColumnData[] } => {
  const data: ColumnData[] = new Array(pageSize).fill(1).map((_, idx) => ({
    name: 'Jonny' + ((page - 1) * pageSize + idx),
    age: 10 + idx,
    sex: 'man',
    favorates: ['pinao', 'gita'],
    otherInfo: {
      parents: ['Jan', 'Pony']
    }
  }))
  return {
    pageSize: 14,
    itemCount: 50,
    data
  }
}

export function createMyRouter(render) {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: {
          name: 'test',
          setup() {
            return render
          }
        }
      }
    ]
  })
}
