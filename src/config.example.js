// usually need at least need two environments, one for developing and testing, another for product

const config = {
  development: {
    coinApi: {
      apiKey: 'YOUR_API_KEY_HERE',
      baseURL: 'https://rest.coinapi.io/'
    }
  },
  production: {
    coinApi: {
      apiKey: 'YOUR_API_KEY_HERE',
      baseURL: 'https://rest.coinapi.io/'
    }
  }
}

export default config[process.env.REACT_APP_ENV || 'development']
