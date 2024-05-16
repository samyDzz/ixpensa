const express = require('express')
const router = express.Router()

const controllerApi = require('../controllers/controllerApi')
const middleware = require('../middlewares/middlewares')

router.get('/', (res) => {
  res.json({
    API_STATUS: `Welcome to the Ixpensa API 😍🤞👉✔👌🗽🛕🥪🎶🙌`
  })
})

router.post('/add_category', middleware.verifyToken, controllerApi.add_category)
router.get(
  '/categoriesByName',
  middleware.verifyToken,
  controllerApi.get_categories
)
router.post(
  '/add_transaction',
  middleware.verifyToken,
  controllerApi.add_transaction
)

// // // // // // // //
// AUTHENTIFICATION
// // // // // // // //
router.get('/activate_email/:code', controllerApi.activate_email)
router.post('/change_pswd', middleware.verifyToken, controllerApi.change_pswd)
router.delete('/logout', middleware.verifyToken, controllerApi.logout)
router.post('/signin', controllerApi.signin)
router.post('/signup', controllerApi.signup)
router.post('/forgot_form', controllerApi.forgot_form)

router.delete(
  '/transaction/:id',
  middleware.verifyToken,
  controllerApi.delete_transaction
)
router.delete(
  '/category/:id',
  middleware.verifyToken,
  controllerApi.delete_category
)

router.get(
  '/categories',
  middleware.verifyToken,
  controllerApi.get_all_categories
)
router.get(
  '/currencies',
  middleware.verifyToken,
  controllerApi.get_all_currencies
)
router.post(
  '/add_currency_balance',
  middleware.verifyToken,
  controllerApi.add_currency_balance
)

router.get(
  '/transactions',
  middleware.verifyToken,
  controllerApi.get_transactions
)
router.get(
  '/total_transactions',
  middleware.verifyToken,
  controllerApi.get_total_transactions
)

router.get(
  '/transactions_by_months',
  middleware.verifyToken,
  controllerApi.transactions_by_months
)
router.get('/icons', middleware.verifyToken, controllerApi.get_icons)

router.get(
  '/transactions_by_categories',
  middleware.verifyToken,
  controllerApi.transactions_by_categories
)

router.get(
  '/chart_transactions',
  middleware.verifyToken,
  controllerApi.chart_transactions
)

module.exports = router
