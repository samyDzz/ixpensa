export const mathCalculate = ({ e, amount, setAmount }) => {
  e.preventDefault()
  const code = e.keyCode
  // remove all caracteres, not operations and numbers
  if (code === 8) {
    // backspace
    return setAmount((state) => {
      return state.toString().substring(0, state.toString().length - 1)
    })
  }

  if ((code < 96 || code > 111) && code !== 13) {
    return setAmount(amount)
  }

  // submit the calculation..
  if (code === 13) {
    try {
      // eslint-disable-next-line no-eval
      const total = eval(amount)
      return setAmount(total)
    } catch (error) {
      alert('Operation error, Your Math is Sh*t 🤣')
    }
    return
  }

  setAmount((state) => state + e.key)
}
