import dayjs from 'dayjs'

export const numberPreset = {
  render(value: number | undefined | null) {
    return value?.toString()
  },
  getFromQuery(routerQuery: string | undefined) {
    if (routerQuery?.length) {
      return parseInt(routerQuery)
    }
    return undefined
  }
}

export const datePreset = {
  render(value: number | undefined) {
    if (value) {
      const temp = dayjs(value).format('YYYY-MM-DD')
      return temp
    }
  },
  getFromQuery(routerQuery: string | undefined) {
    if (
      routerQuery?.length &&
      dayjs(routerQuery, 'YYYY-MM-DD', true).isValid()
    ) {
      return dayjs(routerQuery, 'YYYY-MM-DD').valueOf()
    }
    console.error(routerQuery, '路由日期不合法，返回undefined')
    return undefined
  }
}

export const dateRangePreset = {
  render(value: [number, number] | undefined) {
    if (value) {
      const tempDate = value?.map((item: number) =>
        dayjs(item).format('YYYY-MM-DD')
      )
      return JSON.stringify(tempDate)
    }
  },
  getFromQuery(routerQuery: string | undefined) {
    let res = undefined
    try {
      res = routerQuery?.length
        ? JSON.parse(routerQuery)?.map((item: string) => {
            if (dayjs(item, 'YYYY-MM-DD', true).isValid()) {
              return dayjs(item, 'YYYY-MM-DD').valueOf()
            }
            return undefined
          })
        : undefined
    } catch {
      console.error('路由日期不合法，返回undefined')
      return undefined
    }
    if (!Number.isInteger(res?.[0]) || !Number.isInteger(res?.[1])) {
      console.error(routerQuery + '路由时间解析失败，返回undefined')
      return undefined
    }
    return res
  }
}

export const booleanPreset = {
  render(value: boolean | undefined) {
    return value ? 'true' : 'false'
  },
  getFromQuery(routerQuery: string | undefined) {
    if (routerQuery?.length) {
      return routerQuery !== 'false' //路由解析当false或者undefined的时候为false，其他都为true
    }
    return false
  }
}

export const stringArrayPreset = {
  render(value: string[] | undefined) {
    if (value) {
      return JSON.stringify(value)
    }
  },
  getFromQuery(routerQuery: string | undefined) {
    if (routerQuery?.length) {
      const parse = JSON.parse(routerQuery)
      if (!(parse instanceof Array)) {
        throw new Error('非数组')
      }
      return parse as string[]
    }
  }
}
