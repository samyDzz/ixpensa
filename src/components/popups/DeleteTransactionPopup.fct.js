import { useAddExpensePopups } from '../../stores/ctxPopupAddExpense'

/**
 * functions
 */
export const _closeDeleteTransactionPopup = () => {
  const setShowDeleteTransaction =
    useAddExpensePopups.getState().setShowDeleteTransaction
  setShowDeleteTransaction(false)
}
