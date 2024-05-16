import { useMutation } from 'react-query'
import { useUserStore } from '../../stores/Auth.store'
import { addBalanceApi } from '../Expenses'

export const useQueryAddBalance = ({ currency, balance, CURRENCIES }) => {
  const setBalanceStore = useUserStore((state) => state.setBalance)
  return useMutation(
    ['addCurrencyBalanceAPI'],
    () =>
      addBalanceApi({
        idCurrency: currency,
        balance,
        currency: CURRENCIES[currency].name
      }),
    {
      onSuccess: (data) => {
        if (data.success) {
          // update zustand persist store
          setBalanceStore({
            newBalance: balance,
            idCurrency: currency,
            currencyName: CURRENCIES[currency - 1].currency,
            alphabetic_code: CURRENCIES[currency - 1].alphabetic_code
          })
        } else {
          // error :D
          alert(data.msg)
        }
      },
      onError: (error) => {
        alert('Error :: ', error)
      },
      enabled: false
    }
  )
}
