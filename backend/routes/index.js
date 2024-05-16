const express = require('express')
const router = express.Router()

const promisePool = require('../config/mysqlMode')

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const [rows] = await promisePool.query(`select * from users`, [])
    res.render('index', { title: 'Express', JWT_TOKEN: JSON.stringify(rows) })
  } catch (error) {
    next(error)
  }
})

// this endpoint it's used for testing if the Nodemailer is correctlly running.
router.get('/testMail', async function (req, res, next) {
  try {
    const { smtpContact } = require('../config/configMail')
    const message = {
      from: 'sender@server.com',
      to: 'receiver@sender.com',
      subject: 'Message title',
      text: 'Plaintext version of the message',
      html: '<p>HTML version of the message</p>'
    }
    smtpContact.sendMail(message, (err, info) => {
      if (err) {
        return res.json(err)
      }
      res.json(info)
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
