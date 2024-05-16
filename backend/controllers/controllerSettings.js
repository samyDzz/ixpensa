const Validator = require('validatorjs')
const bcrypt = require('bcrypt')
const promisePool = require('../config/mysqlMode')

var Jimp = require("jimp")

const functions = require('../functions/functions')

exports.set_notifications = async (req,res,next) => {
  try {
    const validation = new Validator(req.body, {
      daily_transaction_remiders : 'required|integer|min:0|max:1',
      updates_and_upcoming_features : 'required|integer|min:0|max:1',
      saving_tips : 'required|integer|min:0|max:1'
    }) 

    if (validation.fails()) {
      return res.status(200).json({
        success: !validation.fails(),
        msg: validation.errors.errors
      })
    }

    const { daily_transaction_remiders, updates_and_upcoming_features, saving_tips } = req.body

    let id_user = req.body.signature.id
    const [rows] = await promisePool.query(`
        UPDATE user_preferences SET 
          daily_transaction_remiders = ?,
          updates_and_upcoming_features = ?,
          saving_tips = ?   
        WHERE fk_id_user = ?`,
      [daily_transaction_remiders,updates_and_upcoming_features,saving_tips,id_user]
    )
    if (!rows.affectedRows) {
      return res.status(403).json({
        success: false,
        msg: 'Connexion error, please try again!'
      })
    }

    return res.status(200).json({
      success : true,
      msg : "The notifications settings are set"
    })    

  } catch(error) {
    next(error)
  }
}


exports.profile = async (req, res, next) => {
    try{
        const validation = new Validator(req.body, {
            full_name: 'required|string|min:3',
            email: 'required|email'
          })
      
          if (validation.fails()) {
            return res.status(200).json({
              success: !validation.fails(),
              msg: validation.errors.errors
            })
          }
      
        const { full_name, email } = req.body
     
        let id_user = req.body.signature.id
        

        const [rowsVerify] = await promisePool.query(`SELECT * FROM users WHERE email = ? AND id_user <> ?`, [email, id_user ])
        if (rowsVerify.length > 0) {
            return res.status(403).json({
                success: false,
                msg: 'The email already exists'
            })
        }

        let avatar = null
        
		if( req.file ){			
			image = req.file;
			if (image.size > 2800000) {
				return res.json({
					success: false,
					msg: "max size larger than 2mb",
				});
			}
		
			let array_extension = ["image/gif", "image/jpeg", "image/png", "application/pdf", "application/pdf"];
		
			if (array_extension.indexOf(image.mimetype) == -1) {
				return res.json({
					success: false,
					msg: "extension non valide",
					cc : image.mimetype
				});
			}

			Jimp.read(image.path, (err, image_resized) => {
				if (err) {
				  console.log(err.stack);
				  return false;
				}
				console.log(image.filename);
				var path_user_256 =
                __dirname + "../../public/images/users/" + id_user + "/" + image.filename;
				image_resized
				  .write(path_user_256); // save
			  });

			avatar = image.filename;
		}

        let requete = ``;
        let params = [];

        if( avatar != null ){
            requete = `UPDATE users SET full_name = ?, email = ?, avatar = ? WHERE id_user = ?`;
            params = [full_name, email, avatar, id_user];    
        }else{
            requete = `UPDATE users SET full_name = ?, email = ? WHERE id_user = ?`;
            params = [full_name, email, id_user];    
        }

        const [rowsProfile] = await promisePool.query(requete,params)
          if (!rowsProfile.affectedRows) {
            return res.status(400).json({
              success: false,
              msg: 'Connexion error, please try again!'
            })
          }
        
        res.json({
            success : true,
            msg : "Profile updated with success"
        });
    }catch(error){
        next(error)
    }
}