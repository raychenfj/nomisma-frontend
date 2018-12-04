import Mock from 'mockjs'
import dayjs from 'dayjs'

/**
 * create mock exchange rate data
 */
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
  return data
}
