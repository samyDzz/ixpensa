import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      // login
      setUser: (newState) => {
        set(() => ({ user: newState }))
      },
      // set balance and currency on PopUp.
      setBalance: ({ newBalance, idCurrency, currencyName, alphabeticCode }) =>
        set(
          produce((prevState) => {
            prevState.user.infos.balance = parseFloat(newBalance)
            prevState.user.infos.id_currency = parseInt(idCurrency)
            prevState.user.infos.alphabetic_code = alphabeticCode
            prevState.user.infos.currency = currencyName
          })
        )
    }),
    {
      name: 'userInfo'
    }
  )
)
