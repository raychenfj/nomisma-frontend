import axios from 'axios'
import config from '../config'
import dayjs from 'dayjs'
import { createMockExchangeRate } from '../mock'

// config axios
// can use axios.create to create instance and support multiple backends in the future
const coinApi = config.coinApi

axios.defaults.headers.common['X-CoinAPI-Key'] = coinApi.apiKey
axios.defaults.baseURL = coinApi.baseURL

export async function getExchangeRate (duration, base = 'ETH', quote = 'USD') {
  try {
    const url = `v1/exchangerate/${base}/${quote}`
    const promises = []
    const request = async (time) => {
      try {
        const res = await axios.get(url,
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
