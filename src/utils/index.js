import { storage } from '../constants'
import { createMockData } from '../mock'

/**
 * getInitialData
 * 
 * read initial data from local storage or return new mock data
 */
export function getInitialData () {
  let data = []

  data = JSON.parse(localStorage.getItem(storage.DATA))
  if (data && data.length) return data

  data = createMockData()

  localStorage.setItem(storage.DATA, JSON.stringify(data))

  return data
}
