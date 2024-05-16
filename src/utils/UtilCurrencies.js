/**
 * @param {string} currency is the current currency of the User. EX : "DZD"
 * @param {number} number is the Amount to convert.
 * @returns {string} the Good Format of the amount.
 */

import { useUserStore } from '../stores/Auth.store'

export const formatNumber = (currency, number) => {
  if (!currency) {
    return 0
  }
  return new Intl.NumberFormat(currency).format(number)
}
/**
 *
 * @param {boolean} typeTransaction
 * @param {number} currency
 * @param  {...any} rest
 * @returns {string} currency with code currency and his sign
 */
export const showSignTransactionWidthCurrency = (typeTransaction, number) => {
  const currency = useUserStore.getState().user.infos.alphabetic_code

  let sign = '+'
  if (!typeTransaction) {
    if (number < 0) {
      sign = '-'
    }
  } else {
    if (typeTransaction === 1) {
      sign = '-'
    }
  }

  return (
    sign + (currency || '') + ' ' + formatNumber(currency, Math.abs(number))
  )
}
