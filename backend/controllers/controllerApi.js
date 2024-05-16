const Validator = require('validatorjs')
const bcrypt = require('bcrypt')
const promisePool = require('../config/mysqlMode')
const moment = require('moment')

const functions = require('../functions/functions')

// Create category
exports.add_category = async (req, res, next) => {
  try {
    // type : 1 ==> expense, 2 ==> income
    const validation = new Validator(req.body, {
      title: 'required|string|min:3',
      icon: 'required|integer|min:1',
      type: 'required|integer|min:1|max:2'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { title, icon, type } = req.body

    // verify the id_category if it exists
    const [rows] = await promisePool.query(
      `SELECT * FROM icons WHERE id_icon = ?`,
      [icon]
    )
    if (rows.length < 1) {
      return res.status(403).json({
        success: false,
        msg: 'the icon is not valid'
      })
    }

    // add directly the category
    const [rowsTokens] = await promisePool.query(
      `
      INSERT INTO 
        categories
      SET 
        name_category = ?,
        icon = ?,
        type = ?,
        fk_id_user = ?
    `,
      [title, icon, type, req.body.signature.id]
    )
    if (!rowsTokens.affectedRows) {
      return res.status(403).json({
        success: false,
        msg: 'Connexion error, please try again!'
      })
    }

    // SEND the email
    res.status(200).json({
      success: true,
      msg: 'Added successfully'
    })
  } catch (error) {
    next(error)
  }
}

// GET categories
exports.get_categories = async (req, res, next) => {
  try {
    // type : 1 ==> expense, 2 ==> income

    const validation = new Validator(req.query, {
      name: 'required|min:3',
      type: 'required|integer|min:1|max:2'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { name, type } = req.query

    const paramsName = `%${name}%`

    const [rows] = await promisePool.query(
      `
          SELECT
              categories.id_category as id,
              categories.name_category as name,
              categories.icon as id_icon,
              icons.name as name_icon,
              categories.type
          FROM
              categories
          LEFT JOIN icons ON icons.id_icon = categories.icon    
          WHERE
              ( categories.name_category LIKE ? AND categories.type = ? AND categories.fk_id_user IS NULL )
          OR  ( categories.name_category LIKE ? AND categories.type = ? AND categories.fk_id_user = ? ) 
    `,
      [paramsName, type, paramsName, type, req.body.signature.id]
    )
    if (!rows.length) {
      return res.status(200).json({
        success: false,
        msg: 'No Results Found'
      })
    }

    res.status(200).json({
      success: true,
      categories: rows
    })
  } catch (error) {
    next(error)
  }
}

// add transactions (expenses oR incomes)
exports.add_transaction = async (req, res, next) => {
  try {
    // type : 1 ==> personal, 2 ==> business
    // type_transaction : 1 ==> expense, 2 ==> income

    const validation = new Validator(req.body, {
      amount: 'required|min:0',
      id_category: 'required|integer',
      date: 'required|date',
      type: 'required|integer|min:1|max:2',
      note: 'string',
      recurring_expense: 'required|boolean',
      type_transaction: 'required|integer|min:1|max:2'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const {
      amount,
      id_category: idCategory,
      date,
      type,
      note,
      recurring_expense: recurringExpense,
      type_transaction: typeTransaction
    } = req.body

    // verify the id_category if it exists
    const [rows] = await promisePool.query(
      `SELECT * FROM categories WHERE categories.id_category = ?`,
      [idCategory]
    )
    if (rows.length < 1) {
      return res.status(403).json({
        success: false,
        msg: 'Please choose a valid category'
      })
    }

    // Insert the transaction by type
    const [rowsTokens] = await promisePool.query(
      `
      INSERT INTO 
        transactions
      SET
        amount = ?,
        fk_id_category = ?,
        fk_id_user = ?,
        note = ?,
        type = ?,
        date = ?,
        recurring_expense = ?,
        type_transaction = ?  
    `,
      [
        amount,
        idCategory,
        req.body.signature.id,
        note,
        type,
        date,
        recurringExpense,
        typeTransaction
      ]
    )
    if (!rowsTokens.affectedRows) {
      return res.status(403).json({
        success: false,
        msg: 'We have difficulties logging you out, please verify your connexion'
      })
    }

    res.json({
      success: true,
      msg: 'Transaction insérer avec succès'
    })
  } catch (error) {
    next(error)
  }
}

// Activate email
exports.activate_email = async (req, res, next) => {
  try {
    const validation = new Validator(req.params, {
      code: 'required|string'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { code } = req.params

    const signatureCode = await functions.decodeJWT(code)

    if (!signatureCode) {
      return res.status(403).json({
        success: false,
        mdg: 'Code Error'
      })
    }

    const [rows] = await promisePool.query(
      `UPDATE users SET users.activation_code = "validated" WHERE users.email = ?`,
      [signatureCode]
    )
    if (!rows.affectedRows) {
      return res.status(502).json({
        success: false,
        msg: 'Connexion error, please try again!'
      })
    }

    res.json({
      success: true,
      msg: 'Email activated !'
    })
  } catch (error) {
    next(error)
  }
}

// Change Pswd
exports.change_pswd = async (req, res, next) => {
  try {
    const validation = new Validator(req.body, {
      password: 'required|string',
      confirm_password: 'required|string',
      token: 'required|string'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { password, confirm_password: confirmPassword, token } = req.body

    if (password !== confirmPassword) {
      return res.status(403).json({
        success: false,
        msg: 'Please re-enter your password.'
      })
    }

    const decodeToken = await functions.decodeJWT(token)
    if (!decodeToken) {
      return res.status(403).json({
        success: false,
        msg: 'Permission denied !'
      })
    }

    const [rows] = await promisePool.query(
      `SELECT * FROM tokens_pswd WHERE token_pswd = ?`,
      [token]
    )
    if (rows.length < 1) {
      return res.status(403).json({
        success: false,
        msg: 'Permission denied !'
      })
    }

    // HASHING THE PASSWORD
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(403).json({
          msg: 'erreur hash password',
          error: err.stack
        })
      }

      // UPDATE THE PASSWORD
      const [rowsUpdate] = await promisePool.query(
        `UPDATE users SET password = ? WHERE email = ?`,
        [hash, decodeToken.email.toLowerCase()]
      )
      if (!rowsUpdate.affectedRows) {
        return res.status(403).json({
          success: false,
          msg: 'Connexion error, please try again!'
        })
      }

      promisePool.query(`DELETE FROM tokens_pswd WHERE token_pswd = ?`, [token])
      res.status(200).json({
        success: true,
        msg: 'Modifier avec succès'
      })
    })
  } catch (error) {
    next(error)
  }
}

// Forgot form
exports.forgot_form = async (req, res, next) => {
  try {
    const validation = new Validator(req.body, {
      email: 'required|email'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { email } = req.body

    const [rows] = await promisePool.query(
      `SELECT id_user as id,full_name as name,email FROM users WHERE email = ?`,
      [email]
    )
    if (rows.length < 1) {
      return res.status(403).json({
        success: false,
        msg: 'The email adress is not associated with an account'
      })
    }

    const idUser = rows[0].id
    const forgotToken = await functions.createJWT({ email }, res)

    const [rowsTokens] = await promisePool.query(
      `INSERT INTO tokens_pswd SET token_pswd = ?, id_user = ?`,
      [forgotToken, idUser]
    )
    if (!rowsTokens.affectedRows) {
      return res.status(403).json({
        success: false,
        msg: 'We have difficulties logging you out, please verify your connexion'
      })
    }

    // SEND the email
    res.status(200).json({
      success: true,
      msg: 'An email is sent to your inbox'
    })

    functions.sendMail('forgot_pswd', {
      to: email,
      code: forgotToken
    })
  } catch (error) {
    next(error)
  }
}

// Logout
exports.logout = async (req, res, next) => {
  try {
    const [rows] = await promisePool.query(
      `DELETE FROM tokens WHERE token = ? AND id_user = ?`,
      [req.body.token, req.body.signature.id]
    )
    if (!rows.affectedRows) {
      return res.status(403).json({
        success: false,
        msg: 'We have difficulties logging you out, please verify your connexion'
      })
    }

    res.status(200).json({
      success: true,
      msg: 'You have been logged out.'
    })
  } catch (error) {
    next(error)
  }
}

// Sign up
exports.signup = async (req, res, next) => {
  try {
    const validation = new Validator(req.body, {
      full_name: 'required|string',
      email: 'required|email',
      password: 'required|string'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { full_name: fullName, email, password } = req.body

    const [rows] = await promisePool.query(
      `SELECT * FROM users WHERE email = ?`,
      [email.toLowerCase()]
    )
    if (rows.length > 0) {
      return res.status(403).json({
        success: false,
        msg: 'The email already exists'
      })
    }

    const activationCode = functions.createJWT(email, res)

    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(403).json({
          msg: 'erreur hash password',
          error: err.stack
        })
      }

      const [rowsUser] = await promisePool.query(
        `
        INSERT INTO 
          users 
        SET 
          full_name = ?,
          email = ?,
          password = ?,
          activation_code = ?
      `,
        [fullName, email, hash, activationCode]
      )
      if (!rowsUser.affectedRows) {
        return res.status(403).json({
          success: false,
          msg: 'We have difficulties logging you out, please verify your connexion'
        })
      }

      const idUser = rowsUser.insertId

      promisePool.query(`INSERT INTO user_preferences SET fk_id_user = ?`, [
        idUser
      ])

      // *************************
      // Lancer la connexion..
      // *************************
      const [rowsLogin] = await promisePool.query(
        `SELECT
            *,
            (SELECT amount FROM transactions WHERE transactions.fk_id_category = 6 AND transactions.fk_id_user = users.id_user LIMIT 0,1) as amount
        FROM
            users
        LEFT JOIN user_preferences ON user_preferences.fk_id_user = users.id_user    
        LEFT JOIN currencies ON currencies.id_currencies = user_preferences.currency 
        WHERE
          users.id_user = ?
        GROUP BY users.id_user`,
        [idUser]
      )

      if (!rowsLogin.length) {
        return res.json({
          success: false,
          msg: 'Please verify your informations'
        })
      }

      const user = rowsLogin[0]

      const payloadToken = {
        id: user.id_user,
        email: user.email
      }

      const payloadRefreshToken = {
        id: user.id_user,
        email: user.email
      }

      const token = await functions.createJWT(payloadToken, res)
      const refreshToken = await functions.createJWT(payloadRefreshToken, res)

      // Save the token of the User.
      await promisePool.query(
        `INSERT INTO tokens SET token = ?, refresh_token = ?, id_user = ?`,
        [token, refreshToken, user.id_user]
      )

      // response to the Client.
      res.json({
        success: true,
        msg: 'Signup with success :)',
        data: {
          credentials: {
            token,
            refresh_token: refreshToken
          },
          infos: {
            full_name: user.full_name,
            email: user.email,
            id_currency: user.id_currencies,
            currency: user.Currency,
            alphabetic_code: user.Alphabetic_Code,
            balance: user.amount
          }
        }
      })

      // *************************
      // Fin de la connexion..
      // *************************

      functions.sendMail('activation_mail', {
        to: email,
        name: fullName,
        code: activationCode
      })
    })
  } catch (error) {
    next(error)
  }
}

// Sign in
exports.signin = async (req, res, next) => {
  try {
    const validation = new Validator(req.body, {
      email: 'required|email',
      password: 'required|string'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { email, password } = req.body

    // get informations of the user if is exist.
    const [rows] = await promisePool.query(
      `SELECT
          *,
          (SELECT amount FROM transactions WHERE transactions.fk_id_category = 6 AND transactions.fk_id_user = users.id_user LIMIT 0,1) as amount
      FROM
          users
      LEFT JOIN user_preferences ON user_preferences.fk_id_user = users.id_user    
      LEFT JOIN currencies ON currencies.id_currencies = user_preferences.currency 
      WHERE
          email = ?
      GROUP BY users.id_user`,
      [email]
    )
    if (!rows.length) {
      return res.json({
        success: false,
        msg: 'Please verify your informations'
      })
    }

    // verify password of user.
    const compare = bcrypt.compareSync(password, rows[0].password)
    if (!compare) {
      return res.json({
        success: false,
        msg: 'Please verify your informations !'
      })
    }

    // here the password are conform

    const user = rows[0]

    const payloadToken = {
      id: user.id_user,
      email: user.email
    }

    const payloadRefreshToken = {
      id: user.id_user,
      email: user.email
    }

    const token = await functions.createJWT(payloadToken, res)
    const refreshToken = await functions.createJWT(payloadRefreshToken, res)

    // update last login of the User.
    await promisePool.query(
      `update users set date_last_login = NOW() where users.id_user = ?`,
      [user.id_user]
    )
    // Save the token of the User.
    await promisePool.query(
      `INSERT INTO tokens SET token = ?, refresh_token = ?, id_user = ?`,
      [token, refreshToken, user.id_user]
    )

    // response to the Client.
    return res.json({
      success: true,
      data: {
        credentials: {
          token,
          refresh_token: refreshToken
        },
        infos: {
          full_name: user.full_name,
          email: user.email,
          id_currency: user.id_currencies,
          currency: user.Currency,
          alphabetic_code: user.Alphabetic_Code,
          balance: user.amount
        }
      }
    })
  } catch (error) {
    next(error)
  }
}

// DELETE TRANSACTION
exports.delete_transaction = async (req, res, next) => {
  try {
    const validation = new Validator(req.params, {
      id: 'required|integer|min:1'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails,
        msg: validation.errors.errors
      })
    }

    const { id } = req.params

    const [rows] = await promisePool.query(
      `DELETE FROM transactions WHERE id_transaction = ? AND fk_id_user = ?`,
      [id, req.body.signature.id]
    )
    if (!rows.affectedRows) {
      return res.status(403).json({
        success: false,
        msg: 'The operation has failed'
      })
    }

    res.status(200).json({
      success: true,
      msg: 'the transaction has been removed'
    })
  } catch (error) {
    next(error)
  }
}

// DELETE CATEGORY
exports.delete_category = async (req, res, next) => {
  try {
    const validation = new Validator(req.params, {
      id: 'required|integer|min:1'
    })

    if (validation.fails()) {
      return res.status(403).json({
        success: !validation.fails,
        msg: validation.errors.errors
      })
    }

    const { id } = req.params

    const [rows] = await promisePool.query(
      `DELETE FROM categories WHERE id_category = ? AND fk_id_user = ?`,
      [id, req.body.signature.id]
    )
    if (!rows.affectedRows) {
      return res.status(200).json({
        success: false,
        msg: 'The operation has failed'
      })
    }

    res.status(200).json({
      success: true,
      msg: 'the category has been removed'
    })
  } catch (error) {
    next(error)
  }
}

// GET ALL CATEGORIES
exports.get_all_categories = async (req, res, next) => {
  try {
    // type : 1 ==> expense, 2 ==> income

    const validation = new Validator(req.query, {
      type: 'required|integer|min:1|max:2'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { type } = req.query

    const [rows] = await promisePool.query(
      `
          SELECT
              categories.id_category as id,
              categories.name_category as name,
              categories.icon as id_icon,
              ( case when categories.type = 1 then CONCAT("/images/icons/expense/", icons.name) else CONCAT("/images/icons/income/", icons.name) end ) as name_icon,
              categories.type
          FROM
              categories
          LEFT JOIN icons ON icons.id_icon = categories.icon    
          WHERE
          categories.type  = ? AND
          ( categories.fk_id_user IS NULL OR categories.fk_id_user = ? )
    `,
      [type, req.body.signature.id]
    )
    if (!rows.length) {
      return res.status(200).json({
        success: false,
        msg: 'No Results Found'
      })
    }

    res.status(200).json({
      success: true,
      categories: rows
    })
  } catch (error) {
    next(error)
  }
}

// GET ALL CURRENCIES
exports.get_all_currencies = async (req, res, next) => {
  try {
    const [rows] = await promisePool.query(
      `
      SELECT
        id_currencies as id_currency,
        Entity as country,
        Currency as currency,
        Alphabetic_Code as alphabetic_code
      FROM
        currencies     
    `,
      [req.body.signature.id]
    )
    if (!rows.length) {
      return res.status(200).json({
        success: false,
        msg: 'No Results Found'
      })
    }

    res.status(200).json({
      success: true,
      currencies: rows
    })
  } catch (error) {
    next(error)
  }
}

exports.add_currency_balance = async (req, res, next) => {
  try {
    const validation = new Validator(req.body, {
      id_currency: 'required|integer|min:1',
      balance: 'required|min:1'
    })

    if (validation.fails()) {
      return res.status(400).json({
        success: !validation.fails,
        msg: validation.errors.errors
      })
    }

    const { id_currency: idCurrency, balance } = req.body

    // verify if the currency exists
    const [rowsVerify] = await promisePool.query(
      `SELECT * FROM currencies WHERE id_currencies = ?`,
      [idCurrency]
    )
    if (rowsVerify.length < 1) {
      return res.status(403).json({
        success: false,
        msg: 'the currency is not valid'
      })
    }

    // update user preferences with id_currency
    const [rowsCurrency] = await promisePool.query(
      `
      UPDATE user_preferences SET user_preferences.currency = ? WHERE user_preferences.fk_id_user = ?
    `,
      [idCurrency, req.body.signature.id]
    )
    if (!rowsCurrency.affectedRows) {
      return res.status(400).json({
        success: false,
        msg: 'Connexion error, please try again!'
      })
    }

    const today = new Date()
    const date =
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    // insert an income (as balance) to transactions of the user
    const [rowsBalance] = await promisePool.query(
      `
      INSERT INTO transactions SET fk_id_category = 6, amount = ?, fk_id_user = ?, type_transaction = 2, date = ?
    `,
      [balance, req.body.signature.id, date]
    )
    if (!rowsBalance.affectedRows) {
      return res.status(400).json({
        success: false,
        msg: 'Connexion error, please try again'
      })
    }

    res.json({
      success: true,
      msg: 'Updated with succes'
    })
  } catch (error) {
    next(error)
  }
}

exports.get_transactions = async (req, res, next) => {
  try {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD')
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD')

    // For now we get the transactions without filters Or dates
    const [rows] = await promisePool.query(
      `
      SELECT
        transactions.id_transaction,
        transactions.amount,
        transactions.fk_id_user as id_user,
        transactions.type,
        transactions.note,
        transactions.type_transaction,
        transactions.recurring_expense as reccuring,
        DATE_FORMAT(transactions.date,"%Y-%m-%d") as date,
        DATE_FORMAT(transactions.inserted_at,"%Y-%m-%d") as date_creation,
        categories.id_category,
        categories.name_category,
        categories.icon
      FROM
        transactions
      LEFT JOIN categories ON categories.id_category = transactions.fk_id_category
      WHERE transactions.fk_id_user = ? 
      AND transactions.date BETWEEN ? AND ? 
      ORDER BY transactions.date DESC
    `,
      [req.body.signature.id, startOfMonth, endOfMonth]
    )

    res.status(200).json({
      success: true,
      transactions: rows
    })
  } catch (error) {
    next(error)
  }
}

exports.get_total_transactions = async (req, res, next) => {
  try {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD')
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD')

    // For now we get the transactions without filters Or dates
    const [rows] = await promisePool.query(
      `
            SELECT
                transactions.id_transaction,
                transactions.type_transaction,
                SUM(amount) as total
            FROM
                transactions
            WHERE transactions.fk_id_user = ?
            AND transactions.date BETWEEN ? AND ?
            GROUP BY type_transaction                
        `,
      [req.body.signature.id, startOfMonth, endOfMonth]
    )

    const totals = {
      expense: 0,
      income: 0,
      date: moment().format('MMM YYYY')
    }

    if (rows[0]) {
      totals.expense = rows[0].total
    }

    if (rows[1]) {
      totals.income = rows[1].total
    }

    res.status(200).json({
      success: true,
      totals
    })
  } catch (error) {
    next(error)
  }
}

exports.transactions_by_months = async (req, res, next) => {
  try {
    const [rows] = await promisePool.query(
      `
      SELECT
          transactions.id_transaction,
          SUM(transactions.amount) as total_amount,
          SUM(case when transactions.type_transaction = 1 then transactions.amount else 0 end) as expense_amount,
          SUM(case when transactions.type_transaction = 2 then transactions.amount else 0 end) as income_amount,
          transactions.date,
          MONTH(transactions.date) as month,
          YEAR(transactions.date) as year
        FROM
          transactions
        WHERE
          transactions.fk_id_user = ?
        GROUP BY YEAR(transactions.date), MONTH(transactions.date)
        ORDER BY MONTH(transactions.date), YEAR(transactions.date)
    `,
      [req.body.signature.id]
    )
    if (!rows.length) {
      return res.status(400).json({
        success: false,
        msg: 'NO DATA'
      })
    }

    res.status(200).json({
      success: true,
      data: rows
    })
  } catch (error) {
    next(error)
  }
}

exports.get_icons = async (req, res, next) => {
  try {
    // type : 1 ==> expense, 2 ==> income

    const validation = new Validator(req.query, {
      type: 'required|integer|min:1|max:2'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { type } = req.query

    const [rows] = await promisePool.query(
      `
      SELECT
        id_icon,
        ( case when type = 1 then CONCAT("/images/icons/expense/", name) else CONCAT("/images/icons/income/", name) end ) as name,
        type
      FROM
          icons
      WHERE icons.type = ? 
    `,
      [type]
    )
    if (!rows.length) {
      return res.status(200).json({
        success: false,
        msg: 'No Results Found'
      })
    }

    res.status(200).json({
      success: true,
      icons: rows
    })
  } catch (error) {
    next(error)
  }
}

exports.transactions_by_categories = async (req, res, next) => {
  try {
    // period : 1 => this week, 2 => this month, 3 => this year
    // type : 1 ==> expense, 2 ==> income

    const validation = new Validator(req.query, {
      type: 'required|integer|min:1|max:2',
      period: 'required|integer|min:1|max:3'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { type,period } = req.query;

    let begin_date = null;
    let end_date = null;
      
    switch (period) {
      case "1":
          begin_date = moment().startOf('week').format('YYYY-MM-DD');
          end_date = moment().endOf('week').format('YYYY-MM-DD');
        break;
        case "2":
          begin_date = moment().startOf('month').format('YYYY-MM-DD');
          end_date = moment().endOf('month').format('YYYY-MM-DD');
          break;
          case "3":
            begin_date = moment().startOf('year').format('YYYY-MM-DD');
            end_date = moment().endOf('year').format('YYYY-MM-DD');
            break;
      default:
        break;
    }
    
    const [rows] = await promisePool.query(
      ` 
      SELECT
        SUM(transactions.amount) as total_amount,
        categories.id_category,
        categories.name_category,
        ( case when transactions.type_transaction = 1 then CONCAT("/images/icons/expense/", icons.name) else CONCAT("/images/icons/income/", icons.name) end ) as name_icon,
        categories.color
      FROM
        transactions
      LEFT JOIN categories on categories.id_category = transactions.fk_id_category    
      LEFT JOIN icons on icons.id_icon = categories.icon 
      WHERE
        transactions.type_transaction = ? 
        AND transactions.fk_id_category <> 6
        AND transactions.date BETWEEN ? AND ?
      GROUP BY transactions.fk_id_category
      ORDER BY total_amount DESC
    `,
      [
        type,
        begin_date,
        end_date
      ]
    )
    if (!rows.length) {
      return res.status(200).json({
        success: false,
        msg: 'No Results Found'
      })
    }

    res.status(200).json({
      success: true,
      infos: rows
    })

  } catch (error) {
    next(error)
  }
}


exports.chart_transactions = async (req, res, next) => {
  try {
    // period : 1 => this week, 2 => this month, 3 => this year
    // type : 1 ==> expense, 2 ==> income, , 3 ==> expense & income

    const validation = new Validator(req.query, {
      type: 'required|integer|min:1|max:3',
      period: 'required|integer|min:1|max:3'
    })

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { type, period } = req.query

    let beginDate = null
    let endDate = null

    switch (period) {
      case '1':
        beginDate = moment().startOf('week').format('YYYY-MM-DD')
        endDate = moment().endOf('week').format('YYYY-MM-DD')
        break
      case '2':
        beginDate = moment().startOf('month').format('YYYY-MM-DD')
        endDate = moment().endOf('month').format('YYYY-MM-DD')
        break
      default:
        break
    }

    let typeTransaction = type
    if (type === '3') {
      typeTransaction = `1,2`
    }

    const [rows] = await promisePool.query(
      ` 
      SELECT
        SUM(case when transactions.type_transaction = 1 then transactions.amount else 0 end) as expense_amount,
        SUM(case when transactions.type_transaction = 2 then transactions.amount else 0 end) as income_amount,
        DATE_FORMAT(transactions.date,"%Y-%m-%d") as date
      FROM
        transactions
      LEFT JOIN categories on categories.id_category = transactions.fk_id_category    
      WHERE
        transactions.type_transaction IN (${typeTransaction})
      AND transactions.date BETWEEN ? AND ?
      GROUP BY transactions.date
    `,
      [beginDate, endDate]
    )
    if (!rows.length) {
      return res.status(200).json({
        success: false,
        msg: 'No Results Found'
      })
    }

    res.status(200).json({
      success: true,
      infos: rows
    })
  } catch (error) {
    next(error)
  }
}