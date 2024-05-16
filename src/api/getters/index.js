import { BASE_URL_API } from '../../constants'
import { useUserStore } from '../../stores/Auth.store'

export const getCurrencies = () => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/currencies', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json', // The type of data you're sending
      Authorization: token
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
