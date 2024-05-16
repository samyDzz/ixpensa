import { BASE_URL_API } from '../../constants'

export const login = ({ email, password }) => {
  return fetch(BASE_URL_API + '/signin', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }), // The data
    headers: {
      'Content-type': 'application/json' // The type of data you're sending
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => console.warn(error))
}
// sign up endpoint
export const signup = ({ fullname, email, password }) => {
  return fetch(BASE_URL_API + '/signup', {
    method: 'POST',
    body: JSON.stringify({
      full_name: fullname,
      email,
      password
    }), // The data
    headers: {
      'Content-type': 'application/json' // The type of data you're sending
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => console.warn(error))
}
