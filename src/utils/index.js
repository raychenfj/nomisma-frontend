import { storage } from '../constants'
import { createMockData } from '../mock'

export function getInitialData () {
  let data = []

  data = JSON.parse(localStorage.getItem(storage.DATA))
  if (data && data.length) return data

  data = createMockData()

  localStorage.setItem(storage.DATA, JSON.stringify(data))

  return data
}
