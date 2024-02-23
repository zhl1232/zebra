import { useState, useEffect } from 'react'
/**
 * @title 本地存储 Hook
 * @template T - 存储值的类型
 * @param key - 存储的键名
 * @param defaultValue - 默认值
 */
const useLocalStorage = <T>(key: string, defaultValue: T): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    let currentValue

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || JSON.stringify(defaultValue)
      )
    } catch (error) {
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export default useLocalStorage
