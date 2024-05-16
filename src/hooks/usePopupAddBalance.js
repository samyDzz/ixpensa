import { useState } from 'react'

/**
 *
 * @returns [dissmissPopupAddBalance, setDismissPopupAddBalance]
 */
export const usePopupAddBalance = () => {
  const [dismissPopupAddBalance, setDismissPopupAddBalance] = useState(false)

  const togglePopupBalance = () => {
    setDismissPopupAddBalance((state) => !state)
  }

  return [dismissPopupAddBalance, togglePopupBalance]
}
