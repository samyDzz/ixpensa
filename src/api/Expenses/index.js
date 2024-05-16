/* eslint-disable space-before-function-paren */
import { BASE_URL_API } from '../../constants'
import { useUserStore } from '../../stores/Auth.store'

export const addBalanceApi = ({ idCurrency, currency, balance }) => {
  console.table(idCurrency, currency, balance)

  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/add_currency_balance', {
    method: 'POST',
    body: JSON.stringify({
      id_currency: idCurrency,
      balance
    }), // The data
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

export const addExpenseApi = ({
  amount,
  date,
  category,
  type,
  note,
  monthly,
  type_transaction: typeTransaction
}) => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/add_transaction', {
    method: 'POST',
    body: JSON.stringify({
      amount,
      id_category: category?.id,
      date,
      type: type?.id,
      note,
      recurring_expense: monthly,
      type_transaction: typeTransaction
    }), // The data
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
export const deleteTransactionApi = ({ idTransaction }) => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/transaction/' + idTransaction, {
    method: 'DELETE',
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

export const addCategoryApi = ({ title, category, type }) => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/add_category', {
    method: 'POST',
    body: JSON.stringify({
      title,
      icon: category,
      type
    }), // The data
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

export const getCategoriesAPI = (type = 1) => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + `/categories?type=${type}`, {
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

export const getTransactionsAPI = () => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/transactions', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json', // The type of data you're sending
      Authorization: token
    }
  })
    .then((response) => {
      return response.json()
    })
    .then(async (data) => {
      return data
    })
    .catch((error) => console.warn(error))
}

export const getTotalTransactionAPI = () => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/total_transactions', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json', // The type of data you're sending
      Authorization: token
    }
  })
    .then((response) => {
      return response.json()
    })
    .then(async (data) => {
      return data
    })
    .catch((error) => console.warn(error))
}

export const getTransactionsByMonths = () => {
  const token = useUserStore.getState().user.credentials.token

  return fetch(BASE_URL_API + '/transactions_by_months', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json', // The type of data you're sending
      Authorization: token
    }
  })
    .then((response) => {
      return response.json()
    })
    .then(async (data) => {
      return data
    })
    .catch((error) => console.warn(error))
}
