/**
 *
 * @param {array} transactions malformated transaction
 * @returns array of formated transactions
 */
export const formatTransaction = (transactions) => {
  const refactorTransactions = []

  let lastDate = null
  let dataTransaction = {
    id: null,
    // for one section
    header: {
      date: null,
      total_expenses: 0,
      total_incomes: 0
    },
    transactions: []
  }

  for (let i = 0; i < transactions.length; i++) {
    const el = transactions[i]
    if (el.date !== lastDate) {
      dataTransaction.id = el.id_transaction
      if (i === 0) {
        dataTransaction.header.date = el.date
      } else {
        refactorTransactions.push(dataTransaction)
        dataTransaction = {
          id: null,
          header: {
            date: el.date,
            total_expenses: 0,
            total_incomes: 0
          },
          transactions: []
        }
      }
      lastDate = el.date
    }
    // faire les calcules exenses and incomes.
    if (el.type_transaction === 1) {
      dataTransaction.header.total_expenses += el.amount
    } else {
      dataTransaction.header.total_incomes += el.amount
    }

    dataTransaction.transactions.push(el)
  }

  refactorTransactions.push(dataTransaction)
  return refactorTransactions
}
