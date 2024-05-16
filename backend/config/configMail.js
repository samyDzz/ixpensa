const nodemailer = require('nodemailer')
const chalk = require('chalk')

const options = {
  dev: {
    port: 1025,
    host: 'localhost'
  },
  prod: {
    host: process.env.MAIL_SERVER,
    port: process.env.MAIL_OUTGOING_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  }
}

const smtpContact = nodemailer.createTransport(
  process.env.NODE_ENV === 'development' ? options.dev : options.prod
)

smtpContact.verify(function (error, success) {
  if (error) {
    if (error.code === 'ESOCKET') {
      console.info(
        chalk.bgYellow.black(
          ' 📩 If you want to use Emails in developement mode use this steps, else ignore this message. '
        )
      )
      console.info(
        chalk.bgWhite.black(' 📌 Please INSTALL/START nodemailerApp ')
      )
      console.log(
        chalk.bgWhite.black(
          ' 1- Install the app if not installed Yet, ' +
            chalk.underline.bgWhite.bold.blue(
              'https://www.electronjs.org/apps/nodemailer-app '
            )
        )
      )
      console.log(
        chalk.bgWhite.black(
          ' 2- Create a project inside with name : ' + chalk.bold('ixpensa ')
        )
      )
      console.log(
        chalk.bgWhite.black(
          ' 3- Start the server from the menu navbar, Server 👉 Start server. '
        )
      )
      console.log(chalk.bgWhite.black(' 4- Enjoy ! 🚀 '))
      return
    }
  }
  console.log(chalk.white.bgGreen('💻 - SMTP SERVER START, Enjoy !'))
})

module.exports = {
  smtpContact
}
