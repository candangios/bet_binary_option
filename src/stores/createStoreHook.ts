import React from 'react'

const ALL_FIELD = '*****'

interface ISetFunction<T> {
  (value: T | ((value: T) => T)): void
}

interface IHookFunction<T> {
  (subscribe?: boolean): [T, ISetFunction<T>];
  <U>(field?: string, subscribe?: boolean): [U, ISetFunction<U>];
  <U>(field?: string[], subscribe?: boolean): [U, ISetFunction<U>];
}

export default function createStoreHook<T>(initData: T, storeName?: string): IHookFunction<T> {
  var listeners: { [key: string]: Function[] } = {}
  var data: any = initData

  var on = (field: string, func: Function) => {
    listeners[field] = listeners[field] || []
    var index = listeners[field].findIndex(e => e === func)
    if (index >= 0) return index

    listeners[field].push(func)
    return listeners[field].length - 1
  }

  var off = (field: string, func: Function) => {
    listeners[field] = listeners[field] || []
    if (typeof func === 'function') {
      listeners[field] = listeners[field].filter(e => e !== func)
    }
    else if (typeof func === 'number') {
      listeners[field].splice(func, 1)
    }
  }

  var setDataForField = (field: string): ISetFunction<T> => (newData: T | ((value: T) => T)) => {
    var oldData = field === ALL_FIELD ? data : data[field]
    if (typeof newData === 'function') {
      newData = (newData as ((value: T) => T))(oldData)
    }

    const typeofData = typeof oldData
    if (typeofData !== typeof newData) {
      if (field === ALL_FIELD) data = newData
      else data[field] = newData
    }
    else if (typeofData === 'object') {
      if (field === ALL_FIELD) data = { ...data, ...newData }
      else data[field] = { ...data[field], ...newData }
    }
    else if (Array.isArray(oldData)) {
      if (field === ALL_FIELD) data = [...(newData as unknown as T[])]
      else data[field] = [...(newData as unknown as T[])]
    }
    else {
      if (oldData === newData &&
        (typeofData === 'string' || typeofData === 'number' || typeofData === 'boolean')) {
        return
      }

      if (field === ALL_FIELD) data = newData
      else data[field] = newData
    }

    if (field !== ALL_FIELD) {
      data = { ...data }
    }

    if (field === ALL_FIELD) {
      Object.keys(listeners).forEach(k => {
        listeners[k].forEach(f => f(k === ALL_FIELD ? data : data[k]))
      })
    }
    else {
      listeners[field] = listeners[field] || []
      listeners[ALL_FIELD] = listeners[ALL_FIELD] || []
      listeners[field].forEach(f => f(data[field]))
      listeners[ALL_FIELD].forEach(f => f(data))
    }
  }

  var useStore = (field?: any, subscribe?: any): [T, ISetFunction<T>] => {
    if (field === false || field === true) {
      subscribe = field
      field = ALL_FIELD
    }
    else {
      field = field || ALL_FIELD
      subscribe = subscribe === false ? false : true
    }

    const [value, set] = React.useState(field === ALL_FIELD ? data : data[field])
    const setData = React.useMemo(() => setDataForField(field), [field])
    React.useMemo(() => {
      subscribe && on(field, set)
    }, [field, subscribe])

    React.useEffect(() => {
      return () => off(field, set)
    }, [field, subscribe])
    // React.useEffect(() => {
    //   // set(field === ALL_FIELD ? data : data[field])
    // }, [field, subscribe])
    return [value, setData]
  }

  return useStore
}
