import create from 'zustand'
import produce from 'immer'

export const useAddExpensePopups = create((set) => ({
  data: {
    addExpense: null,
    addIncome: null,
    deleteTransactionId: null
  },
  popups: {
    showAddExpense: false,
    showAddCategory: false,
    showAddIncome: false,
    showDeleteTransaction: false
  },
  setIdTransactionDelete: (idTransaction) =>
    set(
      produce((prevState) => {
        prevState.deleteTransactionId = idTransaction
      })
    ),
  setShowAddCategory: (show) =>
    set(
      produce((prevState) => {
        prevState.popups.showAddCategory = show
      })
    ),
  setDataAddExpense: (data) =>
    set(
      produce((prevState) => {
        prevState.data.addExpense = data
      })
    ),
  setDataAddIncome: (data) =>
    set(
      produce((prevState) => {
        prevState.data.addIncome = data
      })
    ),
  setShowAddExpense: (show) =>
    set(
      produce((prevState) => {
        prevState.popups.showAddExpense = show
      })
    ),
  setShowDeleteTransaction: (show) =>
    set(
      produce((prevState) => {
        prevState.popups.showDeleteTransaction = show
      })
    ),
  setShowAddIncome: (show) =>
    set(
      produce((prevState) => {
        prevState.popups.showAddIncome = show
      })
    )
}))
