import dayjs from 'dayjs'

export const numberPreset = {
  transformToQuery(value: number | undefined | null) {
    return value?.toString()
  },
  transformFromQuery(routerQuery: string | undefined) {
    if (routerQuery?.length) {
      return parseInt(routerQuery)
    }
    return undefined
  }
}

export const datePreset = {
  transformToQuery(value: number | undefined) {
    if (value) {
      const temp = dayjs(value).format('YYYY-MM-DD')
      return temp
    }
  },
  transformFromQuery(routerQuery: string | undefined) {
    if (
      routerQuery?.length &&
      dayjs(routerQuery, 'YYYY-MM-DD', true).isValid()
    ) {
      return dayjs(routerQuery, 'YYYY-MM-DD').valueOf()
    }
    if (routerQuery?.length) {
      throw new Error(routerQuery + ',路由日期不合法')
    }
    return undefined
  }
}

export const dateRangePreset = {
  transformToQuery(value: [number, number] | undefined) {
    if (value) {
      const tempDate = value?.map((item: number) =>
        dayjs(item).format('YYYY-MM-DD')
      )
      return JSON.stringify(tempDate)
    }
  },
  transformFromQuery(routerQuery: string | undefined) {
    try {
      const res = routerQuery?.length
        ? JSON.parse(routerQuery)?.map((item: string) => {
            if (dayjs(item, 'YYYY-MM-DD', true).isValid()) {
              return dayjs(item, 'YYYY-MM-DD').valueOf()
            }
            return undefined
          })
        : undefined
      if (
        routerQuery?.length &&
        (res?.length < 2 ||
          !Number.isInteger(res?.[0]) ||
          !Number.isInteger(res?.[1]))
      ) {
        throw new Error(routerQuery + '路由时间解析失败')
      }
      return res
    } catch {
      throw new Error(routerQuery + '路由时间解析失败')
    }
  }
}

export const booleanPreset = {
  transformToQuery(value: boolean | undefined) {
    return value ? 'true' : 'false'
  },
  transformFromQuery(routerQuery: string | undefined) {
    if (routerQuery?.length) {
      return routerQuery !== 'false' //路由解析当false或者undefined的时候为false，其他都为true
    }
    return false
  }
}

export const stringArrayPreset = {
  transformToQuery(value: string[] | undefined) {
    if (value) {
      return JSON.stringify(value)
    }
  },
  transformFromQuery(routerQuery: string | undefined) {
    if (routerQuery?.length) {
      try {
        const parse = JSON.parse(routerQuery)
        if (!(parse instanceof Array)) {
          throw new Error(routerQuery + '非数组')
        }
        return parse as string[]
      } catch {
        throw new Error(routerQuery + '非数组')
      }
    }
  }
}
