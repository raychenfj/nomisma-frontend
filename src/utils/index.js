import Mock from 'mockjs'
import uuid from 'uuid/v4'
import { storage } from '../constants'

export function getInitialData () {
  let data = []

  data = JSON.parse(localStorage.getItem(storage.DATA))
  if (data && data.length) return data

  data = Mock.mock({
    'array|5-10': [
      {
        id: uuid,
        user: {
          name: '@first',
          surname: '@last'
        },
        "amountInUsd|1-100": 100,
        "currency|1-100": 100,
        date: '@date("yyyy-MM-dd")'
      }
    ]
  }).array

  localStorage.setItem(storage.DATA, JSON.stringify(data))

  return data
}
