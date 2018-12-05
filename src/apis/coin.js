import axios from 'axios'
import config from '../config'
import dayjs from 'dayjs'
import { createMockExchangeRate } from '../mock'

// config axios
const coinApi = config.coinApi

const instance = axios.create({
  baseURL: coinApi.baseURL,
  headers: {
    'X-CoinAPI-Key': coinApi.apiKey
  }
})

export async function getExchangeRate (duration, base = 'ETH', quote = 'USD') {
  // use mock data in development
  if (process.env.REACT_APP_ENV !== 'production') {
    return createMockExchangeRate(duration, base, quote)
  }
  try {
    const url = `v1/exchangerate/${base}/${quote}`
    const promises = []
    const request = async (time) => {
      try {
        const res = await instance.get(url,
          { params: { time } })
        return res.data
      } catch (e) {
        throw e
      }
    }


    for (let i = duration - 1; i >= 0; i--) {
      promises.push(
        request(dayjs().subtract(i, 'day').toDate())
      )
    }

    // await here so that try catch can work
    const result = await Promise.all(promises)
    return result
  } catch (e) {
    // use mock data if the api fail
    return createMockExchangeRate(duration, base, quote)
  }
}
