import dayjs from 'dayjs'

/**
 * date formatter
 * default format is yyyy-mm-dd
 */
export function dateFormatter (date, format='YYYY-MM-DD') {
  return dayjs(date).format(format)
}

/**
 * rate formatter
 * keep two decimals by default
 */
export function rateFormatter (value, digits = 2) {
  return +value.toFixed(digits)
}
