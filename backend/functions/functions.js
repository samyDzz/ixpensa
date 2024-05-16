const jwt = require("jsonwebtoken");
const fs = require("fs");

const mailer = require("../config/configMail");

exports.sendMail = async (operation, json) => {
  try {
    switch (operation) {
        case "activation_mail":
          var HTML_email_signup = fs.readFileSync(__dirname + "/../views/emails/email_signup.ejs","utf8");

          var HTML_mail = HTML_email_signup
                              .replace(/{{name}}/gi, json.name)
                              .replace(/{{code}}/gi, json.code)
                              .replace(/{{code}}/gi, json.code)
                              .replace(/{{code}}/gi, json.code);
          
          var mailOptionsEmail = {
            from: "Ixpensa <contact@ixpensa.com>",
            to: json.to,
            subject: "",
            text: "",
            html: HTML_mail,
          };
          this.execMailInfo(mailOptionsEmail);
        break;
        case "forgot_pswd":
          var HTML_email_forgot = fs.readFileSync(__dirname + "/../views/emails/forgot_pswd.ejs","utf8");

          var HTML_mail_pswd = HTML_email_forgot
                              .replace(/{{code}}/gi, json.code)
                              .replace(/{{code}}/gi, json.code)
                              .replace(/{{code}}/gi, json.code);
          
          var mailOptionsEmailForgot = {
            from: "Ixpensa <contact@ixpensa.com>",
            to: json.to,
            subject: "",
            text: "",
            html: HTML_mail_pswd,
          };
          this.execMailInfo(mailOptionsEmailForgot);
        break;  
    }
  } catch (error) {
    throw error.stack;
  }
};

exports.execMailContact = async (mailOptions) => {
  try {
    mailer.smtpContact.sendMail(mailOptions, function (error, response) {
      if (error) {
        return res.json({
          success : false,
          msg : error.stack
        });
      }
      return res.json({
        success : false,
        msg : JSON.stringify(response)
      });
    });
  } catch (e) {
    throw e.stack;
  }
};

////////////////
// encode JWT //
////////////////

exports.createJWT = function createJWT(payload, res) {
  try {
    return jwt.sign(payload, process.env.JWT_TOKEN, { algorithm: "HS256" });
  } catch (e) {
    res.json({
      success: false,

      msg: "pb creating JWT",

      e: e.stack,
    });
  }
};

/////////////////
// decode JWT. //
/////////////////

exports.decodeJWT = function decodeJWT(token) {
  try {
    return jwt.verify(token, process.env.JWT_TOKEN, { algorithm: "HS256" });
  } catch (e) {
    console.log(e.message);

    return false;
  }
};

