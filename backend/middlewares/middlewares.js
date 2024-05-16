const functions = require("../functions/functions");
const validator = require("validator");
const fs = require("fs");

const promisePool = require("../config/mysqlMode");  	

exports.verifyToken = async (req,res,next) => {
	try {
        const token = req.headers['authorization'] || req.headers['Authorization'];
        if( !token ){
			return res.status(403).json({
				success : false,
				msg : "the token is empty"
			});
		}

        const [rows] = await promisePool.query(`SELECT * FROM tokens WHERE token = ?`,[token]);
        if (rows.length < 1) {
            return res.status(502).json({
                success: false,
                msg: "Permission denied",
            });
        }

        const signature = await functions.decodeJWT(token);

        if(!signature) { 
            return res.status(403).json({
                success : false,
                msg : signature
            });
        } 
        
        req.body.signature = signature; 
        req.body.token = token; 
        next(); 
        	
	}catch( error ) {
		next(error);
	}
}