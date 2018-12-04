import dateFormat from 'dateformat'

export function dateFormatter (date, format='yyyy-mm-dd') {
  return dateFormat(date, format)
}
