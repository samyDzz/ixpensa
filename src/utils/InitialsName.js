/**
 * @author samydev
 * @param {string} fullName the full name of the user
 * @returns {string} Initials of the user
 */
export const initialName = (fullName) => {
  return fullName
    .split(' ')
    .reduce((prev, next) => prev[0].toUpperCase() + next[0].toUpperCase())
}
