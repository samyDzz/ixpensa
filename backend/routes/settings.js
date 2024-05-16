const express = require('express')
const router = express.Router()
const multer  = require('multer')
const path = require('path')

const controller = require('../controllers/controllerSettings')
const middleware = require('../middlewares/middlewares')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '../../public/images/users/tmp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, "avatar_" + Date.now() + path.extname(file.originalname))
    }
  })
  
const upload = multer({ storage: storage })

router.post('/set_notifications', middleware.verifyToken, controller.set_notifications) 

router.get('/', (req,res) => {
    res.json({
      API_STATUS: `Welcome to the Ixpensa Settings API 😍🤞👉✔👌🗽🛕🥪🎶🙌`
    })
  })

router.post('/profile', upload.single('avatar'), middleware.verifyToken, controller.profile)  

module.exports = router
