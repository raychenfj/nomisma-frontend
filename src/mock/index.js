import uuid from 'uuid/v4'
import Mock from 'mockjs'
import dayjs from 'dayjs'

export function createMockData () {
  const template = {
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
  }

  return Mock.mock(template).array
}

export function createMockExchangeRate(duration, base, quote) {
  const data = []
  for (let i = duration - 1; i >= 0; i--) {
    data.push({
      time: dayjs().subtract(i, 'day').toDate(),
      rate: Mock.mock({'number|1-200.2': 1}).number,
      asset_id_base: base,
      asset_id_quote: quote
    })
  }
  console.log(data)
  return data
}
