
const Mock = require('mockjs')

module.exports = () => {
  const template = {
    'array|5-10': [
      {
        id: '@increment',
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

  return { contracts: Mock.mock(template).array }
}
