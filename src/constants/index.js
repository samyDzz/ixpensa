let BASE_URL = ''

switch (process.env.NODE_ENV) {
  case 'production':
    BASE_URL = 'https://staging.ixpensa.com'
    break
  case 'development':
    BASE_URL = 'http://localhost:8080'
    break
  default:
    BASE_URL = 'http://localhost:8080'
}

const BASE_URL_API = BASE_URL + '/api'

export { BASE_URL_API }
